import { IndustryContent } from '../industry-data';

export const wellnessIndustries: IndustryContent[] = [
    {
        slug: "gyms-fitness",
        name: "Gyms & Fitness Centers",
        hook: "Your 6-Week Challenge Inquiries Are Cold by Monday Morning.",
        problem: "You spend $5k/mo on Meta Ads for 'transformation challenges'. Leads click at 9 PM on a Sunday while they're feeling motivated. If you don't call them in 5 minutes, that motivation dies. Your coaches are too busy training clients to work the phones.",
        operatorProblem: "Fitness growth is a momentum game. If you can't book the 'intro' or 'triage' call while they are inspired, you've lost the $3,000 LTV member. We install the AI that captures the lead, qualifies their goals, and books the intro in 60 seconds.",
        result: "Gyms increase challenge sign-ups by 40% and reduce staff distraction by near-100% during workouts.",
        dreamVision: "Imagine a gym where every new lead is welcomed, their goals are logged, and their first session is booked before they even close their Facebook app.",
        industryStats: [
            { stat: "40%", label: "Lead Conversion" },
            { stat: "Zero", label: "Missed Motivation" },
            { stat: "24/7", label: "Challenge Signup" }
        ],
        useCases: [
            { title: "The Midnight Inspiration", scenario: "Someone clicks on your '20lb Weight Loss' ad at 11 PM on Sunday.", outcome: "AI engages them via text, asks about their goals and age, and books their No-Sweat Intro for Monday at 10 AM." }
        ],
        comparisonTable: [
            { category: "Response Speed", without: "Manual (Hours)", withAI: "Instant (10 Seconds)" },
            { category: "Lead Nurture", without: "Manual (Rare)", withAI: "Persistent (Continuous)" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Mapping your current lead-to-intro drop-off points." },
            { step: 2, title: "Momentum Node Launch", description: "Deploying your 24/7 digital membership advisor." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for gym lead conversion and member success.",
                examples: [
                    { title: "The 24/7 Challenge Concierge", detail: "AI that handles all inbound ad leads, qualifying goals and booking intros instantly.", roi: "Increases challenge starts by 40%." },
                    { title: "Member Success Coach Bot", detail: "AI that follows up with members who haven't logged a workout in 5 days to re-engage them.", roi: "Typical 20% increase in member retention (LTV)." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered fitness business operations.",
                areas: [
                    { area: "Membership & Sales", detail: "AI that manages the entire lead-to-member journey, including contracts and billing setup.", impact: "Zero sales friction." },
                    { area: "Retention & Education", detail: "AI that provides daily nutrition tips and motivational check-ins for challenge participants.", impact: "High member results and reviews." }
                ]
            },
            custom: {
                title: "The FitnessOS",
                description: "Complete AI infrastructure for boutique gyms and fitness franchises.",
                features: [
                    "24/7 multi-channel goal-based lead capture",
                    "Integrated membership-tier and challenge educator",
                    "Automated session-reminder and retention sequences",
                    "Integrated referral and review-loop engine"
                ]
            }
        },
        faq: [
            { q: "Can it book the intro into my gym software?", a: "Yes. We integrate with Wodify, Zen Planner, MindBody, and Glofox." },
            { q: "Can it handle nutrition questions?", a: "It can provide general, science-based nutrition tips you define, but routes specific coaching questions to your clinical team." }
        ],
        layers: [{ department: "Membership Ops", roles: ["Goal Specialist", "Success Bot"], tasks: ["Book intros", "Re-engage dormant members"] }]
    },
    {
        slug: "physical-therapy-clinics",
        name: "Physical Therapy",
        hook: "Patients in Pain Don't Want to Leave a Voicemail. They Want a Way Forward.",
        problem: "When a potential PT patient is in pain, they want an answer now. If your clinic doesn't answer or can't tell them if you take their insurance, they call the firm down the street. Your front desk is too busy to manage the insurance doc-chase properly.",
        operatorProblem: "PT centers are won on empathy, speed, and insurance integrity. Most clinics lose 25% of inquiries to slow response or insurance confusion. We install the AI that captures the lead, qualifies the pain points, and verifies the VOB in 5 minutes.",
        result: "PT clinics increase 'starts' by 30% and reduce admin time on insurance by 60%.",
        dreamVision: "Imagine a clinic where every patient is qualified, their initial pain profile is builder, and their insurance is verified before they even arrive for the evaluation.",
        industryStats: [
            { stat: "30%", label: "Starts Jump" },
            { stat: "60%", label: "Less Admin Time" },
            { stat: "5min", label: "VOB Speed" }
        ],
        useCases: [
            { title: "The Weekend Injury", scenario: "Someone hurts their back on a Saturday and calls your clinic.", outcome: "AI answers, gathers the injury detail, confirms you take their BlueCross insurance, and books their EVAL for Monday at 8 AM." }
        ],
        comparisonTable: [
            { category: "Patient Response", without: "Voicemail (Lagged)", withAI: "Instant (10 Seconds)" },
            { category: "Insurance Verification", without: "Manual (Hours)", withAI: "Seconds (Instant VOB)" }
        ],
        processSteps: [
            { step: 1, title: "Patient Audit", description: "Mapping your current Eval drop-off and insurance delays." },
            { step: 2, title: "Care Node Launch", description: "Deploying your 24/7 patient-facing intake unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for PT clinic growth and VOB.",
                examples: [
                    { title: "The 24/7 Care Concierge", detail: "AI that handles all inquiries, gathers pain-point data, and books evaluations instantly.", roi: "Increases EVAL volume by 30%." },
                    { title: "The Instant VOB Engine", detail: "AI that takes insurance details and runs a full Verification of Benefits in seconds.", roi: "Reduces intake friction and front-desk stress." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered PT operations.",
                areas: [
                    { area: "Patient Experience & Intake", detail: "AI that manages the entire pre-visit journey, ensuring all docs are signed and insurance is green.", impact: "Zero Eval-day friction." },
                    { area: "Retention & Compliance", detail: "AI that follows up with patients to remind them of their home exercises and the importance of finishing their plan of care.", impact: "Higher patient completion and results." }
                ]
            },
            custom: {
                title: "The PT Care OS",
                description: "Complete AI infrastructure for high-volume physical therapy groups.",
                features: [
                    "24/7 instant lead response and pain-triage logic",
                    "Integrated instant Verification of Benefits (VOB)",
                    "Automated home-exercise-program (HEP) support sequences",
                    "Predictive lead-value scoring and plan-of-care tracking"
                ]
            }
        },
        faq: [
            { q: "Is the AI secure for HIPAA?", a: "Yes. Our medical nodes are enterprise-grade and secure, protecting all patient PII." },
            { q: "Can it help with home exercise reminders?", a: "Yes. It can text the patient their HEP instructions and ask if they completed their exercises, flagging non-compliance for the therapist." }
        ],
        layers: [{ department: "Care Operations", roles: ["Pain Specialist", "VOB Bot"], tasks: ["Qualify Eval leads", "Verify insurance benefits"] }]
    },
    {
        slug: "chiropractors",
        name: "Chiropractic Clinics",
        hook: "Your Patients Are Only 1 Sneeze Away from Needing Your Clinic. Always Be Answering.",
        problem: "Chiro leads are high-volume but inconsistent. If you don't answer their text about a 'New Patient Special' in 3 minutes, they call the firm down the street. Your staff is too busy with therapy and adjustments to work the front desk phone 100%.",
        operatorProblem: "Chiro centers are won on volume and referral speed. Most clinics lose 30% of their ad spend to lead decay. We install the AI that captures the lead, qualifies their symptoms, and books the consult in seconds.",
        result: "Chiro clinics increase 'new patients' by 40% and reduce staff distraction to zero.",
        dreamVision: "Imagine a clinic where every morning your schedule is perfectly packed, your patients have pre-filled their history, and your staff only focuses on their care.",
        industryStats: [
            { stat: "40%", label: "Starts Jump" },
            { stat: "100%", label: "Lead Capture" },
            { stat: "Zero", label: "Missed Emergencies" }
        ],
        useCases: [
            { title: "The Sudden Spasm", scenario: "Someone wakes up with a stiff neck and texts your clinic.", outcome: "AI answers, qualifies their symptoms (no red flags), and books their EVAL for 9 AM that morning." }
        ],
        comparisonTable: [
            { category: "Response Speed", without: "Manual (Hours)", withAI: "Instant (10 Seconds)" },
            { category: "Patient Pre-Intake", without: "Paper (Clunky)", withAI: "Digital (Smooth/AI)" }
        ],
        processSteps: [
            { step: 1, title: "Traffic Audit", description: "Mapping your most frequent missed-call and Eval drop-off points." },
            { step: 2, title: "Spine Node Launch", description: "Deploying your 24/7 digital clinical manager." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for chiro practice growth.",
                examples: [
                    { title: "The 24/7 Spine Concierge", detail: "AI that handles all inbound ad leads and queries, qualifying symptoms and booking evaluations instantly.", roi: "Increases new patient volume by 40%." },
                    { title: "Referral Multiplier for Chiro", detail: "AI that follows up post-adjustment to gather Google reviews and referrals from happy patients.", roi: "Dominates local search maps." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered chiro operations.",
                areas: [
                    { area: "Patient Management", detail: "AI that manages your client history, favorite adjustments, and maintenance reminders.", impact: "Personalized feel at scale." },
                    { area: "Marketing & Growth", detail: "AI that manages seasonal specials and re-engages dormant patients during slow months.", impact: "Predictable monthly cash flow." }
                ]
            },
            custom: {
                title: "The ChiroOS",
                description: "Complete AI infrastructure for multi-station chiro centers.",
                features: [
                    "24/7 instant lead response and symptom-triage",
                    "Integrated patient-history pre-screening and education",
                    "Automated session-reminder and retention sequences",
                    "Monthly membership and recurring-adjusting manager"
                ]
            }
        },
        faq: [
            { q: "Is it secure for clinical data?", a: "Yes. Our medical nodes are enterprise-grade and secure, protecting all patient PII." },
            { q: "Can it book the EVAL into my software?", a: "Yes. We integrate with major chiro management platforms to sync schedules." }
        ],
        layers: [{ department: "Clinical Support", roles: ["Symptom Specialist", "Review Bot"], tasks: ["Book evaluations", "Re-engage dormant patients"] }]
    }
];
