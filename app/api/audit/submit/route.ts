import { NextResponse } from 'next/server'
import { sendAuditResultEmail, scheduleFollowUpEmails, cancelPendingEmails, sendAuditNotificationToTeam } from '@/lib/email-service'
import { generateFreebies } from '@/lib/freebie-generator'
import { calculateAuditScore, analyzeIntent } from '@/lib/audit-analyzer'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { sendHighIntentSMS, notifyTeamOfHotLead, scheduleSMSFollowUp, isValidPhoneNumber, formatPhoneNumber } from '@/lib/sms-service'
import { scoreAndRouteLead } from '@/lib/lead-router'
import { getBusinessCategory } from '@/lib/audit-industry-config'
import { pushLeadToGHL } from '@/lib/ghl'
import { createVaultFromAudit } from '@/lib/client-vault'

export async function POST(request: Request) {
    try {
        const formData = await request.json()
        console.log('[AUDIT SUBMIT] Processing submission for:', formData.email)
        
        // Cancel any pending abandonment emails (Sequence F)
        if (formData.email) {
            try {
                await cancelPendingEmails(formData.email, 'SEQUENCE_F')
            } catch (e) {
                console.error('[CANCEL ERROR]', e)
            }
        }

        // Calculate scores and intent
        const auditScore = calculateAuditScore(formData)
        const intentLevel = analyzeIntent(formData)
        const opportunities = identifyOpportunities(formData)

        // Store audit data immediately
        const auditId = await storeAuditData({
            ...formData,
            auditScore,
            intentLevel,
            opportunities,
            accountType: 'audit',
            submittedAt: new Date().toISOString(),
            status: 'new' // Explicit status for admin portal
        })

        console.log('[AUDIT SUBMIT] Stored audit:', auditId)

        // side-effects wrapped in try-catches to ensure response returns
        
        // 1. Notify team
        try {
            await sendAuditNotificationToTeam({
                formData,
                auditScore,
                opportunities,
                intentLevel,
                auditId
            })
        } catch (e) {
            console.error('[TEAM NOTIFY ERROR]', e)
        }

        // 2. Create client vault
        try {
            await createVaultFromAudit(auditId, {
                ...formData,
                auditScore,
                intentLevel,
                growthBudget: formData.growthBudget,
                opportunities,
            })
        } catch (e) {
            console.error('[VAULT CREATE ERROR]', e)
        }

        // 3. Email results to user
        try {
            // Generate personalized freebies
            const freebies = await generateFreebies(formData, auditScore, opportunities)

            await sendAuditResultEmail({
                to: formData.email,
                name: formData.fullName,
                companyName: formData.companyName,
                auditScore,
                opportunities,
                freebies,
                intentLevel
            })

            // Schedule follow-up emails
            await scheduleFollowUpEmails({
                email: formData.email,
                name: formData.fullName,
                companyName: formData.companyName,
                intentLevel,
                formData,
                auditId,
                auditScore
            })
        } catch (e) {
            console.error('[EMAIL SEQUENCE ERROR]', e)
        }

        // 4. Substack subscription
        if (formData.email) {
            try {
                await fetch('https://miaelianaa.substack.com/api/v1/free?nojs=true', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({
                        email: formData.email,
                        first_url: 'https://elianatech.com/audit',
                        first_referrer: 'https://elianatech.com',
                        current_url: 'https://elianatech.com/audit',
                        current_referrer: 'https://elianatech.com',
                    }).toString(),
                })
            } catch (e) {
                console.error('[SUBSTACK ERROR]', e)
            }
        }

        // 5. SMS (High Intent Only)
        if (intentLevel === 'high' && formData.phoneNumber && isValidPhoneNumber(formData.phoneNumber)) {
            try {
                const formattedPhone = formatPhoneNumber(formData.phoneNumber)
                const painPoint = formData.keepsUpAtNight || 'growing your business'

                await sendHighIntentSMS({
                    to: formattedPhone,
                    name: formData.fullName,
                    companyName: formData.companyName,
                    painPoint,
                    intentLevel,
                    auditId
                })

                await notifyTeamOfHotLead({
                    to: formattedPhone,
                    name: formData.fullName,
                    companyName: formData.companyName,
                    painPoint,
                    intentLevel,
                    auditId
                })
            } catch (e) {
                console.error('[SMS ERROR]', e)
            }
        }

        return NextResponse.json({
            success: true,
            auditId,
            auditScore,
            opportunities
        })

    } catch (error) {
        console.error('[AUDIT SUBMIT CRITICAL ERROR]:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to process audit' },
            { status: 500 }
        )
    }
}


function identifyOpportunities(formData: any) {
    const opportunities = []
    const cat = getBusinessCategory(formData.businessType || 'other')

    // 1. Team & Admin Burden
    const isBuriedInAdmin = formData.adminRoles?.some((r: string) => r.includes('Owner') || r.includes('Everyone'))
    const hours = formData.hoursOnAdmin || '1-5h'
    const highHours = hours === '20-30h' || hours === '30h+' || hours === '10-20h'

    if (highHours || isBuriedInAdmin) {
        opportunities.push({
            title: "Team Capacity Recovery",
            impact: "High",
            description: `You're losing significant hours to repetitive admin. AI agents can reclaim ${hours} per week, shifting your focus back to growth.`,
            category: "ops"
        })
    }

    // 2. Tool Stack Gaps
    const hasSmallStack = (formData.crmTools?.length || 0) + (formData.billingTools?.length || 0) < 2
    const manualOps = formData.crmTools?.includes('None / Spreadsheets') || formData.billingTools?.includes('None / Manual')

    if (manualOps || hasSmallStack) {
        opportunities.push({
            title: "Infrastructure Foundation",
            impact: "Critical",
            description: "Your operations are running on manual tools. Installing a connected AI infrastructure will eliminate data silos and manual entry errors.",
            category: "infrastructure"
        })
    }

    // 3. AI Adoption
    if (formData.aiUse?.includes('No') || formData.aiUse?.includes('experimenting')) {
        opportunities.push({
            title: "AI First-Mover Advantage",
            impact: "High",
            description: "You have a massive opportunity to outpace competitors by being the first to install autonomous agents in your specific niche.",
            category: "ai"
        })
    }

    // 4. Operational Chaos (Ops Score)
    const opsScore = parseInt(formData.opsScore) || 5
    if (opsScore <= 4) {
        opportunities.push({
            title: "Operational Stabilizer",
            impact: "Critical",
            description: `A ${opsScore}/10 ops score indicates the business is running on willpower. We install the systems that keep the business running when you step away.`,
            category: "urgent"
        })
    }

    // 5. High Priority Fix
    if (formData.biggestFix?.length > 10) {
        opportunities.push({
            title: "Priority Bottleneck Resolution",
            impact: "High",
            description: `Your identified bottleneck: "${formData.biggestFix.substring(0, 60)}..." is a prime candidate for autonomous resolution.`,
            category: "automation"
        })
    }

    // 6. Lead Follow-up (Niche specific common gaps)
    const problems = formData.problems || []
    if (problems.some((p: string) => p.toLowerCase().includes('lead') || p.toLowerCase().includes('follow'))) {
        opportunities.push({
            title: "Autonomous Sales Assistant",
            impact: "Critical",
            description: "Leads are falling through the cracks. An AI agent can respond in < 5 mins, 24/7, ensuring 0% lead decay.",
            category: "sales"
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
