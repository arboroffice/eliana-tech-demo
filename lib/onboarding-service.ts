/**
 * Post-Sale Onboarding Service
 * Email sequences and task checklists for new clients
 */

export interface OnboardingSequence {
  emails: { day: number; subject: string; bodyHtml: string }[]
  tasks: { day: number; task: string; description: string }[]
}

const CAL_LINK = 'https://cal.com/elianatech/30min'

function wrapEmail(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:20px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;">
<tr><td style="background:#1e293b;padding:28px 32px;text-align:center;">
<h1 style="margin:0;color:#ffffff;font-size:22px;">ElianaTech</h1>
<p style="margin:4px 0 0;color:#94a3b8;font-size:13px;">Client Onboarding</p>
</td></tr>
<tr><td style="padding:32px;color:#334155;font-size:15px;line-height:1.7;">
${body}
</td></tr>
<tr><td style="background:#f8fafc;padding:24px 32px;text-align:center;border-top:1px solid #e2e8f0;">
<p style="margin:0;color:#64748b;font-size:13px;">ElianaTech &middot; <a href="https://elianatech.com" style="color:#dc2626;text-decoration:none;">elianatech.com</a></p>
</td></tr>
</table></td></tr></table></body></html>`
}

// ─── AI COO Onboarding (14 days) ────────────────────────────────────

const aiCooOnboarding: OnboardingSequence = {
  emails: [
    {
      day: 0,
      subject: '🎉 Welcome! Your AI COO is being built',
      bodyHtml: wrapEmail(`
<p>Hey {name}!</p>
<p><strong>Welcome to ElianaTech!</strong> We're thrilled to have {companyName} on board.</p>
<div style="background:#fef2f2;border-left:4px solid #dc2626;padding:16px 20px;border-radius:4px;margin:20px 0;">
<h3 style="margin:0 0 8px;color:#7f1d1d;">Your AI COO build has started! 🚀</h3>
<p style="margin:0;color:#991b1b;">Our team is configuring your systems right now.</p>
</div>
<p><strong>Here's what happens next:</strong></p>
<ol style="padding-left:20px;">
<li style="margin-bottom:8px;"><strong>Today:</strong> We begin system configuration</li>
<li style="margin-bottom:8px;"><strong>Day 1:</strong> Kickoff call to align on goals & collect access</li>
<li style="margin-bottom:8px;"><strong>Days 2-6:</strong> Build & configure your AI systems</li>
<li style="margin-bottom:8px;"><strong>Day 7:</strong> First progress report</li>
<li style="margin-bottom:8px;"><strong>Day 14:</strong> Full handoff — your AI COO is live!</li>
</ol>
<p>Please complete our onboarding form so we can hit the ground running:</p>
<div style="text-align:center;margin:24px 0;">
<a href="https://elianatech.com/onboarding" style="display:inline-block;background:#dc2626;color:#fff;padding:14px 32px;border-radius:6px;text-decoration:none;font-weight:600;">Complete Onboarding Form →</a>
</div>
<p>Questions? Reply to this email anytime.</p>
<p>— The ElianaTech Team</p>`)
    },
    {
      day: 1,
      subject: 'Kickoff call tomorrow — here\'s how to prep',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Your kickoff call is coming up! Here's a quick prep checklist to make it productive:</p>
<div style="background:#fef2f2;padding:20px;border-radius:6px;margin:20px 0;">
<h3 style="margin:0 0 12px;color:#991b1b;">📋 Kickoff Prep Checklist</h3>
<ul style="padding-left:20px;margin:0;">
<li style="margin-bottom:8px;">☐ Complete the onboarding form (if you haven't yet)</li>
<li style="margin-bottom:8px;">☐ Gather logins: email provider, phone system, calendar tool</li>
<li style="margin-bottom:8px;">☐ List your top 3 priorities for automation</li>
<li style="margin-bottom:8px;">☐ Have your current tools/software list ready</li>
<li style="margin-bottom:8px;">☐ Think about: "What does a perfect week look like?"</li>
</ul>
</div>
<p>If you haven't booked your kickoff call yet:</p>
<div style="text-align:center;margin:24px 0;">
<a href="${CAL_LINK}" style="display:inline-block;background:#dc2626;color:#fff;padding:14px 32px;border-radius:6px;text-decoration:none;font-weight:600;">Book Kickoff Call →</a>
</div>
<p>Mia</p>`)
    },
    {
      day: 3,
      subject: 'Your AI is learning 🧠',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Quick update — your AI COO is taking shape!</p>
<p><strong>Here's what we've configured so far:</strong></p>
<ul style="padding-left:20px;">
<li>✅ AI lead capture system — trained on your business</li>
<li>✅ Follow-up sequences — personalized for your industry</li>
<li>✅ Appointment booking — connected to your calendar</li>
<li>🔄 Review automation — in progress</li>
<li>🔄 Dashboard setup — in progress</li>
</ul>
<p>Your AI is learning your business patterns, your customer language, and your workflows. By day 7, it'll be ready for its first report.</p>
<p>No action needed from you right now — just wanted to keep you in the loop!</p>
<p>Mia</p>`)
    },
    {
      day: 7,
      subject: '📊 Your first week report',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Your AI COO has been running for 7 days! Here's what it's been up to:</p>
<div style="border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;margin:20px 0;">
<div style="background:#1e293b;color:white;padding:12px 20px;font-weight:600;">Week 1 Report — {companyName}</div>
<div style="padding:20px;">
<p><strong>Systems Active:</strong></p>
<ul style="padding-left:20px;">
<li>Lead capture & response ✅</li>
<li>Follow-up automation ✅</li>
<li>Appointment booking ✅</li>
<li>Review requests ✅</li>
</ul>
<p><strong>Early Results:</strong></p>
<ul style="padding-left:20px;">
<li>Leads captured: monitoring in progress</li>
<li>Response time: under 2 minutes (was 2+ hours)</li>
<li>Follow-ups sent: automated for every lead</li>
</ul>
</div></div>
<p>We're now entering the optimization phase — fine-tuning based on real data from your business.</p>
<p>Any feedback so far? Reply anytime.</p>
<p>Mia</p>`)
    },
    {
      day: 14,
      subject: '🎉 Your AI COO is fully tuned and live!',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p><strong>Your AI COO installation is complete!</strong> 🎉</p>
<p>Here's what's running for {companyName}:</p>
<ul style="padding-left:20px;">
<li>✅ AI Lead Capture — answers and qualifies 24/7</li>
<li>✅ Smart Follow-Up — nurtures every lead automatically</li>
<li>✅ Appointment Booking — fills your calendar</li>
<li>✅ Review Generation — builds your reputation on autopilot</li>
<li>✅ Operations Dashboard — everything in one place</li>
</ul>
<div style="background:#fef2f2;padding:20px;border-radius:6px;margin:20px 0;">
<h3 style="margin:0 0 8px;color:#991b1b;">📘 How to Use Your AI COO</h3>
<ul style="padding-left:20px;margin:0;">
<li>Check your dashboard daily (takes 5 min)</li>
<li>Review and approve AI-drafted responses weekly</li>
<li>Flag anything that needs adjustment — we'll tune it</li>
</ul>
</div>
<p><strong>Ongoing Support:</strong></p>
<ul style="padding-left:20px;">
<li>📧 Email us anytime: support@elianatech.com</li>
<li>📞 Monthly check-in calls included</li>
<li>🔧 Unlimited adjustments for 90 days</li>
</ul>
<p>Congratulations on taking this step. Your business is about to run very differently. 🚀</p>
<p>Mia & the ElianaTech Team</p>`)
    }
  ],
  tasks: [
    { day: 0, task: 'Send welcome email', description: 'Automated welcome email with onboarding form link' },
    { day: 0, task: 'Begin system configuration', description: 'Start setting up AI systems based on audit data' },
    { day: 1, task: 'Kickoff call', description: 'Align on goals, collect logins, review priorities' },
    { day: 2, task: 'Connect tools & integrations', description: 'Set up API connections to client tools' },
    { day: 3, task: 'Configure AI lead capture', description: 'Train AI on business context and customer language' },
    { day: 5, task: 'Set up follow-up sequences', description: 'Configure email/SMS nurture flows' },
    { day: 7, task: 'Send first week report', description: 'Compile and send performance report' },
    { day: 7, task: 'Begin optimization phase', description: 'Analyze data and start tuning' },
    { day: 10, task: 'A/B test messaging', description: 'Test different approaches for best results' },
    { day: 14, task: 'Final handoff', description: 'Complete all systems, send handoff documentation' }
  ]
}

// ─── Full Infrastructure Onboarding (30 days) ───────────────────────

const fullInfraOnboarding: OnboardingSequence = {
  emails: [
    {
      day: 0,
      subject: '🎉 Welcome to ElianaTech — let\'s build your infrastructure!',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p><strong>Welcome to ElianaTech!</strong> We're building the complete digital infrastructure for {companyName}.</p>
<div style="background:#fef2f2;border-left:4px solid #dc2626;padding:16px 20px;border-radius:4px;margin:20px 0;">
<h3 style="margin:0 0 8px;color:#7f1d1d;">Your Full Infrastructure build has started! 🏗️</h3>
</div>
<p><strong>Your 30-day roadmap:</strong></p>
<ol style="padding-left:20px;">
<li style="margin-bottom:6px;"><strong>Week 1:</strong> Strategy, brand, and foundations</li>
<li style="margin-bottom:6px;"><strong>Week 2:</strong> Website + CRM + core automations</li>
<li style="margin-bottom:6px;"><strong>Week 3:</strong> Content, integrations, and testing</li>
<li style="margin-bottom:6px;"><strong>Week 4:</strong> Launch, optimize, and handoff</li>
</ol>
<p>First step — book your kickoff call:</p>
<div style="text-align:center;margin:24px 0;">
<a href="${CAL_LINK}" style="display:inline-block;background:#dc2626;color:#fff;padding:14px 32px;border-radius:6px;text-decoration:none;font-weight:600;">Book Kickoff Call →</a>
</div>
<p>Mia & the ElianaTech Team</p>`)
    },
    {
      day: 3,
      subject: 'Brand questionnaire + content intake',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>We need your input to make {companyName}'s brand shine! Please complete these two forms:</p>
<div style="text-align:center;margin:24px 0;">
<a href="https://elianatech.com/brand-questionnaire" style="display:inline-block;background:#dc2626;color:#fff;padding:14px 32px;border-radius:6px;text-decoration:none;font-weight:600;margin:4px;">Brand Questionnaire →</a>
<br><br>
<a href="https://elianatech.com/content-intake" style="display:inline-block;background:#1e293b;color:#fff;padding:14px 32px;border-radius:6px;text-decoration:none;font-weight:600;margin:4px;">Content Intake Form →</a>
</div>
<p>This helps us nail your voice, style, and messaging from day one.</p>
<p>Mia</p>`)
    },
    {
      day: 7,
      subject: '🎨 Website wireframes ready for review!',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Exciting update — your website wireframes are ready!</p>
<p>We've designed a conversion-optimized site for {companyName} based on your brand questionnaire and industry best practices.</p>
<p><strong>What we need from you:</strong></p>
<ul style="padding-left:20px;">
<li>Review the wireframes (link in separate email)</li>
<li>Flag any changes or preferences</li>
<li>Approve to move to development</li>
</ul>
<p>Meanwhile, your CRM and automation systems are being configured in parallel. Everything's on track!</p>
<p>Mia</p>`)
    },
    {
      day: 14,
      subject: '✅ Milestone: Content strategy approved',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>We're at the halfway mark and crushing it:</p>
<ul style="padding-left:20px;">
<li>✅ Website — in development</li>
<li>✅ CRM — configured and data imported</li>
<li>✅ Content strategy — approved and in production</li>
<li>✅ Core automations — lead capture, follow-up, reviews</li>
<li>🔄 Advanced integrations — in progress</li>
</ul>
<p>We're right on schedule for your Day 30 launch. 🚀</p>
<p>Mia</p>`)
    },
    {
      day: 21,
      subject: '👀 Preview: Your systems are going live!',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p>Big week! Here's what's going live for {companyName}:</p>
<ul style="padding-left:20px;">
<li>🌐 Website — final review stage</li>
<li>🤖 AI systems — tested and tuned</li>
<li>📱 All integrations — connected and flowing</li>
<li>📊 Dashboard — populated with real data</li>
</ul>
<p>We'll do a final walkthrough together before the official launch on Day 30.</p>
<p>Mia</p>`)
    },
    {
      day: 30,
      subject: '🚀 LAUNCH DAY — Everything is live!',
      bodyHtml: wrapEmail(`
<p>Hey {name},</p>
<p><strong>{companyName}'s complete digital infrastructure is LIVE!</strong> 🎉🚀</p>
<div style="background:#fef2f2;padding:20px;border-radius:6px;margin:20px 0;text-align:center;">
<p style="font-size:24px;font-weight:700;color:#7f1d1d;margin:0;">You're officially automated.</p>
</div>
<p><strong>What's running:</strong></p>
<ul style="padding-left:20px;">
<li>✅ Conversion-optimized website</li>
<li>✅ AI lead capture & response (24/7)</li>
<li>✅ Smart follow-up sequences</li>
<li>✅ CRM with full pipeline management</li>
<li>✅ Review generation engine</li>
<li>✅ Content strategy executing</li>
<li>✅ Operations dashboard</li>
</ul>
<p><strong>Ongoing Support:</strong></p>
<ul style="padding-left:20px;">
<li>📧 support@elianatech.com — anytime</li>
<li>📞 Bi-weekly strategy calls for 90 days</li>
<li>🔧 Unlimited adjustments for 90 days</li>
<li>📊 Monthly performance reports</li>
</ul>
<p>Congratulations, {name}. {companyName} will never operate the same way again. 🙌</p>
<p>Mia & the ElianaTech Team</p>`)
    }
  ],
  tasks: [
    { day: 0, task: 'Send welcome email', description: 'Welcome + kickoff call booking' },
    { day: 1, task: 'Kickoff call', description: 'Deep-dive on goals, brand, and requirements' },
    { day: 3, task: 'Send brand questionnaire', description: 'Collect brand voice, colors, style preferences' },
    { day: 3, task: 'Send content intake form', description: 'Collect content assets, messaging, and topics' },
    { day: 5, task: 'Begin website wireframes', description: 'Design conversion-optimized layout' },
    { day: 7, task: 'Deliver wireframes for review', description: 'Send wireframes for client approval' },
    { day: 7, task: 'Begin CRM setup', description: 'Configure CRM, import data, set up pipelines' },
    { day: 10, task: 'Begin website development', description: 'Build approved wireframes into live site' },
    { day: 10, task: 'Configure core automations', description: 'Lead capture, follow-up, review systems' },
    { day: 14, task: 'Content strategy approval', description: 'Finalize content plan with client' },
    { day: 14, task: 'Mid-point review call', description: 'Progress check and alignment' },
    { day: 17, task: 'Begin content production', description: 'Create blog posts, social content, email templates' },
    { day: 21, task: 'Systems testing', description: 'End-to-end testing of all integrations' },
    { day: 21, task: 'Pre-launch preview', description: 'Client walkthrough of all systems' },
    { day: 28, task: 'Final QA', description: 'Final quality checks on everything' },
    { day: 30, task: 'Official launch', description: 'Everything goes live + celebration' },
    { day: 30, task: 'Handoff documentation', description: 'Send guides, logins, support info' }
  ]
}

export function getOnboardingSequence(packageType: 'ai-coo' | 'full-infrastructure'): OnboardingSequence {
  return packageType === 'ai-coo' ? aiCooOnboarding : fullInfraOnboarding
}
