import { IndustryContent } from '../industry-data';

export const realEstateIndustries: IndustryContent[] = [
    {
        slug: "real-estate-agents",
        name: "Real Estate Agents",
        hook: "Your Leads Are Dying While You Show Houses.",
        problem: "You generate leads from Zillow, Realtor.com, Facebook, and open houses. But you are too busy showing properties to follow up. By the time you call back, they have talked to three other agents. Your CRM is a graveyard of cold contacts because you do not have a system — you have a to-do list.",
        operatorProblem: "The average agent loses 60% of inbound leads to slow response time. That is not a marketing problem — it is an operations failure. We build the system that responds in under 60 seconds, nurtures for months, and books the showing without you lifting a finger.",
        result: "Agents reclaim 20+ hours per week and close 30% more deals because no lead goes untouched.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "Targeted AI tools that fix the biggest holes in your real estate business.",
                examples: [
                    { title: "The Speed-to-Lead Engine", detail: "AI that responds to every Zillow, Realtor.com, and website lead in under 60 seconds with personalized messages based on the listing they viewed.", roi: "3x increase in lead-to-appointment conversion." },
                    { title: "The Long-Term Nurture Machine", detail: "AI that follows up with cold and warm leads over 6-18 months with market updates, new listings, and personalized check-ins until they are ready to buy or sell.", roi: "Resurrects 15-20% of 'dead' database leads." },
                    { title: "Listing Presentation Architect", detail: "AI that compiles comp data, market trends, and personalized seller net sheets into a branded listing presentation in under 5 minutes.", roi: "Saves 3-4 hours per listing appointment prep." },
                    { title: "The Open House Follow-Up Bot", detail: "AI that captures open house sign-in data and triggers personalized follow-up sequences within minutes of the event ending.", roi: "Doubles open house lead conversion rates." },
                    { title: "Automated Showing Feedback Collector", detail: "AI that contacts buyers after showings to collect feedback and relays it to the listing agent in a structured report.", roi: "Eliminates the 'did they like it?' guessing game." },
                    { title: "Client Anniversary & Referral Engine", detail: "AI that tracks past client move-in dates and triggers anniversary gifts, market updates, and referral requests on autopilot.", roi: "Generates 2-3 additional referrals per month." },
                    { title: "MLS Listing Optimizer", detail: "AI that writes SEO-optimized listing descriptions, suggests optimal pricing based on absorption rates, and auto-syndicates across 50+ portals.", roi: "Listings get 40% more views in the first 72 hours." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI transformation for your real estate operations.",
                areas: [
                    { area: "Lead Management", detail: "AI that qualifies, scores, and routes every inbound lead based on timeline, budget, and motivation level — before you ever pick up the phone.", impact: "Zero leads fall through the cracks." },
                    { area: "Transaction Coordination", detail: "AI that manages timelines, deadlines, document collection, and vendor coordination from contract to close.", impact: "Eliminates 80% of TC workload." },
                    { area: "Marketing & Content", detail: "AI that creates listing descriptions, social media posts, email campaigns, and neighborhood guides tailored to your farm area.", impact: "Consistent marketing output without a marketing hire." },
                    { area: "Client Communication", detail: "AI that sends weekly market updates, transaction status updates, and post-close check-ins to every client in your database.", impact: "Clients feel personally attended to at scale." }
                ]
            },
            custom: {
                title: "The Agent Operating System",
                description: "Ground-up rebuild of your entire real estate practice on AI infrastructure.",
                features: [
                    "Custom CRM with AI-powered lead scoring and routing",
                    "Automated listing-to-close transaction management",
                    "Neighborhood-specific market intelligence dashboard",
                    "Integrated social media content generation and posting",
                    "Automated seller reporting with real-time showing analytics",
                    "Predictive analytics for identifying likely sellers in your farm area",
                    "Voice AI for after-hours lead capture and appointment booking"
                ]
            }
        },
        faq: [
            { q: "How fast can the AI respond to new leads?", a: "Under 60 seconds. The moment a lead hits your CRM from Zillow, Realtor.com, your website, or a Facebook ad, the AI sends a personalized text or email referencing the exact property they viewed. Speed-to-lead is the single biggest factor in conversion, and we make sure you win that race every time." },
            { q: "Will my clients know they are talking to AI?", a: "The AI communicates in your voice and tone. Most clients assume it is you or your assistant. If a conversation requires your personal touch, the AI flags it and hands off seamlessly. You stay in control — the AI just makes sure nobody gets ignored." },
            { q: "I already have a CRM. Do I need to switch?", a: "No. We integrate with Follow Up Boss, KV Core, Sierra Interactive, BoomTown, and most major real estate CRMs. The AI layers on top of your existing tools — it does not replace them." },
            { q: "How long does it take to set up?", a: "Most agents are fully operational within 7-10 days. We handle the integrations, build your follow-up sequences, and train the AI on your market area and communication style before anything goes live." }
        ]
    },
    {
        slug: "real-estate-builders",
        name: "Real Estate Builders",
        hook: "You Build Homes. Your Sales Process Is Still Stuck in the Mud.",
        problem: "You spend millions on model homes, billboards, and digital ads to drive traffic. But when a buyer visits your website at 9 PM or walks into a model home on a Sunday, there is no one qualified to capture that interest. Your sales team juggles 50 prospects at different stages and half of them go cold because follow-up is inconsistent. You are losing buyers to the builder down the street who simply responded faster.",
        operatorProblem: "Builders lose 40% of qualified buyer interest between first inquiry and first meeting. The gap is not marketing — it is the inability to engage, qualify, and nurture at the speed and scale modern buyers expect. We build the system that captures every prospect and moves them toward a contract without your sales team drowning in manual tasks.",
        result: "Builders convert 35% more website and model home visitors into contracted buyers while cutting sales team admin time in half.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "Targeted AI tools built for the unique challenges of new construction sales.",
                examples: [
                    { title: "Model Home Visitor Capture System", detail: "AI-powered kiosk and follow-up system that collects visitor information at model homes and triggers personalized sequences with floor plans, pricing, and community details within minutes.", roi: "Captures 3x more visitor data than paper sign-in sheets." },
                    { title: "Lot Inventory & Availability Engine", detail: "AI that tracks available lots, upcoming releases, and pricing in real time and automatically updates buyers on new availability matching their preferences.", roi: "Reduces lot release inquiry volume by 60%." },
                    { title: "Construction Progress Communicator", detail: "AI that sends automated photo updates, milestone notifications, and timeline updates to buyers throughout the build process.", roi: "Cuts buyer anxiety calls to the sales office by 70%." },
                    { title: "Design Center Pre-Selector", detail: "AI that guides buyers through design options and upgrades before their design center appointment, pre-loading selections and estimated costs.", roi: "Reduces design center appointment time by 40%." },
                    { title: "Warranty & Post-Close Support Bot", detail: "AI that handles warranty requests, schedules service appointments, and manages the 30/60/90 day and 1-year walk-through process.", roi: "Eliminates 80% of repetitive warranty inquiry calls." },
                    { title: "Referral & Resale Nurture System", detail: "AI that stays in touch with past buyers, sends home maintenance tips, and systematically generates referrals and resale opportunities.", roi: "Generates 4-6 referral leads per community per month." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "End-to-end AI transformation across your homebuilding sales and operations.",
                areas: [
                    { area: "Sales Operations", detail: "AI that qualifies online leads, scores buyer readiness, and routes hot prospects to the right community sales agent with full context.", impact: "Sales agents spend time selling, not sorting leads." },
                    { area: "Buyer Communication", detail: "AI that manages all pre-sale, during-construction, and post-close communication sequences across email, text, and portal.", impact: "Every buyer feels personally managed without manual effort." },
                    { area: "Inventory & Pricing", detail: "AI that monitors absorption rates, competitor pricing, and lot inventory to recommend pricing adjustments and release timing.", impact: "Data-driven pricing decisions instead of gut calls." },
                    { area: "Warranty & Service", detail: "AI that triages warranty requests, schedules trades, and tracks resolution — giving your warranty team a structured workflow instead of inbox chaos.", impact: "Warranty resolution time drops by 50%." }
                ]
            },
            custom: {
                title: "The Builder Command Center",
                description: "A ground-up AI operating system purpose-built for production homebuilders.",
                features: [
                    "Unified buyer journey tracking from first website visit to post-close",
                    "AI-powered lot release and pricing optimization engine",
                    "Automated construction milestone communication with photo integration",
                    "Design center pre-selection and upgrade recommendation system",
                    "Real-time community sales dashboard with predictive absorption analytics",
                    "Integrated warranty management and trade scheduling platform",
                    "Voice AI for after-hours buyer inquiries and appointment scheduling"
                ]
            }
        },
        faq: [
            { q: "Can this integrate with our existing builder CRM like Lasso or NewStar?", a: "Yes. We integrate with Lasso, NewStar, Hubspot, Salesforce, and most builder-specific CRMs. The AI layers on top of your existing system and enhances it — no rip-and-replace required." },
            { q: "How does the AI handle different communities with different floor plans and pricing?", a: "The AI is configured per community with its own inventory, pricing, floor plans, and lot maps. Buyers get hyper-specific responses about the community they are interested in, not generic corporate messaging." },
            { q: "Will this replace our on-site sales agents?", a: "No. It makes them dramatically more effective. The AI handles the qualification, follow-up, and admin work so your sales agents can focus on high-value face-to-face interactions and closing contracts." }
        ]
    },
    {
        slug: "real-estate-developers",
        name: "Real Estate Developers",
        hook: "Your Projects Are Worth Millions. Your Investor and Buyer Pipeline Runs on Spreadsheets.",
        problem: "You manage complex developments with dozens of stakeholders — investors, buyers, city planners, contractors. But your investor updates are manual, your pre-sale pipeline lives in Excel, and your marketing team cannot keep up with content demands across multiple projects. Every hour you spend on admin is an hour not spent on the next deal.",
        operatorProblem: "Developers lose momentum and investor confidence when communication gaps emerge across long project timelines. The problem is not deal quality — it is the inability to systematically manage relationships, reporting, and pipeline at scale. We build the infrastructure that keeps every stakeholder informed and every lead nurtured across your entire portfolio.",
        result: "Developers close pre-sales 40% faster and reduce investor reporting time from days to minutes.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools designed for the complexity of real estate development.",
                examples: [
                    { title: "Investor Update Automator", detail: "AI that compiles project milestones, financial performance, and construction progress into polished investor reports and distributes them on a set schedule.", roi: "Saves 15+ hours per month on investor communications." },
                    { title: "Pre-Sale Pipeline Manager", detail: "AI that captures buyer interest, manages deposits, tracks unit selection, and nurtures prospects through the reservation-to-contract journey.", roi: "Increases pre-sale conversion rates by 25%." },
                    { title: "Entitlement & Permitting Tracker", detail: "AI that monitors permit applications, zoning hearing schedules, and regulatory deadlines, sending alerts when action is needed.", roi: "Eliminates missed deadlines and costly project delays." },
                    { title: "Market Feasibility Analyzer", detail: "AI that aggregates comparable sales, absorption rates, demographic data, and rental yields to generate project feasibility summaries in minutes.", roi: "Cuts feasibility analysis time from weeks to hours." },
                    { title: "Stakeholder Communication Hub", detail: "AI that manages segmented communications to investors, buyers, brokers, and city officials — each getting the right information at the right time.", roi: "No more 'I did not know about this' calls from stakeholders." },
                    { title: "Project Marketing Content Engine", detail: "AI that generates brochures, email campaigns, social media content, and listing descriptions customized per project phase and target audience.", roi: "Consistent marketing output across all active projects." },
                    { title: "Closing & Settlement Coordinator", detail: "AI that manages the closing pipeline, tracks document completion, and coordinates between attorneys, title companies, and buyers.", roi: "Reduces closing delays by 35%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI transformation for development companies managing multiple projects.",
                areas: [
                    { area: "Investor Relations", detail: "AI that manages investor communications, capital call tracking, distribution reporting, and K-1 document coordination across all active funds and projects.", impact: "Investor satisfaction increases while IR headcount stays flat." },
                    { area: "Sales & Pre-Leasing", detail: "AI that manages the full buyer and tenant pipeline from inquiry through contract execution with automated nurturing and status tracking.", impact: "Pre-sale and pre-lease velocity increases by 30%." },
                    { area: "Project Administration", detail: "AI that tracks entitlements, permits, contractor milestones, and budget variances across your entire portfolio from a single dashboard.", impact: "Portfolio-wide visibility without the spreadsheet chaos." },
                    { area: "Marketing & Positioning", detail: "AI that creates and distributes project-specific marketing materials, manages broker outreach campaigns, and tracks campaign performance.", impact: "Marketing keeps pace with project timelines automatically." }
                ]
            },
            custom: {
                title: "The Developer Command Center",
                description: "A comprehensive AI operating system for multi-project real estate development firms.",
                features: [
                    "Portfolio-wide project dashboard with real-time status tracking",
                    "Automated investor reporting and capital management system",
                    "AI-powered pre-sale and pre-lease pipeline management",
                    "Entitlement and permitting deadline tracking with smart alerts",
                    "Market feasibility and comp analysis engine",
                    "Multi-project marketing automation and content generation",
                    "Stakeholder communication platform with role-based access"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle multiple projects with different investor groups?", a: "Absolutely. Each project is siloed with its own investor list, reporting cadence, and financial data. Investors only see what pertains to their projects, and you get a unified view across your entire portfolio." },
            { q: "How does this work for mixed-use developments with both sales and leasing?", a: "The system manages both pipelines independently. Condo buyers and commercial tenants each get their own nurturing sequences, document workflows, and communication tracks — all under one roof." },
            { q: "Is our financial data secure?", a: "All data is encrypted in transit and at rest. We integrate with your existing accounting systems via secure APIs and never store sensitive financial data outside your approved platforms." },
            { q: "How long does implementation take for a multi-project firm?", a: "We typically onboard one project in the first 2 weeks as a pilot, then roll out across your portfolio over 30-45 days. Each project gets its own configuration tailored to its stage and stakeholder requirements." }
        ]
    },
    {
        slug: "real-estate-firms",
        name: "Real Estate Firms",
        hook: "Your Agents Are Your Product. But You Have No System to Scale Them.",
        problem: "You recruit agents, provide leads, and offer support — but every agent runs their business differently. Some thrive, most struggle. Your top producers hoard their processes. New agents churn within 18 months because they cannot figure out how to convert the leads you give them. Your brokerage grows agent count but not per-agent production.",
        operatorProblem: "Real estate firms struggle with agent productivity variance — the top 20% produce 80% of the revenue. The problem is not talent — it is that there is no standardized system for lead conversion, client management, and transaction execution. We build the operating system that lifts every agent's production by giving them AI-powered infrastructure they could never build themselves.",
        result: "Firms increase per-agent production by 35% and reduce new agent ramp-up time from 12 months to 4 months.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools that give your entire firm a competitive edge.",
                examples: [
                    { title: "Firm-Wide Lead Distribution Engine", detail: "AI that scores, qualifies, and distributes incoming leads to agents based on expertise, availability, past performance, and geographic specialization.", roi: "Lead-to-close rates increase 25% through better matching." },
                    { title: "Agent Onboarding Accelerator", detail: "AI that guides new agents through a structured onboarding program with automated training sequences, script libraries, and milestone tracking.", roi: "New agents make their first sale 60% faster." },
                    { title: "Transaction Compliance Monitor", detail: "AI that reviews every transaction file for compliance issues, missing documents, and regulatory requirements before they become problems.", roi: "Reduces compliance violations by 90%." },
                    { title: "Recruiting & Retention Pipeline", detail: "AI that identifies potential recruits, automates outreach sequences, tracks interview stages, and nurtures candidates through your value proposition.", roi: "Doubles recruiting pipeline volume without additional recruiter headcount." },
                    { title: "Firm Performance Dashboard", detail: "AI that aggregates agent production, lead conversion, and revenue metrics into real-time dashboards with trend analysis and early warning alerts.", roi: "Spot underperformance 30 days earlier." },
                    { title: "Commission & Split Calculator", detail: "AI that automatically calculates commissions, splits, cap tracking, and bonus thresholds for every agent on every transaction.", roi: "Eliminates commission disputes and accounting errors." },
                    { title: "Brand & Marketing Standards Engine", detail: "AI that generates compliant marketing materials, social media posts, and listing content that meet firm branding standards for every agent.", roi: "Consistent brand presence across all agents." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Enterprise-level AI transformation for brokerage operations.",
                areas: [
                    { area: "Lead Generation & Distribution", detail: "AI that manages all inbound lead sources, qualifies prospects, and intelligently distributes them to the best-matched agent with full context and suggested scripts.", impact: "Every lead gets the right agent, every time." },
                    { area: "Agent Development", detail: "AI that tracks agent performance, identifies skill gaps, recommends training, and automates coaching workflows for team leaders and managers.", impact: "Systematic agent development instead of ad-hoc mentoring." },
                    { area: "Operations & Compliance", detail: "AI that manages transaction files, monitors regulatory compliance, handles commission calculations, and automates administrative workflows.", impact: "Back office runs at 50% of current headcount needs." },
                    { area: "Recruiting & Culture", detail: "AI that builds and nurtures a recruiting pipeline, automates interview scheduling, tracks retention metrics, and identifies flight-risk agents.", impact: "Recruiting becomes a system, not a scramble." }
                ]
            },
            custom: {
                title: "The Brokerage Operating System",
                description: "A complete AI-powered platform that transforms how your firm operates at every level.",
                features: [
                    "Intelligent lead scoring, qualification, and agent-matching engine",
                    "Automated agent onboarding and continuous development platform",
                    "Real-time firm-wide performance analytics and forecasting",
                    "Transaction management with built-in compliance monitoring",
                    "Commission tracking with automated split calculations and cap management",
                    "Recruiting pipeline automation with candidate nurturing sequences",
                    "Branded marketing asset generator with firm compliance controls"
                ]
            }
        },
        faq: [
            { q: "How do agents feel about AI being integrated into their workflow?", a: "Agents love it once they see it in action. The AI handles the tasks they hate — follow-up, paperwork, compliance checks — so they can focus on what they got into real estate to do: sell homes and build relationships. Adoption rates exceed 85% within the first month." },
            { q: "Can different teams or offices have different configurations?", a: "Yes. Each office, team, or division can have its own lead routing rules, training sequences, and performance benchmarks. The firm gets a unified view, but the experience is tailored at the team level." },
            { q: "Will this work with our existing tech stack?", a: "We integrate with all major brokerage platforms including dotloop, SkySlope, BrokerSumo, Moxi, and kvCORE. The AI enhances your existing tools rather than replacing them." },
            { q: "What is the ROI timeline for a firm with 50+ agents?", a: "Most firms see measurable improvements in lead conversion and agent productivity within 30-45 days. Full ROI — including reduced admin costs and increased per-agent production — typically materializes within 90 days." }
        ]
    },
    {
        slug: "real-estate-brokers",
        name: "Real Estate Brokers",
        hook: "You Close Deals. But the Deals You Miss Haunt Your Pipeline.",
        problem: "You are juggling active listings, buyer clients, negotiations, and prospecting all at once. Your phone rings constantly, your inbox is a disaster, and the leads from last month that you meant to follow up on have gone completely cold. You know the money is in the follow-up, but there are only so many hours in the day. The broker who responds fastest wins — and right now, that is not always you.",
        operatorProblem: "High-producing brokers hit a ceiling because they cannot scale personal relationships beyond their own bandwidth. Every deal requires their direct involvement, and every missed follow-up is lost revenue. We build the system that multiplies your capacity — responding instantly, nurturing persistently, and only pulling you in when a deal is ready to close.",
        result: "Brokers increase their transaction volume by 40% without adding team members or working more hours.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools built for high-volume brokers who need to scale without sacrificing quality.",
                examples: [
                    { title: "Instant Inquiry Response System", detail: "AI that responds to every buyer and seller inquiry within 60 seconds with context-aware messaging that references the specific property, neighborhood, or service they asked about.", roi: "Captures 3x more leads during evenings and weekends." },
                    { title: "Seller Prospecting Autopilot", detail: "AI that identifies likely sellers based on equity position, length of ownership, and life events, then runs personalized outreach campaigns on your behalf.", roi: "Generates 8-12 listing leads per month on autopilot." },
                    { title: "Offer & Negotiation Tracker", detail: "AI that tracks multiple active offers, counteroffers, deadlines, and contingencies in real time, alerting you when action is needed.", roi: "Never miss an offer deadline or contingency date again." },
                    { title: "Client Review & Testimonial Generator", detail: "AI that follows up with closed clients to collect reviews, post them to Google and Zillow, and request referrals at the optimal time post-close.", roi: "Doubles your review count within 6 months." },
                    { title: "Market Report Automator", detail: "AI that generates branded monthly market reports for your farm area and distributes them to your database via email and social media.", roi: "Positions you as the local market expert without the research time." },
                    { title: "Sphere of Influence Nurture Engine", detail: "AI that maintains ongoing personalized contact with your entire sphere — birthdays, home anniversaries, market updates, and check-ins — so you stay top of mind.", roi: "Increases sphere referrals by 40%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full operational AI transformation for broker-led practices.",
                areas: [
                    { area: "Lead Capture & Qualification", detail: "AI that captures leads from all sources, qualifies them based on timeline and motivation, and delivers only ready-to-act prospects to your calendar.", impact: "You only talk to people ready to transact." },
                    { area: "Active Deal Management", detail: "AI that tracks every active transaction, manages deadlines, coordinates with title, lending, and inspection parties, and keeps all clients informed.", impact: "Transaction management runs itself." },
                    { area: "Prospecting & Farming", detail: "AI that runs systematic geographic and demographic prospecting campaigns with personalized direct mail, email, and digital ad sequences.", impact: "Consistent pipeline generation without daily hustle." },
                    { area: "Reputation & Marketing", detail: "AI that manages your online presence, generates content, collects reviews, and ensures your brand is visible across all channels consistently.", impact: "Marketing happens daily without your involvement." }
                ]
            },
            custom: {
                title: "The Broker Growth Engine",
                description: "A full AI-powered operating system designed to help elite brokers scale beyond personal capacity.",
                features: [
                    "Unified lead capture and instant response across all channels",
                    "AI-powered prospecting and seller identification system",
                    "Active deal tracking with automated deadline and contingency management",
                    "Sphere of influence nurturing with personalized touch sequences",
                    "Automated market report generation and distribution",
                    "Review generation and online reputation management platform",
                    "Voice AI for after-hours inquiries and appointment scheduling"
                ]
            }
        },
        faq: [
            { q: "I am a solo broker. Is this built for someone my size?", a: "This is built specifically for solo and small-team brokers. The AI acts as your operations team — handling follow-up, admin, and marketing so you can focus on dollar-productive activities. You get the infrastructure of a large team without the overhead." },
            { q: "How does the AI know my market and communication style?", a: "During onboarding, we train the AI on your specific market area, transaction history, communication tone, and client preferences. The result feels like a well-trained assistant who has worked with you for years." },
            { q: "Can I control what the AI says to my clients?", a: "Completely. You approve all messaging templates and sequences before they go live. You can also set rules for when the AI should hand off to you directly. You are always in the driver's seat." }
        ]
    },
    {
        slug: "property-managers",
        name: "Property Managers",
        hook: "Your Tenants Call at 2 AM. Your Owners Want Reports at 8 AM. You Are Drowning in Between.",
        problem: "You manage dozens or hundreds of units. Maintenance requests pile up, tenant screening takes forever, lease renewals slip through the cracks, and owner reporting eats up your entire Friday. Your team is buried in reactive work — fixing what is broken instead of growing the portfolio. Every new property you add makes the chaos worse, not better.",
        operatorProblem: "Property managers lose 30-40% of their operational capacity to tasks that should be automated — maintenance triage, tenant communication, owner reporting, and lease administration. The result is capped growth, burned-out staff, and owners who leave because they feel uninformed. We build the system that handles the operational grind so your team can focus on portfolio growth and owner retention.",
        result: "Property managers add 30% more units to their portfolio without adding headcount and reduce owner churn by 50%.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools purpose-built for the operational demands of property management.",
                examples: [
                    { title: "24/7 Maintenance Request Triage", detail: "AI that receives maintenance requests via text, email, or portal, triages them by severity, dispatches the appropriate vendor, and keeps the tenant informed throughout resolution.", roi: "Reduces after-hours emergency calls by 75%." },
                    { title: "Tenant Screening Accelerator", detail: "AI that processes rental applications, runs background and credit checks, verifies income and references, and delivers a scored recommendation within hours instead of days.", roi: "Cuts vacancy days by filling units 40% faster." },
                    { title: "Lease Renewal Automation", detail: "AI that tracks lease expirations, initiates renewal conversations 90 days out, presents market-adjusted renewal terms, and manages the negotiation and signing process.", roi: "Increases renewal rates by 20% and captures market-rate adjustments." },
                    { title: "Owner Reporting Engine", detail: "AI that compiles financials, maintenance summaries, occupancy metrics, and market comparisons into branded owner reports and distributes them on schedule.", roi: "Saves 10+ hours per month on owner reporting." },
                    { title: "Rent Collection & Delinquency Manager", detail: "AI that automates rent reminders, tracks payments, escalates delinquencies through a structured communication sequence, and coordinates with legal when needed.", roi: "Reduces average delinquency rate by 35%." },
                    { title: "Vacancy Marketing Autopilot", detail: "AI that generates listing descriptions, syndicates across rental platforms, manages showing scheduling, and follows up with prospective tenants automatically.", roi: "Cuts average days-on-market by 50%." },
                    { title: "Vendor Management & Dispatch System", detail: "AI that maintains a scored vendor database, auto-dispatches based on specialty and availability, tracks work completion, and manages invoice approval workflows.", roi: "Reduces vendor coordination time by 60%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "End-to-end AI transformation for property management companies.",
                areas: [
                    { area: "Maintenance Operations", detail: "AI that handles the full maintenance lifecycle from request intake through vendor dispatch, work tracking, quality verification, and tenant follow-up.", impact: "Maintenance runs on autopilot with exception-based management." },
                    { area: "Leasing & Occupancy", detail: "AI that manages vacancy marketing, showing coordination, application processing, screening, and lease execution from listing to move-in.", impact: "Leasing becomes a streamlined pipeline instead of a scramble." },
                    { area: "Owner Relations", detail: "AI that manages all owner communications, financial reporting, capital expenditure approvals, and market intelligence updates across the entire portfolio.", impact: "Owners feel fully informed without constant check-in calls." },
                    { area: "Tenant Experience", detail: "AI that handles tenant communications, community announcements, renewal management, and move-in/move-out coordination to deliver a modern resident experience.", impact: "Tenant satisfaction scores increase measurably." }
                ]
            },
            custom: {
                title: "The Property Management Command Center",
                description: "A comprehensive AI operating system built for property management companies ready to scale.",
                features: [
                    "Unified maintenance request intake, triage, and vendor dispatch platform",
                    "Automated leasing pipeline from vacancy marketing through lease execution",
                    "Real-time portfolio dashboard with occupancy, financial, and maintenance analytics",
                    "Owner reporting automation with branded templates and scheduled distribution",
                    "Tenant communication platform with AI-powered 24/7 response capability",
                    "Vendor management with performance scoring and automated dispatch logic",
                    "Rent collection automation with structured delinquency escalation workflows"
                ]
            }
        },
        faq: [
            { q: "Can this handle both residential and commercial properties?", a: "Yes. The system is configured per property type with appropriate workflows. Residential units get tenant-focused communication and maintenance triage. Commercial properties get lease abstraction, CAM reconciliation support, and tenant improvement tracking." },
            { q: "How does the AI handle emergency maintenance at 2 AM?", a: "The AI triages every request using severity criteria you define. True emergencies — water leaks, gas smells, lockouts — get immediate vendor dispatch and tenant notification. Non-emergencies are queued for next-day handling. You get notified of emergencies instantly but no longer need to personally triage every request." },
            { q: "Will our property owners see the AI communication?", a: "Owner-facing reports and communications are branded to your company. Owners experience polished, professional reporting that looks like it came from a dedicated analyst. They do not see the AI — they see a property management company that communicates better than anyone else." },
            { q: "What property management software do you integrate with?", a: "We integrate with AppFolio, Buildium, Rent Manager, Yardi, and most major PM platforms. The AI works alongside your existing software and fills the gaps in automation and communication that those platforms do not cover." }
        ]
    },
    {
        slug: "commercial-real-estate",
        name: "Commercial Real Estate",
        hook: "Your Deals Take Months. Your Follow-Up System Takes Days Off.",
        problem: "Commercial deals are complex, slow, and relationship-driven. You are tracking LOIs, lease negotiations, tenant reps, and investment sales across a fragmented pipeline. Your deal flow lives in email threads and personal notebooks. When a deal stalls, you lose it — not because the economics changed, but because you forgot to follow up at a critical moment. In CRE, the broker who stays in front of the client wins the assignment.",
        operatorProblem: "Commercial brokers and firms lose deals to inconsistent follow-up and fragmented deal tracking across long sales cycles. The average CRE transaction takes 6-18 months, and most brokers lack the systems to maintain persistent, personalized contact across that timeline. We build the infrastructure that keeps every prospect, tenant, and investor engaged from first meeting through close — and beyond.",
        result: "CRE professionals close 25% more deals annually and reduce deal cycle times by 30% through systematic follow-up and pipeline management.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools engineered for the long cycles and complex relationships of commercial real estate.",
                examples: [
                    { title: "Deal Pipeline Tracker", detail: "AI that manages your entire deal pipeline — prospects, active negotiations, LOIs, due diligence, and closings — with automated status updates and next-step reminders for every deal.", roi: "Zero deals fall through the cracks during long sales cycles." },
                    { title: "Tenant & Buyer Prospecting Engine", detail: "AI that identifies potential tenants and buyers based on business type, space requirements, lease expirations, and growth signals, then runs personalized outreach campaigns.", roi: "Generates 10-15 qualified prospect meetings per month." },
                    { title: "Lease Abstract & Analysis Tool", detail: "AI that reads commercial leases, extracts key terms, calculates effective rents, and flags critical dates including options, escalations, and termination rights.", roi: "Saves 5+ hours per lease analysis." },
                    { title: "Investment Memo Generator", detail: "AI that compiles property financials, market comps, tenant profiles, and risk factors into polished investment memorandums for buyer and investor presentations.", roi: "Creates institutional-quality IMs in hours instead of days." },
                    { title: "Landlord & Owner Reporting System", detail: "AI that generates leasing activity reports, market condition updates, and property performance summaries for property owners on a scheduled basis.", roi: "Keeps owners informed and retains exclusive listings." },
                    { title: "CRE Market Intelligence Feed", detail: "AI that monitors lease comps, sale comps, vacancy rates, new construction, and economic indicators for your target markets and delivers daily briefings.", roi: "Walk into every meeting as the most informed broker in the room." },
                    { title: "Commission & Deal Economics Calculator", detail: "AI that calculates commission splits, co-broke arrangements, and deal economics for complex commercial transactions including net effective rent analyses.", roi: "Eliminates errors in commission calculations and deal projections." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Enterprise-level AI transformation for commercial real estate operations.",
                areas: [
                    { area: "Brokerage Operations", detail: "AI that manages deal flow, tracks all active and pipeline transactions, automates follow-up sequences, and provides leadership with real-time production visibility.", impact: "Full pipeline visibility and accountability across the brokerage." },
                    { area: "Research & Market Intelligence", detail: "AI that aggregates market data, comp databases, and economic indicators to produce on-demand market reports and property valuations.", impact: "Research output triples without adding analysts." },
                    { area: "Client Relationship Management", detail: "AI that maintains systematic contact with tenants, owners, and investors through personalized touch sequences calibrated to relationship stage and deal timeline.", impact: "Relationships never go cold, even across 18-month cycles." },
                    { area: "Marketing & Listings", detail: "AI that creates property marketing materials, manages listing syndication, coordinates tours, and tracks prospect engagement for every active listing.", impact: "Listings get maximum market exposure with minimal manual effort." }
                ]
            },
            custom: {
                title: "The CRE Operating Platform",
                description: "A full AI-powered operating system for commercial real estate firms ready to dominate their market.",
                features: [
                    "Unified deal pipeline management across leasing, sales, and investment transactions",
                    "AI-powered prospecting and tenant identification system",
                    "Automated lease abstraction and financial analysis engine",
                    "Investment memorandum and marketing material generation",
                    "Market intelligence dashboard with comp tracking and trend analysis",
                    "Client relationship automation with long-cycle nurture sequences",
                    "Commission tracking and deal economics calculator for complex structures"
                ]
            }
        },
        faq: [
            { q: "CRE deals are very relationship-driven. Can AI really help here?", a: "That is exactly why it helps. The AI does not replace relationships — it ensures you never drop the ball on one. It remembers every follow-up, tracks every deal milestone, and keeps you in front of your clients consistently. The brokers who win are not always the best negotiators — they are the ones who never disappear during a 12-month deal cycle." },
            { q: "Can the system handle different CRE product types — office, retail, industrial, multifamily?", a: "Yes. The AI is configured by product type with relevant comp databases, market metrics, and communication templates. An industrial lease pursuit gets different treatment than a multifamily investment sale, and the system knows the difference." },
            { q: "How does this integrate with CoStar, LoopNet, or Crexi?", a: "We integrate with the major CRE data platforms to pull comp data, listing information, and market analytics. The AI uses this data to power your prospecting, valuations, and market reports without requiring you to manually pull and format data." },
            { q: "What is the typical setup time for a CRE firm?", a: "Most commercial firms are operational within 2-3 weeks. We start by mapping your deal pipeline, importing your contact database, and configuring your market-specific intelligence feeds. The system starts adding value from day one as it automates your follow-up sequences." }
        ]
    }
];
