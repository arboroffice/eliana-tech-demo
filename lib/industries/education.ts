import { IndustryContent } from '../industry-data';

export const educationIndustries: IndustryContent[] = [
    {
        slug: "preschools-childcare",
        name: "Preschools & Childcare",
        hook: "A Working Parent's Tour Request Doesn't Wait for Your Mid-Day Nap.",
        problem: "Parents search for childcare at 8 PM after the kids are in bed. If you don't answer their tour or waitlist request instantly, they call the center down the street. Your staff is too busy with children to answer the phone to book tours.",
        operatorProblem: "Center growth is a tour-volume game. Most centers lose 40% of their inquiries to slow response time. We install the AI that captures the lead, qualifies the age group and start date, and books the tour in 60 seconds.",
        result: "Childcare centers increase tour volume by 45% and reduce staff distraction by near-100% during classroom hours.",
        dreamVision: "Imagine a center where every tour is pre-qualified, the parent's needs are builder, and your calendar is perfectly stacked with motivated families.",
        industryStats: [
            { stat: "45%", label: "Tour Increase" },
            { stat: "Zero", label: "Lead Leakage" },
            { stat: "60s", label: "Response Speed" }
        ],
        useCases: [
            { title: "The Midnight Enrollment", scenario: "A parent gets a job offer on a Sunday night and texts your center about a start date at 11 PM.", outcome: "AI answers, confirms the age group has a slot, gathers their needs, and books a 10 AM Monday tour while they're still in the 'yes' phase." }
        ],
        comparisonTable: [
            { category: "Tour Booking", without: "Manual (Phone Tag)", withAI: "Instant (Digital)" },
            { category: "Lead Nurture", without: "Manual (Rare)", withAI: "Persistent (Continuous)" }
        ],
        processSteps: [
            { step: 1, title: "Friction Audit", description: "Mapping your current lead-to-tour drop-off points." },
            { step: 2, title: "Care Node Launch", description: "Deploying your 24/7 digital center concierge assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for childcare center growth and tour efficiency.",
                examples: [
                    { title: "The 24/7 Center Concierge", detail: "AI that handles all inbound social and web inquiries, qualifying age groups and start dates to book tours in 60 seconds.", roi: "Increases tour volume by 45%." },
                    { title: "Review Multiplier for Centers", detail: "AI that follows up post-tour with the parent to gather 5-star Google reviews and photos.", roi: "Dominates local search results." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered center operations.",
                areas: [
                    { area: "Sales & Tours", detail: "AI that manages the entire lead-to-tour funnel across Instagram, Facebook, and Web.", impact: "Zero lead decay." },
                    { area: "Parent & Staff Sync", detail: "AI that manages the coordination of daily reports, vaccine records, and billing alerts for every family.", impact: "Seamless parent communication." }
                ]
            },
            custom: {
                title: "The CenterOS",
                description: "Complete AI infrastructure for high-volume preschools and childcare campuses.",
                features: [
                    "24/7 instant lead response and tour booking",
                    "Integrated age-group and start-date pre-screening educator",
                    "Automated tour-reminder and record-coordination sequences",
                    "Integrated parent-referral and partner portal"
                ]
            }
        },
        faq: [
            { q: "Can it handle specific curriculum questions?", a: "Yes. It can explain your Montessori or Waldorf levels or outside food policies to help you close the tour fast." },
            { q: "Does it work with Procare or Brightwheel?", a: "Yes. We integrate with major center management tools to sync schedules and tours." }
        ],
        layers: [{ department: "Center Ops", roles: ["Enrollment Concierge", "Parent Liaison"], tasks: ["Book tours", "Qualify age groups"] }]
    },
    {
        slug: "tutoring-centers",
        name: "Tutoring Centers",
        hook: "A Student's Confidence Doesn't Wait for Your 9 AM Intake.",
        problem: "When a student fails a test, the parent is in a panic and wants a way forward now. If they call and get a voicemail, they'll call the next center with a 'free diagnostic' slot. Your staff is too busy with tutoring to answer the phone to book consults.",
        operatorProblem: "Tutoring growth is a consult-volume game. Most centers lose 40% of their inquiries to slow response time. We install the AI that captures the lead, qualifies the subject and grade level, and books the diagnostic in 60 seconds.",
        result: "Tutoring centers increase consult volume by 45% and reduce staff distraction by near-100% during tutoring hours.",
        dreamVision: "Imagine a center where every diagnostic is pre-qualified, the student's needs are builder, and your calendar is perfectly stacked with motivated families.",
        industryStats: [
            { stat: "45%", label: "Consult Increase" },
            { stat: "Zero", label: "Lead Leakage" },
            { stat: "60s", label: "Response Speed" }
        ],
        useCases: [
            { title: "The Weekend Crisis", scenario: "Someone's child fails their SAT practice test on a Saturday and calls your center.", outcome: "AI answers, gathers the subject detail, confirms you have a tutor available, and books their diagnostic for Monday at 4 PM." }
        ],
        comparisonTable: [
            { category: "Consult Booking", without: "Manual (Phone Tag)", withAI: "Instant (Digital)" },
            { category: "Lead Nurture", without: "Manual (Rare)", withAI: "Persistent (Continuous)" }
        ],
        processSteps: [
            { step: 1, title: "Efficiency Audit", description: "Mapping your current lead-to-consult drop-off points." },
            { step: 2, title: "Growth Node Launch", description: "Deploying your 24/7 digital center concierge assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for tutoring center growth and consult efficiency.",
                examples: [
                    { title: "The 24/7 Center Concierge", detail: "AI that handles all inbound social and web inquiries, qualifying subjects and grade levels to book consults in 60 seconds.", roi: "Increases consult volume by 45%." },
                    { title: "Enrollment Multiplier for Centers", detail: "AI that follows up post-diagnostic with the parent to gather 5-star Google reviews and sign-ups.", roi: "Typical 30% increase in new enrollments." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered center operations.",
                areas: [
                    { area: "Sales & Consults", detail: "AI that manages the entire lead-to-consult funnel across Instagram, Facebook, and Web.", impact: "Zero lead decay." },
                    { area: "Tutor & Family Sync", detail: "AI that manages the coordination of session reports, homework alerts, and billing for every student.", impact: "Seamless family communication." }
                ]
            },
            custom: {
                title: "The LearningOS",
                description: "Complete AI infrastructure for high-volume tutoring and enrichment centers.",
                features: [
                    "24/7 instant lead response and consult booking",
                    "Integrated subject and grade-level pre-screening educator",
                    "Automated session-reminder and record-coordination sequences",
                    "Integrated parent-referral and partner portal"
                ]
            }
        },
        faq: [
            { q: "Can it handle specific SAT/ACT prep questions?", a: "Yes. It can explain your prep levels or group-class schedules to help you close the consult fast." },
            { q: "Does it work with my booking software?", a: "Yes. We integrate with major center management tools to sync schedules and consults." }
        ],
        layers: [{ department: "Learning Ops", roles: ["Consult Specialist", "Family Liaison"], tasks: ["Book diagnostics", "Qualify subjects"] }]
    }
];
