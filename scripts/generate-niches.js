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

const niches = nichesRaw.split('\n').map(line => {
    const parts = line.split('\t');
    return {
        id: parts[0],
        slug: parts[1],
        name: parts[1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        category: parts[2]
    };
});

const templates = {
    "Medical & Dental": {
        hook: "Your Practice is Full, but Your Staff is Burned Out.",
        problem: "You are spending too much time on admin. Patients are calling constantly, and your front desk is overwhelmed with scheduling, insurance, and follow-ups. Every missed call is a missed patient.",
        operatorProblem: "The bottleneck is human interaction for repetitive tasks. We install AI agents that handle booking, patient inquiries, and insurance verification 24/7.",
        result: "The practice runs smoothly with zero missed calls and automated patient nurturing.",
        singleSystems: [
            { title: "The 24/7 Voice Receptionist", detail: "AI that answers every call and text to book appointments into your existing PMS.", roi: "30% increase in patient volume." },
            { title: "Automated Patient Re-engagement", detail: "AI scans your database to fill cancelled slots and recall dormant patients.", roi: "Typical $15k-$30k/mo in recovered revenue." },
            { title: "Insurance Verification Bot", detail: "Automated benefit checks performed instantly upon booking.", roi: "Saves 20+ hours of billing staff time weekly." },
            { title: "Treatment Plan Follow-up", detail: "Nurtures patients to accept high-ticket treatments via personalized SMS educators.", roi: "40% increase in treatment acceptance rates." },
            { title: "Post-Op Care Assistant", detail: "Automated check-ins for patient recovery, flag-dropping issues for immediate human review.", roi: "Reduces complications and increases patient satisfaction." },
            { title: "Review Multiplier", detail: "Tactical SMS follow-ups that drive 5-star Google reviews after positive visits.", roi: "Dominates local search results within 90 days." },
            { title: "Billing & Financing Concierge", detail: "Handles payment reminders and explains financing options to patients 24/7.", roi: "Reduces accounts receivable by 25%." }
        ],
        departments: [
            { area: "Patient Reception", detail: "Multi-channel AI intake handling for calls, texts, and web chat.", impact: "Reclaim 80% of front-desk bandwidth." },
            { area: "Clinical Operations", detail: "AI-assisted charting and automated documentation summaries.", impact: "Saves doctors 2 hours of desk work daily." },
            { area: "Billing & Insurance", detail: "Claims processing and denial management automation.", impact: "Faster payouts and higher claim success rates." },
            { area: "Growth & Marketing", detail: "Autonomous nurturing of patient database for high-value procedures.", impact: "Predictable monthly procedure volume." }
        ],
        customFeatures: [
            "HIPAA-compliant dedicated LLM nodes",
            "Direct PMS integration (OpenDental, Dentrix, etc.)",
            "Real-time practice profitability dashboards",
            "Automated staff training and onboarding agents",
            "Multi-location coordination hub",
            "Predictive inventory management for supplies",
            "Waitlist optimization engine"
        ],
        faqs: [
            { q: "Is the AI secure?", a: "Yes, we use enterprise-grade, HIPAA-compliant security for all medical implementations." },
            { q: "Does it work with my dental software?", a: "We integrate with most major PMS systems via API or secure desktop automation." },
            { q: "Can it handle emergency calls?", a: "The AI triages calls in real-time and immediately alerts your on-call staff for true emergencies." },
            { q: "Will my patients know it's AI?", a: "We use high-fidelity voice and conversational logic that feels like a professional concierge." },
            { q: "How long is the setup?", a: "Typically 14-21 days for a full clinical OS implementation." },
            { q: "Is there a limit on calls handled?", a: "Our infrastructure scales infinitely; it can handle 100 calls simultaneously during peak hours." }
        ]
    },
    "Legal": {
        hook: "Your Case Load is High, but Your Billable Hours Are Eaten by Admin.",
        problem: "Every hour spent on intake or client updates is an hour you aren't billing. Clients want instant updates, and your paralegals are buried in paperwork.",
        operatorProblem: "Client intake and case updates are manual bottlenecks. We install an AI that handles initial consultations, document gathering, and status reporting.",
        result: "Reclaim billable hours while providing a premium client experience.",
        singleSystems: [
            { title: "Intake & Triage Bot", detail: "Qualifies potential leads based on specific case criteria before booking a consult.", roi: "Saves 10+ hours of attorney time per week." },
            { title: "Document Discovery Assistant", detail: "AI analyzes client-uploaded documents and identifies key evidence and gaps.", roi: "accelerates case discovery by 60%." },
            { title: "Client Update Concierge", detail: "Automated case status reports sent via SMS or Email to keep clients informed 24/7.", roi: "Reduces 'Where is my case?' calls by 75%." },
            { title: "Billing & Retainer Assistant", detail: "Manages retainer top-ups and billing reminders automatically.", roi: "Increased collection rates by 22%." },
            { title: "Deposition Summarizer", detail: "Processes multi-hour transcripts into actionable strategy bullet points.", roi: "Reclaims 4+ hours of prep time per deposition." },
            { title: "Conflict Check Automator", detail: "Instant database searches for potential conflicts of interest.", roi: "Removes a major administrative bottleneck." },
            { title: "Lead Nurture System", detail: "Keeps prospective clients engaged during the critical decision-making window.", roi: "35% increase in lead-to-retainer conversion." }
        ],
        departments: [
            { area: "Administrative Support", detail: "Automating document prep, filing, and case organization.", impact: "Reclaim 50% of paralegal bandwidth." },
            { area: "Client Relations", detail: "Continuous feedback and referral loops managed by AI.", impact: "Higher NPS and more organic referrals." },
            { area: "Intake & Sales", detail: "High-speed qualification and appointment setting for new matters.", impact: "Zero lead leakage during off-hours." },
            { area: "Case Strategy", detail: "AI-assisted research and timeline modeling for complex data sets.", impact: "More competitive case positioning." }
        ],
        customFeatures: [
            "Attorney-reviewed automated document drafts",
            "Secure client-side encryption portals",
            "Real-time case value estimators",
            "Integrated legal research nodes",
            "Automated subpoena and filing generators",
            "Multi-state compliance monitoring",
            "Strategic case-load balance modeling"
        ],
        faqs: [
            { q: "Is it compliant with legal ethics?", a: "The AI focuses on administrative tasks and data gathering; you maintain full control of legal advice." },
            { q: "Is our client data safe?", a: "We use military-grade encryption and isolated data nodes for every firm." },
            { q: "Can it integrate with Clio or MyCase?", a: "Yes, we integrate with all major case management platforms." },
            { q: "How does it handle intake for different case types?", a: "We build custom logic paths for each practice area (Family Law, PI, DUI, etc.)." },
            { q: "Can it handle bilingual clients?", a: "Yes, our AI is fluent in over 50 languages and can translate in real-time." },
            { q: "What is the ROI?", a: "Most firms see a full return on investment within the first 3 retainers signed by the AI." }
        ]
    },
    // Add more categories here... I'll populate them in the actual write call.
};

// Fill in other templates...
// I'll use a more comprehensive object in the next step to avoid making this thought block too large.
