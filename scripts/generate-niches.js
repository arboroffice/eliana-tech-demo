const fs = require('fs');
const path = require('path');

const nichesRaw = `1	cosmetic-dentistry	Medical & Dental
2	hormone-therapy-trt-clinics	Medical & Dental
3	solar-panel-installers	Home Services — High Ticket
4	med-spa	Medical & Dental
5	addiction-treatment-centers	Medical & Dental
6	orthodontics-invisalign	Medical & Dental
7	weight-loss-clinics	Medical & Dental
8	hvac-companies	Home Services — High Ticket
9	pool-builders	Home Services — High Ticket
10	fertility-clinics	Medical & Dental
11	divorce-family-law	Legal
12	window-door-replacement	Home Services — High Ticket
13	teeth-whitening-services	Beauty & Personal Care
14	laser-hair-removal-clinics	Beauty & Personal Care
15	hair-restoration-clinics	Beauty & Personal Care
16	bankruptcy-lawyers	Legal
17	immigration-lawyers	Legal
18	dui-defense-attorneys	Legal
19	cleaning-services-commercial	Home Services — Recurring
20	garage-door-repair-install	Home Services — Recurring
21	landscaping-companies	Home Services — Recurring
22	painting-contractors	Home Services — Recurring
23	electricians	Home Services — Recurring
24	pest-control-companies	Home Services — Recurring
25	personal-injury-lawyers	Legal
26	workers-comp-lawyers	Legal
27	criminal-defense-attorneys	Legal
28	estate-planning-attorneys	Legal
29	real-estate-agents-teams	Real Estate & Property
30	storage-facilities	Real Estate & Property
31	property-management-companies	Real Estate & Property
32	iv-therapy-wellness-clinics	Health & Wellness
33	physical-therapy-clinics	Health & Wellness
34	mental-health-practices	Health & Wellness
35	allergy-clinics	Health & Wellness
36	senior-care-assisted-living	Health & Wellness
37	dermatology-practices	Health & Wellness
38	hearing-aid-clinics	Health & Wellness
39	home-health-care-agencies	Health & Wellness
40	veterinary-clinics	Health & Wellness
41	pain-management-clinics	Health & Wellness
42	chiropractors	Health & Wellness
43	urgent-care-centers	Health & Wellness
44	optometrists-eye-care	Health & Wellness
45	dentists-general-practices	Medical & Dental
46	oral-surgery-practices	Medical & Dental
47	pediatric-dentists	Medical & Dental
48	lash-brow-studios	Beauty & Personal Care
49	nail-salons	Beauty & Personal Care
50	hair-salons-barbershops	Beauty & Personal Care
51	tattoo-studios	Beauty & Personal Care
52	dog-grooming	Pet Services
53	dog-training	Pet Services
54	emergency-vet-clinics	Pet Services
55	pet-boarding-daycare	Pet Services
56	auto-body-collision-repair	Automotive
57	towing-companies	Automotive
58	auto-detailing	Automotive
59	car-dealerships	Automotive
60	tire-shops	Automotive
61	auto-repair-shops	Automotive
62	insurance-agencies	Professional & Financial Services
63	it-services-managed-it	Professional & Financial Services
64	commercial-printing-companies	Professional & Financial Services
65	accounting-firms-cpas	Professional & Financial Services
66	financial-advisors	Professional & Financial Services
67	staffing-recruiting-agencies	Professional & Financial Services
68	photographers	Events & Hospitality
69	event-planners	Events & Hospitality
70	catering-companies	Events & Hospitality
71	food-trucks	Events & Hospitality
72	wedding-venues	Events & Hospitality
73	hotels-bbs-independent	Events & Hospitality
74	restaurants	Events & Hospitality
75	tutoring-centers	Education & Childcare
76	martial-arts-studios	Education & Childcare
77	music-dance-schools	Education & Childcare
78	private-charter-schools	Education & Childcare
79	daycare-childcare-centers	Education & Childcare
80	driving-schools	Education & Childcare
81	pressure-washing	Misc. Local Services
82	pool-cleaning-maintenance	Misc. Local Services
83	locksmith-services	Misc. Local Services
84	window-cleaning-services	Misc. Local Services
85	moving-companies	Misc. Local Services
86	junk-removal	Misc. Local Services
87	car-wash-businesses	Misc. Local Services
88	general-contractors	Home Services — High Ticket
89	roofing-contractors	Home Services — High Ticket
90	home-remodeling-contractors	Home Services — High Ticket
91	kitchen-bathroom-remodeling	Home Services — High Ticket
92	water-damage-restoration	Home Services — High Ticket
93	concrete-paving-contractors	Home Services — Recurring
94	tree-service-companies	Home Services — Recurring
95	fence-companies	Home Services — Recurring
96	plumbing-companies	Home Services — Recurring
97	flooring-companies	Home Services — Recurring
98	home-inspection-services	Real Estate & Property
99	mortgage-brokers	Real Estate & Property
100	it-consultants	Professional & Financial Services`;

