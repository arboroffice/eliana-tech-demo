import { IndustryContent } from '../industry-data';

export const legalIndustries: IndustryContent[] = [
    {
        slug: "divorce-family-law",
        name: "Divorce & Family Law",
        hook: "A Crisis at 3 AM Doesn't Wait for Your 9 AM Intake Specialist.",
        problem: "In family law, potential clients are calling during their most vulnerable moments. If they reach your voicemail, they keep calling other firms. Your paralegals are spending 20 hours a week on basic intake instead of drafting motions.",
        operatorProblem: "Family law intake is sensitive and data-heavy. If you don't capture the conflict-check info and qualify the case value instantly, you've lost the retainer. We install the AI that provides compassionate triage, performs the initial conflict check, and books the consult 24/7.",
        result: "Family law firms increase qualified case starts by 35% and reclaim $5k-10k/month in billable hours for paralegals.",
        dreamVision: "Imagine a firm where every crying caller is met with compassion 24/7, their basic case details are gathered, and your calendar is full of pre-qualified consults.",
        industryStats: [
            { stat: "35%", label: "Case Starts Jump" },
            { stat: "20hr/wk", label: "Admin Reclaimed" },
            { stat: "Zero", label: "Missed Crisis Calls" }
        ],
        useCases: [
            { title: "The Emergency Separation", scenario: "An individual text your firm about an urgent separation at 11 PM on a Sunday.", outcome: "AI provides compassionate triage, gathers their timeline/needs, and books a 10 AM Monday consult with your top litigator." }
        ],
        comparisonTable: [
            { category: "Intake", without: "Manual (Hours of calls)", withAI: "Instant (Digital/AI Triage)" },
            { category: "Response", without: "Voicemail (Dead lead)", withAI: "24/7 (Live Support)" }
        ],
        processSteps: [
            { step: 1, title: "Intake Audit", description: "Mapping your current intake friction and conflict-check delays." },
            { step: 2, title: "Compassion Node Launch", description: "Deploying your 24/7 empathetic triage unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for family law intake and case prep.",
                examples: [
                    { title: "Compassionate Triage Agent", detail: "AI that provides high-empathy triage for sensitive family law inquiries via text or web, gathering core case data 24/7.", roi: "Captures 35% more retainers." },
                    { title: "Conflict-Check Automation", detail: "AI that instantly checks inbound leads against your database of past clients and adverse parties.", roi: "Reduces intake-to-consult time by 2 days." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered family law operations.",
                areas: [
                    { area: "Case Intake & Vetting", detail: "AI that handles all initial inquiries, qualifies case value, and schedules paid consultations.", impact: "Zero lead leakage." },
                    { area: "Document Discovery Support", detail: "AI that helps clients gather and categorize financial and personal documents for their case.", impact: "Discovery time drops by 50%." }
                ]
            },
            custom: {
                title: "The Family Law OS",
                description: "Complete AI infrastructure for family law firms.",
                features: [
                    "24/7 compassionate intake with case-value scoring",
                    "Integrated conflict-check and intake documentation",
                    "Automated discovery collection and categorization bot",
                    "Multi-channel client-experience monitoring"
                ]
            }
        },
        faq: [
            { q: "Is the AI 'cold' for sensitive cases?", a: "No. We use models trained on empathetic communication. The AI validates their feelings while efficiently gathering the data you need to help them." },
            { q: "How does it handle the conflict check?", a: "It integrates with your case management software (Clio, MyCase) to cross-reference names instantly." }
        ],
        layers: [{ department: "Admissions", roles: ["Conflict Specialist", "Compassion Bot"], tasks: ["Triage crisis calls", "Gather basic intake data"] }]
    },
    {
        slug: "bankruptcy-lawyers",
        name: "Bankruptcy Law",
        hook: "Debt Collectors Don't Stop Calling. Your Firm Should Always Be Answering.",
        problem: "Bankruptcy leads are price-sensitive and stressed. They are calling every 'Chapter 7' lawyer they find. If you aren't the first to answer and prove your value, they move to the next firm with a lower retainer. Your staff spends all day checking 'do they qualify' for Ch 7 or Ch 13.",
        operatorProblem: "Bankruptcy is a volume business. You need a frictionless intake that qualifies the income and household stats instantly. Delay is your biggest enemy. We install the AI that qualifies the Ch 7/13 status and collects the retainer deposit in 5 minutes.",
        result: "Bankruptcy firms increase retainer volume by 40% and reduce intake admin by 10+ hours per week.",
        dreamVision: "Imagine a firm where every caller is qualified, their income means-test is pre-estimated by AI, and their retainer is paid before they even see a lawyer.",
        industryStats: [
            { stat: "40%", label: "Retainer Increase" },
            { stat: "10hr/wk", label: "Admin Saved" },
            { stat: "5min", label: "Retainer Speed" }
        ],
        useCases: [
            { title: "The Sudden Garnishment", scenario: "Someone gets their wages garnished on a Friday and calls in a panic.", outcome: "AI answers, gathers their income and debt details, confirms they are a fit, and takes the deposit — stopping their search and securing the lead." }
        ],
        comparisonTable: [
            { category: "Lead Qualification", without: "30-min Phone Call", withAI: "3-min Digital Qual" },
            { category: "Retainer Collection", without: "Days (Manual)", withAI: "Minutes (AI-Driven)" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Mapping where your stressed leads are dropping off." },
            { step: 2, title: "Qualifier Launch", description: "Deploying your instant means-test estimator agent." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for bankruptcy intake and qualification.",
                examples: [
                    { title: "The 3-Minute Bankruptcy Qualifier", detail: "AI that gathers debt, income, and household data via text or web to estimate Chapter 7 vs 13 eligibility.", roi: "Increases consult-to-retainer rate by 50%." },
                    { title: "Retainer Recovery Bot", detail: "AI that follows up with leads who started the intake but haven't paid their deposit.", roi: "Reclaims 20% of 'lost' retainers." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered bankruptcy operations.",
                areas: [
                    { area: "Case Intake & Billing", detail: "AI that manages the entire intake process, from means-test estimates to payment plan setup.", impact: "Zero lead decay." },
                    { area: "Document Chase", detail: "AI that follows up with clients to collect the dozens of tax returns and paystubs needed for filing.", impact: "Filing time drops by 60%." }
                ]
            },
            custom: {
                title: "The Bankruptcy OS",
                description: "Complete AI infrastructure for high-volume bankruptcy firms.",
                features: [
                    "Instant means-test and eligibility estimator",
                    "Integrated retainer deposit and payment plan bot",
                    "Automated document collection and categorization",
                    "Stressed-lead nurture and re-activation marketing"
                ]
            }
        },
        faq: [
            { q: "Is the means-test estimate accurate?", a: "It uses your specific logic and local median income data to provide a highly accurate 'likely fit' score for your review." },
            { q: "Can it handle Chapter 13 payment plan questions?", a: "Yes. It can provide general education on how Chapter 13 plans work to help the lead feel comfortable before the consult." }
        ],
        layers: [{ department: "Case Flow", roles: ["Eligibility Bot", "Doc Chaser"], tasks: ["Perform means-test estimates", "Chase missing tax returns"] }]
    },
    {
        slug: "immigration-lawyers",
        name: "Immigration Law",
        hook: "Visas Don't Wait. Your Response Time Shouldn't Either.",
        problem: "Immigration inquiries are global and happen in every time zone. If you only answer during NYC or LA business hours, you miss 60% of leads. Your paralegals are spending days manually translating and sorting through basic eligibility questions.",
        operatorProblem: "Immigration law is about speed and document integrity. Every hour of delay in answering a global lead is an opportunity lost. We install the AI that provides multi-lingual intake and eligibility vetting 24/7.",
        result: "Immigration firms increase global case volume by 50% and reduce intake translation costs by near-100%.",
        dreamVision: "Imagine a firm that books cases in Mandarin, Spanish, and Arabic while you sleep, and your paralegals wake up to pre-filled eligibility reports in English.",
        industryStats: [
            { stat: "50%", label: "Global Lead Jump" },
            { stat: "100%", label: "Translation Saved" },
            { stat: "24/7", label: "Multi-lingual Intake" }
        ],
        useCases: [
            { title: "The Global Entrepreneur", scenario: "An investor in Singapore inquiries about an EB-5 visa at 2 AM EST.", outcome: "AI answers in their language, qualifies their investment capacity, and books an 8 PM EST consult (their 8 AM) with a pre-filled profile." }
        ],
        comparisonTable: [
            { category: "Global Support", without: "Office Hours Only", withAI: "24/7 Multi-lingual" },
            { category: "Intake Prep", without: "Paralegal (Manual)", withAI: "AI (Autonomous Report)" }
        ],
        processSteps: [
            { step: 1, title: "Global Audit", description: "Mapping where your international leads are dropped." },
            { step: 2, title: "Linguistic Node Launch", description: "Deploying your multi-lingual intake assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for immigration law global intake.",
                examples: [
                    { title: "The Multi-lingual Intake Guard", detail: "AI that communicates in 50+ languages to qualify visa eligibility and book consultations instantly.", roi: "Captures 3x more international leads." },
                    { title: "Visa Documentation Assistant", detail: "AI that guides clients through uploading and translating birth certificates, degrees, and travel logs.", roi: "Saves 20+ hours of paralegal prep per case." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered immigration law operations.",
                areas: [
                    { area: "Case Onboarding", detail: "AI that manages the intake and initial eligibility vetting for all visa types (H1-B, EB-5, Family).", impact: "Zero intake friction." },
                    { area: "Client Experience", detail: "AI that provides 24/7 updates on case status and handles 'where is my green card' questions.", impact: "Drastically lower phone volume." }
                ]
            },
            custom: {
                title: "The Immigration OS",
                description: "Complete AI infrastructure for international law practices.",
                features: [
                    "24/7 Multi-lingual conversational intake",
                    "Automated visa-type eligibility scoring",
                    "Integrated document translation and OCR verification",
                    "Global multi-timezone scheduling engine"
                ]
            }
        },
        faq: [
            { q: "How accurate is the translation?", a: "We use state-of-the-art neural translation better than human paralegals for intake, ensuring the meaning and nuance are preserved." },
            { q: "Can it handle complex Asylum cases?", a: "It can gather the core narrative and safety details for your review while providing supportive, trauma-informed responses." }
        ],
        layers: [{ department: "Global Intake", roles: ["Polyglot Bot", "Visa Qualifier"], tasks: ["Translate inquiries", "Score H1-B eligibility"] }]
    },
    {
        slug: "dui-defense-attorneys",
        name: "DUI Defense",
        hook: "A DUI Arrest at Midnight is Your Firm's Highest-Value Lead. Are You Answering?",
        problem: "DUI leads are 'emergency leads.' They are shopping from a police station or on the roadside. If you don't answer in 60 seconds, they call the firm that does. You are wasting $20k/month on Google Ads if you don't have a 24/7 response system.",
        operatorProblem: "DUI defense is a speed-to-lead business. Every minute of delay reduces your close rate by 50%. We install the AI that captures the arrest details, qualifies the case value, and takes the deposit instantly — even at 2 AM.",
        result: "DUI attorneys increase case signings by 45% and eliminate the need for expensive answering services.",
        dreamVision: "Imagine a practice where every midnight arrest call is answered, the jail location is logged, and the retainer is quoted before they even call the next lawyer.",
        industryStats: [
            { stat: "45%", label: "Signings Increase" },
            { stat: "60s", label: "Response Speed" },
            { stat: "Zero", label: "Missed Emergencies" }
        ],
        useCases: [
            { title: "The Jailhouse Call", scenario: "Someone calls from a station at 1 AM after a DUI arrest.", outcome: "AI answers, gathers the station/officer info, asks about breathalyzer results, and tells them 'we are on it' while alerting the attorney immediately." }
        ],
        comparisonTable: [
            { category: "Response Speed", without: "Voicemail/Answering Svc", withAI: "Instant (AI Attorney Liaison)" },
            { category: "Case Capture", without: "Phone tag (Slow)", withAI: "Digital Retainer (Instant)" }
        ],
        processSteps: [
            { step: 1, title: "Response Audit", description: "Mapping your lost leads during nights and weekends." },
            { step: 2, title: "Emergency Node Launch", description: "Deploying your 24/7 DUI response unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for DUI lead capture and conversion.",
                examples: [
                    { title: "The 2 AM DUI Response Bot", detail: "AI that answers every call and text at 2 AM, triages the arrest, and helps secure the lead immediately.", roi: "Increases conversions by 45%." },
                    { title: "Review Multiplier for Defense", detail: "AI that tactically gathers positive reviews from acquitted or reduced-charge clients to boost SEO ranking.", roi: "Dominates local search for 'DUI Lawyer'." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered defense law operations.",
                areas: [
                    { area: "Admissions & Signings", detail: "AI that manages the entire intake-to-retainer flow for criminal defense leads.", impact: "Highest possible conversion rate." },
                    { area: "Case Management Support", detail: "AI that gathers police reports and field notes, preparing the attorney's binder automatically.", impact: "Prep time drops by 40%." }
                ]
            },
            custom: {
                title: "The Defense OS",
                description: "Complete AI infrastructure for high-volume defense firms.",
                features: [
                    "24/7 emergency response with arrest-triage logic",
                    "Integrated retainer and document signing via SMS",
                    "Automated police report and evidence gatherer",
                    "Predictive lead-value scoring based on priors"
                ]
            }
        },
        faq: [
            { q: "Is the AI secure for potential evidence?", a: "Yes. All communications are private and attorney-client privileged, stored on encrypted, isolated nodes." },
            { q: "Can it tell them what to say to the police?", a: "It provides standard legal advice you define (e.g., 'exercise your right to remain silent') but does not give specific medical or situational advice." }
        ],
        layers: [{ department: "First Response", roles: ["Arrest Triage", "Intake Closer"], tasks: ["Log station location", "Collect initial deposit"] }]
    },
    {
        slug: "personal-injury-lawyers",
        name: "Personal Injury",
        hook: "Car Accidents Don't Happen During Business Hours. Your Intake Should Be 24/7.",
        problem: "Injury leads are high-stakes and competitive. If you don't answer the crash victim's text in 2 minutes, the billboard firm across town will. Your intake team is spending all day manually qualifying 'bad' cases instead of pursuing high-value claims.",
        operatorProblem: "PI is a triage and conversion game. Most firms waste 60% of their intake time on unqualified cases. We install the AI that qualifies the crash details, runs the initial policy check, and signs the client in 5 minutes.",
        result: "Personal injury firms increase fee-per-case by 30% through better triage and cut intake costs in half.",
        dreamVision: "Imagine a firm where every crash is logged, photos are gathered, and high-value cases are signed before the tow truck even arrives.",
        industryStats: [
            { stat: "30%", label: "Higher Case Value" },
            { stat: "50%", label: "Lower Intake Cost" },
            { stat: "Zero", label: "Lead Leakage" }
        ],
        useCases: [
            { title: "The Roadside Sign-up", scenario: "Someone texts 'I just got hit' on a Saturday afternoon.", outcome: "AI responds, asks for photos of the cars and the other driver's insurance, confirms a high-value policy, and sends a digital retainer instantly." }
        ],
        comparisonTable: [
            { category: "Intake Triage", without: "Manual (Time-wasting)", withAI: "Autonomous (High Efficiency)" },
            { category: "Sign-up Velocity", without: "Days (Paperwork)", withAI: "Minutes (SMS/Digital)" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Mapping your lead-to-sign-up time lags." },
            { step: 2, title: "Triage Node Launch", description: "Deploying your 24/7 PI response unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for personal injury triage and intake.",
                examples: [
                    { title: "The 2-Minute PI Triage Bot", detail: "AI that qualifies crash details, liability, and insurance limits to filter for high-value cases.", roi: "Increases intake efficiency by 70%." },
                    { title: "Automated Evidence Gatherer", detail: "AI that follows up with clients via SMS to collect medical bills, police reports, and photo evidence.", roi: "Reduces paralegal prep time by 20 hours/case." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered PI operations.",
                areas: [
                    { area: "Case Onboarding", detail: "AI that manages the entire intake, VOB, and digital signing flow for new injury cases.", impact: "Unbeatable speed-to-sign." },
                    { area: "Client Nurture", detail: "AI that provides proactive case status updates and monthly 'wellness checks' to keep clients happy and avoid 'why is it taking so long' calls.", impact: "Dramatically lower client churn." }
                ]
            },
            custom: {
                title: "The PI Powerhouse OS",
                description: "Complete AI infrastructure for high-growth injury firms.",
                features: [
                    "24/7 crash-triage and instant qualification",
                    "Integrated insurance and policy-limit lookup",
                    "Automated document and photo evidence collector",
                    "Lead-value scoring and priority routing"
                ]
            }
        },
        faq: [
            { q: "How does it know if a case is 'good'?", a: "It uses your specific criteria for liability, damages, and insurance coverage to score every lead instantly." },
            { q: "Can it handle workers comp cases too?", a: "Yes. It has specific workflows for workers comp triage and medical history gathering." }
        ],
        layers: [{ department: "Intake Ops", roles: ["Crash Qualifier", "Evidence Bot"], tasks: ["Triage liability", "Gather car photos"] }]
    },
    {
        slug: "estate-planning-attorneys",
        name: "Estate Planning",
        hook: "Your Clients Are Thinking About Their Legacy at 9 PM. Your Firm is Closed.",
        problem: "Estate planning is a 'some day' purchase. If you don't book the consult while they are thinking about it on a Sunday evening, they'll forget for another six months. Your staff spends all day chasing clients to finish their intake forms.",
        operatorProblem: "Estate planning is about friction-free intake and proactive follow-up. Most firms lose 50% of their pipeline to 'procrastination decay.' We install the AI that qualifies their needs, books the consult, and chases the intake docs automatically.",
        result: "Estate planning firms increase case starts by 35% and reduce intake chase-time by 80%.",
        dreamVision: "Imagine a firm where every legacy question is answered instantly, and your paralegals wake up to a stack of completed intake forms ready for drafting.",
        industryStats: [
            { stat: "35%", label: "Planning Starts" },
            { stat: "80%", label: "Less Chase Time" },
            { stat: "100%", label: "Query Capture" }
        ],
        useCases: [
            { title: "The Sunday Reflection", scenario: "A couple decides they finally need a Trust on Sunday night.", outcome: "AI answers their web inquiry, explains your Will vs Trust levels, and books their Tuesday consult while they are still focused on it." }
        ],
        comparisonTable: [
            { category: "Booking", without: "Office Hours Only", withAI: "24/7 (Instant)" },
            { category: "Intake Chase", without: "Manual (Days/Weeks)", withAI: "Autonomous (Hours)" }
        ],
        processSteps: [
            { step: 1, title: "Friction Audit", description: "Mapping your current intake form drop-off points." },
            { step: 2, title: "Legacy Node Launch", description: "Deploying your 24/7 planning concierge." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for estate planning intake and follow-up.",
                examples: [
                    { title: "The 24/7 Legacy Concierge", detail: "AI that explains the difference between Wills, Trusts, and POAs to educate the client before the consult.", roi: "Increases consult-to-retainer rate by 40%." },
                    { title: "Automated Intake Chaser", detail: "AI that persists politely with clients until their intake documents and asset lists are fully submitted.", roi: "Reduces 'dead' files by 50%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered estate law operations.",
                areas: [
                    { area: "Case Intake & Vetting", detail: "AI that manages the entire education and intake flow for new estate plans.", impact: "Zero lead decay." },
                    { area: "Client Success", detail: "AI that handles annual reviews, funding reminders, and basic trust admin questions.", impact: "High lifetime value and referrals." }
                ]
            },
            custom: {
                title: "The Legacy OS",
                description: "Complete AI infrastructure for estates and trusts firms.",
                features: [
                    "24/7 interactive estate planning educator",
                    "Integrated digital intake and asset list gatherer",
                    "Automated trust funding and review reminders",
                    "Referral partner (CPA/Advisor) communication hub"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle complex tax questions?", a: "It provides high-level education on estate tax thresholds and tools, but routes specific strategy questions to the attorney." },
            { q: "How do elderly clients like the AI?", a: "We find that many prefer the text-based option because it's slower and clearer than a fast phone call, and their adult children often handle the intake for them via the same tool." }
        ],
        layers: [{ department: "Client Prep", roles: ["Legacy Concierge", "Asset Chaser"], tasks: ["Educate on Trusts", "Chase intake forms"] }]
    }
];
