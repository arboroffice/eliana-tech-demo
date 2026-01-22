# Enhanced Audit System Documentation

## Overview

This system provides a comprehensive audit experience that:
1. **Analyzes** the business's current state across 5 key areas
2. **Identifies** personalized opportunity gaps and growth potential
3. **Provides** DIY implementation steps
4. **Recommends** tailored solutions with pricing tiers
5. **Automates** follow-up emails based on intent level
6. **Generates** custom freebies and resources

## System Components

### 1. Audit Form (`components/audit-form.tsx`)
- 13-step comprehensive questionnaire
- Collects data on finances, team, sales, operations, pain points, etc.
- Submits to API route for processing

### 2. Results Display (`components/audit-results.tsx`)
- **Current State Analysis**: Scores across 5 dimensions (Revenue, Automation, Sales, Retention, Time)
- **Opportunity Gaps**: Personalized insights showing what they're missing
- **Potential Revenue**: Calculated based on missed opportunities
- **DIY Roadmap**: 6-week implementation guide
- **Solution Packages**: Tailored recommendations (Foundation, Scale, AI-Native, Co-Founder)
- **Personalized Note**: Dynamic content based on their responses

### 3. Backend Processing (`app/api/audit/submit/route.ts`)
- Receives form data
- Calculates audit scores
- Analyzes intent level (high/medium/low)
- Identifies opportunities
- Generates freebies
- Sends immediate email
- Schedules follow-up sequence
- Stores data in database

### 4. Analytics & Scoring (`lib/audit-analyzer.ts`)
- **calculateAuditScore()**: Overall readiness score (0-100)
- **analyzeIntent()**: Categorizes leads as high/medium/low intent
- **calculatePotentialRevenue()**: Estimates lost revenue
- **getRecommendedPackage()**: Suggests appropriate solution tier

### 5. Email Automation (`lib/email-service.ts`)
- **3 Intent-Based Sequences**:
  - **High Intent**: Immediate + Day 1 + Day 3 + Week 1 (4 emails)
  - **Medium Intent**: Immediate + Day 3 + Week 1 + Week 2 (4 emails)
  - **Low Intent**: Immediate + Week 1 + Week 2 + Month 1 (4 emails)
- Professional HTML templates
- Personalized content using form data
- Integration-ready for Resend, SendGrid, or Nodemailer

### 6. Freebie Generator (`lib/freebie-generator.ts`)
- **Full Audit Report**: Complete PDF of their results
- **Quick Wins Checklist**: 30-day action plan (if automation < 30%)
- **Industry Playbook**: Industry-specific strategies
- **ROI Calculator**: Pre-filled with their data

## Flow Diagram

```
User Completes Audit Form
          ↓
API receives submission
          ↓
┌─────────────────────────────────────┐
│ Calculate Scores & Analyze Intent   │
├─────────────────────────────────────┤
│ • Overall score (0-100)             │
│ • Intent level (high/med/low)       │
│ • Opportunities identified          │
│ • Potential revenue calculated      │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│ Store in Database                   │
├─────────────────────────────────────┤
│ • Contact info                      │
│ • All responses                     │
│ • Calculated metrics                │
│ • Timestamp                         │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│ Generate Freebies                   │
├─────────────────────────────────────┤
│ • Audit report (always)             │
│ • Checklist (if low automation)     │
│ • Playbook (if industry specified)  │
│ • Calculator (if high value)        │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│ Send Immediate Email                │
├─────────────────────────────────────┤
│ • High intent: Urgent tone          │
│ • Medium intent: Value-focused      │
│ • Low intent: Resource-heavy        │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│ Schedule Follow-Up Sequence         │
├─────────────────────────────────────┤
│ High:   Day 1, Day 3, Week 1        │
│ Medium: Day 3, Week 1, Week 2       │
│ Low:    Week 1, Week 2, Month 1     │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│ Show Results Page                   │
├─────────────────────────────────────┤
│ • Scores visualization              │
│ • Opportunities breakdown           │
│ • DIY roadmap                       │
│ • Package recommendations           │
│ • CTA to book call                  │
└─────────────────────────────────────┘
```

## Email Sequences

### High Intent Sequence (Excitement ≥8 OR Pain ≥7)

**Immediate:**
- Subject: "{{firstName}}, Your AI Roadmap is Ready 🚀"
- Focus: Urgency, high potential revenue, specific opportunities
- CTA: Book strategy call ASAP

**Day 1:**
- Subject: "Haven't booked yet? Here's why I'm following up..."
- Focus: Address objections (busy, unsure, budget)
- CTA: Reply or book call

**Day 3:**
- Subject: "Free Resource: {{freebieName}}"
- Focus: Deliver custom resource, no-pressure value
- CTA: Download + optional call booking

**Week 1:**
- Subject: "Last follow-up (I promise)"
- Focus: Social proof, case study, final offer
- CTA: Last chance to book

### Medium Intent Sequence (Excitement 5-7)

**Immediate:**
- Subject: "Your {{companyName}} AI Audit Results"
- Focus: Results overview, DIY option available
- CTA: View report + optional call

**Day 3:**
- Subject: "Free Checklist: Quick Automation Wins"
- Focus: Actionable checklist, self-implementation support
- CTA: Download checklist

**Week 1:**
- Subject: "Case Study: How {{similarCompany}} automated in 60 days"
- Focus: Social proof, relatable example
- CTA: Read case study + book call if interested

**Week 2:**
- Subject: "Still exploring? Here's your next step..."
- Focus: Help with roadblocks, offer guidance
- CTA: Short call or reply with questions

