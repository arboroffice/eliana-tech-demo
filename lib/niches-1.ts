import { IndustryContent } from "./industry-data";

export const niches1: IndustryContent[] = [
    {
        slug: "storm-restoration",
        name: "Storm Restoration",
        hook: "Chaos is Your Opportunity. But Speed is Your Bottleneck.",
        problem: "When a storm hits, leads flood in. But you're manually trying to organize crews, generate estimates, follow up with insurance adjusters, and keep homeowners calm.",
        operatorProblem: "Every manual follow-up and insurance chase is costing you margin and momentum. We install an AI triage system that qualifies the homeowner, schedules the inspection, and auto-generates the initial paperwork.",
        result: "You capture 3x more jobs per storm event by accelerating speed-to-lead to under 10 seconds.",
        subNiches: ["Wind & Hail Damage", "Flood & Water Mitigation", "Insurance Claim Specialists"],
        geoKeywords: ["Florida", "Texas", "Midwest", "Gulf Coast", "Colorado"],
        services: {
            singleSystems: {
                title: "Response Automation",
                description: "Dominate the impact zone with instant triage.",
                examples: [
                    { title: "The 10-Second Qualifier", detail: "AI that asks damage-specific questions via SMS and instantly routes high-priority claims.", roi: "2x increase in closed storm inspections." },
                    { title: "Insurance Follow-Up Bot", detail: "AI that follows up with adjusters via email and manages the paperwork queue.", roi: "Reclaims 20+ hours per week of admin time." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Complete storm scalability.",
                areas: [
                    { area: "Intake & Triage", detail: "Answers 100% of calls, qualifies damage, and schedules visits.", impact: "Zero missed opportunities during spikes." },
                    { area: "Finance & Supplements", detail: "Automated billing follow-up and supplement tracking.", impact: "Faster cash flow post-storm." }
                ]
            },
            custom: {
                title: "The Restoration OS",
                description: "Built for multi-state storm deployments.",
                features: ["Automated Xactimate data prep", "Multi-crew dynamic routing", "Automated supplement requests", "State-specific compliance trackers"]
            }
        },
        faq: [
            { q: "Can it handle 100 calls a day quando a storm hits?", a: "Yes, our voice AI scales infinitely to handle massive regional spikes instantly." },
            { q: "Does it integrate with my estimator tool?", a: "We build middleware for Xactimate and other major platforms." }
        ],
        dreamVision: "Imagine a storm event where you don't even have to look at your phone. Your crews are dispatched, your supplements are filed, and your homeowners are kept updated 24/7 by a neural system that never sleeps.",
        industryStats: [
            { stat: "300%", label: "Lead Throughput" },
            { stat: "10s", label: "Speed to Lead" },
            { stat: "40%", label: "Admin Reduction" }
        ],
        useCases: [
            { title: "The Hail Surge", scenario: "Hail hits at 2 AM. 200 homeowners call by 8 AM.", outcome: "AI answers every call, qualifies the damage, and populates the inspection route automatically." }
        ],
        comparisonTable: [
            { category: "Lead Intake", without: "Manual (Phone Tag)", withAI: "Instant (10s SMS/Voice)" },
            { category: "Dispatch", without: "Spreadsheets & Texts", withAI: "Automated Fleet Routing" }
        ],
        processSteps: [
            { step: 1, title: "Storm Audit", description: "Mapping your response bottlenecks." },
            { step: 2, title: "Triage Setup", description: "Launching your 24/7 AI response unit." }
        ],
        layers: [{ department: "Sales & Triage", roles: ["Lead Qualifier", "Claim Assistant"], tasks: ["Triage leads", "Gather damage photos"] }]
    },
    {
        slug: "roofing",
        name: "Roofing Companies",
        hook: "Stop Chasing Leads and Let Your System Chase the Checks.",
        problem: "You're spending too much on leads that never answer. Your trucks are disorganized, and your pipeline is inconsistent.",
        operatorProblem: "Your residential roofing operation relies on manual door knocking and phone tag. We install an AI that handles the 15-touch follow-up sequence.",
        result: "Estimators close more deals because they stop knocking on unqualified doors.",
        subNiches: ["Residential Roofing", "Commercial Flat Roofs"],
        geoKeywords: ["Texas", "Florida", "Ohio", "Colorado", "Nationwide"],
        services: {
            singleSystems: {
                title: "Roofing Growth Systems",
                description: "Fix the leaks in your sales funnel.",
                examples: [
                    { title: "The Persistent Estimator", detail: "AI that follows up 15 times via SMS with homeowners who received a quote.", roi: "Closes 15% more outstanding quotes." },
                    { title: "Automated Review Generator", detail: "Requests Google reviews from happy customers upon final payment automatically.", roi: "Builds massive local SEO dominance." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Scale beyond the owner's bandwidth.",
                areas: [
                    { area: "Sales & Estimating", detail: "AI-led qualification and calendar management.", impact: "Doubles efficiency." },
                    { area: "Admin & Support", detail: "24/7 answering for tracking status and scheduling.", impact: "Reclaim 40 hours of admin time weekly." }
                ]
            },
            custom: {
                title: "The Roofing Revenue Engine",
                description: "Complete click-to-final-inspection pipeline.",
                features: ["AI integration to EagleView", "Automated subcontractor payments", "Supplement follow-ups"]
            }
        },
        faq: [
            { q: "Does the AI sound like a real person?", a: "Yes, we use advanced conversational logic including natural pauses." },
            { q: "Can it integrate with Jobber?", a: "Yes, we connect directly to Jobber and other major roofing CRMs." }
        ],
        dreamVision: "Imagine a roofing business where your only job is to review the daily win report. Every lead is nurtured, every crew is confirmed, and your Google reviews grow on autopilot while you sleep.",
        industryStats: [
            { stat: "2x", label: "Closed Jobs" },
            { stat: "15%", label: "Higher Margin" },
            { stat: "Zero", label: "Lead Leakage" }
        ],
        useCases: [
            { title: "The Ghost Lead", scenario: "A homeowner gets a quote but stops answering their phone.", outcome: "AI follows up 15 times over 30 days via SMS, eventually booking the signature call." }
        ],
        comparisonTable: [
            { category: "Follow-up", without: "Manual (Rare)", withAI: "Persistent (15 Touches)" },
            { category: "Booking", without: "Phone Tag", withAI: "Instant On-Calendar" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Finding your biggest lead leaks." },
            { step: 2, title: "Nurture Launch", description: "Deploying your persistent AI chaser." }
        ],
        layers: [{ department: "Pre-Sales", roles: ["Lead Chaser", "Appointment Setter"], tasks: ["Follow up on stale leads", "Gather property details"] }]
    },
    {
        slug: "luxury-real-estate",
        name: "Luxury Real Estate",
        hook: "High-Net-Worth Clients Demand Instant, Perfect Communication.",
        problem: "When a potential buyer inquiries about a $5M property, they expect a concierge experience. Missing that text means losing a six-figure commission.",
        operatorProblem: "Delivering a white-glove experience doesn't scale if you are the only one answering. We build an AI concierge that handles neighborhood details.",
        result: "You provide a billionaire-level concierge experience 24/7 without being glued to your phone.",
        subNiches: ["Ultra-Luxury Residential", "High-End Condos & Penthouses"],
        geoKeywords: ["Beverly Hills", "Miami", "Hamptons", "Aspen", "NYC"],
        services: {
            singleSystems: {
                title: "White-Glove Automations",
                description: "Elevate your property marketing instantly.",
                examples: [
                    { title: "The 24/7 Listing Concierge", detail: "AI that instantly texts buyers property brochures and virtual tours.", roi: "Increases HNW buyer engagement." },
                    { title: "Discreet Buyer Qualifier", detail: "AI that asks polite pre-qualification questions before booking a private showing.", roi: "Saves hours of wasted time." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Operate like a global luxury brand.",
                areas: [
                    { area: "Marketing & Listings", detail: "AI-generated bespoke listing copy and global distribution.", impact: "Maximum property eyeballs." },
                    { area: "Client Experience", detail: "24/7 concierge for existing clients and high-value prospects.", impact: "Unbeatable responsiveness scores." }
                ]
            },
            custom: {
                title: "The Luxury Real Estate OS",
                description: "Bespoke infrastructure for elite agents.",
                features: ["Custom brochures", "Vetted buyer portals", "Global market analytics"]
            }
        },
        faq: [
            { q: "Can it handle complex buyer questions?", a: "Yes, we feed the AI every detail about your listings." },
            { q: "Is buyer privacy protected?", a: "Absolutely. We use high-security nodes and non-disclosure protocols." }
        ],
        dreamVision: "Imagine a world where your listings market themselves globally while you are on vacation. Your buyers are vetted, their tours are scheduled, and your only job is the handshake and final number.",
        industryStats: [
            { stat: "24/7", label: "Global Concierge" },
            { stat: "20%", label: "Faster Closings" },
            { stat: "Zero", label: "Agent Burnout" }
        ],
        useCases: [
            { title: "The International Buyer", scenario: "An investor from Dubai inquiries about a penthouse at 3 AM local time.", outcome: "AI texts them the brochure in Arabic, answers tax questions, and schedules a tour." }
        ],
        comparisonTable: [
            { category: "Client Response", without: "Manual (Hours/Days)", withAI: "Instant (10 Seconds)" },
            { category: "Buyer Vetting", without: "Phone tag and wasted tours", withAI: "Autonomous Pre-Qualification" }
        ],
        processSteps: [
            { step: 1, title: "Listing Audit", description: "Mapping your current HNW client journey." },
            { step: 2, title: "Concierge Deployment", description: "Launching your 24/7 white-glove assistant." }
        ],
        layers: [{ department: "Concierge", roles: ["Listing Assistant", "Buyer Qualifier"], tasks: ["Provide property info", "Vet buyer timeline"] }]
    },
    {
        slug: "med-spas",
        name: "Med Spas",
        hook: "Your Clinic is Full, but Your Staff is Burned Out.",
        problem: "You are spending too much time on admin. Patients are calling constantly, and your front desk is overwhelmed with scheduling and reminders.",
        operatorProblem: "The bottleneck is human interaction for repetitive tasks. We install AI agents that handle booking and patient inquiries 24/7.",
        result: "The clinic runs smoothly with zero missed calls and automated patient nurturing.",
        subNiches: ["Aesthetics Clinics", "Laser Hair Removal Specialists"],
        geoKeywords: ["Nationwide", "Major Metros"],
        services: {
            singleSystems: {
                title: "Practice Automation",
                description: "Streamline your clinic intake.",
                examples: [
                    { title: "The 24/7 Receptionist", detail: "AI that answers every call and text to book appointments.", roi: "30% increase in volume." },
                    { title: "Patient Re-engagement Bot", detail: "AI scans your database to fill cancelled slots and re-call dormant patients.", roi: "Adds $10k-$25k/mo in revenue." }
                ]
            },
            departments: {
                title: "Practice Operations",
                description: "Full-scale clinic automation.",
                areas: [
                    { area: "Patient Reception", detail: "Multi-channel AI intake handling for calls, texts, and social DMs.", impact: "Reclaim 80% bandwidth." },
                    { area: "Clinical Administration", detail: "Automated charting and patient record mapping.", impact: "Reduced provider burnout." }
                ]
            },
            custom: {
                title: "The Med Spa OS",
                description: "Built for modern aesthetic practices.",
                features: ["HIPAA-compliant LLM", "Direct integration to Boulevard/MindBody", "Practice dashboards"]
            }
        },
        faq: [
            { q: "Is the AI secure?", a: "Yes, we use enterprise-grade, HIPAA-compliant security." },
            { q: "Does it work with my booking software?", a: "We integrate with MindBody, Boulevard, and more." }
        ],
        dreamVision: "Imagine a clinic where the only thing your staff does is treat patients. Every call is answered, every trial is closed, and your inventory is managed by an AI eye that never loses track of a single laser pulse.",
        industryStats: [
            { stat: "30%", label: "Patient Growth" },
            { stat: "100%", label: "Inquiry Capture" },
            { stat: "15h", label: "Weekly Admin Recaptured" }
        ],
        useCases: [
            { title: "The Instagram DM", scenario: "An influencer tags your clinic at 9 PM and you get 50 DMs asking for pricing.", outcome: "AI answers every DM, provides the service menu, and books 15 consultations before you wake up." }
        ],
        comparisonTable: [
            { category: "Patient Intake", without: "Manual Phonetag", withAI: "Instant Autonomous Booking" },
            { category: "Re-engagement", without: "Manual (Rare)", withAI: "Continuous AI Nurture" }
        ],
        processSteps: [
            { step: 1, title: "Clinic Audit", description: "Mapping your current patient intake flow." },
            { step: 2, title: "HIPAA Node Launch", description: "Deploying secure AI infrastructure for scheduling." }
        ],
        layers: [{ department: "Patient Coordination", roles: ["Front Desk AI", "Intake Assistant"], tasks: ["Answer inquiries", "Book procedures"] }]
    },
    {
        slug: "commercial-home-services",
        name: "Commercial Home Services",
        hook: "B2B Service Contracts Are Won by the Most Responsive Firm.",
        problem: "Facility managers don't have time for slow replies. If you don't answer their RFP or service call instantly, they move to the next vendor.",
        operatorProblem: "Handling multi-property service requests is an administrative nightmare. We install an AI dispatcher that coordinates everything.",
        result: "You win and retain larger commercial contracts by providing instant, reliable coordination.",
        subNiches: ["HVAC Commercial", "Electrical", "Plumbing", "Janitorial"],
        geoKeywords: ["Industrial Parks", "Retail Centers", "Office Complexes"],
        services: {
            singleSystems: {
                title: "Commercial Dispatch",
                description: "Enterprise-grade service coordination.",
                examples: [
                    { title: "RFP Response Bot", detail: "AI that initial-drafts responses to service RFPs based on your past wins.", roi: "3x faster bid submission." },
                    { title: "Facility Manager Concierge", detail: "A dedicated AI line for facility managers to request emergency service.", roi: "100% contract retention." }
                ]
            },
            departments: {
                title: "Service Operations",
                description: "Automate the commercial lifecycle.",
                areas: [
                    { area: "Contract Management", detail: "AI-monitored SLAs and renewal dates.", impact: "Zero missed renewals." },
                    { area: "Billing & Invoicing", detail: "Automated progress billing for large commercial projects.", impact: "Faster cash cycles." }
                ]
            },
            custom: {
                title: "The Commercial OS",
                description: "Built for scaling service fleets.",
                features: ["Multi-property dashboards", "Vendor portal integration", "Automated compliance audits"]
            }
        },
        faq: [
            { q: "Can it handle complex vendor portals?", a: "Yes, we build custom connectors for major enterprise property tools." },
            { q: "How does it handle emergency dispatch?", a: "AI identifies 'Critical' keywords and immediately triggers your on-call crew." }
        ],
        dreamVision: "Imagine a commercial operation where every facility manager you serve feels like they have a dedicated account manager. The bids go out, the crews go in, and the invoices are paid before you even check your dashboard.",
        industryStats: [
            { stat: "100%", label: "SLA Compliance" },
            { stat: "24/7", label: "Managed Response" },
            { stat: "25%", label: "Faster Invoicing" }
        ],
        useCases: [
            { title: "The Emergency Leak", scenario: "A retail center has a pipe burst at 11 PM.", outcome: "AI triages the urgency, notifies the facility manager it's handled, and dispatches the closest tech." }
        ],
        comparisonTable: [
            { category: "Bid Speed", without: "Manual (Days)", withAI: "AI-Assisted (Hours)" },
            { category: "Status Transparency", without: "Manual Phone calls", withAI: "Instant Portal Updates" }
        ],
        processSteps: [
            { step: 1, title: "Operations Audit", description: "Mapping your contract and dispatch flow." },
            { step: 2, title: "Dispatch Deployment", description: "Launching your commercial AI response layer." }
        ],
        layers: [{ department: "Dispatch", roles: ["AI Scheduler", "Contract Assistant"], tasks: ["Manage work orders", "Track SLA compliance"] }]
    },
    {
        slug: "mortgage-brokers",
        name: "Mortgage Brokers",
        hook: "In a Low-Inventory Market, Speed-to-Pre-Approval is Everything.",
        problem: "Borrowers are shopping multiple brokers. If you don't answer their text or get their docs in the first 10 minutes, you've lost the deal.",
        operatorProblem: "Doc chasing and basic qualification take up 70% of your day. We install an AI processor that handles the boring stuff.",
        result: "You spend your time locked in on high-value advice and closing, not asking for W2s for the fifth time.",
        subNiches: ["Residential Purchase", "Refinance Specialists", "Commercial Lending"],
        geoKeywords: ["Nationwide", "High-Growth Metros"],
        services: {
            singleSystems: {
                title: "Mortgage Intake AI",
                description: "Accelerate the loan lifecycle.",
                examples: [
                    { title: "The 10-Minute Pre-Qualifier", detail: "AI that gathers basic credit/income stats and checks them against guidelines.", roi: "2x more pre-approvals issued." },
                    { title: "Automated Doc Chaser", detail: "Persistent but polite AI that follows up for missing documents.", roi: "Reduces processing time by 4 days." }
                ]
            },
            departments: {
                title: "Loan Operations",
                description: "Autonomous mortgage processing.",
                areas: [
                    { area: "Lead Conversion", detail: "Instant response to Zillow or LendingTree leads.", impact: "4x increase in lead-to-app conversion." },
                    { area: "Processor Support", detail: "AI-assisted document verification and file prep.", impact: "Processor handles 3x the volume." }
                ]
            },
            custom: {
                title: "The Mortgage OS",
                description: "Built for high-volume brokerages.",
                features: ["Direct CRM sync (Encompass/Calyx)", "Secure doc upload portal", "Real-time rate watch AI"]
            }
        },
        faq: [
            { q: "Is the data secure?", a: "Yes, we use SOC2-compliant nodes and bank-grade encryption." },
            { q: "Can it run credit?", a: "We integrate with your credit provider to trigger pulls upon consent." }
        ],
        dreamVision: "Imagine a mortgage desk where every morning you walk in to a stack of completed applications with docs pre-verified. You just have to find the right loan product and hit submit.",
        industryStats: [
            { stat: "4 Days", label: "Faster Processing" },
            { stat: "4.5x", label: "Lead Conversion" },
            { stat: "Zero", label: "Missed Follow-ups" }
        ],
        useCases: [
            { title: "The Weekend Lead", scenario: "A buyer finds a house on Sunday and needs a pre-approval letter.", outcome: "AI gathers their details, verifies income via uploaded docs, and prepares the letter for broker review in minutes." }
        ],
        comparisonTable: [
            { category: "Doc Collection", without: "Manual Phonetag & Emails", withAI: "Autonomous Instant Chasing" },
            { category: "Lead Response", without: "Slow (Hours)", withAI: "Instant (Seconds)" }
        ],
        processSteps: [
            { step: 1, title: "Pipeline Audit", description: "Identifying doc-collection bottlenecks." },
            { step: 2, title: "Intake Launch", description: "Deploying your 24/7 mortgage intake assistant." }
        ],
        layers: [{ department: "Intake", roles: ["Lead Qualifier", "Doc Assistant"], tasks: ["Vet borrower intent", "Verify doc completion"] }]
    },
    {
        slug: "plastic-surgery",
        name: "Plastic Surgery",
        hook: "High-Ticket Consultations Require a High-Touch Digital Experience.",
        problem: "Potential patients are nervous and have 100 questions. If they feel ignored or wait too long for a reply, they book with the clinic across town.",
        operatorProblem: "Answering the same 50 questions about recovery time and pricing is draining your staff. We install an AI Patient Educator.",
        result: "Consultations are higher-quality because patients are already pre-educated and vetted.",
        subNiches: ["Cosmetic Surgery", "Reconstructive Surgery", "Medical Spa Integration"],
        geoKeywords: ["Miami", "LA", "NYC", "Dallas", "Atlanta"],
        services: {
            singleSystems: {
                title: "Patient Concierge AI",
                description: "Elevate your practice's digital touch.",
                examples: [
                    { title: "The Virtual Patient Educator", detail: "AI that explains recovery times, procedures, and risks via chat.", roi: "50% increase in consult booking rate." },
                    { title: "VIP Consult Scheduler", detail: "Qualifies patients by interest and budget before booking a face-to-face.", roi: "Eliminates empty consult slots." }
                ]
            },
            departments: {
                title: "Surgical Operations",
                description: "Seamless patient journey automation.",
                areas: [
                    { area: "Patient Experience", detail: "24/7 concierge for pre-op questions and post-op check-ins.", impact: "Massive patient satisfaction." },
                    { area: "Finance & Billing", detail: "Automated payment plans and financing education via AI.", impact: "Increases case acceptance." }
                ]
            },
            custom: {
                title: "The Surgery OS",
                description: "Elite infrastructure for surgical practices.",
                features: ["HIPAA-compliant video nodes", "Integrated finance portals", "Automated post-op check-in logs"]
            }
        },
        faq: [
            { q: "Can the AI provide medical advice?", a: "No, the AI is trained to educate on procedures and risks, and routes medical questions to your team." },
            { q: "Is it HIPAA compliant?", a: "Yes, our medical nodes are fully compliant and secure." }
        ],
        dreamVision: "Imagine a practice where every patient who walks in for a consult already knows exactly what to expect, has their financing in place, and is ready to book their surgery date immediately.",
        industryStats: [
            { stat: "50%", label: "Acceptance Increase" },
            { stat: "24/7", label: "Patient Support" },
            { stat: "20h", label: "Staff Time Saved" }
        ],
        useCases: [
            { title: "The Post-Op Panic", scenario: "A patient is worried about swelling at 1 AM.", outcome: "AI reassures them with standard recovery info and flags the doctor if symptoms match an alert profile." }
        ],
        comparisonTable: [
            { category: "Patient Education", without: "Manual (Hours of staff talk)", withAI: "Autonomous Instant Education" },
            { category: "Lead Vetting", without: "Wasted consult slots", withAI: "Pre-qualified High-Value Leads" }
        ],
        processSteps: [
            { step: 1, title: "Patient Flow Audit", description: "Mapping the pre-op and post-op touchpoints." },
            { step: 2, title: "Care Node Launch", description: "Deploying your patient education and triage AI." }
        ],
        layers: [{ department: "Patient Care", roles: ["AI Educator", "Concierge"], tasks: ["Answer pre-op questions", "Track post-op recovery"] }]
    },
    {
        slug: "solar-installers",
        name: "Solar Installers",
        hook: "In the Race to the Clean Energy Future, Speed-to-Site-Visit Wins.",
        problem: "Solar leads are expensive. If you don't catch the lead and check their roof compatibility in the first 5 minutes, they've already moved on.",
        operatorProblem: "Qualifying solar leads manually is slow and error-prone. We install an AI systems that checks compatibility instantly.",
        result: "Your sales team spends their time on roofs that are actually compatible and with homeowners who can afford it.",
        subNiches: ["Residential Solar", "Commercial PV Systems", "Battery Storage Solutions"],
        geoKeywords: ["California", "Arizona", "Texas", "Florida", "Nevada"],
        services: {
            singleSystems: {
                title: "Solar Sales AI",
                description: "Accelerate your solar pipeline.",
                examples: [
                    { title: "The Satellite Qualifier", detail: "AI that checks roof orientation and shade via satellite before you call a lead.", roi: "30% reduction in site-visit waste." },
                    { title: "Persistent Homeowner Nurture", detail: "AI that follows up for months with leads who 'need to talk to their spouse'.", roi: "Increases close rate by 20%." }
                ]
            },
            departments: {
                title: "Growth & Install",
                description: "Autonomous solar operations.",
                areas: [
                    { area: "Lead Intake", detail: "Instant response to Facebook or Google Ads leads.", impact: "5x increase in site-visit bookings." },
                    { area: "Project Coordination", detail: "Automated permit tracking and homeowner status updates.", impact: "Zero 'where is my solar' calls." }
                ]
            },
            custom: {
                title: "The Solar OS",
                description: "Built for scaling solar fleets.",
                features: ["Direct integration to Aurora Solar", "Automated permit monitoring", "Predictive maintenance logs"]
            }
        },
        faq: [
            { q: "Does it work with Aurora Solar?", a: "Yes, we build connectors for major solar design tools." },
            { q: "How fast can you launch?", a: "Most solar systems are live within 14 days." }
        ],
        dreamVision: "Imagine a solar business where your sales reps only drive to houses with 'perfect' roofs and 'perfect' credit. The AI handles the chasing, the vetting, and the updating, while you handle the power.",
        industryStats: [
            { stat: "5x", label: "Booking Velocity" },
            { stat: "30%", label: "Lower CAC" },
            { stat: "Zero", label: "Lead Leakage" }
        ],
        useCases: [
            { title: "The Bill Chaser", scenario: "A lead doesn't have their electric bill handy.", outcome: "AI follows up daily via SMS with a secure upload link until the bill is received for analysis." }
        ],
        comparisonTable: [
            { category: "Site Qualification", without: "Manual satellite checks", withAI: "Autonomous Instant Vetting" },
            { category: "Follow-up", without: "Ignored leads", withAI: "Machine-Driven Persistence" }
        ],
        processSteps: [
            { step: 1, title: "Lead Audit", description: "Mapping your current sales funnel leaks." },
            { step: 2, title: "Intake Launch", description: "Deploying your solar-specific AI intake unit." }
        ],
        layers: [{ department: "Sales", roles: ["Lead Qualifier", "Document Chaser"], tasks: ["Vet roof compatibility", "Gather utility bills"] }]
    }
];
