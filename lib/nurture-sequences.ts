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

// ─── No sequences defined yet ────────────────────────────────────────
// Add new sequences here when product-accurate content is ready.

const sequences: Record<string, NurtureSequence> = {}

export function getSequence(id: string): NurtureSequence | null {
  return sequences[id] || null
}

export function personalizeEmail(email: NurtureEmail, formData: any): NurtureEmail {
  const replacements: Record<string, string> = {
    '{name}': formData.fullName || formData.name || 'there',
    '{firstName}': (formData.fullName || formData.name || 'there').split(' ')[0],
    '{companyName}': formData.companyName || 'your company',
    '{industry}': formData.specificIndustry || formData.industry || 'your industry',
    '{auditScore}': String(formData.auditScore ?? ''),
    '{painPoint}': formData.keepsUpAtNight || formData.bottleneck || 'growing your business',
    '{calLink}': formData.calLink || CAL_LINK,
    '{spotsLeft}': formData.spotsLeft || '3',
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