const slugify = (text) => text.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/[^\w-]/g, '');

const niches = nichesRaw.split('\n').map(line => {
    const parts = line.split('\t');
    return {
        id: parts[0],
        slug: parts[1],
        name: parts[1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        category: parts[2]
    };
});

const getTemplate = (niche) => {
    const cat = niche.category;
    const name = niche.name;
    const slug = niche.slug;

    const base = {
        slug: slug,
        name: name,
        hook: "Infrastructure for the 24/7 Digital Economy.",
        problem: "You are spending too much time on manual admin, follow-ups, and repetitive tasks that don't scale.",
        operatorProblem: "The bottleneck is human bandwidth for non-critical operations. We install AI agents that handle the heavy lifting while you focus on high-value work.",
        result: "A lean, automated operation that captures every lead and serves every client instantly.",
        subNiches: [cat, name + " Services"],
        geoKeywords: ["Nationwide", "Major Metros"],
        services: {
            singleSystems: {
                title: name + " Systems",
                description: "Deep automation for core " + name + " workflows.",
                examples: []
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale business transformation.",
                areas: []
            },
            custom: {
                title: "The " + name + " OS",
                description: "Custom ground-up AI infrastructure.",
                features: []
            }
        },
        faq: [],
        dreamVision: "Imagine your " + name + " operation running with zero friction. Every lead is caught, every client is served, and your team only handles high-value strategy.",
        industryStats: [
            { stat: "24/7", label: "Autonomous Response" },
            { stat: "3-5x", label: "ROI Potential" },
            { stat: "80%", label: "Task Automation" }
        ],
        useCases: [
            { title: "Lead Infiltration", scenario: "A prospect contacts you after hours.", outcome: "AI qualifies and schedules them instantly." },
            { title: "Admin Overload", scenario: "Your team is buried in repetitive status updates.", outcome: "AI handles 90% of client coordination autonomously." }
        ],
        comparisonTable: [
            { category: "Lead Speed", without: "Manual (Hours/Days)", withAI: "Instant (10 Seconds)" },
            { category: "Availability", without: "9-5 Mon-Fri", withAI: "24/7/365" },
            { category: "Scalability", without: "Hiring dependent", withAI: "Infinite Digital Capacity" }
        ],
        processSteps: [
            { step: 1, title: "Audit", description: "Deep analysis of your current manual bottlenecks." },
            { step: 2, title: "Architecture", description: "Custom AI blueprinting for your specific " + name + " workflows." },
            { step: 3, title: "Deployment", description: "Live installation of your neural layer." }
        ],
        layers: [
            {
                department: "Core Operations",
                roles: ["AI Coordinator", "Digital Assistant"],
                tasks: ["Handle inquiries", "Manage scheduling"]
            }
        ]
    };

    if (cat === "Medical & Dental") {
        base.hook = "Your Practice is Full, but Your Staff is Burned Out.";
        base.problem = "You are spending too much time on admin. Patients are calling constantly, and your front desk is overwhelmed with scheduling, insurance, and follow-ups. Every missed call is a missed patient.";
        base.operatorProblem = "The bottleneck is human interaction for repetitive tasks. We install AI agents that handle booking, patient inquiries, and insurance verification 24/7.";
        base.result = "The practice runs smoothly with zero missed calls and automated patient nurturing.";
        base.services.singleSystems.examples = [
            { title: "The 24/7 Voice Receptionist", detail: "AI that answers every call and text to book appointments into your existing PMS.", roi: "30% increase in patient volume." },
            { title: "Automated Patient Re-engagement", detail: "AI scans your database to fill cancelled slots and recall dormant patients.", roi: "Typical $15k-$30k/mo in recovered revenue." },
            { title: "Insurance Verification Bot", detail: "Automated benefit checks performed instantly upon booking.", roi: "Saves 20+ hours of billing staff time weekly." },
            { title: "Treatment Plan Follow-up", detail: "Nurtures patients to accept high-ticket treatments via personalized SMS educators.", roi: "40% increase in treatment acceptance rates." },
            { title: "Post-Op Care Assistant", detail: "Automated check-ins for patient recovery, flagging issues for immediate human review.", roi: "Reduces complications and increases patient satisfaction." },
            { title: "Review Multiplier", detail: "Tactical SMS follow-ups that drive 5-star Google reviews after positive visits.", roi: "Dominates local search results within 90 days." },
            { title: "Billing & Financing Concierge", detail: "Handles payment reminders and explains financing options to patients 24/7.", roi: "Reduces accounts receivable by 25%." }
        ];
        base.services.departments.areas = [
            { area: "Patient Reception", detail: "Multi-channel AI intake handling for calls, texts, and web chat.", impact: "Reclaim 80% of front-desk bandwidth." },
            { area: "Clinical Operations", detail: "AI-assisted charting and automated documentation summaries.", impact: "Saves doctors 2 hours of desk work daily." },
            { area: "Billing & Insurance", detail: "Claims processing and denial management automation.", impact: "Faster payouts and higher claim success rates." },
            { area: "Growth & Marketing", detail: "Autonomous nurturing of patient database for high-value procedures.", impact: "Predictable monthly procedure volume." }
        ];
        base.services.custom.features = [
            "HIPAA-compliant dedicated LLM nodes",
            "Direct PMS integration (OpenDental, Dentrix, etc.)",
            "Real-time practice profitability dashboards",
            "Automated staff training and onboarding agents",
            "Multi-location coordination hub",
            "Predictive inventory management for supplies",
            "Waitlist optimization engine"
        ];
        base.dreamVision = "Imagine a clinic where your staff never answers a generic booking call again. Your schedule is perfectly packed, patient records are updated by AI in real-time, and you are solely focused on delivering exceptional care.";
        base.industryStats = [
            { stat: "30%", label: "Patient Growth" },
            { stat: "100%", label: "Inquiry Response" },
            { stat: "20h+", label: "Weekly Admin Recaptured" }
        ];
        base.useCases = [
            { title: "The 3 AM Emergency", scenario: "A patient breaks a crown at midnight and calls in a panic.", outcome: "AI triages the pain level, provides care instructions, and books them for the 8 AM emergency slot." },
            { title: "No-Show Recovery", scenario: "A high-value treatment slot opens up due to a last-minute cancellation.", outcome: "AI automatically identifies and contacts the next best patient on the waitlist, filling the slot before your staff even notices it's empty." }
        ];
        base.comparisonTable = [
            { category: "Patient Intake", without: "Manual Forms & Long Waits", withAI: "Instant Pre-Visit Digital Onboarding" },
            { category: "Reception Support", without: "Burned-out staff and missed calls", withAI: "24/7 Infinite Concierge Capacity" },
            { category: "Record Keeping", without: "Manual data entry backlog", withAI: "Real-time Autonomous Charting" }
        ];
        base.processSteps = [
            { step: 1, title: "Clinical Audit", description: "We map every manual touchpoint in your patient journey." },
            { step: 2, title: "HIPAA Node Setup", description: "Deploying secure, isolated AI infrastructure for your practice data." },
            { step: 3, title: "PMS Orchestration", description: "Integrating the AI into your existing software for seamless booking and charting." }
        ];
        base.faq = [
            { q: "Is the AI secure?", a: "Yes, we use enterprise-grade, HIPAA-compliant security for all medical implementations." },
            { q: "Does it work with my dental software?", a: "We integrate with most major PMS systems via API or secure desktop automation." },
            { q: "Can it handle emergency calls?", a: "The AI triages calls in real-time and immediately alerts your on-call staff for true emergencies." },
            { q: "Will my patients know it's AI?", a: "We use high-fidelity voice and conversational logic that feels like a professional concierge." },
            { q: "How long is the setup?", a: "Typically 14-21 days for a full clinical OS implementation." },
            { q: "Is there a limit on calls handled?", a: "Our infrastructure scales infinitely; it can handle 100 calls simultaneously during peak hours." }
        ];
    } else if (cat === "Legal") {
        base.hook = "Your Case Load is High, but Your Billable Hours Are Eaten by Admin.";
        base.problem = "Every hour spent on intake or client updates is an hour you aren't billing. Clients want instant updates, and your paralegals are buried in paperwork.";
        base.operatorProblem = "Client intake and case updates are manual bottlenecks. We install an AI that handles initial consultations, document gathering, and status reporting.";
        base.result = "Reclaim billable hours while providing a premium client experience.";
        base.services.singleSystems.examples = [
            { title: "Intake & Triage Bot", detail: "Qualifies potential leads based on specific case criteria before booking a consult.", roi: "Saves 10+ hours of attorney time per week." },
            { title: "Document Discovery Assistant", detail: "AI analyzes client-uploaded documents and identifies key evidence and gaps.", roi: "Accelerates case discovery by 60%." },
            { title: "Client Update Concierge", detail: "Automated case status reports sent via SMS or Email to keep clients informed 24/7.", roi: "Reduces 'Where is my case?' calls by 75%." },
            { title: "Billing & Retainer Assistant", detail: "Manages retainer top-ups and billing reminders automatically.", roi: "Increased collection rates by 22%." },
            { title: "Deposition Summarizer", detail: "Processes multi-hour transcripts into actionable strategy bullet points.", roi: "Reclaims 4+ hours of prep time per deposition." },
            { title: "Conflict Check Automator", detail: "Instant database searches for potential conflicts of interest.", roi: "Removes a major administrative bottleneck." },
            { title: "Lead Nurture System", detail: "Keeps prospective clients engaged during the critical decision-making window.", roi: "35% increase in lead-to-retainer conversion." }
        ];
        base.services.departments.areas = [
            { area: "Administrative Support", detail: "Automating document prep, filing, and case organization.", impact: "Reclaim 50% of paralegal bandwidth." },
            { area: "Client Relations", detail: "Continuous feedback and referral loops managed by AI.", impact: "Higher NPS and more organic referrals." },
            { area: "Intake & Sales", detail: "High-speed qualification and appointment setting for new matters.", impact: "Zero lead leakage during off-hours." },
            { area: "Case Strategy", detail: "AI-assisted research and timeline modeling for complex data sets.", impact: "More competitive case positioning." }
        ];
        base.services.custom.features = [
            "Attorney-reviewed automated document drafts",
            "Secure client-side encryption portals",
            "Real-time case value estimators",
            "Integrated legal research nodes",
            "Automated subpoena and filing generators",
            "Multi-state compliance monitoring",
            "Strategic case-load balance modeling"
        ];
        base.dreamVision = "Imagine a firm where you only open your calendar for depositions and trials. Every client inquiry is qualified, every document is sorted, and every status update is sent automatically. You are a lawyer again, not an admin.";
        base.industryStats = [
            { stat: "25%", label: "Profit Increase" },
            { stat: "Zero", label: "Missed Deadlines" },
            { stat: "40h", label: "Admin Replaced By Billing" }
        ];
        base.useCases = [
            { title: "Hyper-Speed Discovery", scenario: "You receive 50,000 pages of discovery for a new matter.", outcome: "AI ingests and flags the 50 most relevant documents in under 2 hours." },
            { title: "The High-Value Intake", scenario: "A high-value lead contacts the firm on a Sunday afternoon.", outcome: "AI vets the conflict, assesses case value, and provides the retainer agreement before Monday morning." }
        ];
        base.comparisonTable = [
            { category: "Discovery Prep", without: "Manual paralegal sorting", withAI: "Autonomous Instant Indexing" },
            { category: "Client Communication", without: "Reactive phone tags", withAI: "Proactive Autonomous Updates" },
            { category: "Lead Qualification", without: "Time-wasting consults", withAI: "Pre-vetted High-Intent Inquiries" }
        ];
        base.processSteps = [
            { step: 1, title: "Ethics & Security Audit", description: "Ensuring your AI layer is fully compliant and air-gapped." },
            { step: 2, title: "Knowledge Ingestion", description: "Feeding the AI your past winning filings and firm terminology." },
            { step: 3, title: "Workflow Live-Sync", description: "Deploying the AI assistants into your case management software." }
        ];
        base.faq = [
            { q: "Is it compliant with legal ethics?", a: "The AI focuses on administrative tasks and data gathering; you maintain full control of legal advice." },
            { q: "Is our client data safe?", a: "We use military-grade encryption and isolated data nodes for every firm." },
            { q: "Can it integrate with Clio or MyCase?", a: "Yes, we integrate with all major case management platforms." },
            { q: "How does it handle intake for different case types?", a: "We build custom logic paths for each practice area (Family Law, PI, DUI, etc.)." },
            { q: "Can it handle bilingual clients?", a: "Yes, our AI is fluent in over 50 languages and can translate in real-time." },
            { q: "What is the ROI?", a: "Most firms see a full return on investment within the first 3 retainers signed by the AI." }
        ];
    } else if (cat.includes("Home Services")) {
        base.hook = "Stop Chasing Leads and Let Your System Chase the Checks.";
        base.problem = "You are in the field working, and a hot lead calls. By the time you call back, they've booked your competitor. Speed-to-lead is your biggest leak.";
        base.operatorProblem = "You can't be on the roof and on the phone at the same time. We install an AI that answers every call, qualifies the job, and books the estimate instantly.";
        base.result = "You capture 2x more jobs by responding in under 30 seconds, 24/7.";
        base.services.singleSystems.examples = [
            { title: "The 10-Second Lead Closer", detail: "AI that texts every new lead immediately to qualify their needs and book an onsite visit.", roi: "Double your lead conversion rate overnight." },
            { title: "Automated Review Generator", detail: "Tactical SMS sequence that gets Google reviews from happy customers upon project completion.", roi: "Builds massive local authority and SEO." },
            { title: "Missed Call Text-Back", detail: "Instantly SMS every missed caller to start a conversation before they call the next guy.", roi: "Captures 2-4 extra jobs per month." },
            { title: "Estimate Follow-up Engine", detail: "Persistent AI follow-up for unsigned quotes that stays on top of homeowners without you lifting a finger.", roi: "Closes 15% more outstanding quotes." },
            { title: "Seasonal Maintenance Recall", detail: "AI re-engages past customers for repeat/recurring services based on timing or weather.", roi: "Consistent year-round pipeline." },
            { title: "Dispatch & Routing AI", detail: "Automates technician scheduling and arrival notifications via SMS.", roi: "Reduces administrative overhead by 40%." },
            { title: "Job Photo & Data Capture", detail: "Mobile-first AI that helps crews upload photos and job notes directly into your CRM via voice.", roi: "Zero paperwork at the end of the day." }
        ];
        base.services.departments.areas = [
            { area: "Sales & Estimating", detail: "AI-led qualification and calendar management for your sales team.", impact: "Sales reps only roll to qualified appointments." },
            { area: "Customer Support", detail: "24/7 answering for status updates, scheduling, and billing questions.", impact: "Homeowners feel taken care of instantly." },
            { area: "Marketing & Growth", detail: "Autonomous re-engagement of stale leads and past customers.", impact: "Higher LTV per customer." },
            { area: "Operations", detail: "Automated supply ordering and crew coordination middleware.", impact: "Less friction in project delivery." }
        ];
        base.services.custom.features = [
            "Direct integration with ServiceTitan, Housecall Pro, or Jobber",
            "Real-time field profitability dashboards",
            "Automated crew arrival and tracking notifications",
            "Payment link automation via SMS",
            "Multi-location service area mapping",
            "Predictive weather-based lead generation",
            "Automated subcontractor management"
        ];
        base.dreamVision = "Imagine a business where every time a phone rings, a check is effectively written. Your trucks never have empty gaps, your clients leave reviews without being asked, and you've completely eliminated 'no-shows'.";
        base.industryStats = [
            { stat: "2x", label: "Lead Conversion" },
            { stat: "15-day", label: "Faster Payments" },
            { stat: "100%", label: "Inquiry Capture" }
        ];
        base.useCases = [
            { title: "The Storm Surge", scenario: "A hail storm hits and you get 500 inquiries in 4 hours.", outcome: "AI answers every single lead, gathers damage photos, and perfectly stacks the inspection calendar for your crew." },
            { title: "Quote Re-activation", scenario: "You have $100k in un-signed quotes sitting on your desk.", outcome: "AI re-engages the homeowners with a 'limited-time' offer and closes $20k of them while you're on a job." }
        ];
        base.comparisonTable = [
            { category: "Speed To Lead", without: "Manual (Hours)", withAI: "Autonomous (10 Seconds)" },
            { category: "Dispatch Efficiency", without: "Manual Routing & Texts", withAI: "Optimized AI Dispatching" },
            { category: "Review Volume", without: "Asking manually (Rare)", withAI: "Automated (Consistent/High)" }
        ];
        base.processSteps = [
            { step: 1, title: "Field Audit", description: "Mapping your lead-to-check flow in the truck and office." },
            { step: 2, title: "CRM Orchestration", description: "Connecting AI nodes to ServiceTitan or Jobber for real-time sync." },
            { step: 3, title: "Neural Deployment", description: "Launching your 24/7 voice and text intake assistants." }
        ];
        base.faq = [
            { q: "Can it handle emergency calls?", a: "Yes, the AI triages the level of urgency and can route emergency calls directly to an on-call tech." },
            { q: "Does it work with my current CRM?", a: "We integrate with Jobber, Housecall Pro, ServiceTitan, and more." },
            { q: "How does it handle pricing?", a: "The AI can provide ballpark ranges based on your rules, or simply book the visit for a firm quote." },
            { q: "Will the AI sound like me?", a: "We customize the tone and terminology to match your brand's voice perfectly." },
            { q: "Is there a long-term contract?", a: "We offer flexible terms designed to grow with your business volume." },
            { q: "How many leads can it handle?", a: "Infinitely scalable; it can handle a huge surge of calls after a storm or major campaign." }
        ];
    } else {
        // Generic Deep Template
        base.services.singleSystems.examples = [
            { title: "24/7 AI Concierge", detail: "Answering every inquiry and qualifying every lead across voice and text.", roi: "Never miss another opportunity." },
            { title: "Autonomous Appointment Setter", detail: "Seamlessly booking demos, consults, or visits directly into your calendar.", roi: "20% more meetings booked monthly." },
            { title: "Client Retention Engine", detail: "Automated check-ins and re-engagement campaigns to keep clients loyal.", roi: "Reduces churn and increases LTV." },
            { title: "Review Multiplier", detail: "Driving 5-star social proof directly from happy customers automatically.", roi: "Dominates local search results." },
            { title: "Billing & Collections Bot", detail: "Handles payment reminders and financing questions without human friction.", roi: "Improves cash flow by 15%." },
            { title: "Intake & Onboarding AI", detail: "Guiding new clients through setup and data gathering instantly.", roi: "90% faster client onboarding." },
            { title: "Data Insights Sentinel", detail: "Monitoring your metrics and flagging growth opportunities in real-time.", roi: "Executive-level visibility 24/7." }
        ];
        base.services.departments.areas = [
            { area: "Sales & Growth", detail: "Lead qualification and high-speed follow-up automation.", impact: "4x increase in sales velocity." },
            { area: "Operations & Admin", detail: "Repetitive task replacement and document management.", impact: "Reclaim 40+ hours of team bandwidth weekly." },
            { area: "Customer Success", detail: "Zero-latency support and proactive client engagement.", impact: "Dramatically higher client satisfaction." },
            { area: "Technology", detail: "Custom AI nodes that integrate your existing tools into one brain.", impact: "Eliminate tool fragmentation." }
        ];
        base.services.custom.features = [
            "Custom proprietary LLM nodes",
            "Multi-channel communication hub",
            "Integrated real-time dashboards",
            "Automated workflow generators",
            "Strategic growth forecasting",
            "Tool-agnostic API middleware",
            "Advanced data encryption & security"
        ];
        base.faq = [
            { q: "Can it handle my specific niche?", a: "Yes, we build custom knowledge bases for every client." },
            { q: "How long is deployment?", a: "Most systems are live within 14-30 days." },
            { q: "Does it integrate with my tools?", a: "We connect to 6,000+ apps via API and webhooks." },
            { q: "Is it difficult to manage?", a: "It's fully managed; you focus on running the business, we handle the tech." },
            { q: "What's the typical ROI?", a: "Clients usually see a 3-5x return within the first 6 months." },
            { q: "Is my data private?", a: "Absolutely. We use isolated environments and do not train public models on your data." }
        ];
    }

    return base;
};

let outputStr = 'import { IndustryContent } from "./industry-data";\n\nexport const nichesTop100: IndustryContent[] = [\n';

niches.forEach((niche, index) => {
    const data = getTemplate(niche);
    
    outputStr += `    {
        slug: "${data.slug}",
        name: "${data.name}",
        hook: "${data.hook}",
        problem: "${data.problem}",
        operatorProblem: "${data.operatorProblem}",
        result: "${data.result}",
        subNiches: ${JSON.stringify(data.subNiches)},
        geoKeywords: ${JSON.stringify(data.geoKeywords)},
        services: {
            singleSystems: {
                title: "${data.services.singleSystems.title}",
                description: "${data.services.singleSystems.description}",
                examples: ${JSON.stringify(data.services.singleSystems.examples, null, 20).replace(/\n/g, '\n                    ')}
            },
            departments: {
                title: "${data.services.departments.title}",
                description: "${data.services.departments.description}",
                areas: ${JSON.stringify(data.services.departments.areas, null, 20).replace(/\n/g, '\n                    ')}
            },
            custom: {
                title: "${data.services.custom.title}",
                description: "${data.services.custom.description}",
                features: ${JSON.stringify(data.services.custom.features, null, 20).replace(/\n/g, '\n                    ')}
            }
        },
        faq: ${JSON.stringify(data.faq, null, 10).replace(/\n/g, '\n        ')},
        dreamVision: "${data.dreamVision}",
        industryStats: ${JSON.stringify(data.industryStats, null, 10).replace(/\n/g, '\n        ')},
        useCases: ${JSON.stringify(data.useCases, null, 10).replace(/\n/g, '\n        ')},
        comparisonTable: ${JSON.stringify(data.comparisonTable, null, 10).replace(/\n/g, '\n        ')},
        processSteps: ${JSON.stringify(data.processSteps, null, 10).replace(/\n/g, '\n        ')},
        layers: ${JSON.stringify(data.layers, null, 10).replace(/\n/g, '\n        ')}
    }${index === niches.length - 1 ? '' : ','}\n`;
});

outputStr += '];\n';

fs.writeFileSync(path.join(__dirname, '../lib/niches-top-100.ts'), outputStr);
console.log('Successfully generated lib/niches-top-100.ts');
