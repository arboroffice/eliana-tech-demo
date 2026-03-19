import { IndustryContent } from '../industry-data';

export const professionalIndustries: IndustryContent[] = [
    {
        slug: "accounting-firms",
        name: "Accounting & CPA Firms",
        hook: "Tax Season is 4 Months. Your Admin is 12 Months. You're Drowning.",
        problem: "You spend 30% of your billable time chasing bank statements and payroll logs. Your clients call you at 8 PM for 'quick' bookkeeping questions that you don't answer until Tuesday. You can't scale without hiring expensive human staff.",
        operatorProblem: "Accounting growth is limited by the ratio of human accountants to document flow. We install an AI document coordinator that chases the files and answers the 'quick' questions for you in seconds.",
        result: "CPA firms increase client capacity by 50% and reduce document-chasing admin by 80%.",
        dreamVision: "Imagine a firm where every client is supported by an AI document concierge, and your staff only focuses on high-level tax strategy and advisory.",
        industryStats: [
            { stat: "50%", label: "Client Capacity" },
            { stat: "80%", label: "Less Admin Chasing" },
            { stat: "24/7", label: "Client Support" }
        ],
        useCases: [
            { title: "The Missing Statement", scenario: "A client forgets to upload their November payroll log.", outcome: "AI follows up politely via text/email until it's received and verified as the correct file, then alerts the accountant." }
        ],
        comparisonTable: [
            { category: "Document Collection", without: "Manual chasing (Slow)", withAI: "Autonomous (Relentless)" },
            { category: "Client Support", without: "Voicemail/Lag (Hours)", withAI: "Instant (Digital)" }
        ],
        processSteps: [
            { step: 1, title: "Efficiency Audit", description: "Mapping your current document-to-ledger bottleneck." },
            { step: 2, title: "Ledger Node Launch", description: "Deploying your 24/7 digital document manager." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for accounting firm document management.",
                examples: [
                    { title: "The 24/7 Client Concierge", detail: "AI that handles all inbound client queries, document requests, and status updates via text or portal instantly.", roi: "Increases client satisfaction and retention." },
                    { title: "Automated Document Chaser", detail: "AI that persistently but politely follows up for missing financial statements and payroll data.", roi: "Saves 20+ hours of staff time per week." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered accounting operations.",
                areas: [
                    { area: "Client Management & Onboarding", detail: "AI that manages the entire intake and data-gathering flow for new tax or audit clients.", impact: "Zero intake friction." },
                    { area: "Strategy & BI", detail: "AI that monitors client financial data for anomalies and proactively flags upsell opportunities for advisory.", impact: "Higher average billings per client." }
                ]
            },
            custom: {
                title: "The LedgerOS",
                description: "Complete AI infrastructure for mid-sized CPA groups.",
                features: [
                    "24/7 instant client-status response and bot",
                    "Integrated multi-channel document-chase and VOB",
                    "Automated tax-deadline and compliance monitoring",
                    "Integrated advisory-insights and P&L dashboard"
                ]
            }
        },
        faq: [
            { q: "Is the data secure for tax records?", a: "Yes. Our nodes are enterprise-grade and secure, protecting all customer PII and financial records." },
            { q: "Does it work with QuickBooks or Xero?", a: "Yes. We integrate with major accounting tools to sync data and document status." }
        ],
        layers: [{ department: "Client Ops", roles: ["Document Concierge", "Compliance Bot"], tasks: ["Chase missing statements", "Answer basic tax-status qs"] }]
    },
    {
        slug: "staffing-agencies",
        name: "Staffing Agencies",
        hook: "The Best Candidates are Gone in 24 Hours. Your Recruiter is on Lunch.",
        problem: "You have 500 applicants and only 2 recruiters. By the time you call the top talent, they've already taken a job with a faster competitor. Your team is buried in 'bad' resumes instead of interviewing top candidates.",
        operatorProblem: "Staffing growth is a speed-to-hire game. Most agencies lose 40% of their revenue to slow vetting. We install the AI that screens every applicant, conducts the initial text-interview, and books the human call in 60 seconds.",
        result: "Staffing agencies increase placement volume by 35% and reduce recruiter admin by 60%.",
        dreamVision: "Imagine an agency where every morning you walk in to a stack of pre-vetted, high-interest candidates ready for final interviews.",
        industryStats: [
            { stat: "35%", label: "Placement Growth" },
            { stat: "60%", label: "Less Admin Time" },
            { stat: "60s", label: "Vetting Speed" }
        ],
        useCases: [
            { title: "The Sudden Job Opening", scenario: "An employer needs 10 forklift drivers at 9 AM.", outcome: "AI instantly texts your top 50 qualified leads, screens them for availability, and has the 10 confirmed by 9:05 AM." }
        ],
        comparisonTable: [
            { category: "Vetting speed", without: "Manual (Hours/Days)", withAI: "Instant (60 Seconds)" },
            { category: "Candidate Experience", without: "Delayed (Hours)", withAI: "Instant (24/7 Support)" }
        ],
        processSteps: [
            { step: 1, title: "Efficiency Audit", description: "Mapping your current lead-to-placement drop-off points." },
            { step: 2, title: "Screening Node Launch", description: "Deploying your 24/7 digital recruiter assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for staffing agency vetting and intake.",
                examples: [
                    { title: "The 24/7 Digital Recruiter", detail: "AI that handles all inbound applications, qualifying skills and conducting initial text-interviews instantly.", roi: "Increases placement starts by 35%." },
                    { title: "Candidate Re-activation Bot", detail: "AI that follows up with past candidates to see if they're still on the market for new roles.", roi: "Boosts placement-starts from existing leads." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered staffing operations.",
                areas: [
                    { area: "Candidate & Client Experience", detail: "AI that manages the entire intake and pre-assessment for multiple roles.", impact: "Zero placement-gap waste." },
                    { area: "Compliance & Billing", detail: "AI that manages timesheets, background checks, and billing follow-up for every placement.", impact: "Zero billing friction." }
                ]
            },
            custom: {
                title: "The StaffingOS",
                description: "Complete AI infrastructure for multi-industry staffing firms.",
                features: [
                    "24/7 instant applicant response and vetting",
                    "Integrated multi-role skill-assessment and education",
                    "Automated timesheet-reminder and retention sequences",
                    "Integrated employer-onboarding and referral engine"
                ]
            }
        },
        faq: [
            { q: "Is the AI secure for candidate data?", a: "Yes. Our nodes are enterprise-grade and secure, protecting all candidate PII and resumes." },
            { q: "Does it work for both desk and field roles?", a: "Yes. It uses role-specific logic to vet different skillsets and availability levels." }
        ],
        layers: [{ department: "Recruitment Ops", roles: ["Screening specialist", "Engagement Bot"], tasks: ["Vett applicants 24/7", "Send timesheet reminders"] }]
    },
    {
        slug: "insurance-agencies",
        name: "Insurance Agencies",
        hook: "Policies are Renewing. Your Clients Are Searching for a Better Deal. Are You Talking to Them?",
        problem: "You have 1,000 policies but only 2 account managers. When someone's rate jumps 20%, they go to Google instead of calling you. You only talk to them when they have a claim. You're losing 15% of your book to 'ghosting'.",
        operatorProblem: "Insurance growth is a retention and upsell game. Most agencies lose 15% of their book because they never communicate. We install the AI that monitors renewals, answers coverage questions, and cross-sells life or umbrella instantly.",
        result: "Insurance agencies increase retention by 20% and reduce customer support volume by 60%.",
        dreamVision: "Imagine an agency where every morning your schedule is perfectly packed with renewal reviews and upsell opportunities, all handled by AI while you were sleeping.",
        industryStats: [
            { stat: "20%", label: "Retention Jump" },
            { stat: "60%", label: "Less Admin Noise" },
            { stat: "Zero", label: "Missed Renewals" }
        ],
        useCases: [
            { title: "The Auto Renewal Jump", scenario: "A client's auto policy jumps $300 and they're about to shop.", outcome: "AI texts them proactively, explains the market shift, offers to quote their home for a bundle, and secures the renewal + umbrella in 5 minutes." }
        ],
        comparisonTable: [
            { category: "Client Response", without: "Voicemail (Lagged)", withAI: "Instant (10 Seconds)" },
            { category: "Cross-selling", without: "Manual (Rare)", withAI: "Autonomous (Continuous)" }
        ],
        processSteps: [
            { step: 1, title: "Retention Audit", description: "Mapping your most frequent renewal and churn windows." },
            { step: 2, title: "Policy Node Launch", description: "Deploying your 24/7 digital account manager assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for insurance agency growth.",
                examples: [
                    { title: "The 24/7 Policy Concierge", detail: "AI that handles all inbound calls and texts about coverage, claims status, and ID cards instantly.", roi: "Increases client satisfaction and retention." },
                    { title: "Renewal Retention Bot", detail: "AI that follows up proactively before every renewal to check for life changes and cross-sell opportunities.", roi: "Typically 20% increase in multi-policy households." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered insurance operations.",
                areas: [
                    { area: "Client Management & Ops", detail: "AI that manages the entire intake and data-gathering flow for new quotes across multiple carriers.", impact: "Zero quote-friction." },
                    { area: "Strategy & BI", detail: "AI that monitors your entire book for high-risk churn signals and proactive upsell opportunities.", impact: "Higher total premium per client." }
                ]
            },
            custom: {
                title: "The PolicyOS",
                description: "Complete AI infrastructure for mid-sized independent agencies.",
                features: [
                    "24/7 instant policy-status response and bot",
                    "Integrated multi-channel renewal-chase and VOB",
                    "Automated claims-deadline and compliance monitoring",
                    "Integrated cross-sell and life-lead engine"
                ]
            }
        },
        faq: [
            { q: "Is the data secure for insurance records?", a: "Yes. Our nodes are enterprise-grade and secure, protecting all customer PII and policy records." },
            { q: "Does it work with my management software?", a: "Yes. We integrate with AMS360, HawkSoft, and major tools to sync data and policy status." }
        ],
        layers: [{ department: "Accounts", roles: ["Policy Concierge", "Renewal Bot"], tasks: ["Handle COI requests", "Cross-sell umbrella"] }]
    }
];
