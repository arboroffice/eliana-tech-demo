import { IndustryContent } from '../industry-data';

export const realEstateIndustries: IndustryContent[] = [
    {
        slug: "real-estate-agents-teams",
        name: "Real Estate Agents & Teams",
        hook: "Your Leads Are Dying While You Show Houses.",
        problem: "You generate leads from Zillow, Realtor.com, Facebook, and open houses. But you are too busy showing properties to follow up. By the time you call back, they have talked to three other agents.",
        operatorProblem: "The average agent loses 60% of inbound leads to slow response time. That is not a marketing problem — it is an operations failure. We build the system that responds in under 60 seconds, nurtures for months, and books the showing without you lifting a finger.",
        result: "Agents reclaim 20+ hours per week and close 30% more deals because no lead goes untouched.",
        dreamVision: "Imagine a real estate business where 100% of Zillow leads are called in 30 seconds and your inbox is only full of confirmed showing appointments.",
        industryStats: [
            { stat: "30%", label: "More Closings" },
            { stat: "20hr", label: "Saved Weekly" },
            { stat: "60s", label: "Response Time" }
        ],
        useCases: [
            { title: "The Midnight Zillow Lead", scenario: "A buyer clicks 'Request Info' on a $1.2M listing at 11:30 PM.", outcome: "AI responds immediately, qualifies their timeline/budget, and has a showing booked for 10 AM before you even wake up." }
        ],
        comparisonTable: [
            { category: "Speed to Lead", without: "Hours (Manual)", withAI: "Seconds (Instant)" },
            { category: "Database Nurture", without: "Generic (Ignored)", withAI: "Personalized (High Engagement)" }
        ],
        processSteps: [
            { step: 1, title: "Lead Audit", description: "Plugging the leaks in your Zillow/Realtor.com spend." },
            { step: 2, title: "Concierge Launch", description: "Deploying your 24/7 AI ISA (Inside Sales Agent)." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "Targeted AI tools that fix the biggest holes in your real estate business.",
                examples: [
                    { title: "The Speed-to-Lead Engine", detail: "AI that responds to every Zillow, Realtor.com, and website lead in under 60 seconds with personalized messages based on the listing they viewed.", roi: "3x increase in lead-to-appointment conversion." },
                    { title: "The Long-Term Nurture Machine", detail: "AI that follows up with cold and warm leads over 6-18 months with market updates and personalized check-ins.", roi: "Resurrects 15-20% of 'dead' database leads." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI transformation for your real estate operations.",
                areas: [
                    { area: "Lead Management", detail: "AI that qualifies, scores, and routes every inbound lead based on timeline, budget, and motivation.", impact: "Zero leads fall through the cracks." },
                    { area: "Transaction Coordination", detail: "AI that manages timelines, deadlines, and document collection from contract to close.", impact: "Eliminates 80% of TC workload." }
                ]
            },
            custom: {
                title: "The Agent Operating System",
                description: "Ground-up rebuild of your entire real estate practice on AI infrastructure.",
                features: [
                    "Custom CRM with AI-powered lead scoring and routing",
                    "Automated listing-to-close transaction management",
                    "Neighborhood-specific market intelligence dashboard",
                    "Predictive analytics for identifying likely sellers"
                ]
            }
        },
        faq: [
            { q: "How fast can the AI respond to new leads?", a: "Under 60 seconds. The moment a lead hits your CRM, the AI sends a personalized text referencing the exact property they viewed." },
            { q: "Will my clients know they are talking to AI?", a: "The AI communicates in your voice and tone. Most clients assume it is you or your assistant. You stay in control — the AI just makes sure nobody gets ignored." }
        ],
        layers: [{ department: "Sales Operations", roles: ["AI ISA", "Nurture Bot"], tasks: ["Triage Zillow leads", "Follow up on old database"] }]
    },
    {
        slug: "property-management-companies",
        name: "Property Management",
        hook: "Your Tenants Call at 2 AM. Your Owners Want Reports at 8 AM. You Are Drowning.",
        problem: "You manage hundreds of units. Maintenance requests pile up, tenant screening takes forever, and owner reporting eats up your entire Friday. Your team is buried in reactive work.",
        operatorProblem: "Property managers lose 40% of their capacity to tasks that should be automated — maintenance triage, tenant communication, and lease administration. We build the system that handles the operational grind.",
        result: "Property managers add 30% more units without adding headcount and reduce owner churn by 50%.",
        dreamVision: "Imagine a portfolio where security deposits are never late, maintenance is triaged without a human call, and owners get monthly reports with zero manual data entry.",
        industryStats: [
            { stat: "30%", label: "Unit Capacity Growth" },
            { stat: "50%", label: "Lower Owner Churn" },
            { stat: "75%", label: "Less Maintenance Friction" }
        ],
        useCases: [
            { title: "The 2 AM Leak", scenario: "Tenant texts about a leaking faucet in the middle of the night.", outcome: "AI triages the severity, identifies the likely parts, and dispatches the preferred plumbing vendor automatically." }
        ],
        comparisonTable: [
            { category: "Maintenance Triage", without: "Manual (Slow)", withAI: "Autonomous (Instant)" },
            { category: "Screening", without: "Days (Manual)", withAI: "Hours (AI-Driven)" }
        ],
        processSteps: [
            { step: 1, title: "Operational Audit", description: "Finding your biggest administrative bottlenecks." },
            { step: 2, title: "Triage Node Launch", description: "Deploying your 24/7 tenant and vendor agent." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools purpose-built for the operational demands of property management.",
                examples: [
                    { title: "24/7 Maintenance Request Triage", detail: "AI that receives maintenance requests, triages by severity, dispatches the appropriate vendor, and keeps the tenant informed.", roi: "Reduces after-hours emergency calls by 75%." },
                    { title: "Owner Reporting Engine", detail: "AI that compiles financials and occupancy metrics into branded owner reports and distributes them on schedule.", roi: "Saves 10+ hours per month on owner reporting." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "End-to-end AI transformation for property management companies.",
                areas: [
                    { area: "Maintenance Operations", detail: "AI that handles the full maintenance lifecycle from request intake through vendor dispatch.", impact: "Maintenance runs on autopilot." },
                    { area: "Leasing & Occupancy", detail: "AI that manages vacancy marketing, showing coordination, and lease execution.", impact: "Units fill 40% faster." }
                ]
            },
            custom: {
                title: "The PM Command Center",
                description: "A comprehensive AI operating system built for property management companies ready to scale.",
                features: [
                    "Unified maintenance request intake and vendor dispatch",
                    "Automated leasing pipeline from marketing to execution",
                    "Real-time portfolio dashboard with financial analytics",
                    "Tenant communication platform with 24/7 response"
                ]
            }
        },
        faq: [
            { q: "How does the AI handle emergency maintenance?", a: "The AI triages every request using criteria you define. True emergencies get immediate vendor dispatch and tenant notification." },
            { q: "What software do you integrate with?", a: "We integrate with AppFolio, Buildium, Rent Manager, and Yardi." }
        ],
        layers: [{ department: "Asset Ops", roles: ["Portfolio Concierge", "Maintenance Triage"], tasks: ["Automate owner reports", "Dispatch emergency vendors"] }]
    },
    {
        slug: "mortgage-brokers",
        name: "Mortgage Brokers",
        hook: "Rates Dropped. Your Database Doesn't Know. Your Competitor Already Called Them.",
        problem: "You have 500+ past clients, but you only talk to them when they need a new loan. When rates move, you can't call everyone fast enough. Your processors spend 20 hours a week chasing bank statements and paystubs. Leads from realtors go cold because you're in the middle of a closing.",
        operatorProblem: "Mortgage brokerage is a game of speed and persistence. The broker who answers the realtor's lead in 60 seconds and follows up with the borrower 10 times wins. We install the AI that automates the document chase and nurtures your database until they are ready to refi or buy.",
        result: "Mortgage brokers increase their pipeline conversion by 40% and cut processing time in half through automated document collection.",
        dreamVision: "Imagine a mortgage business where every lead is qualified in seconds and your 1003s are pre-populated with AI-verified documents.",
        industryStats: [
            { stat: "40%", label: "Pipeline Growth" },
            { stat: "50%", label: "Lower Process Time" },
            { stat: "10x", label: "Better Follow-up" }
        ],
        useCases: [
            { title: "The Document Chase", scenario: "A borrower forgets to upload their updated W2 for 3 days.", outcome: "AI follows up politely via text every 24 hours, explaining exactly why the W2 is needed, securing it before it hits the underwriter's desk." }
        ],
        comparisonTable: [
            { category: "Doc Collection", without: "Manual chasing (Slow)", withAI: "Autonomous (Relentless)" },
            { category: "Lead Response", without: "Hours (Manual)", withAI: "Seconds (Instant)" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Finding where active borrowers are stalling in the doc chase." },
            { step: 2, title: "Refi Node Launch", description: "Deploying your rate-trigger database agent." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for mortgage lead nurture and document processing.",
                examples: [
                    { title: "Automated Document Concierge", detail: "AI that follows up with borrowers to collect paystubs, statements, and tax returns, verifying they are the correct files before notifying the processor.", roi: "Processing time drops by 15 hours per file." },
                    { title: "Rate-Trigger Database Nurture", detail: "AI that monitors your entire past client list and sends a personalized video message the moment a refi opportunity hits their specific strike price.", roi: "Captures 3x more refi volume during rate drops." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered mortgage brokerage operations.",
                areas: [
                    { area: "Sales & Origination", detail: "AI that handles inbound lead qualification, provides instant rate quotes, and schedules consultations.", impact: "Origination volume increases 40%." },
                    { area: "Processing & Closing", detail: "AI that manages the document chase, coordinates with title and insurance, and keeps all parties updated on milestone status.", impact: "Time-to-close drops by 20%." }
                ]
            },
            custom: {
                title: "The Mortgage Broker OS",
                description: "Complete AI infrastructure for mortgage brokers.",
                features: [
                    "Automated document collection and verification",
                    "Personalized database nurture with rate alerts",
                    "Realtor partner co-marketing automation",
                    "Predictive lead scoring for borrower motivation"
                ]
            }
        },
        faq: [
            { q: "Is the AI compliant with mortgage regulations?", a: "Yes. All communications are logged and transparent, and we do not store sensitive borrower PII outside of your secure LOS." },
            { q: "Can it integrate with Encompass or Calyx?", a: "Yes, we integrate with major LOS (Loan Origination Systems) to sync document status and borrower data." }
        ],
        layers: [{ department: "Origination Ops", roles: ["Lead Concierge", "Doc Follow-up"], tasks: ["Qualify realtor leads", "Chase missing paystubs"] }]
    },
    {
        slug: "home-inspection-services",
        name: "Home Inspection",
        hook: "Your Reports Are Great. Your Booking System Is a Voicemail.",
        problem: "In a hot market, inspections need to happen in 48-72 hours. If a realtor or buyer calls and you don't answer, they call the next inspector on the list. You're crawling in an attic and can't pick up. Your reports take 3 hours to write after you get home, killing your evenings.",
        operatorProblem: "Inspection companies are won or lost on response time and report delivery speed. We install the AI that books the inspection instantly and helps you finish the report before you even leave the property.",
        result: "Inspectors increase booking rates by 30% and save 10+ hours per week on report writing.",
        dreamVision: "Imagine an inspection business that books up 2 weeks in advance while you're focused on the job, and your reports are delivered the same day without evening work.",
        industryStats: [
            { stat: "30%", label: "Booking Increase" },
            { stat: "10hr", label: "Saved Weekly" },
            { stat: "Zero", label: "Missed Calls" }
        ],
        useCases: [
            { title: "The Attic Call", scenario: "You're in a tight crawlspace when a top-producing realtor calls to book a home inspection.", outcome: "AI answers, checks your calendar, confirms the time slot, and sends the agreement/invoice — all while you're still in the crawlspace." }
        ],
        comparisonTable: [
            { category: "Booking", without: "Voicemail (Wasted)", withAI: "Instant (Booked)" },
            { category: "Reporting", without: "Manual (Evening work)", withAI: "AI-Assisted (On-site)" }
        ],
        processSteps: [
            { step: 1, title: "Calendar Audit", description: "Mapping your most frequent missed booking windows." },
            { step: 2, title: "Concierge Launch", description: "Deploying your 24/7 realtor-facing agent." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for home inspection booking and reporting.",
                examples: [
                    { title: "The 24/7 Booking Agent", detail: "AI that answers calls and texts, qualifies the property (sq ft, age), checks your calendar, and secures the deposit.", roi: "Captures 30% more bookings annually." },
                    { title: "Report Summary Engine", detail: "AI that takes your field notes and photos to generate clear, concise summaries for realtors to use in repair negotiations.", roi: "Realtors love you because you save them time, leading to more referrals." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered inspection business operations.",
                areas: [
                    { area: "Sales & Referral", detail: "AI that manages your realtor relationships, sending thank-you notes and marketing updates to keep you top-of-mind.", impact: "Repeat referral rate increases 25%." },
                    { area: "Operations", detail: "AI that manages agreements, insurance requirements, and payment collection for every job.", impact: "Admin overhead drops to near-zero." }
                ]
            },
            custom: {
                title: "The Inspection Company OS",
                description: "Complete AI infrastructure for home inspectors.",
                features: [
                    "Instant booking and calendar management",
                    "Automated agreements and invoice collection",
                    "Realtor partner relationship management",
                    "AI-assisted report summary generation"
                ]
            }
        },
        faq: [
            { q: "Can it handle pricing based on square footage?", a: "Yes. It asks the size and age of the home (and extra features like pools or crawlspaces) and quotes your exact rate-card pricing." },
            { q: "Can it integrate with ISN or Spectora?", a: "Yes, we integrate with major inspection platforms to sync schedules and report data." }
        ],
        layers: [{ department: "Client Experience", roles: ["Booking Concierge", "Realtor Liaison"], tasks: ["Qualify inspections", "Send thank-you gifts"] }]
    },
    {
        slug: "storage-facilities",
        name: "Storage Facilities",
        hook: "Your Units Are Empty While Prospects Are Hunting on Google.",
        problem: "Prospects shop for storage at 8 PM. If your site doesn't have an instant way to book or your phone goes to voicemail, they go to the facility two blocks away. You have 20% vacancy that's costing you $5k a month in unrealized NOI. Your current manager spends all day answering the same 5 questions about unit sizes.",
        operatorProblem: "Self-storage is a convenience game. Most facilities lose business because they make it too hard to rent a unit. We install the AI that answers every question about unit sizes, gate access, and insurance — then books the unit and collects the payment 24/7.",
        result: "Storage facilities increase occupancy by 15% and cut manager admin time by 60%.",
        dreamVision: "Imagine a storage facility that runs at 96% occupancy with an AI manager that handles 100% of the late-night rentals and billing questions.",
        industryStats: [
            { stat: "15%", label: "Occupancy Jump" },
            { stat: "60%", label: "Less Admin Time" },
            { stat: "24/7", label: "Rental Capability" }
        ],
        useCases: [
            { title: "The Sunday Move-In", scenario: "Someone is moving casas on a Sunday and needs a 10x20 unit immediately.", outcome: "AI answers their call, confirms the unit is available, takes payment, and texts them the gate code in 3 minutes." }
        ],
        comparisonTable: [
            { category: "Rentals", without: "Office Hours Only", withAI: "24/7 (Autonomous)" },
            { category: "Inquiries", without: "Voicemail (Wasted)", withAI: "Instant Answer (Converted)" }
        ],
        processSteps: [
            { step: 1, title: "Vacancy Audit", description: "Mapping your lost revenue from empty units." },
            { step: 2, title: "Rental Node Launch", description: "Deploying your 24/7 digital manager." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for self-storage rental and tenant support.",
                examples: [
                    { title: "The 24/7 Rental Concierge", detail: "AI that explains unit sizes, checks availability, processes leases, and issues gate codes via phone or text.", roi: "Captures 15% more rentals, especially after-hours." },
                    { title: "Delinquency Recovery Bot", detail: "AI that follows up politely with late-paying tenants via multi-channel outreach until the balance is paid.", roi: "Reduces delinquencies by 40%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered storage facility operations.",
                areas: [
                    { area: "Tenant Management", detail: "AI that handles billing questions, insurance updates, and gate access issues without needing a manager.", impact: "Admin overhead drops 60%." },
                    { area: "Marketing & Growth", detail: "AI that manages Google Business reviews and follows up on web inquiries for large commercial units.", impact: "Online ranking improves, driving more local traffic." }
                ]
            },
            custom: {
                title: "The StorageOS",
                description: "Complete AI infrastructure for self-storage facilities.",
                features: [
                    "Automated leasing and gate code issuance",
                    "24/7 tenant support and billing assistance",
                    "Smart delinquency and collections management",
                    "Google Review and local SEO automation"
                ]
            }
        },
        faq: [
            { q: "How does the AI know our unit availability?", a: "We integrate directly with your facility management software (SiteLink, StorEdge, etc.) to see real-time inventory." },
            { q: "Can it handle move-outs too?", a: "Yes. It guides the tenant through the move-out notice process and provides instructions for cleaning and lock removal." }
        ],
        layers: [{ department: "Facility Ops", roles: ["Digital Manager", "Lease Bot"], tasks: ["Rent units 24/7", "Collect late payments"] }]
    }
];
