/**
 * Email Nurture Sequences
 * Full email content for Hot (A), Warm (B), and Cold (C) lead sequences
 */

export interface NurtureEmail {
  day: number
  subject: string
  bodyHtml: string
  smsText?: string
}

export interface NurtureSequence {
  id: 'A' | 'B' | 'C'
  name: string
  emails: NurtureEmail[]
}

const CAL_LINK = 'https://cal.com/mia-louviere-a4n2hk/30min'

// ─── HTML Email Wrapper ──────────────────────────────────────────────
function wrapEmail(bodyContent: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:20px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;">
<!-- Header -->
<tr><td style="background:#1e293b;padding:28px 32px;text-align:center;">
<h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:0.5px;">ElianaTech</h1>
<p style="margin:4px 0 0;color:#94a3b8;font-size:13px;">AI-Powered Business Automation</p>
</td></tr>
<!-- Body -->
<tr><td style="padding:32px;color:#334155;font-size:15px;line-height:1.7;">
${bodyContent}
</td></tr>
<!-- Footer -->
<tr><td style="background:#f8fafc;padding:24px 32px;text-align:center;border-top:1px solid #e2e8f0;">
<p style="margin:0 0 8px;color:#64748b;font-size:13px;">ElianaTech &middot; <a href="https://elianatech.com" style="color:#2563eb;text-decoration:none;">elianatech.com</a></p>
<p style="margin:0;color:#94a3b8;font-size:11px;"><a href="{unsubscribeLink}" style="color:#94a3b8;text-decoration:underline;">Unsubscribe</a></p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`
}

function ctaButton(text: string, link: string = CAL_LINK): string {
  return `<div style="text-align:center;margin:28px 0;">
<a href="${link}" style="display:inline-block;background:#2563eb;color:#ffffff;padding:14px 32px;border-radius:6px;text-decoration:none;font-weight:600;font-size:15px;">${text}</a>
</div>`
}

// ─── SEQUENCE A: Hot Leads (5 emails, 7 days) ───────────────────────
const sequenceA: NurtureSequence = {
  id: 'A',
  name: 'Hot Lead — Accelerated',
  emails: [
    {
      day: 0,
      subject: '{name}, your AI audit results are ready',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>I just reviewed your audit personally — and I have to say, <strong>{companyName}</strong> has serious potential for AI automation.</p>
<div style="background:#f0fdf4;border-left:4px solid #22c55e;padding:16px 20px;border-radius:4px;margin:20px 0;">
<p style="margin:0 0 4px;font-size:20px;font-weight:700;color:#166534;">Your AI Readiness Score: {auditScore}/100</p>
<p style="margin:0;color:#15803d;font-size:14px;">This means massive room for automation wins.</p>
</div>
<p><strong>Here's what stands out — your top 3 opportunities:</strong></p>
<ol style="padding-left:20px;">
<li style="margin-bottom:12px;"><strong>Automated Onboarding</strong> — Your users are dropping off before they see value. An AI-driven onboarding sequence gets them to 'aha' 3x faster. <em>Estimated value: 20-40% activation improvement.</em></li>
<li style="margin-bottom:12px;"><strong>Churn Prevention</strong> — Users go quiet, then cancel. AI detects at-risk users and re-engages before it's too late. <em>Estimated value: 30-50% churn reduction.</em></li>
<li style="margin-bottom:12px;"><strong>Support Automation</strong> — Your team spends hours on repetitive tickets. AI handles 80% instantly. <em>Estimated value: 15-20 hours/week reclaimed.</em></li>
</ol>
<p>I've prepared a full breakdown with specific numbers for {companyName}. Want to walk through it together?</p>
${ctaButton('Book Your Strategy Call →')}
<p>This is a working session — not a pitch. You'll leave with a clear action plan either way.</p>
<p>Talk soon,<br><strong>Mia</strong><br>Founder, ElianaTech</p>
      `),
      smsText: 'Hey {firstName}! Just reviewed your AI audit — impressive product. I have some specific ideas for {companyName}. Mind if I call you in the next hour? - Mia, ElianaTech'
    },
    {
      day: 1,
      subject: 'How a {industry} business saved 20+ hrs/week with AI',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Yesterday I sent your audit results. Today I want to show you what's <em>possible</em>.</p>
<div style="background:#eff6ff;padding:20px;border-radius:6px;margin:20px 0;">
<h3 style="margin:0 0 12px;color:#1e40af;">Case Study: {industry} Business Transformation</h3>
<table width="100%" cellpadding="8" style="font-size:14px;">
<tr><td style="color:#dc2626;font-weight:600;">Before:</td><td>60+ hr weeks, manual onboarding, support backlog, high churn</td></tr>
<tr><td style="color:#16a34a;font-weight:600;">After:</td><td>25 hr weeks, automated onboarding, AI support handling 80% of tickets, churn cut in half</td></tr>
<tr><td style="color:#2563eb;font-weight:600;">Results:</td><td>+$15K/mo ARR, 20+ hrs/week saved, 45% churn reduction</td></tr>
</table>
</div>
<p><strong>This is exactly what we'd build for {companyName}.</strong></p>
<p>Same industry. Same pain points. Different outcome — because they automated first.</p>
${ctaButton('See How We\'d Do This For You →')}
<p>Mia</p>
      `)
    },
    {
      day: 2,
      subject: 'Here\'s what we\'d install for {companyName}',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>I mapped out your first 90 days with ElianaTech. Here's a preview of what we'd build for <strong>{companyName}</strong>:</p>
<div style="border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;margin:20px 0;">
<div style="background:#1e293b;color:white;padding:12px 20px;font-weight:600;">🔧 Your Custom AI Installation Plan</div>
<div style="padding:20px;">
<p style="margin:0 0 16px;"><strong>System 1: Automated Onboarding Engine</strong><br><span style="color:#64748b;">From signup to activation to first value — zero manual touches.</span></p>
<p style="margin:0 0 16px;"><strong>System 2: Churn Prevention System</strong><br><span style="color:#64748b;">AI-powered health scoring, re-engagement sequences, and win-back campaigns.</span></p>
<p style="margin:0 0 16px;"><strong>System 3: AI Support Layer</strong><br><span style="color:#64748b;">Handle 80% of support tickets instantly. Your team only gets pulled in when it matters.</span></p>
</div>
</div>
<p>Want the full proposal with timelines and ROI projections?</p>
${ctaButton('Let\'s Talk — Get the Full Proposal →')}
<p>Mia</p>
      `),
      smsText: 'Hey {firstName}, did you see the install plan I sent for {companyName}? I mapped out your first 90 days. Want to walk through it? {calLink} - Mia'
    },
    {
      day: 4,
      subject: 'The math on AI for {companyName}',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Let's talk numbers. Based on your audit, here's what AI could do for <strong>{companyName}</strong>:</p>
<table width="100%" cellpadding="12" style="border-collapse:collapse;margin:20px 0;font-size:14px;">
<tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;font-weight:600;">Churn reduction</td><td style="border:1px solid #e2e8f0;">30-50% fewer cancellations → <strong style="color:#16a34a;">$5,000-$15,000/mo saved</strong></td></tr>
<tr><td style="border:1px solid #e2e8f0;font-weight:600;">Hours saved weekly</td><td style="border:1px solid #e2e8f0;">15-20 hrs → <strong style="color:#16a34a;">$2,500-$4,000/mo value</strong></td></tr>
<tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;font-weight:600;">Conversion rate improvement</td><td style="border:1px solid #e2e8f0;">+30-50% → <strong style="color:#16a34a;">$5,000-$15,000/mo</strong></td></tr>
<tr><td style="border:1px solid #e2e8f0;font-weight:600;">Support automation</td><td style="border:1px solid #e2e8f0;">80% ticket deflection → <strong style="color:#16a34a;">Faster response, happier users</strong></td></tr>
<tr style="background:#eff6ff;"><td style="border:1px solid #2563eb;font-weight:700;color:#1e40af;">Total estimated impact</td><td style="border:1px solid #2563eb;font-weight:700;color:#1e40af;font-size:18px;">$11,500-$31,000/mo</td></tr>
</table>
<p>vs. hiring a full-time operations person ($5,000-$8,000/mo who still can't work 24/7).</p>
<p><strong>The ROI isn't even close.</strong></p>
${ctaButton('Book a Call — Let\'s Build This →')}
<p>Mia</p>
      `)
    },
    {
      day: 7,
      subject: 'Last {spotsLeft} spots this month',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Quick update — we only take <strong>5 new installations per month</strong> to ensure every client gets our full attention.</p>
<div style="background:#fef2f2;border-left:4px solid #ef4444;padding:16px 20px;border-radius:4px;margin:20px 0;">
<p style="margin:0;font-weight:700;color:#dc2626;font-size:16px;">Only {spotsLeft} spots remain for this month.</p>
</div>
<p>Here's what {companyName} would get:</p>
<ul style="padding-left:20px;">
<li>✅ Automated Onboarding (signup → activation on autopilot)</li>
<li>✅ Smart Follow-Up Sequences (automated, personalized)</li>
<li>✅ AI Support Layer (handle 80% of tickets instantly)</li>
<li>✅ Revenue Intelligence (know which channels actually drive revenue)</li>
<li>✅ Custom Dashboard (see everything in one place)</li>
<li>✅ 90-Day Installation + Ongoing Support</li>
</ul>
<p>Every day without these systems is revenue left on the table.</p>
${ctaButton('Claim Your Spot →')}
<p>Mia</p>
<p style="color:#64748b;font-size:13px;">P.S. Even if you're not ready this month, booking a call reserves your priority spot for next month.</p>
      `),
      smsText: '{firstName}, just a heads up — only {spotsLeft} installation spots left this month. If you want one, let\'s chat: {calLink} - Mia'
    }
  ]
}

