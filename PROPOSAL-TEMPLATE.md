# Eliana Tech — Proposal Template

> This is the template the proposal agent uses to generate client proposals.
> Every `{{variable}}` maps to an audit form field or a computed value.
> The pricing agent runs the 6-step algorithm first and hands off the final price, tier, and scope.

---

# GROWTH PROPOSAL

**Prepared for:** {{fullName}}, {{companyName}}
**Industry:** {{playbook.industryName}} | **Growth Stage:** {{growthLevel.label}}
**Date:** {{currentDate}}
**Prepared by:** Mia Louviere, Eliana Tech
**Valid for:** 14 days

---

## 1. EXECUTIVE SUMMARY

{{fullName}},

Based on your Business Automation Audit, your business scored **{{auditScore}}/100** on our automation readiness scale.

{{IF auditScore < 40}}
There is massive untapped potential in {{companyName}}. The gap between where you are and where AI-optimized businesses in your industry operate represents **{{fmt$(execReport.totalAtStake)}}** in lost revenue and wasted capacity every year.
{{ELSE IF auditScore < 70}}
You are leaving money on the table. You have a solid foundation, but critical system gaps are costing you revenue and time that automation can recover. The estimated annual cost of these gaps is **{{fmt$(execReport.totalAtStake)}}**.
{{ELSE}}
You are ahead of most businesses in your space. The opportunity now is AI infrastructure that compounds your existing momentum — more revenue from the same inputs, without adding headcount.
{{END}}

### Critical Findings

{{FOR EACH execReport.finding}}
**{{finding.type | uppercase}}: {{finding.label}}** — {{finding.value}}
{{finding.detail}}

{{END}}

---

## 2. WHERE YOU STAND

### Your Scores vs. Industry Benchmarks

| Metric | Your Business | Industry Target | Gap |
|--------|--------------|-----------------|-----|
{{FOR EACH benchmark}}
| {{benchmark.metric}} | {{benchmark.yours}} | {{benchmark.benchmark}} | {{benchmark.gap OR "On Track"}} |
{{END}}

### Score Breakdown

| Category | Score | What This Means |
|----------|-------|-----------------|
| Revenue | {{sub.revenue}}/100 | {{categoryInsight('Revenue')}} |
| Automation | {{sub.automation}}/100 | {{categoryInsight('Automation')}} |
| Acquisition | {{sub.acquisition}}/100 | {{categoryInsight('Acquisition')}} |
| Retention | {{sub.retention}}/100 | {{categoryInsight('Retention')}} |
| Time | {{sub.time}}/100 | {{categoryInsight('Time')}} |
| **Overall** | **{{auditScore}}/100** | |

### Your Growth Stage: {{growthLevel.label}}

{{growthLevel.insight}}

---

## 3. THE PROBLEMS AND WHAT THEY COST YOU

{{IF churn is critical}}
### Revenue Leaking from Churn
Your {{churnRate}}% churn rate is costing an estimated **{{fmt$(annualChurnLoss)}}/year**. That is money you already earned and lost because there is no automated retention system in place.
{{END}}

{{IF automation is low}}
### Operations Gap
{{100 - automatedPct}}% of your recurring operations are manual. Businesses at your stage that automate 60%+ generate 2-3x more revenue per employee and command higher exit multiples.
{{END}}

{{IF twoWeeksOff === 'No'}}
### Owner Dependency Risk
Your business cannot function without your direct involvement. This caps your growth ceiling, suppresses your valuation, and is a leading cause of founder burnout. You told us you work {{hoursPerWeek}} hours per week and only {{highValueWork}} of that is on high-value work.
{{END}}

{{IF conversion is low}}
### Conversion Underperformance
Your conversion rate is significantly below what AI-optimized businesses in your category achieve. A 2x improvement requires no new traffic — just better systems and automated follow-up.
{{END}}

**Total value at stake if these gaps persist 12 months: {{fmt$(execReport.totalAtStake)}}**

---

## 4. WHAT WE RECOMMEND

