import { IndustryContent } from '../industry-data';

export const eventsIndustries: IndustryContent[] = [
    {
        slug: "wedding-venues",
        name: "Wedding Venues",
        hook: "A Dream Wedding Inquiry Dies in a 48-Hour Voicemail Gap.",
        problem: "Engagement season creates a massive surge in inquiries. Couples are excited and shopping multiple venues. If you don't answer their tour request at 9 PM on a Sunday, they've already booked with the venue that has instant online scheduling.",
        operatorProblem: "Venue growth is a tour-volume game. Most venues lose 40% of their inquiries to slow response time. We install the AI that captures the lead, qualifies the guest count and budget, and books the tour in 60 seconds.",
        result: "Wedding venues increase tour volume by 45% and reduce staff distraction during active events.",
        dreamVision: "Imagine a venue where every tour is pre-qualified, the couple's vision is builder, and your calendar is perfectly stacked with motivated clients.",
        industryStats: [
            { stat: "45%", label: "Tour Increase" },
            { stat: "Zero", label: "Lead Leakage" },
            { stat: "60s", label: "Response Speed" }
        ],
        useCases: [
            { title: "The Midnight Engagement", scenario: "A couple gets engaged on holiday and texts your venue about a 2026 date at 11 PM.", outcome: "AI answers, confirms the date is available, gathers their guest count and budget, and books a 10 AM Monday tour while they're still in the 'yes' phase." }
        ],
        comparisonTable: [
            { category: "Tour Booking", without: "Manual (Phone Tag)", withAI: "Instant (Digital)" },
            { category: "Lead Nurture", without: "Manual (Rare)", withAI: "Persistent (Continuous)" }
        ],
        processSteps: [
            { step: 1, title: "Efficiency Audit", description: "Mapping your current lead-to-tour drop-off points." },
            { step: 2, title: "Romance Node Launch", description: "Deploying your 24/7 digital venue concierge assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for wedding venue tour growth and efficiency.",
                examples: [
                    { title: "The 24/7 Venue Concierge", detail: "AI that handles all inbound social and web inquiries, qualifying guest counts and budgets to book tours in 60 seconds.", roi: "Increases tour volume by 45%." },
                    { title: "Review Multiplier for Venues", detail: "AI that follows up post-wedding with the couple and their planner to gather 5-star Google reviews and photos.", roi: "Dominates local search results." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered venue operations.",
                areas: [
                    { area: "Sales & Tours", detail: "AI that manages the entire lead-to-tour funnel across Instagram, Facebook, and Web.", impact: "Zero lead decay." },
                    { area: "Planner & Vendor Sync", detail: "AI that manages the coordination of florist, catering, and DJ timelines for every event.", impact: "Seamless event execution." }
                ]
            },
            custom: {
                title: "The VenueOS",
                description: "Complete AI infrastructure for high-volume wedding and event campuses.",
                features: [
                    "24/7 instant lead response and tour booking",
                    "Integrated budget and guest-count pre-screening educator",
                    "Automated tour-reminder and vendor-coordination sequences",
                    "Integrated referral and vendor-partner portal"
                ]
            }
        },
        faq: [
            { q: "Can it handle specific catering questions?", a: "Yes. It can explain your in-house catering levels or outside vendor policies to help you close the tour fast." },
            { q: "Does it work with my booking software?", a: "Yes. We integrate with major venue management tools to sync schedules and tours." }
        ],
        layers: [{ department: "Sales Ops", roles: ["Showcase Concierge", "Venue Liaison"], tasks: ["Book tours", "Qualify budgets"] }]
    },
    {
        slug: "event-planners",
        name: "Event Planners",
        hook: "Your Vision is Unique. Your Admin shouldn't be.",
        problem: "You spend 40% of your time on basic logistics — chasing vendors, scheduling site visits, and answering 'can we have a chocolate fountain?' You can't scale without burning out.",
        operatorProblem: "Planning growth is a coordination-volume game. Most planners lose leads to slow response or get bogged down in admin noise. We install the AI that handles the coordination, vendor chasers, and client prep 24/7.",
        result: "Event planners increase client capacity by 50% and reduce admin noise to zero.",
        dreamVision: "Imagine a planning business where every morning your schedule is perfectly packed, your vendors are confirmed, and your only job is the artistry of the events.",
        industryStats: [
            { stat: "50%", label: "Capacity Increase" },
            { stat: "80%", label: "Less Noise" },
            { stat: "Zero", label: "Admin Fatigue" }
        ],
        useCases: [
            { title: "The Vendor Chase", scenario: "An florist forgets to confirm their setup time at 11 PM.", outcome: "AI follows up politely via text/email until it's received and verified, then alerts the planner." }
        ],
        comparisonTable: [
            { category: "Coordination", without: "Manual (Phone Tag)", withAI: "Instant (Digital)" },
            { category: "Client Support", without: "Delayed (Hours)", withAI: "Instant (24/7)" }
        ],
        processSteps: [
            { step: 1, title: "Friction Audit", description: "Mapping your current client-to-vendor coordination delays." },
            { step: 2, title: "Artistry Node Launch", description: "Deploying your 24/7 digital planning concierge assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for event planning coordination and growth.",
                examples: [
                    { title: "The 24/7 Planning Concierge", detail: "AI that handles all inbound client inquiries, vendor requests, and status updates via text or portal instantly.", roi: "Increases client satisfaction and retention." },
                    { title: "Vendor & Repair Bot", detail: "AI that logs equipment issues and automatically contacts the right repair vendor.", roi: "Increases equipment uptime by 20%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered planning operations.",
                areas: [
                    { area: "Client Management", detail: "AI that manages your client history, favorite vendors, and seasonal recommendations.", impact: "Personalized feel at scale." },
                    { area: "Logistics Intelligence", detail: "AI that predicts when your most popular vendors and supplies are low based on booking data.", impact: "Zero stockouts on top services." }
                ]
            },
            custom: {
                title: "The VisionOS",
                description: "Complete AI infrastructure for high-volume event planning firms.",
                features: [
                    "24/7 instant lead response and booking",
                    "Integrated vendor-specific education and intake",
                    "Automated session-reminder and retention sequences",
                    "Monthly membership and recurring-event manager"
                ]
            }
        },
        faq: [
            { q: "Is it secure for client data?", a: "Yes. Our nodes are enterprise-grade and secure, protecting all client PII and event records." },
            { q: "Does it work for both weddings and corporate?", a: "Yes. It uses role-specific logic to manage different event scopes and budgets." }
        ],
        layers: [{ department: "Studio Admin", roles: ["Glamour Concierge", "Vendor Liaison"], tasks: ["Book events", "Chase vendor confirmations"] }]
    }
];
