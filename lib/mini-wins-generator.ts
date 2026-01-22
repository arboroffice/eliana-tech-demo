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

    // 1. Custom ChatGPT Prompts (always include)
    wins.push(...generateChatGPTPrompts(formData))

    // 2. Email Template for Reviews (if no automated system)
    if (formData.askReviewsSystem !== 'automated') {
        wins.push(generateReviewEmailTemplate(formData))
    }

    // 3. SMS Script for Missed Calls
    if (formData.missedCalls !== '0-5') {
        wins.push(generateMissedCallSMSScript(formData))
    }

    // 4. Follow-Up Email Sequence
    if (formData.systematicFollowUp !== 'Yes') {
        wins.push(generateFollowUpEmailTemplate(formData))
    }

    // 5. Quick ROI Calculator Data
    wins.push(generateROICalculatorData(formData))

    // 6. Industry-Specific Quick Win
    wins.push(generateIndustryQuickWin(formData))

    return wins
}

function generateChatGPTPrompts(formData: any): MiniWin[] {
    const { companyName, specificIndustry, fullName } = formData

    return [
        {
            title: '🤖 ChatGPT Prompt: Email Responder',
            description: 'Use this to draft professional email responses instantly',
            type: 'chatgpt_prompt',
            copyable: true,
            icon: '✉️',
            content: `You are the customer service manager for ${companyName}, a ${specificIndustry} business.

Your task: Draft professional, friendly email responses to customer inquiries.

Guidelines:
- Tone: Professional but warm
- Brand voice: Helpful and solution-focused
- Always include: Next steps, timeline, contact info
- Keep responses under 150 words

Customer inquiry: [PASTE CUSTOMER EMAIL HERE]

Draft a response that addresses their concern and moves the conversation forward.`
        },
        {
            title: '🤖 ChatGPT Prompt: Social Media Posts',
            description: 'Generate engaging content for your business instantly',
            type: 'chatgpt_prompt',
            copyable: true,
            icon: '📱',
            content: `You are the social media manager for ${companyName}, a ${specificIndustry} business.

Create 5 engaging social media posts (Instagram/Facebook) that:
- Showcase our expertise in ${specificIndustry}
- Provide value to our audience
- Include a clear call-to-action
- Are 100-150 words each
- Include relevant hashtags

Topics to cover:
1. Common customer problem we solve
2. Behind-the-scenes of our work
3. Customer success story (you can make one up)
4. Industry tip/advice
5. Special offer or announcement

Make them authentic, engaging, and professional.`
        },
        {
            title: '🤖 ChatGPT Prompt: FAQ Generator',
            description: 'Create comprehensive FAQs for your website',
            type: 'chatgpt_prompt',
            copyable: true,
            icon: '❓',
            content: `You are the content strategist for ${companyName}, a ${specificIndustry} business.

Create a comprehensive FAQ section for our website with 10 questions and answers.

Requirements:
- Address common ${specificIndustry} customer concerns
- Answers should be clear, concise (50-100 words each)
- Include practical information (pricing, timeline, process)
- End each answer with a subtle call-to-action when appropriate
- Use a helpful, expert tone

Format:
**Q: [Question]**
A: [Answer]

Focus on questions potential customers actually ask before hiring a ${specificIndustry} company.`
        }
    ]
}

function generateReviewEmailTemplate(formData: any): MiniWin {
    const { companyName, specificIndustry } = formData

    return {
        title: '⭐ Review Request Email Template',
        description: 'Copy-paste this email to request reviews from happy customers',
        type: 'email_template',
        copyable: true,
        icon: '⭐',
        content: `Subject: Quick favor? Share your experience with ${companyName}

Hi [Customer Name],

Thank you for choosing ${companyName} for your recent [service/purchase]! We hope everything went smoothly and you're happy with the results.

If you have 60 seconds, would you mind sharing your experience on Google? Your feedback helps other [homeowners/businesses/customers] make informed decisions, and it helps us continue improving.

👉 Leave a review here: [YOUR GOOGLE REVIEW LINK]

What to mention (if you're happy!):
• What problem we helped you solve
• Your experience working with our team
• The result you got

Thank you for your time and for trusting us with your ${specificIndustry} needs!

Best regards,
[Your Name]
${companyName}

P.S. If anything wasn't perfect, please reply to this email instead. I'd love to make it right.

---

💡 TIP: Send this 2-3 days after completing a job when the experience is fresh!`
    }
}

