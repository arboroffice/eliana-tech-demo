import { IndustryContent } from "./industry-data";

export const niches2: IndustryContent[] = [
    {
        slug: "custom-home-builders",
        name: "Custom Home Builders",
        hook: "You Build Dreams. But Your Admin is a Nightmare.",
        problem: "Managing dozens of subcontractors, client change orders, and permit delays is drowning you in paperwork. Your clients are calling you 24/7 for updates.",
        operatorProblem: "The bottleneck is manual client and sub-contractor coordination. We install an AI building assistant that handles the 1,000 tiny questions so you can stay on the job site.",
        result: "You spend 90% less time on the phone and 100% more time on the quality of the build.",
        subNiches: ["Luxury Home Builders", "Design-Build Firms", "High-End Remodelers"],
        geoKeywords: ["Nationwide", "Luxury Enclaves", "High-Growth Suburbs"],
        services: {
            singleSystems: {
                title: "Build Coordination AI",
                description: "Deep automation for high-stakes construction.",
                examples: [
                    { title: "The 24/7 Client Concierge", detail: "AI that answers homeowner questions about schedule, selection deadlines, and project status.", roi: "Eliminates 'where is my house' phone tag." },
                    { title: "Subcontractor Dispatch Bot", detail: "AI that sends automated reminders and arrival check-ins to every sub on the schedule.", roi: "Reduces project delays by 15%." }
                ]
            },
            departments: {
                title: "Operations & Admin",
                description: "Full-scale construction transformation.",
                areas: [
                    { area: "Project Management", detail: "AI-monitored schedules and automated delay notifications.", impact: "Faster time-to-completion." },
                    { area: "Procurement & Billing", detail: "AI-assisted draw requests and material cost tracking.", impact: "Protects your project margins." }
                ]
            },
            custom: {
                title: "The Builder OS",
                description: "Built for elite custom home firms.",
                features: ["CoConstruct/BuilderTrend integration", "Change order automation", "Integrated site photo logs"]
            }
        },
        faq: [
            { q: "Does it work with BuilderTrend?", a: "Yes, we build connectors for major construction management platforms." },
            { q: "Can clients talk to it?", a: "Yes, it acts as your project concierge, saving you hours of phone calls." }
        ],
        dreamVision: "Imagine a job site where every sub knows their arrival time, every client knows their selection deadline, and your draw requests are filed automatically while you're reviewing blueprints.",
        industryStats: [
            { stat: "20h+", label: "Weekly Admin Recaptured" },
            { stat: "Zero", label: "Client Communication Gaps" },
            { stat: "15%", label: "Faster Build Cycles" }
        ],
        useCases: [
            { title: "The Change Order", scenario: "A client wants to change the tile at 10 PM on a Friday.", outcome: "AI logs the request, checks the lead time on the new material, and adds it to your review list for Monday morning." }
        ],
        comparisonTable: [
            { category: "Client Updates", without: "Manual (Hours/Phone Tag)", withAI: "Instant (24/7 Concierge)" },
            { category: "Sub Coordination", without: "Endless calling & texting", withAI: "Autonomous Scheduling Bots" }
        ],
        processSteps: [
            { step: 1, title: "Workflow Audit", description: "Mapping your current project bottlenecks." },
            { step: 2, title: "Concierge Launch", description: "Deploying your building assistant AI." }
        ],
        layers: [{ department: "Project Admin", roles: ["Client Concierge", "Sub Liaison"], tasks: ["Handle inquiries", "Manage schedules"] }]
    },
    {
        slug: "franchise-owners",
        name: "Franchise Owners",
        hook: "Scale Your Footprint, Not Your Workload.",
        problem: "You own 5 locations, but you're still the one answering 'why is the fryer broken' and 'who is covering the shift'. You can't scale to 20 locations at this rate.",
        operatorProblem: "Managing human bandwidth across multiple locations is a losing game. We install an AI Multi-Unit layer that handles ops, scheduling, and standard SOP compliance.",
        result: "The owner stops being the chief problem solver for every store. The system runs the stores; you run the system.",
        subNiches: ["QSR Owners", "Fitness Franchises", "Service-Based Franchises"],
        geoKeywords: ["Multi-unit owners", "Regional operators", "National portfolios"],
        services: {
            singleSystems: {
                title: "Multi-Unit OS",
                description: "Corporate-level infrastructure for the local owner.",
                examples: [
                    { title: "The Employee Triage Bot", detail: "AI that handles shift swaps, call-outs, and basic training questions for your entire staff.", roi: "Reclaims 10h/week per store manager." },
                    { title: "Vendor & Repair Bot", detail: "AI that logs equipment issues and automatically contacts the right repair vendor.", roi: "Increases equipment uptime by 20%." }
                ]
            },
            departments: {
                title: "Operations & HR",
                description: "Full-scale multi-unit automation.",
                areas: [
                    { area: "Staff Retention", detail: "AI-driven sentiment checks and automated training paths.", impact: "Reduces turnover costs by 15%." },
                    { area: "Profitability BI", detail: "Real-time cost-of-goods and labor dashboards across all stores.", impact: "Instant executive visibility." }
                ]
            },
            custom: {
                title: "The Franchise Sentinel",
                description: "Built for scaling portfolios.",
                features: ["POS sync", "Shift-swap AI", "Automated compliance logs"]
            }
        },
        faq: [
            { q: "Can it integrate with my POS?", a: "Yes, we build connectors for Revel, Toast, and other major franchise POS tools." },
            { q: "Does it help with hiring?", a: "Yes, it can pre-screen candidates and schedule interviews automatically." }
        ],
        dreamVision: "Imagine owning 50 stores as easily as you own 5. Every manager is supported by an AI ops layer that handles the daily noise, leaving you to focus on acquisitions and growth.",
        industryStats: [
            { stat: "30h+", label: "Manager Time Recaptured" },
            { stat: "15%", label: "Lower Labor Cost" },
            { stat: "100%", label: "SOP Compliance" }
        ],
        useCases: [
            { title: "The 6 AM Call-out", scenario: "An employee at Store 3 calls out sick at 6 AM.", outcome: "AI automatically identifies eligible coworkers, sends out a 'shift available' text, and confirms the swap before the manager's alarm goes off." }
        ],
        comparisonTable: [
            { category: "Staff Coordination", without: "Manual (Phone Tag)", withAI: "Autonomous (SMS/Voice)" },
            { category: "Ops Visibility", without: "Manual reports (Days/Weeks)", withAI: "Real-time AI Dashboards" }
        ],
        processSteps: [
            { step: 1, title: "Portfolio Audit", description: "Mapping your store-level bottlenecks." },
            { step: 2, title: "Central OS Launch", description: "Deploying your multi-unit management layer." }
        ],
        layers: [{ department: "Store Ops", roles: ["Shift Assistant", "Vendor Liaison"], tasks: ["Handle call-outs", "Manage repair logs"] }]
    },
    {
        slug: "private-equity",
        name: "Private Equity Firms",
        hook: "Drive EBITDA Without Increasing Headcount.",
        problem: "Your portfolio companies are struggling with 'manual drag'. You need a scalable way to implement efficiency across multiple acquisitions without hiring more consultants.",
        operatorProblem: "PortCo growth is limited by operational inefficiency. We install a 'Standard AI Layer' across your portfolio to automate sales, admin, and reporting.",
        result: "Immediate margin expansion through technology, not headcount reduction. Portable, scalable efficiency.",
        subNiches: ["Mid-Market PE", "Family Office Portfolios", "Growth Equity"],
        geoKeywords: ["Global", "National Portfolios"],
        services: {
            singleSystems: {
                title: "The PortCo Efficiency Layer",
                description: "Standardized AI nodes for rapid deployment.",
                examples: [
                    { title: "The EBITDA Sentinel", detail: "An AI audit layer that identifies manual waste and replaces it with automation.", roi: "Typical 3-5x return on investment." },
                    { title: "Portfolio Data Hub", detail: "Real-time rollup of all PortCo metrics into one executive brain.", roi: "Executive-level visibility 24/7." }
                ]
            },
            departments: {
                title: "Value Creation",
                description: "The AI-driven investment thesis.",
                areas: [
                    { area: "Operational Leverage", detail: "Replacing manual administrative departments with autonomous AI nodes.", impact: "Immediate EBITDA expansion." },
                    { area: "Sales Scalability", detail: "Standardizing AI-led outbound across the entire portfolio.", impact: "Predictable revenue growth." }
                ]
            },
            custom: {
                title: "The GP Intelligence OS",
                description: "Proprietary PE technology.",
                features: ["Deal-flow AI", "Standardized PortCo reporting", "Due diligence acceleration"]
            }
        },
        faq: [
            { q: "How fast for a PortCo rollout?", a: "We can deploy the standard layer in any company within 30 days." },
            { q: "Is it secure for sensitive financial data?", a: "Yes, we use air-gapped, high-security nodes for every firm." }
        ],
        dreamVision: "Imagine a portfolio where every acquisition starts with a 'Tech-Led Transformation' that instantly adds 5-10% to the bottom line by removing manual friction. Your team doesn't manage people; they manage growth.",
        industryStats: [
            { stat: "3:1", label: "EBITDA ROI" },
            { stat: "30 Day", label: "Transformation Speed" },
            { stat: "Zero", label: "Headcount Addition" }
        ],
        useCases: [
            { title: "The 30-Day Lift", scenario: "You acquire a manual, legacy service business.", outcome: "AI is installed in the office to handle all scheduling and intake, instantly reclaiming 40% of the admin budget." }
        ],
        comparisonTable: [
            { category: "Transformation", without: "Manual Consulting (Months)", withAI: "Systematic (30 Days)" },
            { category: "Margin Growth", without: "Slow (Headcount dependent)", withAI: "Fast (Tech-driven)" }
        ],
        processSteps: [
            { step: 1, title: "Portfolio Audit", description: "Identifying the lowest-hanging EBITDA fruit." },
            { step: 2, title: "Standard Node Pilot", description: "Deploying the efficiency layer to one company." }
        ],
        layers: [{ department: "Portfolio Mgmt", roles: ["Efficiency Auditor", "BI Assistant"], tasks: ["Audit manual logs", "Sync PortCo data"] }]
    },
    {
        slug: "commercial-cleaning",
        name: "Commercial Cleaning",
        hook: "Win National Contracts with 24/7 Responsiveness.",
        problem: "Property managers don't want to chase you for updates or missed areas. If you're slow to respond, you lose the contract to a larger firm.",
        operatorProblem: "The bottleneck is quality control and client communication at scale. We install an AI dispatcher that coordinates crews and clients instantly.",
        result: "You act and respond like a national firm, winning bigger bids and keeping them longer.",
        subNiches: ["Office Cleaning", "Industrial Janitorial", "Medical Grade Cleaning"],
        geoKeywords: ["Nationwide", "Urban Centers"],
        services: {
            singleSystems: {
                title: "Janitorial Dispatch AI",
                description: "Scale your cleaning empire.",
                examples: [
                    { title: "The 10-Second RFP Bot", detail: "AI that drafts clean-bid proposals based on your margin and crew data.", roi: "3x more bids submitted." },
                    { title: "Quality Assurance Chaser", detail: "AI that texts building managers for proof-of-clean and satisfaction scores.", roi: "100% contract retention." }
                ]
            },
            departments: {
                title: "Growth & Ops",
                description: "Full-scale janitorial automation.",
                areas: [
                    { area: "Crew Coordination", detail: "Automated arrivals, departure alerts, and supply re-order logs.", impact: "Reduced supply waste by 20%." },
                    { area: "Business Development", detail: "AI-led outbound to local facility managers and office parks.", impact: "Consistent new contract pipeline." }
                ]
            },
            custom: {
                title: "The Janitorial OS",
                description: "Built for scaling cleaning businesses.",
                features: ["Geo-fenced crew tracking", "Automated invoicing", "Supply chain AI"]
            }
        },
        faq: [
            { q: "Does it help with cleaning crews?", a: "Yes, it handles scheduling, arrival alerts, and supply re-ordering." },
            { q: "Can it help me win more bids?", a: "Absolutely, it helps you draft faster and follow up more persistently." }
        ],
        dreamVision: "Imagine a cleaning business that runs itself while you're at the beach. Every crew is on site, every building manager is happy, and your bank account grows every month without you answering a single 'why wasn't this done' call.",
        industryStats: [
            { stat: "24/7", label: "Client Support" },
            { stat: "100%", label: "Contract Retention" },
            { stat: "3x", label: "Bid Velocity" }
        ],
        useCases: [
            { title: "The Missed Bin", scenario: "An office manager notices a missed area on a Monday morning.", outcome: "AI takes their text, apologizes contextually, dispatches the closest sub to fix it, and confirms it's done before the manager has finished their coffee." }
        ],
        comparisonTable: [
            { category: "Client Communication", without: "Manual (Hours/Phone Tag)", withAI: "Instant (Autonomous)" },
            { category: "Quote Speed", without: "Slow (Days)", withAI: "Fast (AI-Assisted)" }
        ],
        processSteps: [
            { step: 1, title: "Operations Audit", description: "Mapping your current crew-to-check flow." },
            { step: 2, title: "Dispatch Launch", description: "Deploying your janitorial AI assistant." }
        ],
        layers: [{ department: "Ops", roles: ["AI Scheduler", "Supply Auditor"], tasks: ["Manage work orders", "Track inventory"] }]
    },
    {
        slug: "dealerships",
        name: "Car Dealerships",
        hook: "Your BDC is Leaking, but Your AI is Always On.",
        problem: "New leads call at 10 PM and you don't answer. By 10 AM, they've already booked a test drive at another lot. Your human BDC can't stay on 24/7.",
        operatorProblem: "Speed-to-lead is the only metric that matters in automotive. We install an AI BDC that answers every text, social DM, and call instantly.",
        result: "Your showroom stays full of qualified buyers who already have their appointments set and trade-in data logged.",
        subNiches: ["New Car Franchises", "Used Car Independent Lots"],
        geoKeywords: ["Nationwide", "Auto Rows"],
        services: {
            singleSystems: {
                title: "The 24/7 AI BDC",
                description: "Never miss another showroom floor opportunity.",
                examples: [
                    { title: "The 10-Second Appointment Setter", detail: "AI that texts leads back instantly and books the test drive into your CRM.", roi: "2x more test drives booked." },
                    { title: "The Trade-In Qualifier", detail: "AI that gathers VIN and photos from leads via SMS for a ballpark offer.", roi: "Higher intent showroom visits." }
                ]
            },
            departments: {
                title: "Sales & Finance",
                description: "Full-scale dealership automation.",
                areas: [
                    { area: "Digital Retailing", detail: "AI-led qualification and lead nurturing across all channels.", impact: "Zero lead leakage." },
                    { area: "Service Drive", detail: "Automated service reminders and appointment setting.", impact: "Full service bays 24/7." }
                ]
            },
            custom: {
                title: "The Showroom OS",
                description: "Built for scaling auto groups.",
                features: ["VinSolutions/DealerSocket sync", "Automated follow-up sequences", "Multi-lot dashboard"]
            }
        },
        faq: [
            { q: "Does it work with VinSolutions?", a: "Yes, we build connectors for major automotive CRMs." },
            { q: "Can it handle Facebook leads?", a: "Absolutely, it integrates with FB/IG DMs and Google Business chat." }
        ],
        dreamVision: "Imagine a showroom that is constantly buzzing with 'Sold' signs because your digital BDC is working 24 hours a day, qualifying trades, and booking test drives while you sleep.",
        industryStats: [
            { stat: "2x", label: "More Test Drives" },
            { stat: "100%", label: "Lead Catch" },
            { stat: "Zero", label: "BDC Burnout" }
        ],
        useCases: [
            { title: "The Weekend Lead", scenario: "A buyer finds a F-150 on your site at 11 PM on Sat night.", outcome: "AI texts them instantly, gets their trade-in VIN, and books their test drive for 9 AM Monday morning." }
        ],
        comparisonTable: [
            { category: "Speed to Lead", without: "Manual (Hours)", withAI: "Instant (10 Seconds)" },
            { category: "BDC Availability", without: "9-7 (Limited)", withAI: "24/7 (Unlimited)" }
        ],
        processSteps: [
            { step: 1, title: "Lead Audit", description: "Mapping your current CRM response gaps." },
            { step: 2, title: "BDC Node Launch", description: "Deploying your 24/7 AI assistant layer." }
        ],
        layers: [{ department: "BDC", roles: ["Lead Qualifier", "Appt Setter"], tasks: ["Answer inquiries", "Book test drives"] }]
    },
    {
        slug: "gyms-fitness",
        name: "Gyms & Fitness Studios",
        hook: "High-Touch Support Without the High-Cost Staff.",
        problem: "You're spending too much on front-desk staff just to answer 'what are your hours' and 'can I cancel my membership'. Your trainers are doing admin instead of training.",
        operatorProblem: "Churn is your biggest enemy. We install an AI retention layer that monitors member health and automates the support and follow-up.",
        result: "Your churn drops, your trainers focus on training, and your front desk costs disappear.",
        subNiches: ["CrossFit Boxes", "Yoga Studios", "Personal Training Boutiques"],
        geoKeywords: ["Nationwide", "Urban Hubs"],
        services: {
            singleSystems: {
                title: "Fitness OS",
                description: "Scale your community and revenue.",
                examples: [
                    { title: "The 24/7 Member Assistant", detail: "AI that answers all logistical questions and books trials.", roi: "30% more trials booked." },
                    { title: "Member Churn Radar", detail: "AI that flags members who stop showing up and reaches out to them.", roi: "Reduces churn by 20%." }
                ]
            },
            departments: {
                title: "Retention & Growth",
                description: "Full-scale fitness studio automation.",
                areas: [
                    { area: "Membership Sales", detail: "Instant response and trial booking for new leads.", impact: "5x more membership conversions." },
                    { area: "Member Experience", detail: "Proactive check-ins, birthday wishes, and milestone celebrations via AI.", impact: "Deep member loyalty." }
                ]
            },
            custom: {
                title: "The Studio Sentinel",
                description: "Built for scaling boutique fitness.",
                features: ["MindBody/Wodify sync", "Member sentiment AI", "Automated referral engine"]
            }
        },
        faq: [
            { q: "Does it work with MindBody?", a: "Yes, we build connectors for most fitness management software." },
            { q: "How does it help with churn?", a: "It identifies 'silent' members and reaches out with personalized check-ins." }
        ],
        dreamVision: "Imagine a gym where every member feels like the owner is personally checking in on them every week. Trials are booked, memberships are renewed, and your staff is finally free to do what they love: train.",
        industryStats: [
            { stat: "20%", label: "Lower Churn" },
            { stat: "24/7", label: "Studio Support" },
            { stat: "Zero", label: "Missed Trials" }
        ],
        useCases: [
            { title: "The New Year Lead", scenario: "Someone clicks your ad at 2 AM on Jan 1st.", outcome: "AI texts them instantly, answers their questions, and books their free trial for 8 AM the next day before they can talk themselves out of it." }
        ],
        comparisonTable: [
            { category: "Support", without: "Limited (Front desk)", withAI: "24/7 (Autonomous)" },
            { category: "Retention", without: "Reactive (Manual)", withAI: "Proactive (AI-driven)" }
        ],
        processSteps: [
            { step: 1, title: "Retention Audit", description: "Identifying your churn triggers." },
            { step: 2, title: "Support Node Launch", description: "Deploying your fitness AI concierge." }
        ],
        layers: [{ department: "Support", roles: ["Trial Setter", "Retention Assistant"], tasks: ["Answer inquiries", "Monitor member health"] }]
    }
];
