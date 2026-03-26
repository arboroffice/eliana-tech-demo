/**
 * Instant Mini-Wins Generator — All Industries
 * Provides immediate, actionable value after audit completion
 */

export interface MiniWin {
    title: string
    description: string
    type: 'chatgpt_prompt' | 'email_template' | 'sms_script' | 'checklist' | 'calculator' | 'video_script'
    content: string
    copyable: boolean
    icon: string
}

export function generateMiniWins(formData: any): MiniWin[] {
    const wins: MiniWin[] = []
    const { companyName, businessType } = formData

    // 1. System Prompt Engineering
    wins.push(...generateSystemPrompts(formData))

    // 2. Short-form video scripts (Reels/TikTok/Shorts)
    wins.push(generateVideoScripts(formData))

    // 3. Onboarding automation (if not automated)
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
Audience: ${businessType || 'your'} buyers and prospects.
Tone: Authoritative, Insightful, yet Accessible (Reading Level: Grade 8).

**TASK:**
Transform one piece of long-form content into a week's worth of multi-platform assets.

**FRAMEWORK (1-to-30 Repurposing):**
From 1 podcast/video/blog post, create:
- 5 Twitter/X threads (contrarian takes, how-to, story, data-backed, myth-busting)
- 5 LinkedIn posts (lesson, framework, before/after, question, behind-the-scenes)
- 3 email newsletter snippets
- 5 short-form video scripts (for Reels/TikTok/Shorts) using the 3-STEP FRAMEWORK below
- 2 carousel slide decks
- 10 quote graphics with key insights

**SHORT-FORM VIDEO SCRIPT FRAMEWORK (3-Step):**
Each video script MUST follow this exact structure:

**Step 1 — HOOK (first 2-3 seconds):**
A bold, pattern-interrupting statement that stops the scroll. Use a contrarian take, a surprising claim, or call out a specific pain point. Speak directly to the viewer. Examples:
- "Stop posting content every day."
- "Your CRM is losing you money."
- "AI won't replace you. But a founder using AI will."

**Step 2 — OBJECTION HANDLER (next 5-10 seconds):**
Immediately address the viewer's internal pushback. Acknowledge what they're thinking and reframe it. This builds trust and keeps them watching. Examples:
- "I know that sounds crazy — but here's what's actually happening..."
- "You're probably thinking 'that won't work for my business'..."
- "Most people hear this and think it's too complicated. It's not."

**Step 3 — EXPLANATION (remaining 15-25 seconds):**
Deliver the value. Explain the insight, framework, or how-to in simple terms. End with a clear CTA or takeaway. Keep it conversational — like you're explaining to a friend. Examples:
- Walk through a 3-step process
- Show a before/after result
- Explain the one thing they should change today

**SCRIPT FORMAT for each video:**
HOOK: [bold statement]
OBJECTION: [address pushback]
EXPLAIN: [deliver value + CTA]
Total length: 30-60 seconds max.

**STYLE GUIDE:**
- Match the founder's voice and tone from existing content.
- No generic motivational content.
- Every piece should have a clear takeaway or CTA.
- Focus on "How-to" and transformation stories.
- Video scripts should feel like talking to camera, not reading a teleprompter.`
        }
    ]
}

function generateVideoScripts(formData: any): MiniWin {
    const { companyName, businessType } = formData
    const industry = businessType || 'your industry'

    return {
        title: '5 Purple Cow Video Scripts (Reels/TikTok/Shorts)',
        description: 'EXTREME Hook → Objection → Live Proof framework. Show what nobody else can show.',
        type: 'video_script',
        copyable: true,
        icon: '',
        content: `**5 PURPLE COW VIDEO SCRIPTS FOR ${(companyName || 'YOUR BRAND').toUpperCase()}**

THE RULE: Every video must show something LIVE that makes them think "wait... that's real?"
No talking head theory. No screenshots of ChatGPT. SHOW THE SYSTEM RUNNING.

MIA'S UNFAIR ADVANTAGES (use these as content angles):
- 22 years old, runs a real AI company from Louisiana
- Lives with her best friend, travels constantly, lives dream life
- Her business runs WITHOUT her sitting at a desk 8 hours
- She's younger than most people's interns — and building their infrastructure
- She doesn't just talk about AI — she ships production systems that handle real money
- The "I'm 22 and I built this" factor is the ultimate Purple Cow — LEAN INTO IT

Each script: Hook (stop scroll) → Objection (keep watching) → Live Proof (they can't look away)

---

**SCRIPT 1: "I Just Stole Your Website"**
TITLE ON SCREEN: "I built your proposal in 30 seconds"
TYPE: Screen record + face cam (picture-in-picture)

HOOK: "Give me your business name. I'll build you a custom AI proposal in 30 seconds. Ready? Go."

OBJECTION: "This isn't a template. This isn't ChatGPT copy-paste. Watch — it's scanning your actual website right now."

LIVE PROOF: [Screen record the proposal agent running in real-time. Type in a real business name. Show it scraping their site, analyzing their operations, generating pricing with their company name, their industry terms, their specific pain points. Show the finished proposal.] "That just happened. 30 seconds. Custom pricing. Custom roadmap. Your company name on it. DM me your business name — I'll run it for you live."

FILMING NOTES:
- Split screen: your face (top right corner) + screen recording (full)
- Use a REAL local business — a dentist, a roofer, a law firm
- Speed up the middle 10 seconds slightly (1.5x) to keep pace
- Freeze frame on the final proposal with their company name visible
- This is your #1 viral format. Film 10 of these with different businesses.

---

**SCRIPT 2: "5 Systems in 2 Seconds"**
TITLE ON SCREEN: "What happens when a lead fills out our form"
TYPE: Screen record showing multiple systems firing

HOOK: "Someone just filled out a form on our site. Watch what happens next." [Hit submit on screen]

OBJECTION: "Most businesses get an email notification. Maybe a Zapier fires. That's cute. Watch this."

LIVE PROOF: [Screen record: Submit the audit form. Immediately cut to (rapid fire, 1 second each): 1) Email arriving in prospect's inbox with styled template 2) SMS notification hitting your phone 3) GoHighLevel CRM showing the new contact with tags 4) Firebase vault showing the full client record 5) Scheduled email queue with 7 follow-ups loaded] "5 systems. 2 seconds. Zero humans. That lead is already in a 7-day personalized nurture sequence and I haven't touched my phone. This is what an AI-native business looks like."

FILMING NOTES:
- Pre-record each system separately, then rapid-cut in editing
- Use a "camera shutter" sound effect on each cut
- Show the actual UI of each system — not mockups
- End with a count overlay: "5 systems. 2 seconds. 0 humans."
- Consider doing this as a "POV: you're a lead" style

---

**SCRIPT 3: "I Wrote 10 Blog Posts While You Watched This"**
TITLE ON SCREEN: "AI wrote 10 blog posts in 60 seconds"
TYPE: Screen record (terminal + output) + face cam

HOOK: "By the time this video ends, I'll have written 10 SEO blog posts. Not outlines. Full posts. Starting now." [Start visible timer on screen]

OBJECTION: "And before you say 'AI content is garbage' — these aren't generic. Watch the titles come in."

LIVE PROOF: [Screen record the blog agent running. Show terminal output as it plans 10 unique topics, then starts writing. Show 2-3 titles appearing that are industry-specific and genuinely good. Fast-forward the writing. Show the final output: 10 markdown files, each 1500+ words, with proper SEO, internal links, CTAs.] "10 posts. [Show timer] seconds. Each one targeting a real keyword, linking to our other content, written in our founder's voice. Not templates. Not slop. Actual content strategy on autopilot. This is what a content engine looks like."

FILMING NOTES:
- The timer is EVERYTHING. Keep it visible the entire time.
- Speed up the terminal output so text is flying (looks impressive)
- Pause/slow down on 2-3 particularly good titles so people can read them
- Show a quick scroll through one finished post at the end
- Bonus: show the "Blog Published" notification afterward

---

**SCRIPT 4: "Your Followup Email Sucks. Here's Why."**
TITLE ON SCREEN: "AI that reads the relationship before it writes"
TYPE: Screen record of admin vault + generated email

HOOK: "This AI doesn't just write follow-up emails. It reads the entire relationship first. Watch."

OBJECTION: "I know what you're thinking — 'so it's a template with their name in it.' No. Look at what it actually knows."

LIVE PROOF: [Screen record: Open client vault in admin. Show the timeline: Day 1 audit, Day 3 email, Day 5 meeting notes, Day 8 proposal sent, Day 14 silence. Now trigger smart followup. Show it analyzing: 'Temperature: cold. 3 emails sent. 1 meeting. Proposal pending. 14 days silent.' Watch it generate an email that references the meeting, acknowledges the silence without being pushy, and offers a new angle.] "It didn't just say 'following up!' — it knew they went cold after the proposal, it knew what was discussed in the meeting, and it adjusted its entire tone. THAT is the difference between automation and intelligence."

FILMING NOTES:
- Zoom into the "analyzing state" part — let people read the data
- Highlight the generated email subject line (it should be noticeably good)
- Split the screen: vault timeline on left, generated email on right
- This one wins on DETAIL. Don't rush it. Let the intelligence speak.

---

**SCRIPT 5: "The 30-Second Business Roast"**
TITLE ON SCREEN: "I audited your business in 30 seconds. Here's what's broken."
TYPE: Face cam + screen record (PIP)

HOOK: "Drop your website in the comments. I'll tell you exactly what's broken in your business in 30 seconds."

OBJECTION: "This isn't me guessing. I built a system that actually scans your site, scores your operations, and finds the gaps. Let me show you with a real one."

LIVE PROOF: [Screen record the deep analysis running: Stage 1 scanning website, Stage 2 analyzing operations, Stage 3 finding opportunities, Stage 4 building report. Show real-time streaming results appearing. Zoom into the score breakdown and the specific opportunities found.] "42 out of 100. Biggest gap: no automated follow-up — they're losing an estimated $180K a year in leads that go cold. Second: manual onboarding taking 3 weeks when it should take 3 days. I just found $200K+ in recoverable revenue in 30 seconds. Comment your website — I'll do yours next."

FILMING NOTES:
- THIS IS YOUR ENGAGEMENT BAIT. "Comment your website" = massive comments
- Pre-select a business that will score poorly (most will)
- Let the streaming UI do the work — it looks like magic
- React genuinely to the findings ("oh wow, look at this...")
- Film a SERIES of these. "Business Roast Part 1, 2, 3..."
- Pin comment: "DM me 'AUDIT' for the full breakdown free"

---

---

**SCRIPT 6: "I'm 22. I Built This From Louisiana."**
TITLE ON SCREEN: "POV: You're 22 and your AI runs businesses for you"
TYPE: Lifestyle b-roll + screen recordings intercut

HOOK: "I'm 22 years old. I live in Louisiana with my best friend. I traveled 4 times last month. And my AI systems handled $__K in client operations while I was gone."

OBJECTION: "Before you say 'must be nice' or 'she's just selling a course' — I don't sell courses. I build the actual systems. Let me show you what ran while I was in [last trip location]."

LIVE PROOF: [Quick cuts: 1) You on a trip (b-roll, 3 seconds) 2) Screen: Vault timeline showing emails sent, proposals generated, leads scored — all while you were traveling 3) Screen: CRM showing new leads that came in and were auto-nurtured 4) Screen: Blog posts that published themselves 5) Back to you, on a balcony/coffee shop] "I didn't check Slack. I didn't 'hop on a quick call.' The system handled it. I'm not special. I just built the thing most people keep talking about building. You can too — or I'll build it for you. Link in bio."

