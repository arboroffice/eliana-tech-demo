/**
 * Instant Mini-Wins Generator (Info & SaaS)
 * Provides immediate, actionable value after audit completion
 */

export interface MiniWin {
    title: string
    description: string
    type: 'chatgpt_prompt' | 'email_template' | 'sms_script' | 'checklist' | 'calculator'
    content: string
    copyable: boolean
    icon: string
}

export function generateMiniWins(formData: any): MiniWin[] {
    const wins: MiniWin[] = []
    const { companyName, businessType } = formData

    // 1. System Prompt Engineering
    wins.push(...generateSystemPrompts(formData))

    // 2. Onboarding automation (if not automated)
    if (formData.onboardingAutomated !== 'Yes') {
        wins.push(generateOnboardingBlueprint(formData))
    }

    // 3. Churn prevention (if high churn)
    if (formData.churnRate === '20+' || formData.churnRate === '10-20') {
        wins.push(generateChurnPreventionProtocol(formData))
    }

    // 4. Support automation (if high support hours)
    if (formData.supportHoursPerWeek === '10+' || formData.supportHoursPerWeek === '5-10') {
        wins.push(generateSupportAutomationBlueprint(formData))
    }

    // 5. Revenue model
    wins.push(generateRevenueModel(formData))

    // 6. Business-specific agent architecture
    wins.push(generateBusinessAgentArchitecture(formData))

    return wins
}

function generateSystemPrompts(formData: any): MiniWin[] {
    const { companyName, businessType } = formData

    return [
        {
            title: 'System Prompt: AI Support Agent',
            description: 'The core instruction set for your AI support bot to handle customer questions like a senior team member.',
            type: 'chatgpt_prompt',
            copyable: true,
            icon: '',
            content: `**SYSTEM MESSAGE (v1.0)**
Role: Senior Customer Success Specialist for ${companyName}.
Objective: Answer customer questions, guide users to success, and escalate complex issues.

**CORE BEHAVIORS:**
1. **Empathy First:** Acknowledge the user's frustration before solving (e.g., "I understand that can be frustrating...").
2. **Guided Problem Solving:** Ask clarifying questions before providing solutions. Never assume.
3. **Escalation Rules:**
   - If User mentions billing/refund -> Route to billing team.
   - If User is clearly frustrated (3+ messages) -> Offer human support.
   - If question requires account access -> Escalate with context summary.

**KNOWLEDGE BASE ACCESS:**
- Retrieval Tool: active
- Index: ${companyName}_help_docs_v2

**CONSTRAINTS:**
- Never make promises about features we don't have.
- If unsure, say "Let me connect you with our team" and escalate.
- Keep responses concise and actionable.

**OUTPUT FORMAT:**
JSON { "response": "text", "sentiment": "0-1", "intent": "support|billing|feature_request|bug_report" }`
        },
        {
            title: 'System Prompt: Content Repurposing Engine',
            description: 'Automate your content pipeline with this brand-aligned persona.',
            type: 'chatgpt_prompt',
            copyable: true,
            icon: '',
            content: `**SYSTEM MESSAGE (Content-Bot)**
Role: Lead Content Strategist for ${companyName}.
Audience: ${businessType || 'Info/SaaS'} buyers and prospects.
Tone: Authoritative, Insightful, yet Accessible (Reading Level: Grade 8).

**TASK:**
Transform one piece of long-form content into a week's worth of multi-platform assets.

**FRAMEWORK (1-to-30 Repurposing):**
From 1 podcast/video/blog post, create:
- 5 Twitter/X threads (contrarian takes, how-to, story, data-backed, myth-busting)
- 5 LinkedIn posts (lesson, framework, before/after, question, behind-the-scenes)
- 3 email newsletter snippets
- 5 short-form video scripts (for Reels/TikTok/Shorts)
- 2 carousel slide decks
- 10 quote graphics with key insights

**STYLE GUIDE:**
- Match the founder's voice and tone from existing content.
- No generic motivational fluff.
- Every piece should have a clear takeaway or CTA.
- Focus on "How-to" and transformation stories.`
        }
    ]
}