{{IF tier === 'multi-system'}}

### Multi-System Build — {{finalPrice}}

Based on your audit, we are building 3-5 connected systems targeting your highest-impact opportunities:

{{FOR EACH topOpportunities}}
**{{index}}. {{opp.title}}**
{{opp.desc}}
- Projected ROI: {{opp.roi}}
- Timeline: {{opp.timeline}}
{{END}}

#### What Is Included

| Deliverable | Details |
|-------------|---------|
| Strategy session | 60-minute deep-dive into your audit, tools, and priorities |
| 3-5 connected systems | {{system1.name}}, {{system2.name}}, {{system3.name}} + integrations |
| CRM + pipeline configuration | Set up and connect your core customer management |
| Integration layer | Connect your {{toolCount}} existing tools into unified workflows |
| KPI dashboard | Real-time tracking: {{industryMetrics}} |
| Training | 2 live sessions + recorded SOPs for your team |
| 30-day support | Active monitoring, tuning, and troubleshooting |

#### Your 90-Day Roadmap

| Phase | Timeline | Deliverables |
|-------|----------|-------------|
| Install + Configure | Days 1-14 | {{phase1.items}} |
| Optimize + Tune | Days 15-30 | {{phase2.items}} |
| Monitor + Scale | Days 31-90 | Track results, tune, plan Phase 2 expansion |

{{ELSE IF tier === 'full-build'}}

### Full Build — {{finalPrice}}

Your audit reveals a business ready for complete AI infrastructure. Here is every system we will build, sequenced by impact.

#### Phase 1 — Foundation (Month 1)

| System | Problem It Solves | Projected Value |
|--------|------------------|-----------------|
{{FOR EACH systemArchitecture WHERE phase === 1}}
| {{system.name}} | {{system.problem}} | {{system.value}} |
{{END}}

#### Phase 2 — Optimization (Months 2-3)

| System | Problem It Solves | Projected Value |
|--------|------------------|-----------------|
{{FOR EACH systemArchitecture WHERE phase === 2}}
| {{system.name}} | {{system.problem}} | {{system.value}} |
{{END}}

#### Phase 3 — Scale (Months 3-4)

| System | Problem It Solves | Projected Value |
|--------|------------------|-----------------|
{{FOR EACH systemArchitecture WHERE phase === 3}}
| {{system.name}} | {{system.problem}} | {{system.value}} |
{{END}}

#### What Is Included

| Deliverable | Details |
|-------------|---------|
| Full strategy + architecture | Complete 9-system architecture document |
| Phase 1 build | All 3 foundation systems — live in month 1 |
| Phase 2 build | All 3 optimization systems — live in months 2-3 |
| Phase 3 build | All 3 scale systems — live in months 3-4 |
| AI delegation layer | Your business runs without you daily |
| Revenue intelligence dashboard | Real-time view of all KPIs |
| ROI tracking | Monthly reports: actual savings vs. projections |
| Team training | Up to 4 sessions + full SOP library + videos |
| 90-day optimization | Active monitoring, tuning, and A/B testing |
| Full documentation | Complete handoff at month 4 |

{{ELSE IF tier === 'ai-native'}}

### AI-Native Operations — {{finalPrice}}

This is a full business transformation. Everything in the Full Build plus custom AI agents, multi-department integration, and an ongoing strategic partnership.

#### Everything in Full Build, plus:

| Deliverable | Details |
|-------------|---------|
| Custom AI agent development | Purpose-built agents for your specific workflows |
| Multi-department integration | Sales, support, marketing, ops, finance — all connected |
| Advanced predictive analytics | Forecasting, anomaly detection, opportunity scoring |
| Custom reporting + BI layer | Executive dashboards, board-ready reports |
| 6-month retainer | Dedicated strategist for continuous optimization |
| Quarterly business reviews | Data-driven strategy sessions with recommendations |
| Priority support | Same-day response, dedicated Slack channel |

{{END}}

---

## 5. ROI PROJECTION

