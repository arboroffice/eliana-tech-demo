/**
 * Email Nurture Sequences
 * Sequences have been cleared — none of them were accurate to our current products.
 * This file retains the types and helpers so new sequences can be added later.
 */

export interface NurtureEmail {
  day: number
  subject: string
  bodyHtml: string
  smsText?: string
}

export interface NurtureSequence {
  id: string
  name: string
  emails: NurtureEmail[]
}

const CAL_LINK = 'https://cal.com/elianatech/30min'

// ─── HTML Email Wrapper ──────────────────────────────────────────────
function wrapEmail(bodyContent: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; -webkit-font-smoothing: antialiased; color: #000000;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; background-color: #ffffff; border: 1px solid #000000;">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 40px 30px 40px; text-align: left; background-color: #000000;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.02em; text-transform: uppercase;">ELIANATECH</h1>
                        </td>
                    </tr>
                    <!-- Body -->
                    <tr>
                        <td style="padding: 50px 40px; color: #000000; font-size: 16px; line-height: 1.6; letter-spacing: -0.01em;">
                            ${bodyContent}
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 40px; border-top: 1px solid #f4f4f5; background-color: #ffffff; text-align: left;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td>
                                        <p style="margin: 0; color: #000000; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">ElianaTech OS</p>
                                        <p style="margin: 4px 0 0; color: #71717a; font-size: 11px;">The leading infrastructure for decentralized intelligence.</p>
                                    </td>
                                    <td align="right" style="vertical-align: bottom;">
                                        <a href="https://elianatech.com" style="color: #000000; text-decoration: none; font-size: 11px; font-weight: 600; border-bottom: 1px solid #000000;">WEBSITE</a>
                                        <span style="margin: 0 8px; color: #d4d4d8;">|</span>
                                        <a href="{unsubscribeLink}" style="color: #71717a; text-decoration: none; font-size: 11px;">UNSUBSCRIBE</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <p style="margin-top: 24px; color: #a1a1aa; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em;">© 2026 ELIANA TECHNOLOGIES CORP.</p>
            </td>
        </tr>
    </table>
</body>
</html>`
}

function ctaButton(text: string, link: string = CAL_LINK): string {
  return `<div style="margin: 32px 0;">
    <a href="${link}" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 16px 32px; border: 1px solid #000000; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.2s ease;">
        ${text}
    </a>
</div>`
}

// ─── 7-Day Nurture Sequence ──────────────────────────────────────────
const mainNurture: NurtureSequence = {
  id: 'standard_nurture',
  name: '7-Day Post-Audit Sequence',
  emails: [
    {
      day: 1,
      subject: "Quick question about your {companyName} audit results",
      bodyHtml: wrapEmail(`
        <p>Hi {firstName},</p>
        <p>I was just reviewing your <strong>{auditScore}/100</strong> audit score for <strong>{companyName}</strong>.</p>
        <p>I noticed you didn't grab a slot on the calendar yet. Most businesses in the <strong>{industry}</strong> space are struggling with <strong>"{painPoint}"</strong> right now — and we have a specific roadmap to fix that.</p>
        <p>Was the report helpful? Do you have any questions on how to implement the first few quick wins?</p>
        ${ctaButton("Book Strategy Session →")}
        <p>Talk soon,<br>Mia</p>
      `)
    },
    {
      day: 2,
      subject: "The #1 bottleneck for {companyName}",
      bodyHtml: wrapEmail(`
        <p>Hey {firstName},</p>
        <p>I was looking at your audit data again. Your operational score suggests that <strong>"{painPoint}"</strong> is the single biggest thing holding you back from the next level.</p>
        <p>Imagine reclaiming 10+ hours a week by installing a single autonomous agent to handle that bottleneck.</p>
        <p>I'd love to show you exactly how we'd build that for you.</p>
        ${ctaButton("Let's map your build →")}
        <p>Best,<br>Mia</p>
      `)
    },
    {
      day: 3,
      subject: "Your industry playbook (Internal Only)",
      bodyHtml: wrapEmail(`
        <p>{firstName},</p>
        <p>I wanted to send over some internal data we have on the <strong>{industry}</strong> industry. We've found that companies similar to yours see a <strong>3-5x ROI</strong> within 90 days once they shift to AI-first operations.</p>
        <p>I've attached a link to our implementation roadmap below if you haven't seen it yet.</p>
        ${ctaButton("View Roadmap & Strategy →")}
      `)
    },
    {
      day: 4,
      subject: "Are you still dealing with {painPoint}?",
      bodyHtml: wrapEmail(`
        <p>Hi {firstName}, just checking in.</p>
        <p>Usually when someone takes the audit, it's because they are tired of $\{painPoint\}. If you're still feeling that friction, it's because the systems haven't been installed yet.</p>
        <p>We're opening up 2 more build slots for this month. If you want one, we should chat today.</p>
        ${ctaButton("Check availability →")}
      `)
    },
    {
      day: 5,
      subject: "A quick win you can do today",
      bodyHtml: wrapEmail(`
        <p>Hey {firstName},</p>
        <p>Here is one quick win you can implement at <strong>{companyName}</strong> right now: <strong>Automate your lead follow-up.</strong></p>
        <p>If a lead doesn't hear from you in 5 minutes, your chance of conversion drops by 80%. An AI agent never sleeps.</p>
        <p>Want to see the ROI on this? Grab a time below.</p>
        ${ctaButton("Calculate your ROI →")}
      `)
    },
    {
      day: 6,
      subject: "Almost full for this month",
      bodyHtml: wrapEmail(`
        <p>{firstName}, just a heads up.</p>
        <p>We only have <strong>{spotsLeft}</strong> build slots left for the <strong>{industry}</strong> category for April.</p>
        <p>If you were planning on scale this quarter, we should probably finalize your roadmap this week.</p>
        ${ctaButton("Grab a time before we're full →")}
      `)
    },
    {
      day: 7,
      subject: "Moving on (for now)",
      bodyHtml: wrapEmail(`
        <p>Hi {firstName},</p>
        <p>I haven't heard back, so I'm going to assume now isn't the right time to automate <strong>{companyName}</strong>.</p>
        <p>I'll leave your audit report active for another 48 hours. If you change your mind, you know where to find me.</p>
        ${ctaButton("Final chance to chat →")}
      `)
    }
  ]
}

const sequences: Record<string, NurtureSequence> = {
  'standard_nurture': mainNurture
}

export function getSequence(id: string): NurtureSequence | null {
  return sequences[id] || null
}

export function personalizeEmail(email: NurtureEmail, formData: any): NurtureEmail {
  const replacements: Record<string, string> = {
    '{name}': formData.fullName || formData.name || 'there',
    '{firstName}': (formData.fullName || formData.name || 'there').split(' ')[0],
    '{companyName}': formData.companyName || 'your company',
    '{industry}': formData.specificIndustry || formData.businessType || 'your industry',
    '{auditScore}': String(formData.auditScore ?? ''),
    '{painPoint}': formData.keepsUpAtNight || formData.biggestFix || 'growing your business',
    '{calLink}': formData.calLink || CAL_LINK,
    '{spotsLeft}': formData.spotsLeft || '2',
    '{unsubscribeLink}': formData.unsubscribeLink || '#unsubscribe',
  }

  let subject = email.subject
  let bodyHtml = email.bodyHtml
  let smsText = email.smsText

  for (const [key, value] of Object.entries(replacements)) {
    subject = subject.replaceAll(key, value)
    bodyHtml = bodyHtml.replaceAll(key, value)
    if (smsText) smsText = smsText.replaceAll(key, value)
  }

  return { ...email, subject, bodyHtml, smsText }
}