function generateOnboardingBlueprint(formData: any): MiniWin {
    const { companyName } = formData

    return {
        title: 'Automated Onboarding Blueprint',
        description: 'Complete logic flow for welcoming and activating new customers automatically.',
        type: 'checklist',
        copyable: true,
        icon: '',
        content: `**ONBOARDING AUTOMATION BLUEPRINT**

1. **Trigger:** New purchase/signup event (Stripe webhook or platform event).

2. **Email 1 (Immediate):** Welcome + Access
   - Subject: "You're in! Here's how to get started"
   - Content: Login details, first step, quick-start video link
   - Action: Tag in CRM as "New Customer"

3. **Email 2 (Day 1):** Quick Win
   - Subject: "Do this first (takes 5 minutes)"
   - Content: Guide to their first small win with your product
   - Logic: If they completed step 1, send advanced version

4. **Email 3 (Day 3):** Community + Support
   - Subject: "You're not alone"
   - Content: Community invitation, FAQ link, how to get help
   - Action: If no login activity, trigger "at-risk" alert

5. **Email 4 (Day 7):** Social Proof
   - Subject: "How [Customer] got [Result] in their first week"
   - Content: Case study matching their use case
   - Logic: Segment by product/plan purchased

6. **Email 5 (Day 14):** Check-in + Upsell
   - Subject: "How's it going? (Quick question)"
   - Content: NPS survey + recommendation for next step/upgrade

**TECHNICAL STACK:**
- Email: ConvertKit/ActiveCampaign (behavior triggers)
- Logic: Zapier/Make for cross-platform automation
- Tracking: Tag-based segmentation for personalized paths`
    }
}

function generateChurnPreventionProtocol(formData: any): MiniWin {
    const { companyName } = formData

    return {
        title: 'Churn Prevention Protocol',
        description: 'Automated early-warning system to catch and save at-risk customers.',
        type: 'checklist',
        copyable: true,
        icon: '',
        content: `**CHURN PREVENTION STATE MACHINE**

**Health Score Signals (monitor continuously):**
- Login frequency (declining = risk)
- Support ticket sentiment (negative = risk)
- Feature usage depth (shallow = risk)
- Payment failures (failed charge = immediate action)
- Email engagement (not opening = risk)

**RISK LEVELS & AUTOMATED ACTIONS:**

**GREEN (Healthy):**
- No action needed. Continue value delivery.

**YELLOW (At Risk - 2+ warning signals):**
- Day 1: Personalized "check-in" email from founder
  "Hey [Name], noticed you haven't logged in this week. Everything okay?"
- Day 3: If no response, send "quick win" content tailored to their use case
- Day 5: If still disengaged, alert CS team for personal outreach

**RED (High Risk - about to cancel):**
- Immediate: Founder or CS lead sends personal video message (Loom)
- Same day: Offer 1:1 strategy session to re-align with goals
- If cancellation initiated: "Pause" option instead of cancel
  "Take a break instead? We'll keep your data safe for 30 days."

**WIN-BACK (Post-Churn):**
- Day 7: "We miss you" email with what's new
- Day 14: Special "come back" offer (discount or bonus)
- Day 30: Final "door is always open" email

**Recovery Rate:** This protocol typically saves 30-50% of at-risk accounts.`
    }
}

function generateSupportAutomationBlueprint(formData: any): MiniWin {
    const { companyName } = formData

    return {
        title: 'AI Support Automation Blueprint',
        description: 'Architecture to handle 80% of support automatically while improving customer satisfaction.',
        type: 'checklist',
        copyable: true,
        icon: '',
        content: `**AI SUPPORT ARCHITECTURE for ${companyName}**

**LAYER 1: Self-Service (handles 40% of questions)**
- Searchable knowledge base / help center
- Video tutorials for common tasks
- FAQ section with natural language search

**LAYER 2: AI Chatbot (handles 40% of remaining)**
- Trained on your help docs, FAQs, and past support conversations
- Capabilities:
  - Answer product questions
  - Guide through common workflows
  - Provide account status info
  - Collect bug report details
  - Schedule calls with support team

**LAYER 3: Human Escalation (20% of total)**
- AI prepares full context summary before handoff
- Priority routing: billing > bugs > feature requests > general
- Response time SLA tracking

**IMPLEMENTATION STEPS:**
1. Export top 50 support questions from last 3 months
2. Write clear answers for each (these become AI training data)
3. Set up chatbot tool (Intercom, Crisp, or Tidio)
4. Upload training content + connect to help docs
5. Deploy widget on website + community
6. Review transcripts weekly and improve accuracy

**EXPECTED RESULTS:**
- 60-80% ticket deflection in first month
- Average resolution time: <2 minutes for AI-handled
- Customer satisfaction: typically improves (faster answers)`
    }
}