Based on your specific audit data:

| Metric | Current State | After Implementation | Annual Impact |
|--------|--------------|---------------------|---------------|
| Revenue lost to churn | {{fmt$(annualChurnLoss)}}/yr | {{fmt$(annualChurnLoss * 0.5)}}/yr | **+{{fmt$(annualChurnLoss * 0.5)}} recovered** |
| Hours on automatable tasks | {{hoursPerWeek}} hrs/wk | {{projectedHoursAfter}} hrs/wk | **{{hoursSaved}} hrs/wk freed** |
| Support/admin load | {{supportHoursPerWeek}} hrs/wk | {{projectedSupportAfter}} hrs/wk | **{{supportHoursSaved}} hrs/wk freed** |
| Conversion rate | {{currentConversion}} | {{projectedConversion}} | **{{conversionLift}} improvement** |
| Can step away for 2 weeks | {{twoWeeksOff}} | Yes | **Owner freedom** |

### The Math

- **Time recovered:** {{hoursSaved}} hrs/wk x $75/hr x 52 weeks = **{{fmt$(timeSavingsAnnual)}}/year**
- **Churn revenue recovered:** {{fmt$(annualChurnLoss * 0.3)}} to {{fmt$(annualChurnLoss * 0.5)}}/year
- **Conversion lift:** Even a 50% improvement on current rate = **{{fmt$(conversionRevenueLift)}}/year**
- **Conservative total first-year gain:** {{fmt$(totalProjectedGain)}}

**For every $1 you invest, you get back approximately ${{roiMultiple}} in year one.**

---

## 6. WHY ELIANA TECH

{{IF vertical === 'online'}}
We specialize in automation infrastructure for online businesses — course creators, coaches, SaaS founders, and digital product companies. We understand the economics of digital businesses: high margins, scale leverage, and the critical role of onboarding, retention, and content systems.
{{ELSE IF vertical === 'local'}}
We build automation systems for service businesses — HVAC, plumbing, dental, construction, and restaurants. Every missed call is a lost job. Every unreviewed service is a missed referral. Every manual process is time you should be spending on growth.
{{ELSE IF vertical === 'professional'}}
We build automation infrastructure for professional services firms — agencies, law firms, accounting practices, and real estate. Your time IS your product. Every hour on admin, proposals, and chasing clients is an hour not spent on billable work.
{{ELSE}}
We build automation systems for product businesses — e-commerce, DTC brands, and manufacturers. Scale means handling more volume without proportional cost increases. Every manual process limits your throughput.
{{END}}

**What makes us different:**
- We build from YOUR data. Every system in this proposal comes from your specific audit answers.
- We sequence by impact. Phase 1 systems pay for Phase 2.
- We hand you the keys. Every system comes with documentation, training, and SOPs. You own everything.
- We track ROI. Monthly reports show exactly what the systems generate.

---

## 7. THE COST OF WAITING

Every month without these systems:

| What You Lose | Monthly Cost |
|---------------|-------------|
| Revenue lost to churn | {{fmt$(monthlyChurnLoss)}} |
| Hours on automatable work | {{monthlyHoursWasted}} hours |
| Missed conversion revenue | {{fmt$(monthlyConversionLoss)}} |
| Owner time trapped in operations | {{monthlyOwnerHoursWasted}} hours |

**Total cost of inaction over 12 months: {{fmt$(execReport.totalAtStake)}}**

Your investment in this proposal pays for itself in approximately {{paybackPeriod}}.

---

## 8. INVESTMENT + NEXT STEPS

### Recommended: {{tierName}} — {{finalPrice}}

{{IF tier !== 'ai-native'}}
### Want to go bigger?
{{nextTierUp.name}} — {{nextTierUp.priceRange}}
{{nextTierUp.shortDescription}}
{{END}}

### Payment Options

| Option | Details |
|--------|---------|
| **Pay in Full** | {{finalPrice}} {{IF payInFullDiscount}}({{discountPct}}% off = **{{discountedPrice}}**){{END}} |
| **Two Payments** | {{halfPrice}} to start, {{halfPrice}} at midpoint |
| **Three Payments** | {{thirdPrice}} x 3 months |