// ─── SEQUENCE B: Warm Leads (7 emails, 21 days) ─────────────────────
const sequenceB: NurtureSequence = {
  id: 'B',
  name: 'Warm Lead — Nurture',
  emails: [
    {
      day: 0,
      subject: '{name}, your AI audit results + quick wins',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Thanks for completing your AI readiness audit for <strong>{companyName}</strong>! Here are your results:</p>
<div style="background:#eff6ff;padding:20px;border-radius:6px;text-align:center;margin:20px 0;">
<p style="margin:0;font-size:14px;color:#64748b;">Your AI Readiness Score</p>
<p style="margin:8px 0;font-size:42px;font-weight:700;color:#2563eb;">{auditScore}/100</p>
</div>
<p><strong>3 Quick Wins You Can Implement This Week:</strong></p>
<ol style="padding-left:20px;">
<li style="margin-bottom:10px;"><strong>Set up a welcome email sequence</strong> — Even a simple 3-email onboarding flow reduces drop-off by 30%.</li>
<li style="margin-bottom:10px;"><strong>Add an in-app NPS survey</strong> — A simple popup at day 7 gives you early churn signals and testimonials.</li>
<li style="margin-bottom:10px;"><strong>Block 2 hours for high-value work</strong> — Use that time ONLY for revenue-generating activities.</li>
</ol>
<p>Want to see the full list of opportunities specific to {companyName}?</p>
${ctaButton('View Full Report →', 'https://elianatech.com/audit/results')}
<p>Mia<br>ElianaTech</p>
      `)
    },
    {
      day: 3,
      subject: 'What AI actually does for a {industry} business',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>There's a lot of hype around AI. Let me cut through it and show you what it <em>actually</em> looks like for a <strong>{industry}</strong> business like {companyName}.</p>
<h3 style="color:#1e293b;">What AI Does:</h3>
<ul style="padding-left:20px;">
<li>✅ Onboards new users automatically (personalized, behavior-driven sequences)</li>
<li>✅ Detects at-risk users and re-engages them before they churn</li>
<li>✅ Handles 80% of support tickets instantly</li>
<li>✅ Triggers upgrade prompts at the right moment</li>
<li>✅ Generates content from your long-form pieces</li>
<li>✅ Generates reports so you see what's working</li>
</ul>
<h3 style="color:#1e293b;">What AI Doesn't Do:</h3>
<ul style="padding-left:20px;">
<li>❌ Replace your team (it makes them 10x more effective)</li>
<li>❌ Require technical skills (we install everything)</li>
<li>❌ Take months to set up (most systems are live in 2-4 weeks)</li>
</ul>
<p>Questions? Just reply to this email — I read every one.</p>
<p>Mia</p>
      `)
    },
    {
      day: 7,
      subject: 'How {industry} owners are winning with AI (real results)',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Wanted to share some results from business owners like you:</p>
<div style="background:#f8fafc;padding:20px;border-radius:6px;margin:20px 0;">
<p style="font-style:italic;margin:0 0 8px;">"Our onboarding went from 3 hours manual to fully automated. Activation rate jumped 40% in the first month."</p>
<p style="margin:0;font-weight:600;color:#64748b;">— Sarah M., SaaS Founder</p>
</div>
<div style="background:#f8fafc;padding:20px;border-radius:6px;margin:20px 0;">
<p style="font-style:italic;margin:0 0 8px;">"I got 20 hours of my week back. I actually took a vacation for the first time in 3 years."</p>
<p style="margin:0;font-weight:600;color:#64748b;">— Marcus T., Course Creator</p>
</div>
<div style="background:#f8fafc;padding:20px;border-radius:6px;margin:20px 0;">
<p style="font-style:italic;margin:0 0 8px;">"Our churn dropped from 12% to 5% in 90 days. That's an extra $180K ARR we would have lost."</p>
<p style="margin:0;font-weight:600;color:#64748b;">— Lisa K., B2B SaaS</p>
</div>
<p>Curious what results would look like for {companyName}?</p>
${ctaButton('Let\'s Find Out →')}
<p>Mia</p>
      `)
    },
    {
      day: 10,
      subject: 'Free {industry} AI playbook (yours to keep)',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>I put together a quick playbook for <strong>{industry}</strong> business owners who want to start using AI — even without hiring us.</p>
<div style="border:1px solid #e2e8f0;border-radius:6px;padding:20px;margin:20px 0;">
<h3 style="margin:0 0 12px;color:#1e293b;">📘 The {industry} AI Playbook</h3>
<p style="margin:0 0 8px;">Inside:</p>
<ul style="padding-left:20px;margin:0;">
<li>5 automations every {industry} business should have</li>
<li>Free tools you can start with today</li>
<li>The exact workflow we install for clients</li>
<li>ROI calculator template</li>
</ul>
</div>
${ctaButton('Download Your Free Playbook →', 'https://elianatech.com/playbook')}
<p>No strings attached. Enjoy!</p>
<p>Mia</p>
      `)
    },
    {
      day: 14,
      subject: 'Business owners like you are saving 20+ hrs/week',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Quick thought: what would you do with 20 extra hours per week?</p>
<p>That's what most of our clients get back after installation. Some of them:</p>
<ul style="padding-left:20px;">
<li>🏖️ Finally took a real vacation</li>
<li>📈 Focused on growth instead of operations</li>
<li>👨‍👩‍👧 Spent more time with family</li>
<li>💡 Launched new products and features</li>
<li>🏋️ Got back to the gym (seriously)</li>
</ul>
<p>Your audit showed {companyName} is spending way too much time on things AI can handle. The math is clear — you just need to make the switch.</p>
${ctaButton('Book a Free Strategy Call →')}
<p>Mia</p>
      `)
    },
    {
      day: 18,
      subject: 'Calculate your AI ROI in 2 minutes',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Want to see the exact ROI for {companyName}? I built a quick calculator:</p>
${ctaButton('Calculate Your ROI →', 'https://elianatech.com/roi')}
<p>Just plug in your numbers:</p>
<ul style="padding-left:20px;">
<li>How many leads you get per week</li>
<li>Your average deal size</li>
<li>Hours spent on admin tasks</li>
</ul>
<p>It'll show you exactly how much you'd save (and earn) with automation.</p>
<p>Spoiler: it's usually 5-10x the investment. 😉</p>
<p>Mia</p>
      `)
    },
    {
      day: 21,
      subject: 'Free strategy call — no pitch, just value',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>It's been a few weeks since your audit. I hope the resources have been helpful!</p>
<p>I'd love to offer you a <strong>free 30-minute strategy call</strong>. Here's what you'll walk away with:</p>
<ul style="padding-left:20px;">
<li>✅ Custom automation roadmap for {companyName}</li>
<li>✅ 3 specific quick wins you can implement immediately</li>
<li>✅ Clear ROI projections based on YOUR numbers</li>
<li>✅ Honest assessment — even if we're not the right fit</li>
</ul>
<p><strong>No pitch. No pressure.</strong> Just a working session to help you figure out what makes sense.</p>
${ctaButton('Book Your Free Call →')}
<p>Looking forward to it,<br>Mia</p>
      `),
      smsText: 'Hey {firstName}! Offering a free 30-min strategy call for {companyName} — no pitch, just actionable value. Interested? {calLink} - Mia'
    }
  ]
}

// ─── SEQUENCE C: Cold / Newsletter (4 emails, 30 days) ──────────────
const sequenceC: NurtureSequence = {
  id: 'C',
  name: 'Cold Lead — Newsletter',
  emails: [
    {
      day: 0,
      subject: 'Thanks for your interest, {name}!',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Thanks for completing the AI readiness audit for <strong>{companyName}</strong>!</p>
<div style="background:#eff6ff;padding:20px;border-radius:6px;text-align:center;margin:20px 0;">
<p style="margin:0;font-size:14px;color:#64748b;">Your Score</p>
<p style="margin:8px 0;font-size:36px;font-weight:700;color:#2563eb;">{auditScore}/100</p>
</div>
<p><strong>Here's 1 quick win you can do today:</strong></p>
<div style="background:#f0fdf4;padding:16px 20px;border-radius:6px;margin:16px 0;">
<p style="margin:0;"><strong>Set up a simple welcome email sequence</strong> in your email tool. Even 3 emails (welcome, quick win, next steps) reduces new user drop-off by 30%. Takes 15 minutes.</p>
</div>
<p>I'll send you more tips and resources over the coming weeks. No spam — just useful stuff.</p>
<p>Mia<br>ElianaTech</p>
      `)
    },
    {
      day: 7,
      subject: '3 AI tools every small business should use (free)',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Here are 3 free AI tools you can start using right now:</p>
<ol style="padding-left:20px;">
<li style="margin-bottom:12px;"><strong>ChatGPT</strong> — Draft emails, create SOPs, brainstorm marketing ideas. Saves 5+ hrs/week.</li>
<li style="margin-bottom:12px;"><strong>Calendly (free tier)</strong> — Stop the back-and-forth scheduling. Let clients book directly.</li>
<li style="margin-bottom:12px;"><strong>Zapier (free tier)</strong> — Connect your tools so data flows automatically. Start with: new form → email notification.</li>
</ol>
<p>These won't transform your business overnight, but they're a solid starting point.</p>
<p>Want the full list? Check out our blog:</p>
${ctaButton('Read the Full Guide →', 'https://elianatech.com/blog')}
<p>Mia</p>
      `)
    },
    {
      day: 14,
      subject: 'From 60-hour weeks to 35 (a real story)',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Quick story I thought you'd appreciate:</p>
<p>A business owner came to us working 60+ hours/week. Sound familiar? They were:</p>
<ul style="padding-left:20px;">
<li>Manually onboarding every new user</li>
<li>Manually following up with every lead</li>
<li>Handling every support ticket personally</li>
<li>Posting on social media at midnight</li>
</ul>
<p>90 days later:</p>
<ul style="padding-left:20px;">
<li>AI handles calls and books appointments 24/7</li>
<li>Follow-ups run automatically (personalized, not robotic)</li>
<li>80% of support tickets resolved by AI instantly</li>
<li>Content is scheduled weeks in advance</li>
</ul>
<p><strong>Result: 35-hour weeks and $12K/mo more revenue.</strong></p>
<p>When you're ready to explore what this looks like for {companyName}, I'm here.</p>
<p>Mia</p>
      `)
    },
    {
      day: 30,
      subject: 'Ready to talk now, {name}?',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>It's been a month since you took the audit. A lot can change in 30 days — and I'm curious where {companyName} stands now.</p>
<p>If you're still thinking about automation, here's what I'd suggest:</p>
<p><strong>Book a free 30-minute strategy call.</strong> No pitch — just an honest look at what would actually help.</p>
${ctaButton('Book Your Free Call →')}
<p>If the timing still isn't right, no worries at all. Your audit results are always available, and I'll keep sending useful tips.</p>
<p>Either way — I'm rooting for {companyName}. 🙌</p>
<p>Mia</p>
      `),
      smsText: 'No worries if timing isn\'t right {firstName}. Your audit results are saved whenever you\'re ready: elianatech.com/audit - Mia'
    }
  ]
}

// ─── Exports ─────────────────────────────────────────────────────────

const sequences: Record<string, NurtureSequence> = { A: sequenceA, B: sequenceB, C: sequenceC }

export function getSequence(id: 'A' | 'B' | 'C'): NurtureSequence {
  return sequences[id]
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
