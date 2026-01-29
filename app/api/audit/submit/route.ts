import { NextResponse } from 'next/server'
import { sendAuditResultEmail, scheduleFollowUpEmails } from '@/lib/email-service'
import { generateFreebies } from '@/lib/freebie-generator'
import { calculateAuditScore, analyzeIntent } from '@/lib/audit-analyzer'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { sendHighIntentSMS, notifyTeamOfHotLead, scheduleSMSFollowUp, isValidPhoneNumber, formatPhoneNumber } from '@/lib/sms-service'
import { scoreAndRouteLead } from '@/lib/lead-router'
import { getSequence, personalizeEmail } from '@/lib/nurture-sequences'

export async function POST(request: Request) {
    try {
        const formData = await request.json()

        // Calculate scores and intent
        const auditScore = calculateAuditScore(formData)
        const intentLevel = analyzeIntent(formData)
        const opportunities = identifyOpportunities(formData)

        // Store audit data (you can use Supabase, MongoDB, etc.)
        const auditId = await storeAuditData({
            ...formData,
            auditScore,
            intentLevel,
            opportunities,
            submittedAt: new Date().toISOString()
        })

        // Generate personalized freebies
        const freebies = await generateFreebies(formData, auditScore, opportunities)

        // Send immediate email with results
        await sendAuditResultEmail({
            to: formData.email,
            name: formData.fullName,
            companyName: formData.companyName,
            auditScore,
            opportunities,
            freebies,
            intentLevel
        })

        // Schedule follow-up emails based on intent
        await scheduleFollowUpEmails({
            email: formData.email,
            name: formData.fullName,
            companyName: formData.companyName,
            intentLevel,
            formData,
            auditId
        })

        // SMS follow-up for high-intent leads
        if (intentLevel === 'high' && formData.phoneNumber && isValidPhoneNumber(formData.phoneNumber)) {
            try {
                const formattedPhone = formatPhoneNumber(formData.phoneNumber)
                const firstName = formData.fullName.split(' ')[0]
                const painPoint = formData.keepsUpAtNight || 'growing your business'

                // Send immediate SMS to high-intent lead
                await sendHighIntentSMS({
                    to: formattedPhone,
                    name: formData.fullName,
                    companyName: formData.companyName,
                    painPoint,
                    intentLevel,
                    auditId
                })

                // Notify team about hot lead
                await notifyTeamOfHotLead({
                    to: formattedPhone,
                    name: formData.fullName,
                    companyName: formData.companyName,
                    painPoint,
                    intentLevel,
                    auditId
                })

                // Schedule follow-up SMS
                await scheduleSMSFollowUp({
                    to: formattedPhone,
                    name: formData.fullName,
                    companyName: formData.companyName,
                    painPoint,
                    intentLevel,
                    auditId,
                    delay: 1,
                    template: 'day1'
                })

                await scheduleSMSFollowUp({
                    to: formattedPhone,
                    name: formData.fullName,
                    companyName: formData.companyName,
                    painPoint,
                    intentLevel,
                    auditId,
                    delay: 3,
                    template: 'day3'
                })

            } catch (smsError) {
                // Log but don't fail the entire request
                console.error('[SMS ERROR]', smsError)
            }
        }

        // ─── Lead Scoring & Nurture Sequence ─────────────────────────
        const leadScore = scoreAndRouteLead(formData, auditScore)

        // Send first nurture email immediately (Day 0)
        const sequence = getSequence(leadScore.nurturSequence)
        const firstEmail = personalizeEmail(sequence.emails[0], {
            ...formData,
            auditScore,
            calLink: 'https://cal.com/mia-louviere-a4n2hk/30min'
        })

        // TODO: Send personalized nurture email when Resend is configured
        // await sendEmail({ to: formData.email, subject: firstEmail.subject, html: firstEmail.bodyHtml })

        // TODO: Queue remaining sequence emails in Firestore nurture_queue
        // for (const email of sequence.emails.slice(1)) {
        //   await addDoc(collection(db, 'nurture_queue'), {
        //     email: formData.email,
        //     formData,
        //     auditScore,
        //     sequenceId: leadScore.nurturSequence,
        //     currentStep: 1,
        //     nextEmailDate: new Date(Date.now() + email.day * 86400000),
        //     status: 'active',
        //     createdAt: serverTimestamp()
        //   })
        // }

        // Team notification for hot leads
        if (leadScore.level === 'hot') {
            // TODO: Send team SMS alert when Twilio is configured
            // const { personalizeSMS, smsTemplates } = await import('@/lib/sms-service')
            // const alertMsg = personalizeSMS(smsTemplates.team_hot_alert, {
            //     name: formData.fullName,
            //     companyName: formData.companyName,
            //     industry: formData.specificIndustry || '',
            //     auditScore: String(auditScore),
            //     painLevel: String(formData.painLevel?.[0] || ''),
            //     budget: formData.growthBudget || '',
            //     phone: formData.phoneNumber || ''
            // })
            // await twilioClient.messages.create({ body: alertMsg, from: TWILIO_PHONE, to: '+13373809059' })
            console.log(`[LEAD ROUTER] 🔥 HOT lead: ${formData.fullName} (${formData.companyName}) — Score: ${leadScore.score}`)
        } else {
            console.log(`[LEAD ROUTER] ${leadScore.level.toUpperCase()} lead: ${formData.fullName} — Sequence ${leadScore.nurturSequence}`)
        }

        return NextResponse.json({
            success: true,
            auditId,
            auditScore,
            opportunities,
            leadScore: {
                level: leadScore.level,
                score: leadScore.score,
                sequence: leadScore.nurturSequence
            }
        })

    } catch (error) {
        console.error('Audit submission error:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to process audit' },
            { status: 500 }
        )
    }
}

function identifyOpportunities(formData: any) {
    const opportunities = []

    if (formData.missedCalls !== '0-5') {
        opportunities.push({
            title: "Capture Every Lead",
            impact: "High",
            description: `You're missing ${formData.missedCalls} calls per week. An AI receptionist could capture these leads 24/7.`,
            category: "lead_capture"
        })
    }

    if (formData.systematicFollowUp !== 'Yes') {
        opportunities.push({
            title: "Automated Follow-Up System",
            impact: "High",
            description: "Systematic follow-ups can increase conversions by 50%. Automate this entirely with AI.",
            category: "sales_automation"
        })
    }

    if (formData.askReviewsSystem === 'none' || formData.askReviewsSystem === 'manual') {
        opportunities.push({
            title: "Review Generation Engine",
            impact: "Medium",
            description: "Automated review requests can double your review rate, boosting local SEO and trust.",
            category: "reputation"
        })
    }

    if (parseInt(formData.painLevel[0]) >= 7) {
        opportunities.push({
            title: "Urgent Process Automation",
            impact: "Critical",
            description: `Your pain level is ${formData.painLevel[0]}/10. Immediate automation can relieve this pressure within 30 days.`,
            category: "urgent"
        })
    }

    if (formData.percentAutomated === 'none' || formData.percentAutomated === '<30%') {
        opportunities.push({
            title: "Low-Hanging Automation Wins",
            impact: "High",
            description: "70%+ of repetitive tasks can be automated, freeing 15-20 hours per week.",
            category: "quick_wins"
        })
    }

    return opportunities
}

async function storeAuditData(data: any) {
    try {
        const docRef = await addDoc(collection(db, 'audits'), {
            ...data,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        })
        return docRef.id
    } catch (error) {
        console.error('Error storing audit data:', error)
        throw error
    }
}
