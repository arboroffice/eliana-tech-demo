/**
 * Freebie Generator — Rich lead magnet content (Info & SaaS)
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

  if (formData.onboardingAutomated !== 'Yes') {
    wins.push({
      icon: "🚀", title: "Automate Onboarding Sequences",
      description: "Create a 5-email welcome sequence triggered on purchase/signup. Guide new users to their first win within 48 hours. This is the #1 way to reduce early churn.",
      timeToImplement: "2-3 hours", expectedImpact: "30%+ reduction in early churn", priority: 95
    })
  }

  if (formData.churnRate === '20+' || formData.churnRate === '10-20') {
    wins.push({
      icon: "🔄", title: "Launch a Win-Back Campaign",
      description: "Export churned users from the last 6 months. Send a 3-email re-engagement sequence: 'We miss you' → new features/value → special offer to return.",
      timeToImplement: "2-3 hours", expectedImpact: "Recover 10-20% of churned revenue", priority: 92
    })
  }

  if (formData.twoWeeksOff === 'No') {
    wins.push({
      icon: "🧠", title: "Delegate Email & Support to AI",
      description: "Use an AI assistant to categorize support requests, draft replies, and flag urgent items. You review instead of process every message.",
      timeToImplement: "1 hour setup", expectedImpact: "Save 5-10 hrs/week instantly", priority: 85
    })
  }

  if (formData.percentAutomated === 'none' || formData.percentAutomated === 'under-30') {
    wins.push({
      icon: "⚡", title: "Connect Your Top 3 Tools",
      description: "Identify your 3 most-used tools (Stripe, email platform, community) and connect them with Zapier or Make. Start with: new purchase → welcome email → community access → CRM update.",
      timeToImplement: "2-4 hours", expectedImpact: "Eliminate 80% of manual workflows", priority: 82
    })
  }

  if (formData.supportHoursPerWeek === '10+' || formData.supportHoursPerWeek === '5-10') {
    wins.push({
      icon: "💬", title: "Deploy AI Support Chatbot",
      description: "Gather your top 50 FAQs. Set up a chatbot (Intercom, Crisp, or Tidio) trained on your content. Handle 80% of questions automatically.",
      timeToImplement: "2-3 hours", expectedImpact: "Reduce support load by 60-80%", priority: 88
    })
  }

  if (formData.contentCreationHours === '20+' || formData.contentCreationHours === '10-20') {
    wins.push({
      icon: "📝", title: "AI Content Repurposing Pipeline",
      description: "Take your best long-form content and use AI to extract 5 social posts, 3 email snippets, and 1 thread. Schedule with Buffer or Hypefury.",
      timeToImplement: "1-2 hours", expectedImpact: "Save 10-15 hrs/week on content", priority: 78
    })
  }

  if (formData.conversionRate === 'under-1' || formData.conversionRate === '1-3') {
    wins.push({
      icon: "🎯", title: "Optimize Your Sales Funnel",
      description: "Map every step of your funnel. Identify the biggest drop-off. A/B test headlines and CTAs. Add urgency and social proof to your offer page.",
      timeToImplement: "3 hours", expectedImpact: "2-3x conversion rate over 30 days", priority: 80
    })
  }

  if (formData.revenueTrend !== 'Growing') {
    wins.push({
      icon: "📈", title: "Automated Upsell Sequences",
      description: "After each purchase, trigger an automated sequence recommending complementary products or upgrades. Works while you sleep.",
      timeToImplement: "2-3 hours", expectedImpact: "Increase LTV by 15-25%", priority: 72
    })
  }

  wins.push({
    icon: "📊", title: "Build a Real-Time KPI Dashboard",
    description: "Set up a dashboard showing MRR, churn, new signups, support tickets, and engagement metrics. Spot issues before they become crises.",
    timeToImplement: "3-4 hours", expectedImpact: "Data-driven decisions instead of guessing", priority: 60
  })

  wins.push({
    icon: "📧", title: "Segment Your Email List",
    description: "Tag subscribers by behavior: purchased, engaged, inactive. Send targeted campaigns to each segment. Clean your list quarterly.",
    timeToImplement: "1-2 hours", expectedImpact: "30-50% boost in email engagement", priority: 65
  })

  wins.sort((a, b) => b.priority - a.priority)
  return wins.slice(0, 5).map(({ priority, ...w }) => w)
}

// ─── Industry Playbook ────────────────────────────────────
export function generateIndustryPlaybook(formData: any): IndustryPlaybook {
  const businessType = (formData.businessType || '').toLowerCase()

  const playbooks: Record<string, IndustryPlaybook> = {
    'course-creator': {
      industryName: "Course Creator / Online Education",
      topChallenges: [
        "Low course completion rates",
        "Support overwhelm from students",
        "Content creation hamster wheel",
        "Inconsistent launch results",
        "Can't scale without burning out"
      ],
      aiSolutions: [
        { challenge: "Low completion", solution: "AI-driven drip content + progress nudges + personalized check-ins", roi: "2x completion rates" },
        { challenge: "Support overwhelm", solution: "AI chatbot trained on course material handles 80% of student questions", roi: "60-80% fewer support tickets" },
        { challenge: "Content hamster wheel", solution: "AI repurposing pipeline: 1 long-form piece → 30+ micro-content assets", roi: "10-15 hrs/week saved" },
        { challenge: "Inconsistent launches", solution: "Automated evergreen funnel with behavior-triggered email sequences", roi: "Consistent revenue vs. feast/famine" }
      ],
      caseStudy: { type: "Course Creator", before: "12% completion, 40 support tickets/day, $50K launches", after: "38% completion, 8 tickets/day, $120K evergreen/month" },
      nextSteps: ["Automate onboarding sequence", "Deploy AI support bot", "Build content repurposing pipeline", "Create evergreen funnel", "Set up churn prevention alerts"]
    },
    coaching: {
      industryName: "Coaching / Consulting",
      topChallenges: [
        "Revenue tied to personal hours",
        "Client onboarding is inconsistent",
        "No scalable delivery system",
        "Marketing takes time away from clients",
        "Difficult to systematize expertise"
      ],
      aiSolutions: [
        { challenge: "Hours-for-dollars trap", solution: "AI-assisted group programs + async coaching tools", roi: "3-5x revenue per hour of work" },
        { challenge: "Inconsistent onboarding", solution: "Automated intake → assessment → resource delivery → kickoff scheduling", roi: "Save 3-5 hrs per new client" },
        { challenge: "No scalable delivery", solution: "AI coaching companion between sessions for accountability and support", roi: "Higher retention + less 1:1 time needed" },
        { challenge: "Marketing time sink", solution: "AI content engine turns client wins into case studies and social proof", roi: "Consistent lead flow on autopilot" }
      ],
      caseStudy: { type: "Business Coach", before: "15 1:1 clients max, $200K/year, 50 hrs/week", after: "80 group members + 5 premium 1:1, $600K/year, 25 hrs/week" },
      nextSteps: ["Document your coaching framework", "Build automated onboarding", "Create group program structure", "Set up AI content pipeline", "Implement client success tracking"]
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
        { challenge: "Weak support", solution: "AI knowledge base that understands natural language questions", roi: "Deflect 60% of support tickets" },
        { challenge: "Onboarding drop-off", solution: "AI copilot guides users to 'aha moment' with contextual nudges", roi: "2x activation rate" }
      ],
      caseStudy: { type: "B2B SaaS", before: "12% trial conversion, 8% monthly churn, 200 tickets/day", after: "28% trial conversion, 4% churn, 75 tickets/day" },
      nextSteps: ["Map user activation milestones", "Build behavior-triggered onboarding", "Deploy AI support chatbot", "Implement churn prediction", "Create feature request pipeline"]
    },
    membership: {
      industryName: "Membership / Community",
      topChallenges: [
        "Member engagement drops after month 1",
        "Content demand is constant",
        "Community moderation takes too much time",
        "Hard to demonstrate ongoing value",
        "Churn spikes after 3-6 months"
      ],
      aiSolutions: [
        { challenge: "Engagement drop-off", solution: "AI-powered personalized content recommendations + activity nudges", roi: "2x engagement after month 1" },
        { challenge: "Content demand", solution: "AI content calendar + repurposing pipeline + member-generated content curation", roi: "50% less content creation time" },
        { challenge: "Moderation burden", solution: "AI community moderator handles FAQs, flags issues, sparks discussions", roi: "Save 10+ hrs/week" },
        { challenge: "Churn at 3-6 months", solution: "Automated 'value milestones' that celebrate member progress", roi: "30-40% reduction in mid-term churn" }
      ],
      caseStudy: { type: "Online Community", before: "45% annual churn, owner spent 20 hrs/week on community", after: "18% churn, 5 hrs/week, 3x membership revenue" },
      nextSteps: ["Set up engagement tracking", "Build automated welcome journey", "Deploy AI moderator", "Create value milestone system", "Implement churn prevention alerts"]
    },
    'digital-products': {
      industryName: "Digital Products / Templates / Downloads",
      topChallenges: [
        "Revenue is launch-dependent",
        "Support for product questions",
        "No systematic upsell path",
        "Marketing requires constant effort",
        "Product updates are manual"
      ],
      aiSolutions: [
        { challenge: "Launch dependency", solution: "Evergreen funnel with AI-optimized email sequences and retargeting", roi: "Consistent daily revenue vs. launch spikes" },
        { challenge: "Product support", solution: "AI assistant answers product questions and provides tutorials", roi: "80% fewer support emails" },
        { challenge: "No upsell path", solution: "AI-driven product recommendations based on purchase history", roi: "25-40% increase in LTV" },
        { challenge: "Marketing effort", solution: "AI content engine creates social proof, testimonials, and use cases automatically", roi: "Consistent lead flow" }
      ],
      caseStudy: { type: "Template Business", before: "$8K launch spikes, $2K between launches, 50 support emails/week", after: "$15K/month evergreen, 10 support emails/week, 2x product line" },
      nextSteps: ["Build evergreen sales funnel", "Set up AI support for products", "Create automated upsell sequences", "Implement content repurposing", "Build customer feedback loop"]
    },
    'home-services': {
      industryName: "Home Services (HVAC, Plumbing, Electrical)",
      topChallenges: [
        "Missed calls and lost leads",
        "Scheduling and dispatch chaos",
        "No follow-up after service visits",
        "Seasonal revenue swings",
        "Technician utilization gaps"
      ],
      aiSolutions: [
        { challenge: "Missed calls", solution: "AI answering service captures every call 24/7, books appointments, and qualifies leads automatically", roi: "Recover 30-40% of lost leads" },
        { challenge: "Scheduling chaos", solution: "AI-powered dispatch optimizes routes and schedules based on tech skills, location, and urgency", roi: "20-30% more jobs per day" },
        { challenge: "No follow-up", solution: "Automated post-service review requests, maintenance reminders, and seasonal check-in campaigns", roi: "35% increase in repeat business" },
        { challenge: "Seasonal swings", solution: "AI-driven marketing campaigns that ramp up before slow seasons with maintenance offers and service plans", roi: "Stabilize revenue year-round" }
      ],
      caseStudy: { type: "HVAC Company", before: "Missing 40% of calls, no follow-up system, feast-or-famine revenue", after: "98% call capture, 3x Google reviews, 45% repeat customer rate" },
      nextSteps: ["Set up AI call answering", "Automate appointment booking", "Build post-service follow-up sequence", "Create seasonal marketing campaigns", "Implement maintenance plan upsells"]
    },
    healthcare: {
      industryName: "Healthcare / Dental / Wellness",
      topChallenges: [
        "No-shows and last-minute cancellations",
        "Patient intake is slow and manual",
        "Staff overwhelmed with phone calls",
        "Low patient retention and reactivation",
        "Compliance-heavy communication"
      ],
      aiSolutions: [
        { challenge: "No-shows", solution: "AI appointment reminders via text, email, and voice with smart rescheduling for cancellations", roi: "Reduce no-shows by 50-70%" },
        { challenge: "Manual intake", solution: "Digital intake forms with AI pre-fill, insurance verification, and automated record creation", roi: "Save 15-20 min per patient" },
        { challenge: "Phone overwhelm", solution: "AI receptionist handles scheduling, insurance questions, and routing 24/7", roi: "60-80% fewer front desk calls" },
        { challenge: "Low retention", solution: "Automated recall campaigns for overdue patients with personalized health reminders", roi: "30-40% reactivation rate" }
      ],
      caseStudy: { type: "Dental Practice", before: "22% no-show rate, 3 front desk staff overwhelmed, losing patients to competitors", after: "6% no-show rate, 1 front desk + AI, 40% patient reactivation" },
      nextSteps: ["Deploy AI appointment reminders", "Digitize patient intake", "Set up AI phone answering", "Build patient recall campaigns", "Automate review collection"]
    },
    'professional-services': {
      industryName: "Professional Services (Law, Accounting, Finance)",
      topChallenges: [
        "Slow client intake and onboarding",
        "Billable hours lost to admin work",
        "Inconsistent lead follow-up",
        "Document preparation is manual",
        "Client communication gaps"
      ],
      aiSolutions: [
        { challenge: "Slow intake", solution: "AI-powered client intake forms with conflict checks, document collection, and automated engagement letters", roi: "Cut intake time by 70%" },
        { challenge: "Admin overhead", solution: "AI handles scheduling, billing reminders, document drafting, and routine correspondence", roi: "Recover 10-15 billable hrs/week" },
        { challenge: "Lead follow-up", solution: "Automated nurture sequences for consultations with case-type-specific content", roi: "2x consultation-to-client conversion" },
        { challenge: "Manual documents", solution: "AI document assembly from templates with smart field population and review workflows", roi: "80% faster document prep" }
      ],
      caseStudy: { type: "Law Firm", before: "45-min intake per client, losing leads to slow follow-up, 15 hrs/week on admin", after: "10-min intake, same-day follow-up, 3 hrs/week admin" },
      nextSteps: ["Automate client intake process", "Deploy AI scheduling assistant", "Build lead nurture sequences", "Set up document automation", "Implement billing automation"]
    },
    construction: {
      industryName: "Construction / Trades",
      topChallenges: [
        "Estimating and bidding takes too long",
        "Project communication is scattered",
        "Subcontractor coordination is manual",
        "Cash flow and invoicing gaps",
        "Lead follow-up falls through cracks"
      ],
      aiSolutions: [
        { challenge: "Slow estimates", solution: "AI-assisted estimating from plans and specs with automated bid generation", roi: "3x faster estimates, win more bids" },
        { challenge: "Scattered communication", solution: "Centralized AI project hub with automated updates to clients, subs, and inspectors", roi: "Eliminate 90% of status call/texts" },
        { challenge: "Sub coordination", solution: "Automated scheduling, reminders, and document collection for subcontractors", roi: "Reduce project delays by 40%" },
        { challenge: "Cash flow gaps", solution: "Automated progress invoicing, payment reminders, and lien waiver collection", roi: "Get paid 30-50% faster" }
      ],
      caseStudy: { type: "General Contractor", before: "2 days per estimate, constant phone calls, late invoicing", after: "4-hour estimates, automated updates, invoices sent same day" },
      nextSteps: ["Set up AI estimating tools", "Build automated client updates", "Automate subcontractor coordination", "Implement progress invoicing", "Deploy lead capture system"]
    },
    'restaurant-hospitality': {
      industryName: "Restaurant / Hospitality",
      topChallenges: [
        "Reservation no-shows and empty tables",
        "Staff scheduling and turnover",
        "Online reputation management",
        "Slow response to online orders/inquiries",
        "Customer retention and loyalty"
      ],
      aiSolutions: [
        { challenge: "No-shows", solution: "AI reservation confirmations with smart waitlist management and deposit collection", roi: "Reduce no-shows by 60%" },
        { challenge: "Staff scheduling", solution: "AI-optimized scheduling based on historical traffic, events, and staff preferences", roi: "Save 5+ hrs/week on scheduling" },
        { challenge: "Reputation", solution: "Automated review requests after visits + AI-drafted responses to all reviews", roi: "2x review volume, higher ratings" },
        { challenge: "Slow response", solution: "AI handles online orders, catering inquiries, and event bookings 24/7", roi: "Capture 30% more orders" }
      ],
      caseStudy: { type: "Restaurant Group", before: "25% no-show rate, 3-star average, manual scheduling chaos", after: "8% no-show rate, 4.6-star average, automated scheduling" },
      nextSteps: ["Deploy AI reservation management", "Automate review collection", "Set up AI order handling", "Build customer loyalty automation", "Implement staff scheduling AI"]
    },
    'real-estate': {
      industryName: "Real Estate",
      topChallenges: [
        "Lead response time too slow",
        "Nurturing hundreds of contacts manually",
        "Transaction coordination is chaotic",
        "Marketing content takes too much time",
        "No systematic follow-up after closing"
      ],
      aiSolutions: [
        { challenge: "Slow response", solution: "AI instant lead response via text/email with qualification questions and showing scheduling", roi: "5x more leads converted (speed-to-lead)" },
        { challenge: "Manual nurturing", solution: "AI drip campaigns segmented by buyer stage, price range, and preferences", roi: "3x engagement on nurture campaigns" },
        { challenge: "Transaction chaos", solution: "Automated transaction timelines with task reminders for all parties", roi: "Zero missed deadlines" },
        { challenge: "Content time", solution: "AI generates listing descriptions, market updates, and social content from MLS data", roi: "Save 8-10 hrs/week" }
      ],
      caseStudy: { type: "Real Estate Team", before: "2-hour average lead response, manual follow-up, 2% conversion", after: "90-second response, automated nurture, 8% conversion" },
      nextSteps: ["Set up instant lead response AI", "Build segmented nurture campaigns", "Automate transaction coordination", "Deploy AI content generation", "Create post-closing follow-up"]
    },
    manufacturing: {
      industryName: "Manufacturing / Logistics",
      topChallenges: [
        "Quoting and order processing is slow",
        "Inventory and supply chain visibility gaps",
        "Quality control is reactive",
        "Customer communication on order status",
        "Workforce scheduling and safety tracking"
      ],
      aiSolutions: [
        { challenge: "Slow quoting", solution: "AI-powered RFQ processing with automated quote generation from specs and historical pricing", roi: "80% faster quotes, win more contracts" },
        { challenge: "Inventory gaps", solution: "AI demand forecasting and automated reorder triggers based on production schedules", roi: "30% reduction in stockouts" },
        { challenge: "Reactive QC", solution: "AI-powered quality prediction from production data to catch defects before they happen", roi: "50% fewer defect escapes" },
        { challenge: "Order status", solution: "Automated order tracking updates and proactive delay notifications to customers", roi: "70% fewer status inquiry calls" }
      ],
      caseStudy: { type: "Manufacturer", before: "3-day quote turnaround, frequent stockouts, constant status calls", after: "Same-day quotes, 95% inventory accuracy, automated updates" },
      nextSteps: ["Automate quote generation", "Set up inventory forecasting", "Build automated order updates", "Deploy quality monitoring AI", "Implement production scheduling"]
    },
    agency: {
      industryName: "Agency (Marketing, Creative, Dev)",
      topChallenges: [
        "Client reporting takes too many hours",
        "Project scope creep and communication gaps",
        "Lead pipeline is inconsistent",
        "Talent utilization and capacity planning",
        "Scaling without proportional headcount"
      ],
      aiSolutions: [
        { challenge: "Reporting overhead", solution: "AI-generated client reports pulling data from all platforms with insights and recommendations", roi: "Save 10-20 hrs/month on reporting" },
        { challenge: "Scope creep", solution: "Automated project tracking with AI-flagged scope changes, budget alerts, and client update summaries", roi: "Protect margins on every project" },
        { challenge: "Inconsistent pipeline", solution: "AI-powered outreach, case study generation, and automated proposal creation", roi: "2x qualified leads per month" },
        { challenge: "Capacity planning", solution: "AI resource allocation based on skills, availability, and project timelines", roi: "25% better utilization rates" }
      ],
      caseStudy: { type: "Digital Agency", before: "20 hrs/month on reports, constant scope creep, unpredictable pipeline", after: "2 hrs/month on reports, automated scope tracking, consistent lead flow" },
      nextSteps: ["Automate client reporting", "Set up project tracking alerts", "Build AI proposal system", "Implement capacity planning", "Create automated case studies"]
    },
    ecommerce: {
      industryName: "E-commerce / Retail",
      topChallenges: [
        "Cart abandonment rate is high",
        "Customer support volume during peak seasons",
        "Product descriptions and content at scale",
        "Inventory management and forecasting",
        "Low repeat purchase rates"
      ],
      aiSolutions: [
        { challenge: "Cart abandonment", solution: "AI-powered abandonment sequences with personalized incentives based on cart value and customer history", roi: "Recover 15-25% of abandoned carts" },
        { challenge: "Support volume", solution: "AI chatbot handles order tracking, returns, sizing questions, and product recommendations", roi: "Handle 80% of inquiries automatically" },
        { challenge: "Content at scale", solution: "AI generates product descriptions, collection pages, and email campaigns from product data", roi: "10x faster content production" },
        { challenge: "Low repeat rates", solution: "AI-driven post-purchase sequences with personalized recommendations and replenishment reminders", roi: "35% increase in repeat purchases" }
      ],
      caseStudy: { type: "E-commerce Brand", before: "72% cart abandonment, 200+ daily support tickets, 15% repeat rate", after: "55% abandonment, 40 daily tickets, 38% repeat rate" },
      nextSteps: ["Deploy cart abandonment automation", "Set up AI customer support", "Build product content pipeline", "Implement post-purchase sequences", "Create loyalty automation"]
    }
  }

  // Match business type
  const key = Object.keys(playbooks).find(k => businessType.includes(k)) || null

  if (key && playbooks[key]) return playbooks[key]

  // Generic fallback for info/SaaS
  return {
    industryName: formData.businessType || "Info / SaaS Business",
    topChallenges: [
      "Manual onboarding losing early customers",
      "Support overwhelm eating into growth time",
      "Content creation taking too many hours",
      "Churn eroding revenue gains",
      "Owner is the bottleneck — can't scale"
    ],
    aiSolutions: [
      { challenge: "Manual onboarding", solution: "Automated welcome sequences with personalized activation paths", roi: "3x faster activation, 30% less early churn" },
      { challenge: "Support overwhelm", solution: "AI chatbot trained on your content handles 80% of questions", roi: "60-80% fewer support tickets" },
      { challenge: "Content hamster wheel", solution: "AI repurposing pipeline: 1 piece → 30+ assets in your voice", roi: "10-15 hrs/week saved" },
      { challenge: "Revenue churn", solution: "Predictive health scoring + automated re-engagement", roi: "30-50% reduction in churn" }
    ],
    caseStudy: { type: "Info/SaaS Business", before: "Owner working 50+ hrs/week, high churn, manual everything", after: "25 hrs/week, 50% less churn, 80% automated operations" },
    nextSteps: ["Automate onboarding flow", "Deploy AI support chatbot", "Build content repurposing pipeline", "Set up churn prediction alerts", "Create owner delegation system"]
  }
}

// ─── Main export ─────────────────────────────────────────
export async function generateFreebies(formData: any, auditScore: number, opportunities: any[]) {
  return {
    quickWins: generateQuickWinsChecklist(formData, opportunities),
    industryPlaybook: generateIndustryPlaybook(formData),
    reportUrl: '/audit/report'
  }
}