### Low Intent Sequence (Excitement <5)

**Immediate:**
- Subject: "Your audit results + free resources"
- Focus: No pressure, resource dump
- CTA: Download resources

**Week 1:**
- Subject: "Weekly Automation Tip #1: Start Here"
- Focus: Educational, missed call recovery
- CTA: Reply if need help

**Week 2:**
- Subject: "Weekly Automation Tip #2: Review Engine"
- Focus: Educational, review automation
- CTA: Continue learning

**Month 1:**
- Subject: "Still on my radar"
- Focus: Long-term nurture, webinar invite
- CTA: Register for webinar

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Choose Email Provider

**Option A: Resend (Recommended for Next.js)**
```bash
npm install resend
```

Add to `.env.local`:
```
RESEND_API_KEY=re_...
```

Update `lib/email-service.ts`:
```typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

async function sendEmail({ to, subject, html }) {
    await resend.emails.send({
        from: 'Eliana <noreply@yourdomain.com>',
        to,
        subject,
        html
    })
}
```

**Option B: SendGrid**
```bash
npm install @sendgrid/mail
```

**Option C: Nodemailer (Any SMTP)**
```bash
npm install nodemailer
```

### 3. Set Up Database

Choose one of:

**Option A: Supabase (Recommended - Free tier)**
```bash
npm install @supabase/supabase-js
```

Create table:
```sql
CREATE TABLE audits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL,
    full_name TEXT,
    company_name TEXT,
    form_data JSONB,
    audit_score INTEGER,
    intent_level TEXT,
    opportunities JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);
```

**Option B: MongoDB**
```bash
npm install mongodb
```

**Option C: PostgreSQL**
```bash
npm install pg
```

### 4. Set Up Email Scheduling

**Option A: Inngest (Recommended)**
```bash
npm install inngest
```

**Option B: BullMQ + Redis**
```bash
npm install bullmq ioredis
```

**Option C: Vercel Cron + Database**
- Store scheduled emails in DB
- Create cron job: `app/api/cron/send-emails/route.ts`
- Configure in `vercel.json`

### 5. Configure Calendar Link

Update `lib/email-service.ts` - replace `YOUR_CALENDAR_LINK` with your Calendly/Cal.com link.

### 6. (Optional) PDF Generation

For generating PDF reports:

```bash
npm install jspdf
# or for server-side
npm install puppeteer
```

## Environment Variables

Create `.env.local`:

```env
# Email Service
RESEND_API_KEY=re_...
# or
SENDGRID_API_KEY=SG....
# or
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password

# Database
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...
# or
MONGODB_URI=mongodb+srv://...
# or
DATABASE_URL=postgresql://...

# Scheduling (if using Inngest)
INNGEST_EVENT_KEY=...
INNGEST_SIGNING_KEY=...

# Calendar
CALENDLY_LINK=https://calendly.com/your-link
```

## Customization

### Adjust Scoring Logic

Edit `lib/audit-analyzer.ts` to change how scores are calculated:

```typescript
function calculateRevenueScore(formData: any): number {
    // Modify scoring logic here
}
```

### Modify Email Templates

Edit templates in `lib/email-service.ts`:

```typescript
function getHighIntentEmail(...) {
    // Customize HTML email template
}
```

### Add More Freebies

Add generators in `lib/freebie-generator.ts`:

```typescript
export async function generateCustomFreebie(formData: any) {
    // Your freebie generation logic
}
```

### Change Follow-Up Timing

Modify sequences in `lib/email-service.ts`:

```typescript
const sequences = {
    high: [
        { delay: 1, ... },  // Change from 1 day to whatever
        { delay: 3, ... },
        // Add more emails
    ]
}
```

## Tracking & Analytics

### Track Email Engagement

Add tracking pixels and UTM parameters to emails:

```typescript
const trackingPixel = `<img src="https://yourdomain.com/api/track/open?id=${auditId}" width="1" height="1" />`

const ctaLink = `https://calendly.com/your-link?utm_source=audit&utm_medium=email&utm_campaign=${intentLevel}&audit_id=${auditId}`
```

### Monitor Conversions

Create dashboard showing:
- Audits submitted
- Intent level breakdown
- Email open/click rates
- Calls booked
- Conversion rate by intent level

## Next Steps

1. **Integrate Email Provider**: Choose and configure Resend/SendGrid/Nodemailer
2. **Set Up Database**: Supabase is quickest to start
3. **Configure Scheduling**: Inngest is powerful but Vercel Cron works too
4. **Add Calendar Integration**: Connect Calendly/Cal.com webhook to pause email sequences when call is booked
5. **Build Freebie PDFs**: Implement actual PDF generation
6. **A/B Test Emails**: Try different subject lines and CTAs
7. **Add SMS Follow-Ups**: Use Twilio for high-intent leads
8. **Create Dashboard**: Admin view of all audits and their status

## Maintenance

### Daily
- Monitor email delivery (check bounce rates)
- Review new audit submissions
- Follow up on high-intent leads manually

### Weekly
- Review conversion rates by intent level
- Update email templates based on performance
- Add new case studies and testimonials

### Monthly
- Analyze which opportunities resonate most
- Refine scoring algorithm based on actual conversions
- Update DIY roadmap based on feedback

## Support

If you need help implementing:
1. Check email service docs (Resend, SendGrid, etc.)
2. Review Supabase/MongoDB docs for database setup
3. Test with console.log before going live
4. Start with low-intent sequence (less frequent emails) to test

## License

Proprietary - Eliana Tech
