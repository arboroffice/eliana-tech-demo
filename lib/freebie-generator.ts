/**
 * Freebie Generator — Rich lead magnet content
 */

export interface QuickWin {
  title: string
  description: string
  timeToImplement: string
  expectedImpact: string
  icon: string
}

export interface IndustryPlaybook {
  industryName: string
  topChallenges: string[]
  aiSolutions: { challenge: string; solution: string; roi: string }[]
  caseStudy: { type: string; before: string; after: string }
  nextSteps: string[]
}

// ─── Quick Wins ───────────────────────────────────────────
export function generateQuickWinsChecklist(formData: any, opportunities?: any[]): QuickWin[] {
  const wins: (QuickWin & { priority: number })[] = []

  if (formData.systematicFollowUp !== 'Yes') {
    wins.push({
      icon: "📩", title: "Automate Follow-Up Sequences",
      description: "Set up a 5-touch email/SMS sequence triggered when a lead comes in. Most leads convert on touch 3-5, but most businesses only follow up once.",
      timeToImplement: "2-3 hours", expectedImpact: "50% increase in lead-to-close rate", priority: 95
    })
  }

  if (formData.askReviewsSystem === 'none' || formData.askReviewsSystem === 'manual') {
    wins.push({
      icon: "⭐", title: "Automate Review Requests",
      description: "Send an automated text/email 2 hours after job completion asking for a Google review. Include a direct link. Happy customers will leave reviews if you make it easy.",
      timeToImplement: "1 hour", expectedImpact: "2× review volume in 30 days", priority: 88
    })
  }

  if (formData.twoWeeksOff === 'No') {
    wins.push({
      icon: "🧠", title: "Delegate Email Triage to AI",
      description: "Use an AI email assistant (e.g., SaneBox or custom GPT) to categorize, draft replies, and flag urgent items. You review instead of process.",
      timeToImplement: "1 hour setup", expectedImpact: "Save 5-10 hrs/week instantly", priority: 85
    })
  }

  if (formData.percentAutomated === 'none' || formData.percentAutomated === '<30%') {
    wins.push({
      icon: "⚡", title: "Connect Your Top 3 Tools",
      description: "Identify the 3 tools you use most (CRM, email, calendar) and connect them with Zapier or Make. Start with: new lead → CRM entry → welcome email → calendar invite.",
      timeToImplement: "2-4 hours", expectedImpact: "Eliminate 80% of copy-paste work", priority: 82
    })
  }

  if (formData.missedCalls !== '0-5') {
    wins.push({
      icon: "📞", title: "Install AI Receptionist",
      description: "Set up a virtual receptionist (e.g., Smith.ai or a custom voice agent) to answer calls 24/7, qualify leads, and book appointments directly into your calendar.",
      timeToImplement: "Same day", expectedImpact: "Capture 100% of inbound leads", priority: 92
    })
  }

  if (formData.repeatCustomers !== '50%+') {
    wins.push({
      icon: "🔄", title: "Launch Win-Back Campaign",
      description: "Export past clients who haven't bought in 90+ days. Send a 3-email sequence with a special offer or check-in. Most businesses recover 10-20% of churned customers.",
      timeToImplement: "2 hours", expectedImpact: "Recover 10-20% churned revenue", priority: 75
    })
  }

  if (formData.conversionRate === '<10%' || formData.conversionRate === '10-20%') {
    wins.push({
      icon: "🎯", title: "Add Lead Scoring",
      description: "Score leads based on source, engagement, and fit. Focus your time on hot leads first — stop treating all leads equally.",
      timeToImplement: "3 hours", expectedImpact: "Close 30% more deals with less effort", priority: 78
    })
  }

  if (formData.revenueTrend !== 'Growing') {
    wins.push({
      icon: "📈", title: "Automated Upsell Sequences",
      description: "After each sale, trigger an automated sequence recommending complementary products/services. Works while you sleep.",
      timeToImplement: "2-3 hours", expectedImpact: "Increase avg deal value 15-25%", priority: 72
    })
  }

  wins.push({
    icon: "📊", title: "Build a Real-Time KPI Dashboard",
    description: "Set up a simple dashboard (Google Sheets + Zapier or Databox) showing leads, conversions, revenue, and pipeline in real time.",
    timeToImplement: "3-4 hours", expectedImpact: "Spot issues before they cost you money", priority: 60
  })

  wins.push({
    icon: "🤖", title: "Add Website Chatbot",
    description: "Install a conversational chatbot on your website to capture leads outside business hours. Pre-qualify with 3-4 questions and book meetings automatically.",
    timeToImplement: "1-2 hours", expectedImpact: "Convert 3× more website visitors", priority: 65
  })

  wins.sort((a, b) => b.priority - a.priority)
  return wins.slice(0, 5).map(({ priority, ...w }) => w)
}