function generateRevenueModel(formData: any): MiniWin {
    const churnPct = formData.churnRate === '20+' ? 0.25 : formData.churnRate === '10-20' ? 0.15 : formData.churnRate === '5-10' ? 0.07 : 0.03
    const price = formData.productPricePoint === '5k+' ? 7500 : formData.productPricePoint === '1k-5k' ? 3000 : formData.productPricePoint === '500-1k' ? 750 : formData.productPricePoint === '100-500' ? 300 : formData.productPricePoint === 'recurring' ? 100 : 50
    const listSize = formData.listSize === '50k+' ? 75000 : formData.listSize === '10k-50k' ? 30000 : formData.listSize === '5k-10k' ? 7500 : formData.listSize === '1k-5k' ? 3000 : 500

    const annualChurnLoss = Math.round(listSize * churnPct * price)
    const supportHrs = formData.supportHoursPerWeek === '10+' ? 12 : formData.supportHoursPerWeek === '5-10' ? 7 : 2
    const supportSaved = Math.round(supportHrs * 0.8 * 4 * 75) // 80% deflection × $75/hr

    return {
        title: 'Automation ROI Model',
        description: 'Financial projection of automation implementation vs. status quo.',
        type: 'calculator',
        copyable: true,
        icon: '',
        content: `**INPUT VARIABLES:**
- Audience Size: ${listSize.toLocaleString()}
- Churn Rate: ${(churnPct * 100).toFixed(0)}%
- Average Product Value: $${price.toLocaleString()}
- Support Hours/Week: ${supportHrs}

**PROJECTION A (Status Quo):**
- Annual Revenue Lost to Churn: **$${annualChurnLoss.toLocaleString()}**
- 3-Year Cumulative Churn Loss: **$${(annualChurnLoss * 3).toLocaleString()}**
- Support Cost: **$${(supportHrs * 75 * 52).toLocaleString()}/year** (at $75/hr opportunity cost)

**PROJECTION B (With Automation):**
- Churn Reduction: 30-50% (conservative: 30%)
- Revenue Saved: **$${Math.round(annualChurnLoss * 0.3).toLocaleString()}/year**
- Support Deflection: 80% of tickets handled by AI
- Support Savings: **$${supportSaved.toLocaleString()}/month**
- Onboarding Automation: 3x faster activation = higher LTV

**NET SYSTEM VALUE:**
Year 1 Revenue Impact: **$${(Math.round(annualChurnLoss * 0.3) + supportSaved * 12).toLocaleString()}**

**ROI CALCULATION:**
Cost of System (Year 1): ~$15,000
Net Profit (Year 1): **$${(Math.round(annualChurnLoss * 0.3) + supportSaved * 12 - 15000).toLocaleString()}**
Payback Period: < ${Math.ceil(15000 / ((Math.round(annualChurnLoss * 0.3) + supportSaved * 12) / 12))} months`
    }
}