FILMING NOTES:
- B-ROLL IS EVERYTHING HERE. Film 30 seconds of every trip, every fun moment.
- Keep a "content bank" of lifestyle clips: airport, coffee, friends, views
- The CONTRAST is the Purple Cow: "22 + Louisiana + traveling" vs "running real AI infrastructure"
- Don't be humble. Don't apologize for being young. OWN IT. That's the hook.
- Film this MONTHLY with updated numbers. It becomes a series.

---

**SCRIPT 7: "They're Paying a 22-Year-Old to Replace Their IT Department"**
TITLE ON SCREEN: "22-year-old builds what their IT team couldn't"
TYPE: Face cam, direct to camera, raw energy

HOOK: "A 47-year-old business owner just paid me — a 22-year-old from Louisiana — to automate what his 6-person team couldn't figure out in 2 years."

OBJECTION: "And yeah, he was skeptical at first. 'You're how old?' I get it. But here's what I showed him."

LIVE PROOF: [Screen record: Run the audit on a similar business. Show the score. Show the specific gaps. Then show the proposal auto-generate with their company name on it. Cut back to face cam.] "In 30 seconds my system found $200K in recoverable revenue his team missed for 2 years. Age doesn't matter. Credentials don't matter. Results do. The system either works or it doesn't — and mine works. DM 'BUILD' if you want me to run yours."

