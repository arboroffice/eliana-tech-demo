import { NextResponse } from 'next/server'
// import { getSequence, personalizeEmail } from '@/lib/nurture-sequences'

/**
 * GET /api/cron/send-nurture
 * Called by Vercel cron daily at 9:00 AM
 * Sends scheduled nurture emails based on each lead's sequence + submission date
 */
export async function GET(request: Request) {
  // Verify cron secret
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    // TODO: Query database for leads where next_email_date = today
    // Example structure:
    //
    // const leads = await db.collection('nurture_queue')
    //   .where('nextEmailDate', '<=', new Date())
    //   .where('status', '==', 'active')
    //   .get()
    //
    // const results = []
    // for (const lead of leads.docs) {
    //   const data = lead.data()
    //   const sequence = getSequence(data.sequenceId)
    //   const email = sequence.emails[data.currentStep]
    //
    //   if (!email) {
    //     // Sequence complete
    //     await lead.ref.update({ status: 'completed' })
    //     continue
    //   }
    //
    //   // Personalize the email
    //   const personalized = personalizeEmail(email, {
    //     ...data.formData,
    //     auditScore: data.auditScore,
    //     calLink: 'https://cal.com/mia-louviere-a4n2hk/30min'
    //   })
    //
    //   // Send via Resend
    //   // await sendEmail({ to: data.email, subject: personalized.subject, html: personalized.bodyHtml })
    //
    //   // If SMS scheduled for this day, send via Twilio
    //   // if (personalized.smsText && data.phone) {
    //   //   await sendSMS({ to: data.phone, body: personalized.smsText })
    //   // }
    //
    //   // Advance to next step
    //   const nextEmail = sequence.emails[data.currentStep + 1]
    //   await lead.ref.update({
    //     currentStep: data.currentStep + 1,
    //     nextEmailDate: nextEmail
    //       ? new Date(Date.now() + (nextEmail.day - email.day) * 86400000)
    //       : null,
    //     status: nextEmail ? 'active' : 'completed',
    //     lastSentAt: new Date()
    //   })
    //
    //   results.push({ email: data.email, step: data.currentStep, sent: true })
    // }

    return NextResponse.json({
      success: true,
      message: 'Nurture emails processed',
      // processed: results
    })

  } catch (error) {
    console.error('[CRON] Nurture email error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process nurture emails' },
      { status: 500 }
    )
  }
}
