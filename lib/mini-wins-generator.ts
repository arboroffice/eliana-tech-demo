/**
 * Instant Mini-Wins Generator
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
    const { companyName, specificIndustry, fullName } = formData

    // 1. System Prompt Engineering (Advanced AI Setup)
    wins.push(...generateSystemPrompts(formData))

    // 2. Behavioral Nurture Logic (if no automated system)
    if (formData.askReviewsSystem !== 'automated') {
        wins.push(generateBehavioralReviewLogic(formData))
    }

    // 3. Conversational Fallback Protocol
    if (formData.missedCalls !== '0-5') {
        wins.push(generateMissedCallProtocol(formData))
    }

    // 4. Multi-Modal Nurture Sequence
    if (formData.systematicFollowUp !== 'Yes') {
        wins.push(generateNurtureSequenceLogic(formData))
    }

    // 5. Lifetime Value Expansion Model
    wins.push(generateLTVModel(formData))

    // 6. Vertical-Specific Agent Architecture
    wins.push(generateIndustryAgentArchitecture(formData))

    return wins
}

function generateSystemPrompts(formData: any): MiniWin[] {
    const { companyName, specificIndustry } = formData

    return [
        {
            title: '🧠 System Prompt: Autonomous Intake Agent',
            description: 'The core instruction set for your AI receptionist to handle inquiries indistinguishably from a human.',
            type: 'chatgpt_prompt',
            copyable: true,
            icon: '🤖',
            content: `**SYSTEM MESSAGE (v1.0)**
Role: Senior Intake Specialist for ${companyName}.
Objective: Qualify inbound leads based on BANT (Budget, Authority, Need, Timeline) and schedule appointments.

**CORE BEHAVIORS:**
1. **Empathy First:** Acknowledge the user's pain point immediately (e.g., "I understand how frustrating [Industry Pain] can be...").
2. **Consultative Qualification:** Do not interrogate. Weave qualification questions into natural conversation.
3. **Objection Handling:**
   - If User says "Too expensive" -> Pivot to ROI/Value: "We focus on [Value Prop], which typically saves our clients X in the long run."
   - If User says "Just looking" -> Offer low-commitment resource (Lead Magnet).

**KNOWLEDGE BASE ACCESS:**
- Retrieval Tool: active
- Index: ${specificIndustry}_Pricing_Guide_v2

**CONSTRAINTS:**
- Never hallucinate features we don't have.
- If unsure, escalate to human via function_call: { name: "escalate_to_manager" }.
- Keep responses under 40 tokens for voice latency optimization.

**OUTPUT FORMAT:**
JSON { "response": "text", "sentiment": "0-1", "intent": "booking|info|complaint" }`
        },
        {
            title: '🎨 System Prompt: Content Generation Engine',
            description: 'Automate your entire content supply chain with this brand-aligned persona.',
            type: 'chatgpt_prompt',
            copyable: true,
            icon: '⚡',
            content: `**SYSTEM MESSAGE (Content-Bot)**
Role: Lead Content Strategist for ${companyName}.
Audience: ${specificIndustry} decision-makers.
Tone: Authoritative, Insightful, yet Accessible (Reading Level: Grade 8).

**TASK:**
Generate a week's worth of LinkedIn/Twitter content pillars based on current industry trends.

**FRAMEWORK (AIDA):**
- **Attention:** Hook with a contrarian statement about ${specificIndustry}.
- **Interest:** Back it up with data or a recent case study.
- **Desire:** Show the "Dream Outcome" using ${companyName}'s methodology.
- **Action:** Soft CTA (e.g., "DM me 'AUDIT' for a free assessment").

**STYLE GUIDE:**
- No hashtags in the first comment.
- Use line breaks for readability.
- Avoid corporate jargon ("synergy", "paradigm shift").
- Focus on "How-to" and actionable advice.`
        }
    ]
}

function generateBehavioralReviewLogic(formData: any): MiniWin {
    const { companyName } = formData

    return {
        title: '⭐ Sentiment-Triggered Review Engine',
        description: 'Logic flow to capture reviews ONLY from happy clients.',
        type: 'checklist',
        copyable: true,
        icon: '🔄',
        content: `**LOGIC FLOW DIAGRAM:**

1. **Trigger:** Service_Completed OR Product_Delivered event via Webhook.

2. **Step 1: Sentiment Check (SMS/Email)**
   - System sends: "Hi [Name], on a scale of 1-5, how was your experience with ${companyName}?"
   - *Wait for reply...*

3. **Step 2: Conditional Branching**
   - **IF Score >= 4:**
     - Immediate Reply: "So glad to hear that! Would you mind sharing that on Google? It helps a ton: [LINK]"
     - Action: Tag CRM contact as "Brand Advocate".
   
   - **IF Score <= 3:**
     - Immediate Reply: "I'm sorry we missed the mark. Can I have a manager call you to fix this?"
     - Action: Create "High Priority Ticket" in Support System.
     - Action: Alert Management via Slack/Teams.
     - *NOTE: Do NOT send the review link.*

**TECHNICAL REQUIREMENTS:**
- Twilio/SendGrid API
- Simple Logic Builder (Make.com or Zapier)
- CRM Webhook capability`
    }
}

function generateMissedCallProtocol(formData: any): MiniWin {
    const { companyName } = formData

    return {
        title: '🛡️ Missed Call Defense Protocol',
        description: 'Autonomous state machine to recover 100% of missed opportunities.',
        type: 'sms_script',
        copyable: true,
        icon: '📱',
        content: `**STATE MACHINE CONFIGURATION:**

**Event:** Inbound Call Status = "Missed" or "Voicemail"

**Action 0 (Immediate - <10s):**
- System checks: Is this a known contact?
- **IF YES:** Retrieve context (Last interaction: "Quote Sent").
  - SMS: "Hey [Name], saw you called. Do you have questions about the quote I sent?"
- **IF NO:**
  - SMS: "Hi, this is the AI assistant for ${companyName}. I saw we missed you. Are you looking for a quote or support?"

**Action 1 (Wait 5 min):**
- If no reply to SMS -> **Voice Drop Injection**
- System calls user and leaves pre-recorded, natural-sounding voicemail:
  "Hey, sorry I missed you. It's [Name] from ${companyName}. Just getting back to you. Text me back if that's easier."

**Action 2 (Wait 30 min):**
- If still no engagement -> **Email Fallback**
- Subject: "Missed you / ${companyName}"
- Body: Contains calendar link for booking.

**Recovery Rate:** Systems running this protocol typically recover 65-75% of missed inquiries without human intervention.`
    }
}

function generateNurtureSequenceLogic(formData: any): MiniWin {
    const { companyName, specificIndustry } = formData

    return {
        title: '🧬 Multi-Modal Nurture Architecture',
        description: 'An omnipresent follow-up sequence using Email, SMS, and Voicemail drops.',
        type: 'email_template',
        copyable: true,
        icon: '🕸️',
        content: `**SEQUENCE BLUEPRINT:**

**Day 1:**
- **Instant:** Confirmation SMS + Email.
- **+15 min:** "Value Add" Email (e.g., "Top 5 Mistakes in ${specificIndustry}").

**Day 2:**
- **10:00 AM:** Soft SMS Check-in ("Did you get the guide?").
- **Logic:** If link clicked -> Trigger Call Task for Sales Team.

**Day 4:**
- **Email:** Case Study / Social Proof.
- "How [Client Name] achieved [Result] with ${companyName}."

**Day 7:**
- **"The Breakup" (Pattern Interrupt):**
- Subject: "Permission to close your file?"
- Body: "I assume this isn't a priority right now, so I'll close your file to stop bothering you. If you change your mind, here's my calendar."

**AUTOMATION RULES:**
- **Stop on Reply:** If prospect replies to ANY channel, pause sequence and alert human.
- **Sentiment Analysis:** If reply is "Not interested", move to "Long Term Nurture" (monthly newsletter).`
    }
}

function generateLTVModel(formData: any): MiniWin {
    const missedCallsPerWeek =
        formData.missedCalls === '30+' ? 35 :
        formData.missedCalls === '10-30' ? 20 :
        formData.missedCalls === '5-10' ? 7 : 3

    const estimatedDealSize =
        formData.dealSize === 'enterprise' ? 50000 :
        formData.dealSize === 'high' ? 15000 :
        formData.dealSize === 'medium' ? 5000 :
        formData.dealSize === 'small' ? 500 : 100

    const conversionRate =
        formData.conversionRate === '<10%' ? 0.05 :
        formData.conversionRate === '10-20%' ? 0.15 :
        formData.conversionRate === '20-30%' ? 0.25 :
        formData.conversionRate === '30-50%' ? 0.35 : 0.5

    const annualLostRevenue = missedCallsPerWeek * 52 * estimatedDealSize * conversionRate

    return {
        title: '📊 Operational Efficiency Model',
        description: 'Financial projection of AI implementation vs. Status Quo.',
        type: 'calculator',
        copyable: true,
        icon: '📈',
        content: `**INPUT VARIABLES:**
- Lead Velocity: ${missedCallsPerWeek} missed opps/week
- ACV (Avg Contract Value): $${estimatedDealSize.toLocaleString()}
- Current Conversion Efficiency: ${(conversionRate * 100).toFixed(0)}%

**PROJECTION A (Status Quo):**
- Annual Opportunity Bleed: **$${annualLostRevenue.toLocaleString()}**
- 5-Year Cumulative Loss: **$${(annualLostRevenue * 5).toLocaleString()}**

**PROJECTION B (AI Augmented):**
- Capture Rate: 99.9% (24/7 Availability)
- Speed-to-Lead: <10 seconds
- Expected Conversion Lift: +35% (conservative)

**NET SYSTEM VALUE:**
Implementation of an Autonomous Core would yield an estimated **$${(annualLostRevenue * 1.35).toLocaleString()}** in additional annual Gross Merchandise Value (GMV).

**ROI CALCULATION:**
Cost of System (Year 1): ~$15,000
Net Profit (Year 1): $${(annualLostRevenue * 1.35 - 15000).toLocaleString()}
Payback Period: < ${Math.ceil(15000 / ((annualLostRevenue * 1.35) / 12))} weeks`
    }
}

function generateIndustryAgentArchitecture(formData: any): MiniWin {
    const { specificIndustry, companyName } = formData
    const industry = specificIndustry.toLowerCase()

    const industryWins: { [key: string]: MiniWin } = {
        hvac: {
            title: '❄️ HVAC Dispatch & Triage Agent',
            description: 'Architecture for an autonomous dispatching system.',
            type: 'checklist',
            copyable: true,
            icon: '🔧',
            content: `**AGENT ARCHITECTURE: "Dispatcher-01"**

**INPUT:**
- Incoming Voice Call
- Web Form Submission

**PROCESS:**
1. **Emergency Classification:**
   - Detect keywords: "Leaking", "No heat", "Smell gas".
   - If Critical -> Route immediately to On-Call Tech via Phone Call.

2. **Scheduling Logic:**
   - Query ServiceTitan/Housecall Pro API for open slots.
   - Negotiate time with user: "We have a slot at 2 PM or 4 PM?"

3. **Pre-Arrival Prep:**
   - Send "Tech Bio" SMS to homeowner (increases trust).
   - Send "System Age/Type" data to Technician.

**INTEGRATION MAP:**
- Voice: Vapi / Twilio
- Logic: Make.com
- Database: ServiceTitan`
        },
        dental: {
            title: '🦷 Patient Reactivation Engine',
            description: 'Automated hygiene recall system architecture.',
            type: 'checklist',
            copyable: true,
            icon: '🦷',
            content: `**AGENT ARCHITECTURE: "Recall-Bot"**

**TRIGGER:**
- Patient status: "Due for Cleaning" AND "Unscheduled" > 2 weeks.

**SEQUENCE:**
1. **Insurance Check:**
   - Agent queries insurance portal API.
   - Message: "Hi [Name], your insurance renews next month. Use your benefits before you lose them!"

2. **Slot Filling:**
   - Agent identifies "White Space" in tomorrow's calendar.
   - SMS Blast to Waitlist: "Spot opened up tomorrow at 10 AM with Dr. Smith. Want it?"

3. **Confirmation:**
   - Auto-write appointment to Dentrix/OpenDental.
   - Send calendar invite.`
        },
        default: {
            title: '🌐 Local Dominance Agent',
            description: 'Automated GMB & Local SEO optimization architecture.',
            type: 'checklist',
            copyable: true,
            icon: '🌍',
            content: `**AGENT ARCHITECTURE: "Geo-Ranker"**

**OBJECTIVE:**
Rank ${companyName} in the "Map Pack" for ${specificIndustry} keywords.

**TASKS:**
1. **Photo Injection:**
   - Agent scrapes "Tagged Photos" from Instagram.
   - Uploads to Google Business Profile with EXIF data geotagged to service area.

2. **Q&A Seeding:**
   - Agent identifies high-volume search queries.
   - Posts Question to GMB profile -> Posts Answer (containing keywords).

3. **Review Response:**
   - Auto-replies to reviews with keyword-rich text ("Thanks for hiring us for [Service] in [City]...").

**RESULT:**
Consistent signals to Google algorithm = Higher ranking = More organic calls.`
        }
    }

    // Find matching industry or use default
    const matchingIndustry = Object.keys(industryWins).find(key =>
        industry.includes(key)
    )

    return industryWins[matchingIndustry || 'default']
}

/**
 * Format mini-wins for display
 */
export function formatMiniWinForCopy(win: MiniWin): string {
    return `${win.title}\n\n${win.description}\n\n${win.content}`
}