// ─── Industry Playbook ────────────────────────────────────
export function generateIndustryPlaybook(formData: any): IndustryPlaybook {
  const industry = (formData.specificIndustry || formData.industry || '').toLowerCase()

  const playbooks: Record<string, IndustryPlaybook> = {
    service: {
      industryName: "Home Services (HVAC / Plumbing / Electrical)",
      topChallenges: [
        "Missed calls during jobs lose new customers",
        "Inconsistent follow-up on estimates",
        "Manual scheduling creates bottlenecks",
        "Reviews don't reflect actual customer satisfaction",
        "Owner is on every job — can't scale"
      ],
      aiSolutions: [
        { challenge: "Missed calls", solution: "AI voice agent answers 24/7, qualifies leads, books estimates into your calendar", roi: "Capture 30-50 extra leads/month" },
        { challenge: "Estimate follow-up", solution: "Automated 5-touch SMS/email sequence after every estimate sent", roi: "Close 40% more estimates" },
        { challenge: "Scheduling chaos", solution: "AI dispatch optimization assigns techs based on location, skill, and availability", roi: "Fit 2-3 more jobs per day" },
        { challenge: "Low review count", solution: "Automated review request triggered by invoice payment", roi: "2-3× reviews in 60 days" }
      ],
      caseStudy: { type: "HVAC Company", before: "15 missed calls/week, 2.8 Google stars, owner on every call", after: "Zero missed calls, 4.7 stars, 40% revenue increase in 90 days" },
      nextSteps: ["Audit your current call handling", "Set up AI receptionist", "Build estimate follow-up sequence", "Automate review requests", "Create technician dispatch system"]
    },
    agency: {
      industryName: "Marketing / Creative Agency",
      topChallenges: [
        "Client onboarding is manual and slow",
        "Reporting takes hours every month",
        "Scope creep erodes margins",
        "Lead gen for the agency itself is neglected",
        "Knowledge lives in people's heads, not systems"
      ],
      aiSolutions: [
        { challenge: "Slow onboarding", solution: "AI-powered intake forms + automated project setup in PM tools", roi: "Save 5 hrs per new client" },
        { challenge: "Manual reporting", solution: "Auto-generated client reports pulling from analytics APIs", roi: "Save 15-20 hrs/month" },
        { challenge: "Scope creep", solution: "AI contract analyzer flags out-of-scope requests automatically", roi: "Recover 10-15% lost revenue" },
        { challenge: "Neglected lead gen", solution: "Automated outbound + AI-written case studies from project data", roi: "3-5 new leads/week on autopilot" }
      ],
      caseStudy: { type: "Digital Agency", before: "20 hrs/month on reports, inconsistent pipeline, 25% margin", after: "2 hrs/month reports, steady 8 leads/week, 42% margin" },
      nextSteps: ["Map your client journey end-to-end", "Automate reporting first (biggest time save)", "Build intake automation", "Set up outbound lead system", "Create AI knowledge base"]
    },
    healthcare: {
      industryName: "Healthcare / Medical Practice",
      topChallenges: [
        "Patient no-shows waste revenue",
        "Insurance verification is manual",
        "After-hours calls go to voicemail",
        "Patient intake paperwork is slow",
        "Recall/reactivation of dormant patients"
      ],
      aiSolutions: [
        { challenge: "No-shows", solution: "Multi-channel automated reminders (SMS + email + call) with easy reschedule link", roi: "Reduce no-shows by 50-70%" },
        { challenge: "Insurance verification", solution: "AI-powered eligibility checks before appointments", roi: "Save 2 hrs/day of staff time" },
        { challenge: "After-hours calls", solution: "AI voice agent handles scheduling, FAQs, and triage 24/7", roi: "Capture 100% of patient inquiries" },
        { challenge: "Slow intake", solution: "Digital intake forms with AI pre-fill from insurance data", roi: "Save 15 min per patient visit" }
      ],
      caseStudy: { type: "Dental Practice", before: "22% no-show rate, 45 min avg intake, 30% recall rate", after: "8% no-shows, 10 min intake, 65% recall rate" },
      nextSteps: ["Implement automated appointment reminders", "Digitize patient intake", "Set up AI phone handling", "Build recall campaign", "Automate insurance verification"]
    },
    retail: {
      industryName: "Retail / E-Commerce",
      topChallenges: [
        "Cart abandonment loses 70% of sales",
        "Customer support volume overwhelms team",
        "Inventory management is reactive",
        "Email marketing is generic, not personalized",
        "Returns processing is manual"
      ],
      aiSolutions: [
        { challenge: "Cart abandonment", solution: "AI-triggered recovery sequences with personalized incentives based on browsing behavior", roi: "Recover 15-25% of abandoned carts" },
        { challenge: "Support volume", solution: "AI chatbot handles 80% of common questions, escalates complex issues", roi: "Reduce support tickets by 60%" },
        { challenge: "Reactive inventory", solution: "Predictive demand forecasting using sales data + trends", roi: "Reduce stockouts by 40%" },
        { challenge: "Generic emails", solution: "AI segmentation + personalized product recommendations", roi: "2-3× email revenue" }
      ],
      caseStudy: { type: "E-Commerce Store", before: "72% cart abandonment, 200 support tickets/day, 1.2% email CTR", after: "51% abandonment, 60 tickets/day, 4.8% email CTR" },
      nextSteps: ["Set up cart abandonment sequence", "Deploy AI chatbot", "Implement email personalization", "Build demand forecasting model", "Automate returns workflow"]
    },
    realestate: {
      industryName: "Real Estate",
      topChallenges: [
        "Lead response time is too slow",
        "Nurturing hundreds of leads manually",
        "Showing scheduling is a time sink",
        "Market analysis takes hours",
        "Transaction coordination is chaotic"
      ],
      aiSolutions: [
        { challenge: "Slow response", solution: "AI instant response to new leads via text within 60 seconds — 24/7", roi: "10× more lead conversions (speed-to-lead)" },
        { challenge: "Manual nurturing", solution: "AI drip campaigns personalized by property interest, timeline, and budget", roi: "Convert 3× more long-term leads" },
        { challenge: "Showing scheduling", solution: "AI scheduling assistant handles availability, confirmations, and reminders", roi: "Save 8-10 hrs/week" },
        { challenge: "Market analysis", solution: "AI-generated CMA reports and market updates for clients", roi: "Save 3 hrs per listing" }
      ],
      caseStudy: { type: "Real Estate Team", before: "45 min avg lead response, 2% conversion, 60 hrs/week", after: "58 sec response, 8% conversion, 35 hrs/week" },
      nextSteps: ["Set up instant lead response", "Build nurture sequences by buyer stage", "Automate showing scheduling", "Create AI market report templates", "Implement transaction management system"]
    },
    saas: {
      industryName: "SaaS / Software",
      topChallenges: [
        "Trial-to-paid conversion is low",
        "Churn creeps up without early warning",
        "Support docs don't answer real questions",
        "Onboarding drop-off is high",
        "Feature requests are unstructured"
      ],
      aiSolutions: [
        { challenge: "Low trial conversion", solution: "AI-driven onboarding sequences triggered by in-app behavior", roi: "Increase trial conversion 30-50%" },
        { challenge: "Churn risk", solution: "Predictive churn model alerts CS team before cancellation", roi: "Reduce churn 20-30%" },
        { challenge: "Weak support docs", solution: "AI knowledge base that understands natural language questions", roi: "Deflect 60% of support tickets" },
        { challenge: "Onboarding drop-off", solution: "AI copilot guides users to 'aha moment' with contextual nudges", roi: "2× activation rate" }
      ],
      caseStudy: { type: "B2B SaaS", before: "12% trial conversion, 8% monthly churn, 200 tickets/day", after: "28% trial conversion, 4% churn, 75 tickets/day" },
      nextSteps: ["Map user activation milestones", "Build behavior-triggered onboarding", "Deploy AI support chatbot", "Implement churn prediction", "Create feature request pipeline"]
    }
  }

  // Match industry
  const key = Object.keys(playbooks).find(k => industry.includes(k)) ||
    (industry.includes('hvac') || industry.includes('plumb') || industry.includes('electric') || industry.includes('roofing') || industry.includes('cleaning') ? 'service' : null) ||
    (industry.includes('market') || industry.includes('design') || industry.includes('creative') ? 'agency' : null) ||
    (industry.includes('doctor') || industry.includes('dental') || industry.includes('medical') || industry.includes('health') ? 'healthcare' : null) ||
    (industry.includes('shop') || industry.includes('store') || industry.includes('ecomm') ? 'retail' : null) ||
    (industry.includes('real') || industry.includes('property') || industry.includes('mortgage') ? 'realestate' : null) ||
    (industry.includes('software') || industry.includes('app') || industry.includes('tech') ? 'saas' : null)

  if (key && playbooks[key]) return playbooks[key]

  // Generic fallback
  return {
    industryName: formData.specificIndustry || "Your Industry",
    topChallenges: [
      "Missed leads and slow response times",
      "Manual processes consuming too many hours",
      "Inconsistent follow-up and nurturing",
      "No systematic review/referral generation",
      "Owner dependency — business stops when you do"
    ],
    aiSolutions: [
      { challenge: "Missed leads", solution: "AI receptionist + instant response system", roi: "Capture 30-50% more leads" },
      { challenge: "Manual processes", solution: "Workflow automation connecting your core tools", roi: "Save 15-20 hrs/week" },
      { challenge: "Inconsistent follow-up", solution: "Automated multi-channel nurture sequences", roi: "50% more conversions" },
      { challenge: "No review system", solution: "Automated post-service review requests", roi: "2× reviews in 30 days" }
    ],
    caseStudy: { type: "Small Business", before: "Owner working 60 hrs/week, inconsistent revenue, manual everything", after: "35 hrs/week, 40% revenue increase, 80% automated" },
    nextSteps: ["Audit your current lead flow", "Set up AI call handling", "Build automated follow-up", "Automate review requests", "Create owner delegation system"]
  }
}

// ─── Main export (backwards compat) ───────────────────────
export async function generateFreebies(formData: any, auditScore: number, opportunities: any[]) {
  return {
    quickWins: generateQuickWinsChecklist(formData, opportunities),
    industryPlaybook: generateIndustryPlaybook(formData),
    reportUrl: '/audit/report'
  }
}