### To Move Forward

1. Reply to this email or book a call: **cal.com/mia-louviere-a4n2hk/30min**
2. We finalize scope, timeline, and payment structure
3. Kickoff within 48 hours of agreement

---

## 9. WHAT HAPPENS AFTER YOU SAY YES

| Step | Timeline | What Happens |
|------|----------|-------------|
| Kickoff Call | Day 1 | Deep-dive: your tools, access, priorities |
| System Design | Days 2-3 | Full architecture map — your sign-off |
| Phase 1 Build | Weeks 1-2 | Foundation systems go live |
| Phase 1 Review | Week 3 | Review metrics, tune, adjust |
{{IF tier !== 'multi-system'}}
| Phase 2 Build | Weeks 3-5 | Optimization systems go live |
| Phase 2 Review | Week 6 | Full performance review |
| Phase 3 Build | Weeks 6-10 | Scale systems go live |
| Final Handoff | Weeks 10-12 | Documentation, training, SOPs, owner walkthrough |
{{ELSE}}
| Optimization | Weeks 3-4 | Monitor, tune, A/B test |
| Handoff | Week 4 | Documentation, training, SOPs |
{{END}}

---

## APPENDIX: YOUR AUDIT DATA

| Field | Your Answer |
|-------|------------|
| Business Type | {{businessType}} |
| Current Revenue | {{currentRevenue}} |
| Revenue Trend | {{revenueTrend}} |
| Profit Margin | {{profitMargin}} |
| 12-Month Goal | {{revenueGoal}} |
| Biggest Bottleneck | {{bottleneck}} |
| Team Size | {{teamSize}} |
| Price Point | {{productPricePoint}} |
| Platform | {{platform}} |
| List / Customer Size | {{listSize}} |
| Traffic Source | {{trafficSource}} |
| Conversion Rate | {{conversionRate}} |
| Churn Rate | {{churnRate}} |
| Hours / Week | {{hoursPerWeek}} |
| High-Value Work % | {{highValueWork}} |
| Support Hours / Week | {{supportHoursPerWeek}} |
| Onboarding Automated | {{onboardingAutomated}} |
| Can Take 2 Weeks Off | {{twoWeeksOff}} |
| Pain Level | {{painLevel}}/10 |
| % Automated | {{percentAutomated}} |
| Tools Used | {{tools}} |
| Problems | {{problems}} |
| Excitement Level | {{excitementLevel}} |
| Timeline | {{startDate}} |
| Investment Comfort | {{growthBudget}} |
| Decision Maker | {{decisionMaker}} |
| Keeps Up At Night | {{keepsUpAtNight}} |
| Biggest Time Waste | {{biggestTimeWaste}} |
| #1 Goal (12 Months) | {{next12MonthsGoal}} |

---

## PROPOSAL AGENT HANDOFF CHECKLIST

Before generating this proposal, the pricing agent must provide ALL of the following:

| Item | Required |
|------|----------|
| Client info (name, company, email, phone, website, vertical) | YES |
| All 5 category scores + overall score | YES |
| Intent signals (pain, excitement, timeline, budget, decision maker) | YES |
| Tier selected + reasoning (include any override notes) | YES |
| Final price (after complexity, ROI ceiling, discounts) | YES |
| Top 3 problems (what is broken, what it costs, what we fix) | YES |
| Money math (current revenue, projected gain, ROI calculation) | YES |
| Scope of work (which systems, which phase) | YES |
| Payment terms (which option selected) | YES |
| Special notes (overrides, discounts, PE flag, special requests) | IF APPLICABLE |

---

*This proposal was generated from your Eliana Tech Business Automation Audit. All projections are estimates based on industry benchmarks and your self-reported data. Actual results may vary.*

*Questions? Reply to this email or book a call: cal.com/mia-louviere-a4n2hk/30min*
