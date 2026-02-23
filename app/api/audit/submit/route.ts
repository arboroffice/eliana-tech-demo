import { NextResponse } from 'next/server'
import { sendAuditResultEmail, scheduleFollowUpEmails } from '@/lib/email-service'
import { generateFreebies } from '@/lib/freebie-generator'
import { calculateAuditScore, analyzeIntent } from '@/lib/audit-analyzer'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { sendHighIntentSMS, notifyTeamOfHotLead, scheduleSMSFollowUp, isValidPhoneNumber, formatPhoneNumber } from '@/lib/sms-service'
import { scoreAndRouteLead } from '@/lib/lead-router'
import { getSequence, personalizeEmail } from '@/lib/nurture-sequences'
import { getBusinessCategory } from '@/lib/audit-industry-config'

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

        // Subscribe to Founder of the Future newsletter on Substack
        if (formData.newsletterOptIn && formData.email) {
            try {
                await fetch('https://miaelianaa.substack.com/api/v1/free?nojs=true', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        email: formData.email,
                        first_url: 'https://elianatech.com/audit',
                        first_referrer: 'https://elianatech.com',
                        current_url: 'https://elianatech.com/audit',
                        current_referrer: 'https://elianatech.com',
                    }).toString(),
                })
                console.log(`[SUBSTACK] Subscribed ${formData.email} to Founder of the Future`)
            } catch (substackError) {
                console.error('[SUBSTACK ERROR]', substackError)
            }
        }

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
    const cat = getBusinessCategory(formData.businessType || '')

    const onboardingDesc: Record<string, string> = {
        online: "Manual onboarding creates bottlenecks and inconsistent experiences. AI-driven sequences can activate users 3x faster.",
        local: "Manual scheduling and intake wastes hours every week. Automated booking, confirmations, and job prep can cut admin time by 80%.",
        professional: "Manual client intake creates inconsistent first impressions. Automated onboarding with welcome sequences and doc collection can save 5+ hrs/week.",
        product: "Manual order processing creates delays and errors. Automated fulfillment workflows and confirmation sequences can cut processing time by 70%.",
    }

    if (formData.onboardingAutomated === 'No' || formData.onboardingAutomated === 'Partially') {
        opportunities.push({
            title: cat === 'local' ? "Automated Scheduling & Intake" : cat === 'product' ? "Automated Order Processing" : "Automated Onboarding",
            impact: "High",
            description: onboardingDesc[cat],
            category: "onboarding"
        })
    }

    const churnDesc: Record<string, string> = {
        online: `Your churn rate is ${formData.churnRate}%. Automated health scoring and re-engagement can cut churn by 30-50%.`,
        local: `Your customer loss rate is ${formData.churnRate}%. Automated follow-ups, review requests, and re-engagement campaigns can boost retention by 30-50%.`,
        professional: `Your client churn is ${formData.churnRate}%. Proactive check-ins, satisfaction scoring, and renewal automation can improve retention by 30-50%.`,
        product: `Your return/refund rate is ${formData.churnRate}%. Better post-purchase sequences, proactive support, and quality automation can reduce returns by 30-50%.`,
    }

    if (formData.churnRate === '20+' || formData.churnRate === '10-20') {
        opportunities.push({
            title: cat === 'local' ? "Customer Retention Engine" : cat === 'product' ? "Return Prevention System" : "Churn Prevention Engine",
            impact: "Critical",
            description: churnDesc[cat],
            category: "retention"
        })
    }

    const supportDesc: Record<string, string> = {
        online: `You're spending ${formData.supportHoursPerWeek} hrs/week on support. AI trained on your content can handle 80% of questions instantly.`,
        local: `You're spending ${formData.supportHoursPerWeek} hrs/week on calls, scheduling & admin. Automated call routing, booking, and FAQs can reclaim 60-80% of that time.`,
        professional: `You're spending ${formData.supportHoursPerWeek} hrs/week on client communication & admin. AI-assisted responses and automated status updates can save 60-80% of that time.`,
        product: `You're spending ${formData.supportHoursPerWeek} hrs/week on customer service. AI-powered order tracking, returns handling, and FAQ automation can deflect 80% of tickets.`,
    }

    if (formData.supportHoursPerWeek === '10+' || formData.supportHoursPerWeek === '5-10') {
        opportunities.push({
            title: cat === 'local' ? "AI Call & Admin Assistant" : "AI-Powered Support",
            impact: "High",
            description: supportDesc[cat],
            category: "support"
        })
    }

    const painVal = Array.isArray(formData.painLevel) ? parseInt(String(formData.painLevel[0])) || 0 : parseInt(String(formData.painLevel)) || 0
    if (painVal >= 7) {
        opportunities.push({
            title: "Urgent Process Automation",
            impact: "Critical",
            description: `Your pain level is ${painVal}/10. Immediate automation can relieve this pressure within 30 days.`,
            category: "urgent"
        })
    }

    const workflowDesc: Record<string, string> = {
        online: "With most processes still manual, automation can free 15-20 hours per week and eliminate errors.",
        local: "With most operations still manual, automating dispatch, invoicing, and follow-ups can free 15-20 hours per week and reduce missed jobs.",
        professional: "With most workflows still manual, automating proposals, time tracking, and client updates can free 15-20 hours per week.",
        product: "With most operations still manual, automating inventory, orders, and shipping can free 15-20 hours per week and reduce fulfillment errors.",
    }

    if (formData.percentAutomated === 'none' || formData.percentAutomated === 'under-30') {
        opportunities.push({
            title: "Workflow Automation",
            impact: "High",
            description: workflowDesc[cat],
            category: "quick_wins"
        })
    }

    const contentDesc: Record<string, string> = {
        online: "You're spending significant time on content. AI repurposing can turn 1 piece into 30+ assets in your voice.",
        local: "You're spending significant time on marketing. AI-powered review generation, social posts, and local SEO content can save 10+ hrs/week.",
        professional: "You're spending significant time on biz dev & marketing. AI-powered thought leadership, case studies, and outreach can save 10+ hrs/week.",
        product: "You're spending significant time on marketing & content. AI-powered product descriptions, social content, and email campaigns can save 10+ hrs/week.",
    }

    if (formData.contentCreationHours === '20+' || formData.contentCreationHours === '10-20') {
        opportunities.push({
            title: cat === 'local' ? "AI Marketing Engine" : cat === 'professional' ? "AI Biz Dev Engine" : "AI Content Engine",
            impact: "Medium",
            description: contentDesc[cat],
            category: "content"
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
