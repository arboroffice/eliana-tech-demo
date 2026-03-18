import { IndustryContent } from '../industry-data';

export const homeServicesCIndustries: IndustryContent[] = [
    {
        slug: "locksmith-services",
        name: "Locksmith Services",
        hook: "Someone Is Locked Out Right Now. Your Phone Went to Voicemail.",
        problem: "Locksmith calls are emergencies — locked out of a car at midnight, broken lock after a break-in, new employee needing access. If you do not answer in 30 seconds, they are calling the next locksmith on Google. Your commercial contracts go unrenewed because you are too busy running emergency calls to manage the relationship.",
        operatorProblem: "Locksmith revenue is won or lost in the first 30 seconds of a call. We install the AI that answers every call instantly, dispatches the closest tech, and builds the commercial contract business that creates stable recurring revenue between emergency calls.",
        result: "Locksmiths capture 100% of emergency calls, build $5K-15K in monthly commercial contract revenue, and optimize mobile routing to reduce response times by 40%.",
        dreamVision: "Imagine a locksmith shop answering every emergency call in under 10 seconds and securing five-figure commercial contracts while you sleep.",
        industryStats: [
            { stat: "100%", label: "Call Capture" },
            { stat: "10s", label: "Speed to Lead" },
            { stat: "40%", label: "Faster Response" }
        ],
        useCases: [
            { title: "The Midnight Lockout", scenario: "Customer is locked out of their car at 2 AM.", outcome: "AI answers, provides a transparent quote, and has the nearest tech dispatched within 60 seconds." }
        ],
        comparisonTable: [
            { category: "Emergency Calls", without: "Voicemail (Wasted)", withAI: "Instant Booking (Booked)" },
            { category: "Contracts", without: "Manual (Rarely done)", withAI: "Autonomous Prospecting" }
        ],
        processSteps: [
            { step: 1, title: "Call Audit", description: "Mapping your missed emergency revenue." },
            { step: 2, title: "Dispatch Launch", description: "Deploying your unlimited AI response unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for the emergency-driven locksmith business.",
                examples: [
                    { title: "The Instant Emergency Responder", detail: "AI that answers every locksmith call within 10 seconds, identifies the service type, provides an ETA and price range, and dispatches the nearest available tech.", roi: "Captures $5,000-10,000/month in previously lost emergency revenue." },
                    { title: "Commercial Contract Builder", detail: "AI that targets property managers, offices, and retail locations for master key systems, access control, and recurring re-key contracts.", roi: "Builds $5K-15K/month in recurring commercial revenue." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered locksmith operations.",
                areas: [
                    { area: "Emergency Dispatch", detail: "AI that handles all calls, dispatches the nearest tech, provides ETAs, and manages the real-time queue of emergency jobs.", impact: "Zero missed calls. Fastest response times in the market." },
                    { area: "Commercial Development", detail: "AI that prospects commercial accounts, manages access control proposals, and handles recurring re-key schedules.", impact: "Steady commercial revenue between emergency calls." }
                ]
            },
            custom: {
                title: "The Locksmith OS",
                description: "AI for locksmith companies with multiple mobile techs.",
                features: [
                    "Instant call answering with emergency triage",
                    "Real-time mobile tech tracking and dispatch",
                    "Commercial access control management",
                    "Digital key system record keeping"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle true emergency calls at 2 AM?", a: "Yes. The AI answers 24/7 within 10 seconds, qualifies the emergency type, gives a price range, and dispatches your nearest tech." },
            { q: "How does it know which tech to send?", a: "It tracks every tech via GPS in real-time, cross-references their current job status, and skillset to dispatch the fastest responder." }
        ],
        layers: [{ department: "Dispatch Control", roles: ["Emergency Concierge", "Account Manager"], tasks: ["Triage midnight calls", "Prospect property managers"] }]
    },
    {
        slug: "carpet-cleaning",
        name: "Carpet Cleaning",
        hook: "They Googled You, Called You, Got Voicemail, and Called Your Competitor.",
        problem: "Carpet cleaning is a commodity — customers think every company is the same. They call three companies and book whoever answers first. Your average ticket is too low because techs do not upsell stain protection or furniture moving. You clean the carpet, leave, and never hear from that customer again because you have no system to bring them back.",
        operatorProblem: "The carpet cleaning companies that win are not the cheapest — they are the fastest to answer, the best at upselling, and the most consistent at getting customers to rebook. We install the AI that answers every call, upsells every job, and turns one-time cleanings into lifetime customers.",
        result: "Carpet cleaning companies increase average ticket size by 40%, build 30%+ recurring customer base, and capture every inbound lead with sub-30-second response times.",
        dreamVision: "Imagine a cleaning business where your average ticket is 40% higher than your competitor's and 30% of your revenue is recurring on autopilot.",
        industryStats: [
            { stat: "40%", label: "Ticket Increase" },
            { stat: "30%", label: "Recurring Base" },
            { stat: "30s", label: "Max Response" }
        ],
        useCases: [
            { title: "The Pet Stain Pivot", scenario: "Customer calls for a basic cleaning but has 2 dogs.", outcome: "AI suggests a specialized pet-enzyme treatment and stain protector, increasing the ticket from $185 to $295 automatically." }
        ],
        comparisonTable: [
            { category: "Ticket size", without: "Generic (Low margin)", withAI: "Optimized (High margin)" },
            { category: "Retention", without: "One-off", withAI: "Recurring Membership" }
        ],
        processSteps: [
            { step: 1, title: "Ticket Audit", description: "Finding your biggest upsell missed opportunities." },
            { step: 2, title: "Reactivation Launch", description: "Deploying your automated lifetime-value engine." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools that turn commodity carpet cleaning into a premium recurring business.",
                examples: [
                    { title: "The Upsell Maximizer", detail: "AI that automatically presents stain protection, pet odor treatment, upholstery cleaning, and tile & grout add-ons via text before every appointment.", roi: "Average ticket size increases from $180 to $260+." },
                    { title: "The Reactivation Engine", detail: "AI that contacts every past customer at 6, 9, and 12 months after their last cleaning with personalized offers.", roi: "Reactivates 25-35% of past customers each cycle." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered carpet cleaning operations at scale.",
                areas: [
                    { area: "Revenue Optimization", detail: "AI that manages upselling before and during every job, presents add-on services, and handles post-job follow-up.", impact: "Revenue per job increases by 40%+." },
                    { area: "Customer Lifecycle", detail: "AI that manages the full customer journey from first clean to recurring plan.", impact: "Customer lifetime value triples." }
                ]
            },
            custom: {
                title: "The Carpet Cleaning OS",
                description: "Complete AI infrastructure for carpet cleaning companies scaling past $500K.",
                features: [
                    "24/7 call answering with instant room-based pricing",
                    "Pre-appointment upsell automation via text and email",
                    "Recurring cleaning plan management and billing",
                    "Customer reactivation campaigns at optimal intervals"
                ]
            }
        },
        faq: [
            { q: "How does the upselling work without feeling pushy?", a: "The AI sends a pre-appointment text that presents add-on services as helpful options — stain protection to keep carpets cleaner longer, pet treatment if they have animals." },
            { q: "Can it really bring back old customers?", a: "Yes. It tracks exactly when they last had a cleaning and reaches out at 6-month intervals with a personalized 'time for a refresh' offer." }
        ],
        layers: [{ department: "Revenue Ops", roles: ["Upsell Strategist", "Retention Specialist"], tasks: ["Draft pre-job offers", "Reactivate 6-month leads"] }]
    },
    {
        slug: "water-damage-restoration",
        name: "Water Damage Restoration",
        hook: "A Pipe Burst at 3 AM. Your Phone Rang Once and Stopped.",
        problem: "Water damage calls are emergencies with $5,000-50,000 tickets — and the company that answers first gets the job. Period. You are losing six-figure annual revenue to missed after-hours calls. Insurance paperwork buries your office staff. Your drying equipment sits in the warehouse because you cannot coordinate enough jobs to keep it deployed.",
        operatorProblem: "Restoration is the highest-ticket emergency service in home services. Every missed call is not a $200 loss — it is a $10,000-50,000 loss. We install the AI that answers every call in under 15 seconds, dispatches crews immediately, and handles the insurance documentation that chokes your operations.",
        result: "Restoration companies capture 100% of emergency calls, reduce insurance documentation time by 70%, and increase equipment utilization to 85%+.",
        dreamVision: "Imagine a restoration company where every $20k flood call is caught instantly and insurance paperwork is finished before the fans even shut off.",
        industryStats: [
            { stat: "100%", label: "Lead Capture" },
            { stat: "70%", label: "Faster Documentation" },
            { stat: "85%+", label: "Equipment ROI" }
        ],
        useCases: [
            { title: "The Midnight Flood", scenario: "A main water line bursts in a finished basement at 3 AM.", outcome: "AI answers, triages the severity, gives immediate DIY mitigation steps, and dispatched the on-call crew in 45 seconds." }
        ],
        comparisonTable: [
            { category: "Documentation", without: "Manual (Slow/Error-prone)", withAI: "IICRC-Compliant (Fast)" },
            { category: "Deployment", without: "Reactive", withAI: "Predictive (Based on drying cycles)" }
        ],
        processSteps: [
            { step: 1, title: "Response Audit", description: "Hardening your emergency failover systems." },
            { step: 2, title: "Insurance Node Launch", description: "Deploying your automated documentation agent." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for the high-stakes, high-ticket restoration business.",
                examples: [
                    { title: "The Emergency Triage Responder", detail: "AI that answers every water damage call within 10 seconds, assesses the severity, and dispatches the on-call tech.", roi: "Captures $10,000-50,000/month in previously lost emergency revenue." },
                    { title: "Insurance Documentation Automator", detail: "AI that generates moisture mapping reports and IICRC-compliant drying logs for adjuster submission.", roi: "Documentation time drops by 70%. Claims get approved 30% faster." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered restoration company operations.",
                areas: [
                    { area: "Emergency Response", detail: "AI that handles all emergency calls 24/7, triages severity, and dispatches crews.", impact: "100% call capture. Fastest response time in the market." },
                    { area: "Insurance & Documentation", detail: "AI that generates compliant documentation and manages adjuster communication.", impact: "Insurance approval rates increase to 95%+." }
                ]
            },
            custom: {
                title: "The Restoration Company OS",
                description: "Complete AI infrastructure for restoration companies doing $1M+ in revenue.",
                features: [
                    "24/7 emergency call answering with severity triage",
                    "IICRC-compliant documentation and insurance submission",
                    "Real-time equipment tracking and deployment optimization",
                    "Plumber and insurance agent referral automation"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle true emergencies at 3 AM?", a: "Yes. It answers in under 10 seconds, assesses the situation, and dispatches your on-call crew immediately." },
            { q: "How does it help with insurance adjusters?", a: "It generates IICRC-compliant documentation that adjusters need to approve claims fast, reducing back-and-forth and claim denials." }
        ],
        layers: [{ department: "Emergency Ops", roles: ["Incident Commander", "Claims Bot"], tasks: ["Triage midnight floods", "Sync drying logs to Xactimate"] }]
    },
    {
        slug: "kitchen-bathroom-remodeling",
        name: "Kitchen & Bath Remodeling",
        hook: "You Give 10 Estimates a Month. You Close 2. The Rest Never Hear From You Again.",
        problem: "Remodeling is a high-ticket, long-cycle purchase. Homeowners are anxious and compare multiple builders. If you aren't following up with inspiration, financing, and social proof for 6 weeks straight, you are losing $40k jobs to the guys who do.",
        operatorProblem: "Remodelers are usually great craftsmen but poor follow-up artists. We install the AI that nurtures every high-ticket lead for 45 days, following up with material ideas and financing options until they sign.",
        result: "Remodelers increase close rates by 35% and reduce pre-construction overhead by 50%.",
        dreamVision: "Imagine a remodeling firm where every $50k lead is nurtured with material inspiration and financing options for 45 days on autopilot.",
        industryStats: [
            { stat: "35%", label: "Close Rate Hike" },
            { stat: "45-Day", label: "Nurture Cycle" },
            { stat: "50%", label: "Less Admin Overhead" }
        ],
        useCases: [
            { title: "The $60k Kitchen Ghost", scenario: "Customer gets an estimate for a full kitchen remodel but goes silent.", outcome: "AI follows up over 6 weeks with financing options and similar project photos, securing the project without a single manual call." }
        ],
        comparisonTable: [
            { category: "Follow-up", without: "Manual (Inconsistent)", withAI: "Persistent (45-day sequence)" },
            { category: "Pre-Planning", without: "Endless Emails", withAI: "AI Material Concierge" }
        ],
        processSteps: [
            { step: 1, title: "Pipeline Audit", description: "Mapping your current lead-to-signed-contract leak points." },
            { step: 2, title: "Nurture Node Launch", description: "Deploying your high-ticket follow-up agent." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for high-ticket remodeling sales.",
                examples: [
                    { title: "The 45-Day Nurture Engine", detail: "AI that follows up on $30k+ remodeling quotes with material ideas, financing, and past project photos for 6 weeks.", roi: "Close rate increases from 20% to 35%." },
                    { title: "Material Concierge", detail: "AI that helps customers choose finishes and fixtures, answering questions about lead times and durability.", roi: "Reduces pre-construction admin by 40 hours/project." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered remodeling business operations.",
                areas: [
                    { area: "Sales & Estimating", detail: "AI that manages the entire high-ticket sales cycle from intake to signed contract.", impact: "Pipeline value converts 30% faster." },
                    { area: "Project Coordination", detail: "AI that manages vendor lead times, material orders, and client updates.", impact: "Project delays reduced by 40%." }
                ]
            },
            custom: {
                title: "The Remodeling OS",
                description: "Complete AI infrastructure for remodeling firms doing $2M+.",
                features: [
                    "High-ticket nurture automation (45-60 days)",
                    "Material selection and ordering coordination",
                    "Vendor lead time tracking and alerting",
                    "Automated client project updates"
                ]
            }
        },
        faq: [
            { q: "How long is the follow-up sequence?", a: "We typically run it for 45-60 days, as high-ticket remodeling choices take time. It keeps you top-of-mind while the customer makes their decision." },
            { q: "Can it handle custom material questions?", a: "Yes. It uses your specific preferred vendor data to answer questions about durability, lead times, and finishes." }
        ],
        layers: [{ department: "High-Ticket Sales", roles: ["Nurture Specialist", "Material Concierge"], tasks: ["Follow up on $50k quotes", "Track fixture lead times"] }]
    }
];