function generateMissedCallSMSScript(formData: any): MiniWin {
    const { companyName } = formData

    return {
        title: '📞 Missed Call Recovery SMS Script',
        description: 'Send this text when you miss a call to capture the lead',
        type: 'sms_script',
        copyable: true,
        icon: '📱',
        content: `Hi! This is [Your Name] from ${companyName}.

Sorry I missed your call! I'm with a customer right now but I'll call you back within 2 hours.

In the meantime:
• What can I help you with?
• Is this urgent?

You can also text me here or book a time that works for you: [YOUR BOOKING LINK]

Talk soon!

---

💡 PRO TIPS:

1. **Automate this with Zapier/Make:**
   - Trigger: Missed call in phone system
   - Action: Send this SMS automatically

2. **Response templates:**
   If they reply "urgent" → Call them within 15 min
   If they reply with question → Answer + book call
   If they don't reply → Follow up in 24 hours

3. **Track results:**
   • Before automation: ${formData.missedCalls} missed calls/week lost
   • After: Capture 50-70% with this simple SMS
   • ROI: Huge! (Just 1 recovered call could = $1000s)

4. **Tools to use:**
   - Google Voice (free)
   - Twilio ($1/month + $0.0079/SMS)
   - Zapier to connect everything`
    }
}

function generateFollowUpEmailTemplate(formData: any): MiniWin {
    const { companyName, specificIndustry } = formData

    return {
        title: '📧 Lead Follow-Up Email Sequence',
        description: '3-email sequence to convert leads who haven\'t responded',
        type: 'email_template',
        copyable: true,
        icon: '💼',
        content: `**EMAIL 1 - DAY 1 (Right after initial contact)**
Subject: Quick follow-up - ${companyName}

Hi [Name],

Thanks for reaching out about [their need/inquiry]! I wanted to make sure this got to you.

Based on what you shared, here's what I'm thinking:
• [Specific solution to their problem]
• Timeline: [realistic timeframe]
• Next step: [clear action item]

Do you have 15 minutes this week for a quick call?

[BOOKING LINK or suggest 2-3 specific times]

Best,
[Your Name]

---

**EMAIL 2 - DAY 3 (If no response)**
Subject: [Name] - One quick question

Hi [Name],

Following up on my last email about [their need].

Quick question: Is this still a priority for you?

If yes → Let me know 2-3 times that work for a quick call
If not right now → No problem! When should I check back?
If you went another direction → I'd love to know why (helps me improve!)

No pressure either way 😊

[Your Name]
${companyName}

---

**EMAIL 3 - DAY 7 (Final follow-up)**
Subject: Is this a bad time?

Hi [Name],

I don't want to be a pest, so this is my last email about [their need].

I've worked with a lot of ${specificIndustry} clients dealing with [their problem], and I genuinely think I can help.

But I also know life gets busy. If now isn't the right time, totally understand!

Just let me know:
1. Yes, I'm still interested → [Book here: LINK]
2. Not now, check back in [timeframe]
3. Not interested → All good, no hard feelings!

Either way, I hope you solve [their problem]!

Best,
[Your Name]

---

💡 AUTOMATION TIP:
Set up these emails in your CRM to send automatically:
• Email 1: Immediately after initial contact
• Email 2: If no response after 3 days
• Email 3: If no response after 7 days

This simple sequence can increase conversions by 50%+!`
    }
}

function generateROICalculatorData(formData: any): MiniWin {
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
        title: '💰 Your Revenue Recovery Math',
        description: 'See exactly how much money you\'re leaving on the table',
        type: 'calculator',
        copyable: true,
        icon: '📊',
        content: `**YOUR NUMBERS:**

Missed calls per week: ${missedCallsPerWeek}
Average deal size: $${estimatedDealSize.toLocaleString()}
Conversion rate: ${(conversionRate * 100).toFixed(0)}%

**THE MATH:**

${missedCallsPerWeek} missed calls/week
× 52 weeks
× $${estimatedDealSize.toLocaleString()} avg deal
× ${(conversionRate * 100).toFixed(0)}% conversion
= **$${annualLostRevenue.toLocaleString()}/year in lost revenue**

**WHAT IF YOU CAPTURED JUST HALF?**

50% of missed calls = +$${(annualLostRevenue / 2).toLocaleString()}/year
75% of missed calls = +$${(annualLostRevenue * 0.75).toLocaleString()}/year
100% of missed calls = +$${annualLostRevenue.toLocaleString()}/year

**COST TO FIX:**

Basic automation setup: $2,500 - $5,000 one-time
Monthly tools: ~$100 - $300/month

**BREAK-EVEN:**

If you capture just ${Math.ceil((5000 / (estimatedDealSize * conversionRate)))} additional customers, you've paid for the automation.

That's ${Math.ceil((5000 / (estimatedDealSize * conversionRate)) / 52)} customers per week.

**TIME TO BREAK-EVEN:**

At current missed call rate: ${Math.ceil((5000 / (estimatedDealSize * conversionRate)) / missedCallsPerWeek)} weeks

ROI in Year 1: ${Math.round((annualLostRevenue * 0.75 - 5000) / 5000 * 100)}%

---

💡 This is JUST from missed calls. Add in:
• Better follow-up (20-30% more conversions)
• Review automation (10% more leads)
• Time saved (15-20 hours/week)

Total potential: 2-3x these numbers!`
    }
}