FILMING NOTES:
- The AGE CONTRAST is the hook. Don't hide it. Lead with it.
- This is a "prove them wrong" narrative — people LOVE watching that
- Keep the energy confident, not arrogant. Matter-of-fact.
- Works as a response to negative comments ("you're too young" = content)

---

**PURPLE COW PRODUCTION RULES:**

1. SHOW, NEVER TELL: If you can screen record it, screen record it. No "imagine if" — show it happening.

2. THE IMPOSSIBILITY HOOK: Open with something that sounds too fast/too good/impossible. Then prove it live.

3. REAL BUSINESSES, REAL DATA: Use actual company names, real websites, real numbers. Generic = forgettable. Specific = shareable.

4. SPEED = SPECTACLE: Compress time. "30 seconds" "2 seconds" "while you watched this." Speed is the Purple Cow.

5. THE REACTION: Film your genuine reaction to the output. "Wait, it actually pulled their pricing page..." — that moment of surprise is contagious.

6. SERIES FORMATS: Scripts 1 and 5 are infinitely repeatable. "I built your proposal" series. "Business Roast" series. These become your content engine.

7. ENGAGEMENT BAIT BUILT IN: Every script ends with "DM me" or "comment your website" or "drop your business name." The call to action IS the content.

8. VERTICAL ONLY: 9:16. Face cam top-right. Screen takes 80% of frame. Captions on. Sound optional (the screen is the show).

9. TITLES THAT STOP SCROLL: Put the most unbelievable claim as text overlay in the first frame. "I built your proposal in 30 seconds" makes them stop. Then PROVE IT.

10. THE UNFAIR ADVANTAGE: You have WORKING SYSTEMS that 99% of AI creators are only talking about. Every video should make people think "wait, this person actually built this?"`
    }
    }
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
            title: 'Business Automation Architecture',
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
