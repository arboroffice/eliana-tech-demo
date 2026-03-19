import { IndustryContent } from '../industry-data';

export const businessIndustries: IndustryContent[] = [
    {
        slug: "e-commerce-brands",
        name: "E-commerce Brands",
        hook: "Your Ads are Scaling, but Your Customer Support is Breaking.",
        problem: "You spend $50k/mo on TikTok Ads. Your revenue is growing, but your support tickets are exploding. Your brand is being damaged by slow replies to 'where is my order?' and 'can I return this?'. You are hiring more humans, but your margins are shrinking.",
        operatorProblem: "E-commerce scale is limited by support-to-revenue ratios. We install an AI support layer that solves 80% of tickets instantly and a 'Churn Sentinel' that recovers abandoned carts with personalized voice/text.",
        result: "E-commerce brands reduce support costs by 70% and recover 15-25% more abandoned carts via AI nurture.",
        dreamVision: "Imagine a brand that scales to $10M+ with a skeletal team, where every customer feels personally served 24/7.",
        industryStats: [
            { stat: "70%", label: "Support Saving" },
            { stat: "25%", label: "Cart Recovery" },
            { stat: "24/7", label: "Instant Support" }
        ],
        useCases: [
            { title: "The Midnight Return", scenario: "A customer wants to return an item at 2 AM and is frustrated.", outcome: "AI provides the return label and policy instantly, turning a potentially negative review into a positive, fast experience." }
        ],
        comparisonTable: [
            { category: "Support response", without: "Manual (Hours/Days)", withAI: "Instant (Seconds)" },
            { category: "Cart Recovery", without: "Generic Email (Ignored)", withAI: "AI Voice/Text (High Recall)" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Mapping your current support-ticket and cart-abandonment leakages." },
            { step: 2, title: "Margin Node Launch", description: "Deploying your 24/7 digital brand manager assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for e-commerce growth and efficiency.",
                examples: [
                    { title: "The 24/7 Support Concierge", detail: "AI that handles all 'Where is my order' (WISMO) and policy questions instantly across Web, Email, and Social.", roi: "Reduces support tickets by 80%." },
                    { title: "Abandoned Cart Voice Recovery", detail: "AI that calls or texts high-value cart abandoners to answer questions and offer a temporary bonus to close the deal.", roi: "Increases recovery rate by 25%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered e-commerce operations.",
                areas: [
                    { area: "Customer Experience", detail: "AI that manages the entire post-purchase journey, from shipping updates to review gathering.", impact: "Higher LTV and brand loyalty." },
                    { area: "Inventory Intelligence", detail: "AI that predicts when your most popular SKUs will be low based on ad spend and growth trends.", impact: "Zero stockouts on top sellers." }
                ]
            },
            custom: {
                title: "The Commerce OS",
                description: "Complete AI infrastructure for high-volume Shopify and e-commerce brands.",
                features: [
                    "24/7 multi-channel instant customer support",
                    "Integrated high-value cart recovery and nurture",
                    "Automated social commerce and lead capture engine",
                    "Predictive inventory and ad-spend optimization dashboards"
                ]
            }
        },
        faq: [
            { q: "Is it secure for customer data?", a: "Yes. Our nodes are enterprise-grade and secure, protecting all customer PII and purchase history." },
            { q: "Does it work with Shopify?", a: "Yes. We integrate with Shopify, Gorgias, Klaviyo, and major tools to sync data and order status." }
        ],
        layers: [{ department: "Brand Ops", roles: ["Support Concierge", "Cart Recover Bot"], tasks: ["Solve WISMO tickets", "Recover high-value carts"] }]
    },
    {
        slug: "marketing-agencies",
        name: "Marketing Agencies",
        hook: "You Sell Lead Gen. But You Are Terrible at Managing Your Own Lead Gen.",
        problem: "You are the 'cobbler with no shoes.' You spend all your time on client work and your own pipeline is dry. When you do get a lead, you are too busy to nurture it, so they sign with the agency that has a faster sales process.",
        operatorProblem: "Agency growth is limited by the founder's bandwidth to sell and deliver. We install the 'AI SDR' that manages your outbound and a 'Case Study Engine' that harvests your client wins automatically.",
        result: "Agencies increase their own pipeline by 4x and reduce account manager noise by 50%.",
        dreamVision: "Imagine an agency where every morning you walk in to a stack of pre-vetted demos and your account managers only focus on high-level strategy.",
        industryStats: [
            { stat: "4x", label: "Pipeline Jump" },
            { stat: "50%", label: "Less Admin Noise" },
            { stat: "Zero", label: "Cold Pipeline" }
        ],
        useCases: [
            { title: "The Case Study Harvest", scenario: "An account manager has a win with a client.", outcome: "AI identifies the win, interview the client, and drafts a 5-page case study automatically for your marketing team." }
        ],
        comparisonTable: [
            { category: "Lead Nurture", without: "Manual (Rare/Spotty)", withAI: "Instant (Continuous)" },
            { category: "Client Support", without: "Delayed (Hours)", withAI: "Instant (24/7)" }
        ],
        processSteps: [
            { step: 1, title: "Ops Audit", description: "Mapping your current sales-and-delivery bottlenecks." },
            { step: 2, title: "Scale Node Launch", description: "Deploying your 24/7 digital agency manager assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for marketing agency growth.",
                examples: [
                    { title: "The 24/7 Agency SDR", detail: "AI that researches prospects, crafts outreach, and books demos on your own calendar 24/7.", roi: "Typical 4x increase in outbound pipeline." },
                    { title: "Review & Case Study Bot", detail: "AI that follows up with happy clients to gather Google reviews and case study interviews.", roi: "Dominates local SEO and sales trust." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered agency operations.",
                areas: [
                    { area: "Sales & Client Experience", detail: "AI that manages the entire intake and pre-assessment for multiple roles.", impact: "Zero placement-gap waste." },
                    { area: "Strategy & BI", detail: "AI that monitors your entire client book for high-risk churn signals and proactive upsell opportunities.", impact: "Higher total account value." }
                ]
            },
            custom: {
                title: "The AgencyOS",
                description: "Complete AI infrastructure for high-growth marketing agencies.",
                features: [
                    "24/7 instant lead response and booking",
                    "Integrated multi-role skill-assessment and education",
                    "Automated timesheet-reminder and retention sequences",
                    "Integrated employer-onboarding and referral engine"
                ]
            }
        },
        faq: [
            { q: "Is the data secure for client data?", a: "Yes. Our nodes are enterprise-grade and secure, protecting all client PII and project records." },
            { q: "Does it work with GoHighLevel or HubSpot?", a: "Yes. We integrate with major CRMs and agency tools to sync data and project status." }
        ],
        layers: [{ department: "Accounts", roles: ["Strategy Concierge", "Renewal Bot"], tasks: ["Handle COI requests", "Cross-sell services"] }]
    },
    {
        slug: "logistics-firms",
        name: "Logistics & Freight",
        hook: "Your Trucks Are Moving, but Your Paperwork is Stuck.",
        problem: "Logistics is a coordination nightmare. You have 100 drivers and 5 brokers. When a driver has an issue at 2 AM, they call a broker who is sleeping. Your office is buried in BOLs (Bills of Lading) and customs paperwork.",
        operatorProblem: "Logistics growth is limited by the coordination bandwidth of your brokers and dispatchers. We install a 24/7 AI dispatcher that handles technical issues and a 'Paperwork Bot' that OCR-scans and classifies BOCs instantly.",
        result: "Logistics firms increase fleet capacity by 30% and reduce dispatcher admin by 80%.",
        dreamVision: "Imagine a firm where every truck is tracked, every issue is triaged, and every BOL is filed before the driver even leaves the dock.",
        industryStats: [
            { stat: "30%", label: "Fleet Capacity" },
            { stat: "80%", label: "Less Admin Time" },
            { stat: "24/7", label: "Dispatch Support" }
        ],
        useCases: [
            { title: "The Midnight Breakdown", scenario: "A driver's truck has a sensor issue at 2 AM in a remote area.", outcome: "AI provides the initial diagnostic, suggests the nearest 24-hour repair shop, and alerts the broker with the full context." }
        ],
        comparisonTable: [
            { category: "Dispatch Support", without: "Delayed (Hours)", withAI: "Instant (10 Seconds)" },
            { category: "Paperwork", without: "Manual (Hours/Days)", withAI: "Digital (Instant Scan)" }
        ],
        processSteps: [
            { step: 1, title: "Route Audit", description: "Mapping your current coordination-and-paperwork delays." },
            { step: 2, title: "Velocity Node Launch", description: "Deploying your 24/7 digital logistics manager assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for logistics efficiency.",
                examples: [
                    { title: "The 24/7 AI Dispatcher", detail: "AI that handles all inbound driver calls and texts, triaging issues and logging status updates instantly.", roi: "Increases fleet uptime and coordinator efficiency." },
                    { title: "Automated BOL Processor", detail: "AI that scans, parses, and enters Bill of Lading data into your TMS automatically.", roi: "Saves 40+ hours of data-entry per month." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered logistics operations.",
                areas: [
                    { area: "Brokerage & Sales", detail: "AI that manages the entire lead-to-load journey, including carrier vetting and rate negotiation support.", impact: "Zero lead leakage." },
                    { area: "Compliance & Safety", detail: "AI that monitors ELD logs and driver documents for upcoming expirations or violations.", impact: "Zero compliance friction." }
                ]
            },
            custom: {
                title: "The LogisticsOS",
                description: "Complete AI infrastructure for high-volume freight and logistics firms.",
                features: [
                    "24/7 instant driver response and triage bot",
                    "Integrated multi-channel BOL and customs processor",
                    "Automated safety-deadline and compliance monitoring",
                    "Integrated carrier-onboarding and referral engine"
                ]
            }
        },
        faq: [
            { q: "Is the data secure for cargo records?", a: "Yes. Our nodes are enterprise-grade and secure, protecting all customer PII and shipment records." },
            { q: "Does it work with Samsara or Geotab?", a: "Yes. We integrate with major telematics and TMS tools to sync data and truck status." }
        ],
        layers: [{ department: "Fleet Ops", roles: ["Dispatch Concierge", "Safety Bot"], tasks: ["Triage driver issues", "Chase missing BOLs"] }]
    }
];