function generateIndustryQuickWin(formData: any): MiniWin {
    const { specificIndustry, companyName } = formData
    const industry = specificIndustry.toLowerCase()

    const industryWins: { [key: string]: MiniWin } = {
        hvac: {
            title: '❄️ HVAC Quick Win: Seasonal Reminder Automation',
            description: 'Set up automated seasonal maintenance reminders',
            type: 'checklist',
            copyable: true,
            icon: '🛠️',
            content: `**SEASONAL HVAC REMINDER SYSTEM**

This simple automation can generate 20-30% of your annual revenue!

**SETUP (30 minutes):**

1. **Export your customer list** from your CRM/spreadsheet
   - Include: Name, Phone, Email, Last Service Date, System Type

2. **Set up reminder schedule:**
   - Spring (Mar 1): AC maintenance reminders
   - Fall (Sep 1): Heating maintenance reminders

3. **Create message templates:**

   **SPRING SMS:**
   "Hi [Name]! It's [Your Name] from ${companyName}. Time for your AC tune-up before summer hits! Book now and get [offer]. Reply to schedule or book here: [LINK]"

   **FALL SMS:**
   "Hey [Name], winter's coming! Don't get caught with a broken furnace. Book your heating check today: [LINK] - [Your Name], ${companyName}"

4. **Automate it:**
   - Use Podium, ServiceTitan, or Zapier
   - Or manually send in batches (still worth it!)

5. **Track results:**
   - Response rate target: 15-25%
   - Conversion rate: 40-60%
   - Expected bookings: 50-100 per season

**EXPECTED ROI:**

Customers in database: [Your number]
× 20% response rate
× 50% conversion
× $150 avg maintenance
= $[BIG NUMBER] in easy revenue!

**BONUS WINS:**

✓ Fills schedule during slow seasons
✓ Prevents emergency calls (higher satisfaction)
✓ Creates upsell opportunities (replacements)
✓ Builds customer loyalty (they appreciate reminders)

**TOOLS NEEDED:**

Free: Google Sheets + manual sending
Budget ($50/mo): Zapier + Twilio
Pro ($200/mo): Podium or ServiceTitan`
        },

        dental: {
            title: '🦷 Dental Quick Win: Recall Automation',
            description: 'Automate 6-month cleaning reminders',
            type: 'checklist',
            copyable: true,
            icon: '📅',
            content: `**6-MONTH RECALL AUTOMATION**

**SETUP:**
1. Export patient list with last visit date
2. Create automated reminders at 5.5 months
3. Send via email + SMS for best results

**MESSAGE TEMPLATE:**
"Hi [Name]! It's time for your cleaning at ${companyName}. Book now and choose your favorite hygienist: [LINK]"

**EXPECTED RESULTS:**
- 40-50% booking rate
- Fills 60-80% of your schedule automatically
- Reduces no-shows (people book when reminded)

**TOOLS:** Dentrix, Eaglesoft, or Weave`
        },

        default: {
            title: '🎯 Quick Win: Google My Business Optimization',
            description: '30-minute setup for more local leads',
            type: 'checklist',
            copyable: true,
            icon: '🗺️',
            content: `**OPTIMIZE YOUR GOOGLE BUSINESS PROFILE (30 MIN)**

This free tactic can 2x your local leads!

**CHECKLIST:**

☐ **Complete ALL sections:**
  - Business hours (including holidays)
  - Services offered (be specific!)
  - Service areas
  - Attributes (women-owned, veteran-owned, etc.)

☐ **Add 10+ photos:**
  - Team photos
  - Work in progress
  - Before/after
  - Your facility
  - (Update monthly!)

☐ **Write compelling description:**
  - First sentence = what you do + who you serve
  - Include key services
  - Add your unique value prop
  - End with CTA

☐ **Create your first post:**
  - Announce a special offer
  - Share a recent project
  - Post weekly for best results

☐ **Set up messaging:**
  - Enable Google Messages
  - Respond within 24 hours
  - 80% of users message before calling!

☐ **Add booking link:**
  - Add ${companyName} booking URL
  - Makes it easy to schedule

**BONUS:**
Ask your last 10 happy customers for a Google review.
Even 5-10 5-star reviews = 25% more leads!

**EXPECTED RESULTS:**
Before: X leads/month from Google
After: 2-3X leads/month (for free!)

**TIME TO RESULTS:** 2-4 weeks`
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