function generateBusinessAgentArchitecture(formData: any): MiniWin {
    const businessType = (formData.businessType || '').toLowerCase()
    const { companyName } = formData

    const architectures: Record<string, MiniWin> = {
        saas: {
            title: 'SaaS Growth Agent Architecture',
            description: 'Autonomous system for trial conversion and churn prevention.',
            type: 'checklist',
            copyable: true,
            icon: '',
            content: `**AGENT ARCHITECTURE: "Growth-Engine-01"**

**INPUT SIGNALS:**
- New trial signup
- In-app behavior events
- Support interactions
- Payment events

**PROCESS:**
1. **Trial Activation Agent:**
   - Monitor first-session behavior
   - If user hasn't completed setup in 24hrs -> Send guided walkthrough
   - If user hits "aha moment" -> Accelerate to upgrade prompt
   - If user goes dormant -> Trigger re-engagement sequence

2. **Churn Prediction Agent:**
   - Analyze usage patterns weekly
   - Score health: Green/Yellow/Red
   - Yellow -> Automated value reminders
   - Red -> Alert CS team + send founder video

3. **Expansion Agent:**
   - Detect power users approaching plan limits
   - Trigger personalized upgrade suggestions
   - Celebrate usage milestones ("You've created 100 projects!")

**INTEGRATION MAP:**
- Events: Segment/Mixpanel
- Email: Customer.io/ActiveCampaign
- Chat: Intercom/Crisp
- CRM: HubSpot/Salesforce`
        },
        'course-creator': {
            title: 'Course Creator Automation Architecture',
            description: 'System to maximize completion rates and student success.',
            type: 'checklist',
            copyable: true,
            icon: '',
            content: `**AGENT ARCHITECTURE: "Student-Success-01"**

**INPUT SIGNALS:**
- Course enrollment
- Module completion events
- Community engagement
- Support questions

**PROCESS:**
1. **Onboarding Agent:**
   - Welcome sequence triggered on enrollment
   - Day 1: Access + first lesson nudge
   - Day 3: Check if Module 1 complete
   - If stuck -> Send personalized help content

2. **Engagement Agent:**
   - Track weekly progress
   - If behind pace -> "Catch up" email with encouragement
   - If ahead -> Congratulate + unlock bonus content
   - Weekly community prompt to drive discussion

3. **Graduation Agent:**
   - Certificate generation on completion
   - Testimonial request (automated, sentiment-gated)
   - Upsell to next course or coaching program
   - Alumni community invitation

**INTEGRATION MAP:**
- Platform: Kajabi/Teachable/Thinkific
- Email: ConvertKit/ActiveCampaign
- Community: Skool/Circle
- Payments: Stripe`
        },
        default: {
            title: 'Info Business Automation Architecture',
            description: 'Full-stack automation system for scaling without headcount.',
            type: 'checklist',
            copyable: true,
            icon: '',
            content: `**AGENT ARCHITECTURE: "Scale-Engine" for ${companyName}**

**OBJECTIVE:**
Run ${companyName} at 80%+ automation so the founder focuses only on high-value creation and strategy.

**SYSTEM 1: Lead-to-Customer Pipeline**
- Traffic → Landing page → Email capture → Nurture sequence → Offer → Purchase
- AI optimizes: subject lines, send times, offer positioning
- Abandoned cart/checkout recovery: 3-email sequence

**SYSTEM 2: Customer Success Engine**
- Automated onboarding (5-email + in-app guidance)
- AI support chatbot (80% ticket deflection)
- Health scoring + churn prevention alerts
- Upsell/cross-sell recommendations

**SYSTEM 3: Content & Marketing Flywheel**
- 1 long-form piece → 30+ micro-content assets (AI-powered)
- Social scheduling on autopilot
- Email newsletter generation from content library
- Testimonial collection + social proof automation

**SYSTEM 4: Operations & Intelligence**
- Real-time dashboard (MRR, churn, LTV, engagement)
- Weekly automated reports
- Anomaly detection (sudden churn spike, traffic drop)
- Team task automation (Notion/ClickUp triggers)

**RESULT:**
Owner works 20-25 hrs/week on strategy and creation. Everything else runs on systems.`
        }
    }

    const matchingType = Object.keys(architectures).find(key => businessType.includes(key))
    return architectures[matchingType || 'default']
}

/**
 * Format mini-wins for display
 */
export function formatMiniWinForCopy(win: MiniWin): string {
    return `${win.title}\n\n${win.description}\n\n${win.content}`
}
