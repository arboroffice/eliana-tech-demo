import { IndustryContent } from '../industry-data';

export const homeServicesAIndustries: IndustryContent[] = [
    {
        slug: "plumbing",
        name: "Plumbing Companies",
        hook: "Your Phone Is Ringing But You Are Under a Sink.",
        problem: "Emergency calls go to voicemail. Estimates sit in email drafts for days. Your best techs are booked solid but your schedule has gaps because the office cannot keep up. You are losing $50K+ a year in missed calls alone — and you do not even know it.",
        operatorProblem: "Every missed call is a lost job. Every slow estimate follow-up is a customer who called the next plumber on Google. These are not staffing problems — they are system problems. We install the AI layer that answers every call, follows up on every estimate, and fills every gap in your schedule.",
        result: "Plumbing companies recover $4,000-8,000 per month in previously lost revenue and reduce office staff workload by 60%.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that fix the biggest revenue leaks in your plumbing business.",
                examples: [
                    { title: "The Missed Call Recapture Engine", detail: "AI that answers every missed call within 30 seconds, qualifies the job type and urgency, and books it on your calendar — even at 2 AM for emergency drain calls.", roi: "Recovers $4,000-8,000/month in lost revenue." },
                    { title: "Estimate Follow-Up Machine", detail: "AI that follows up on every outstanding estimate via text and email at optimized intervals — asking if they have questions, offering financing, and creating urgency.", roi: "Closes 25-35% more estimates without tech involvement." },
                    { title: "The Dispatch Optimizer", detail: "AI that routes techs based on location, skill set, job complexity, and real-time traffic — minimizing windshield time and maximizing billable hours.", roi: "Fits 1-2 additional jobs per tech per day." },
                    { title: "Maintenance Agreement Engine", detail: "AI that identifies customers with aging water heaters, old supply lines, or previous repair history and sells them into annual maintenance plans.", roi: "Builds $15K-30K in recurring annual revenue." },
                    { title: "Review & Reputation Bot", detail: "AI that sends a review request to every completed job within 2 hours, follows up if not completed, and alerts you to any negative feedback before it goes public.", roi: "Doubles Google review volume in 90 days." },
                    { title: "Seasonal Campaign Launcher", detail: "AI that automatically triggers marketing campaigns based on season — sump pump checks in spring, water heater flushes in fall, freeze prevention in winter.", roi: "Generates 30-50 additional seasonal jobs per quarter." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI for plumbing company operations.",
                areas: [
                    { area: "Call Center & Booking", detail: "AI that handles all inbound calls, qualifies jobs, provides pricing estimates, and books appointments — 24/7 without hold times.", impact: "90% of calls handled without human CSR involvement." },
                    { area: "Dispatch & Scheduling", detail: "AI that optimizes daily routes, manages tech assignments, handles reschedules, and fills cancellation gaps in real-time.", impact: "15-20% increase in jobs completed per day." },
                    { area: "Sales & Follow-Up", detail: "AI that follows up on estimates, presents financing options, handles objections, and converts quotes into booked jobs.", impact: "Estimate close rate increases by 30%." },
                    { area: "Admin & Accounting", detail: "AI that processes invoices, manages collections, tracks job costing, and generates financial reports.", impact: "Back office runs with 50% less manual effort." }
                ]
            },
            custom: {
                title: "The Plumbing Company OS",
                description: "Complete AI infrastructure for plumbing companies doing $1M+ in revenue.",
                features: [
                    "24/7 AI call answering with job qualification and emergency triage",
                    "Intelligent dispatch and route optimization across all technicians",
                    "Automated estimate follow-up with financing integration",
                    "Maintenance agreement sales and renewal automation",
                    "Real-time job costing and profitability tracking",
                    "Automated review generation and reputation management",
                    "Seasonal marketing campaign automation with weather triggers"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle emergency vs. non-emergency plumbing calls?", a: "Yes. The AI triages every call by asking targeted questions about the issue — burst pipes and sewage backups get flagged as emergencies and routed to your on-call tech immediately, while routine requests like faucet replacements get scheduled into normal slots." },
            { q: "Will it work with my existing dispatching software?", a: "We integrate with ServiceTitan, Housecall Pro, Jobber, FieldEdge, and most other field service platforms. If you use spreadsheets or a custom system, we build a bridge so nothing changes on your end." },
            { q: "How does the estimate follow-up work without annoying customers?", a: "The AI uses smart timing and varied messaging — it might send a helpful tip about the issue they called about, mention a financing option, or share a relevant review. It feels like great customer service, not a sales pitch." },
            { q: "What happens if a customer wants to talk to a real person?", a: "The AI seamlessly hands off to your team during business hours or takes a detailed message after hours. Customers never feel stuck in a bot loop — the AI knows when to escalate." }
        ]
    },
    {
        slug: "hvac",
        name: "HVAC Companies",
        hook: "It Is 105 Degrees and Your Phone Is Melting. Your Office Cannot Keep Up.",
        problem: "Peak season hits and your phones are overwhelmed. Techs are running nonstop but your office staff is drowning in scheduling changes, no-shows, and callbacks. Off-season, your revenue drops 40% because nobody is proactively selling maintenance agreements. You are either on fire or freezing — there is no in-between.",
        operatorProblem: "The feast-or-famine cycle is not a weather problem — it is a systems problem. You need AI that captures every lead during peak season, fills the schedule during slow months with maintenance work, and follows up on every $8,000-15,000 replacement estimate that is sitting in someone's inbox unsigned.",
        result: "HVAC companies add $6,000-12,000 per month in recovered revenue and smooth out seasonal dips by 30-40%.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions built for the unique challenges of heating and cooling businesses.",
                examples: [
                    { title: "The Peak Season Call Surge Handler", detail: "AI that answers every inbound call during heat waves and cold snaps — qualifying urgency, booking appointments, and managing overflow without adding temporary staff.", roi: "Captures $5,000-10,000/month in calls that would go to voicemail." },
                    { title: "Replacement Estimate Closer", detail: "AI that follows up on every outstanding equipment replacement proposal with personalized messaging, financing options, and rebate information at optimized intervals.", roi: "Closes 20-30% more replacement estimates worth $8K-15K each." },
                    { title: "Maintenance Agreement Builder", detail: "AI that mines your customer database for homes with aging systems and proactively sells annual maintenance plans via text, email, and phone.", roi: "Adds $20K-50K in recurring annual contract revenue." },
                    { title: "The Seasonal Demand Leveler", detail: "AI that triggers off-season campaigns — tune-ups in spring and fall, indoor air quality in winter, duct cleaning promotions — to keep techs busy year-round.", roi: "Reduces seasonal revenue dips by 30-40%." },
                    { title: "Comfort Advisor Follow-Up System", detail: "AI that follows up after every service call with upgrade recommendations based on the system age, efficiency ratings, and repair history in the customer's file.", roi: "Generates 15-25 additional replacement leads per month." },
                    { title: "Review & Referral Engine", detail: "AI that requests reviews after every completed job, follows up on incomplete reviews, and asks happy customers for referrals with an incentive offer.", roi: "Triples review volume and generates 10-15 referral leads per month." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "End-to-end AI for HVAC company operations.",
                areas: [
                    { area: "Call Center & Dispatch", detail: "AI that handles all inbound calls, qualifies jobs by system type and urgency, books appointments, and dispatches techs based on skill set, location, and truck inventory.", impact: "Handle 3x call volume without adding CSRs." },
                    { area: "Sales & Estimates", detail: "AI that generates estimates, follows up on proposals, presents financing and rebate options, and nurtures leads from service call to signed replacement contract.", impact: "Replacement sales increase by 25-35%." },
                    { area: "Maintenance & Retention", detail: "AI that manages maintenance agreement renewals, schedules tune-ups, sends reminders, and re-engages lapsed customers.", impact: "Maintenance agreement retention jumps to 85%+." },
                    { area: "Back Office & Reporting", detail: "AI that automates invoicing, tracks technician performance, monitors job profitability, and generates KPI dashboards.", impact: "Office admin workload reduced by 50-60%." }
                ]
            },
            custom: {
                title: "The HVAC Company OS",
                description: "Complete AI infrastructure for HVAC companies doing $1M+ in revenue.",
                features: [
                    "24/7 AI call answering with emergency triage and system-type qualification",
                    "Intelligent dispatch with skill-based and inventory-aware routing",
                    "Automated replacement estimate follow-up with financing integration",
                    "Maintenance agreement sales, scheduling, and renewal automation",
                    "Seasonal campaign engine with weather-trigger activation",
                    "Technician performance tracking and job profitability dashboards",
                    "Review generation and referral program automation"
                ]
            }
        },
        faq: [
            { q: "Can the AI differentiate between a no-AC emergency and a routine tune-up request?", a: "Absolutely. The AI asks targeted qualifying questions — system type, symptoms, home temperature — and flags true emergencies for immediate dispatch while scheduling routine work into optimal time slots." },
            { q: "How does it help with the off-season revenue problem?", a: "The AI proactively reaches out to your customer base with maintenance plan offers, tune-up reminders, indoor air quality assessments, and duct cleaning promotions — keeping your schedule 60-70% full even in shoulder months." },
            { q: "Will it work with our financing partners?", a: "Yes. We integrate with Synchrony, GreenSky, Service Finance, and most HVAC financing providers so the AI can present payment options and pre-qualify customers during the follow-up process." },
            { q: "What about customers who need to talk to a comfort advisor?", a: "The AI books qualified appointments with your sales team and provides them a complete briefing — system age, issues discussed, budget signals, and financing interest — so your advisor walks in prepared." }
        ]
    },
    {
        slug: "electrical",
        name: "Electrical Contractors",
        hook: "You Are Wired for Hard Work. Your Office Is Not.",
        problem: "Service calls come in waves and your office scrambles to keep up. Half your estimates never get followed up on. Panel upgrades and EV charger installs are booming but you are losing those $3,000-10,000 jobs to competitors who respond faster. Your best electricians are booked out weeks but your schedule still has holes.",
        operatorProblem: "Speed wins in electrical. The homeowner who calls about a panel upgrade is getting three quotes — the first company to respond, follow up, and make it easy to say yes gets the job. Your techs are great at the work. Your systems are terrible at capturing and converting the demand. That is what we fix.",
        result: "Electrical contractors recover $3,000-7,000 per month in lost leads and increase estimate close rates by 25-35%.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that capture more revenue for electrical contracting businesses.",
                examples: [
                    { title: "Speed-to-Lead Responder", detail: "AI that responds to every new lead — web form, phone call, Google ad — within 60 seconds with a personalized message, qualifies the job, and books the estimate appointment.", roi: "Captures $3,000-7,000/month in leads that would go to competitors." },
                    { title: "Estimate Follow-Up Closer", detail: "AI that follows up on every outstanding estimate with smart timing — sending panel upgrade comparisons, EV charger incentive info, or financing options based on the specific job quoted.", roi: "Closes 25-35% more estimates without electrician involvement." },
                    { title: "The Upsell Spotter", detail: "AI that analyzes service call notes and flags upsell opportunities — outdated panels, missing GFCI protection, EV charger pre-wiring, whole-home surge protection — and sends targeted follow-up offers.", roi: "Adds $2,000-5,000/month in upgrade revenue." },
                    { title: "Permit & Inspection Tracker", detail: "AI that tracks permit applications, schedules inspections, sends reminders to homeowners, and keeps jobs moving through the pipeline without manual follow-up.", roi: "Reduces permit-related delays by 40% and eliminates missed inspections." },
                    { title: "Commercial Maintenance Pipeline", detail: "AI that reaches out to property managers, commercial clients, and past customers with scheduled maintenance offers, code compliance reminders, and lighting upgrade proposals.", roi: "Builds $25K-50K in recurring commercial contract revenue." },
                    { title: "Review & Reputation Accelerator", detail: "AI that sends review requests after every job, follows up with non-responders, and highlights your licensing and insurance in responses to build trust.", roi: "Doubles Google review volume and improves star rating." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI for electrical contractor operations.",
                areas: [
                    { area: "Lead Capture & Response", detail: "AI that handles all inbound calls and web leads, qualifies job type and scope, provides ballpark pricing, and books estimate appointments within minutes.", impact: "Lead response time drops from hours to under 60 seconds." },
                    { area: "Scheduling & Dispatch", detail: "AI that assigns jobs based on electrician certifications, location, and job complexity — managing the daily board and filling cancellation gaps automatically.", impact: "20% more jobs completed per week per electrician." },
                    { area: "Estimating & Sales", detail: "AI that generates estimates from job photos and descriptions, follows up on proposals, and handles financing and rebate paperwork.", impact: "Estimate turnaround drops from days to hours." },
                    { area: "Compliance & Administration", detail: "AI that tracks permits, manages inspection schedules, maintains license renewals, and automates invoicing and collections.", impact: "Administrative burden reduced by 55%." }
                ]
            },
            custom: {
                title: "The Electrical Contractor OS",
                description: "Complete AI infrastructure for electrical companies doing $1M+ in revenue.",
                features: [
                    "60-second lead response with job qualification and instant booking",
                    "Certification-aware dispatch and scheduling optimization",
                    "Automated estimate generation and multi-channel follow-up",
                    "Upsell identification from service call history and home data",
                    "Permit tracking and inspection scheduling automation",
                    "Commercial maintenance contract pipeline and renewal engine",
                    "Review generation with licensing and credential highlighting"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle both residential and commercial electrical leads?", a: "Yes. The AI qualifies each lead differently — residential calls get quick estimates and same-week booking, while commercial inquiries trigger a different workflow with site survey scheduling, scope documentation, and bid preparation." },
            { q: "How does it handle the different licensing requirements in our state?", a: "We configure the AI with your specific licensing, permit requirements, and inspection processes. It knows which jobs require permits, which inspections to schedule, and tracks everything through completion." },
            { q: "Will it help with EV charger installation leads?", a: "Absolutely. The AI is trained to qualify EV charger leads specifically — asking about panel capacity, garage setup, vehicle type, and utility rebate eligibility — so your team shows up prepared with the right equipment." }
        ]
    },
    {
        slug: "roofing",
        name: "Roofing Companies",
        hook: "Storms Create Demand. Your Office Creates Bottlenecks.",
        problem: "After every storm your phone explodes and you lose half the leads because nobody can answer fast enough. The rest of the year, you are chasing homeowners who got three quotes and ghosted. Your sales reps are spending half their time on follow-up calls instead of selling on rooftops. Meanwhile, insurance restoration jobs sit in limbo because nobody is chasing the adjusters.",
        operatorProblem: "Roofing is a speed-and-follow-up game. The company that responds first, follows up relentlessly, and makes the paperwork easy wins the job. Your crews do incredible work — but your office systems are costing you 30-40% of your potential revenue. We fix the gap between demand and your ability to capture it.",
        result: "Roofing companies recover $8,000-15,000 per month in lost leads and reduce sales cycle time by 40%.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions designed for the high-stakes roofing sales cycle.",
                examples: [
                    { title: "Storm Surge Lead Capture", detail: "AI that handles the post-storm call flood — answering every call, qualifying damage type and urgency, scheduling inspections, and sending automated appointment confirmations with what-to-expect info.", roi: "Captures $8,000-15,000/month in storm leads that would go to competitors." },
                    { title: "The Quote Follow-Up Machine", detail: "AI that follows up on every outstanding roof estimate at optimized intervals — sharing before/after photos, financing options, warranty comparisons, and creating urgency around weather windows.", roi: "Closes 20-30% more estimates worth $8K-25K each." },
                    { title: "Insurance Claim Accelerator", detail: "AI that tracks every insurance restoration job — following up with adjusters, sending supplement documentation, reminding homeowners to call their insurance, and keeping claims moving.", roi: "Reduces average claim cycle time by 30% and recovers $3K-5K per stalled claim." },
                    { title: "Canvassing Lead Nurture System", detail: "AI that follows up with every door-knocked lead — sending inspection photos, damage assessments, and booking callbacks for leads that were not home or needed time to decide.", roi: "Converts 15-25% more canvassing contacts into booked inspections." },
                    { title: "Referral & Past Customer Reactivation", detail: "AI that reaches out to past customers for referrals, contacts neighbors of completed jobs, and re-engages old leads who never moved forward.", roi: "Generates 10-20 referral leads per month at near-zero cost." },
                    { title: "Review & Photo Portfolio Builder", detail: "AI that requests reviews after every completed roof, collects before/after photos from crews, and builds neighborhood-specific portfolio pages for your website.", roi: "Triples review volume and builds hyper-local credibility." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "End-to-end AI for roofing company operations.",
                areas: [
                    { area: "Lead Capture & Storm Response", detail: "AI that handles all inbound leads from calls, web forms, and canvassing — qualifying damage, scheduling inspections, and managing the post-storm surge without temporary staff.", impact: "Capture 3x more leads during storm events." },
                    { area: "Sales & Estimating", detail: "AI that generates estimates from aerial measurements, follows up on proposals, presents financing, and tracks pipeline from inspection to signed contract.", impact: "Sales cycle shortened by 40% and close rate up 25%." },
                    { area: "Production & Scheduling", detail: "AI that manages crew scheduling, material ordering, permit tracking, and production timelines — keeping multiple jobs moving simultaneously.", impact: "Crew utilization increases by 20% with fewer scheduling conflicts." },
                    { area: "Insurance & Collections", detail: "AI that manages insurance claim documentation, tracks supplement approvals, follows up with adjusters, and handles final payment collection.", impact: "Insurance job revenue recovered 30% faster." }
                ]
            },
            custom: {
                title: "The Roofing Company OS",
                description: "Complete AI infrastructure for roofing companies doing $1M+ in revenue.",
                features: [
                    "24/7 storm response lead capture with damage qualification",
                    "Automated estimate follow-up with aerial imagery and financing",
                    "Insurance claim tracking and adjuster follow-up automation",
                    "Canvassing lead nurture and neighborhood marketing engine",
                    "Crew scheduling and material ordering optimization",
                    "Referral generation and past customer reactivation campaigns",
                    "Before/after portfolio building and review automation"
                ]
            }
        },
        faq: [
            { q: "How does the AI handle the post-storm call surge?", a: "The AI answers every call simultaneously — there is no hold time or voicemail. It qualifies the damage, schedules the inspection, sends confirmation details, and logs everything in your CRM. You can handle 10x normal call volume without adding a single person." },
            { q: "Can it actually help with insurance restoration paperwork?", a: "Yes. The AI tracks every claim from initial filing through supplement approval to final payment. It follows up with adjusters on your behalf, reminds homeowners of next steps, and flags stalled claims so nothing falls through the cracks." },
            { q: "Will it work with our canvassing operation?", a: "Absolutely. Your canvassers log contacts in the field, and the AI immediately begins nurturing those leads — sending inspection photos, damage info, and scheduling callbacks. Leads that were not home get automated follow-up until they engage." },
            { q: "How does the referral system work?", a: "After every completed job, the AI sends a personalized referral request to the homeowner and also reaches out to immediate neighbors with a friendly introduction and offer for a free inspection. It is automated word-of-mouth at scale." }
        ]
    },
    {
        slug: "landscaping",
        name: "Landscaping Companies",
        hook: "Your Crews Are Out in the Field. Your Leads Are Dying on the Vine.",
        problem: "You get 30 quote requests a week but only follow up on half because you are out running crews. By the time you send the estimate, the homeowner already hired someone else. Recurring maintenance clients cancel because nobody reminded them to renew. Spring rush overwhelms you and winter leaves your crews idle.",
        operatorProblem: "Landscaping is a volume game with tight margins. Every lead you do not follow up on costs you $2,000-10,000. Every maintenance client who lapses is $3,000-5,000 in annual recurring revenue gone. You are not losing to better landscapers — you are losing to faster responders. We install the systems that capture, convert, and retain every dollar of revenue your work deserves.",
        result: "Landscaping companies recover $4,000-8,000 per month in lost leads and increase client retention by 35%.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that grow revenue for landscaping businesses.",
                examples: [
                    { title: "Instant Quote Response System", detail: "AI that responds to every quote request within 60 seconds — qualifying the property size, scope of work, and timeline — then books the site visit or provides a ballpark estimate immediately.", roi: "Captures $4,000-8,000/month in leads lost to slow response." },
                    { title: "Maintenance Contract Retention Engine", detail: "AI that manages all recurring service contracts — sending renewal reminders, scheduling seasonal services, handling payment updates, and re-engaging clients who miss a cycle.", roi: "Increases contract retention by 35% worth $30K-60K annually." },
                    { title: "The Upsell & Enhancement Suggester", detail: "AI that analyzes each property's service history and suggests seasonal enhancements — mulch refresh, fall cleanup, holiday lighting, irrigation winterization — with photos and pricing.", roi: "Adds $1,500-3,000/month in upsell revenue per crew." },
                    { title: "Spring Rush Lead Manager", detail: "AI that handles the spring quote surge — qualifying leads, prioritizing by job value, scheduling site visits, and keeping lower-priority leads warm until you have capacity.", roi: "Books 40-60% more spring jobs without turning anyone away." },
                    { title: "Crew Communication Hub", detail: "AI that sends daily route sheets to crews, handles client communications about arrival times, manages weather-related reschedules, and collects job completion confirmations.", roi: "Eliminates 90% of crew-office phone calls and scheduling confusion." },
                    { title: "Winter Revenue Builder", detail: "AI that transitions maintenance clients into winter services — snow removal, holiday lighting, hardscape projects — and reaches out to past clients with off-season offers.", roi: "Fills 50-70% of winter schedule with profitable work." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI for landscaping company operations.",
                areas: [
                    { area: "Lead Capture & Quoting", detail: "AI that handles all inbound quote requests, qualifies properties by size and scope, provides preliminary pricing, and schedules site visits — all within minutes of first contact.", impact: "Lead-to-quote time drops from days to minutes." },
                    { area: "Scheduling & Route Management", detail: "AI that optimizes daily crew routes, manages recurring service schedules, handles weather reschedules, and fills gaps from cancellations automatically.", impact: "Crews complete 15-20% more jobs per week." },
                    { area: "Client Retention & Growth", detail: "AI that manages contract renewals, suggests service enhancements, handles billing, and re-engages lapsed clients with targeted offers.", impact: "Client lifetime value increases by 40%." },
                    { area: "Operations & Finance", detail: "AI that tracks job costing, manages crew hours, processes invoices, handles collections, and generates profitability reports by service type.", impact: "Administrative work reduced by 50% with clearer financial visibility." }
                ]
            },
            custom: {
                title: "The Landscaping Company OS",
                description: "Complete AI infrastructure for landscaping companies doing $500K+ in revenue.",
                features: [
                    "60-second lead response with property qualification and instant booking",
                    "Recurring maintenance contract management and renewal automation",
                    "Seasonal upsell engine with property-specific enhancement suggestions",
                    "Crew route optimization and real-time schedule management",
                    "Weather-aware rescheduling and client communication",
                    "Winter service transition and off-season revenue campaigns",
                    "Job costing, crew productivity tracking, and profitability dashboards"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle both residential and commercial landscaping leads?", a: "Yes. Residential leads get quick ballpark estimates and fast site visit scheduling, while commercial inquiries trigger a different workflow with property assessment forms, multi-year contract options, and a more detailed bidding process." },
            { q: "How does it handle weather-related schedule changes?", a: "The AI monitors weather forecasts and automatically reschedules affected jobs, notifies clients and crews, and reorganizes the route to maximize productivity on the adjusted schedule. No phone tag required." },
            { q: "Will it help during the spring rush when we are overwhelmed?", a: "That is exactly when it shines. The AI handles the entire surge — qualifying leads, prioritizing high-value jobs, scheduling site visits in optimal route order, and keeping lower-priority leads warm with automated nurture until you have capacity." }
        ]
    },
    {
        slug: "pest-control",
        name: "Pest Control Companies",
        hook: "Bugs Do Not Wait. Neither Should Your Customers.",
        problem: "A homeowner finds termites on a Tuesday and calls three companies. The one that answers, qualifies, and books the inspection first gets the job — and the $2,000-5,000 treatment contract. Your phone rings after hours and weekends (when pests are most noticed) and goes to voicemail. Recurring treatment clients cancel because they forgot why they signed up in the first place.",
        operatorProblem: "Pest control is won on speed and retention. The initial call is urgent — nobody calmly researches pest control companies. They call, and whoever answers gets hired. After that, keeping them on a recurring plan requires constant reinforcement of the value. Your techs are excellent at eliminating pests. Your systems are terrible at capturing the panic call and retaining the ongoing client.",
        result: "Pest control companies capture $3,000-6,000 per month in after-hours leads and increase recurring plan retention by 30%.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that capture urgency-driven pest control revenue.",
                examples: [
                    { title: "The Panic Call Responder", detail: "AI that answers every call — including nights, weekends, and holidays when pest emergencies peak — qualifies the pest type and severity, and books the inspection within 24 hours.", roi: "Captures $3,000-6,000/month in after-hours leads that went to voicemail." },
                    { title: "Recurring Plan Retention Engine", detail: "AI that reinforces value between treatments — sending pest activity reports, seasonal prevention tips, and treatment reminders — so clients never wonder if they still need the service.", roi: "Reduces cancellations by 30% and recovers $20K-40K in annual recurring revenue." },
                    { title: "Termite & High-Value Lead Qualifier", detail: "AI that identifies high-value leads — termites, bed bugs, wildlife — and fast-tracks them through qualification with urgency-appropriate messaging and same-day scheduling.", roi: "Closes 25% more high-value treatment contracts worth $2K-5K each." },
                    { title: "Seasonal Pest Campaign Engine", detail: "AI that launches targeted campaigns based on seasonal pest patterns — ant season in spring, mosquito control in summer, rodent prevention in fall, spider treatments year-round.", roi: "Generates 20-40 additional seasonal leads per quarter." },
                    { title: "Route Density Optimizer", detail: "AI that identifies neighborhoods where you already have clients and targets nearby homeowners with treatment offers — building route density and reducing drive time.", roi: "Adds 2-3 clients per route zone and cuts travel time by 20%." },
                    { title: "Review & Trust Builder", detail: "AI that sends review requests after every treatment, follows up with non-responders, and emphasizes licensing, safety certifications, and family/pet-safe messaging in responses.", roi: "Triples review volume with trust-focused messaging." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "End-to-end AI for pest control company operations.",
                areas: [
                    { area: "Lead Capture & Booking", detail: "AI that answers all calls 24/7, qualifies pest type and urgency, provides pricing guidance, and books inspections — converting panic into booked revenue.", impact: "After-hours lead capture increases by 300%." },
                    { area: "Route & Schedule Management", detail: "AI that optimizes daily routes for maximum density, manages recurring treatment schedules, handles reschedules, and fills same-day cancellation gaps.", impact: "Techs complete 20% more stops per day." },
                    { area: "Client Retention & Growth", detail: "AI that manages recurring plan renewals, sends value-reinforcing communications between treatments, and identifies upsell opportunities like add-on services.", impact: "Recurring revenue retention increases to 85%+." },
                    { area: "Operations & Compliance", detail: "AI that tracks chemical usage, manages licensing requirements, processes invoices, and generates compliance reports.", impact: "Administrative and compliance workload cut by 45%." }
                ]
            },
            custom: {
                title: "The Pest Control Company OS",
                description: "Complete AI infrastructure for pest control companies doing $500K+ in revenue.",
                features: [
                    "24/7 AI call answering with pest identification and urgency triage",
                    "Recurring treatment plan management and value reinforcement",
                    "High-value lead fast-tracking for termite and wildlife jobs",
                    "Seasonal pest campaign automation with regional pest data",
                    "Route density optimization and neighborhood targeting",
                    "Chemical usage tracking and compliance documentation",
                    "Review generation with safety and certification messaging"
                ]
            }
        },
        faq: [
            { q: "Can the AI identify pest types over the phone?", a: "The AI asks targeted qualifying questions — what they are seeing, where, how many, how long — and categorizes the issue into the right service type. It does not need to be an entomologist; it just needs to route the lead correctly and set expectations for the inspection." },
            { q: "How does it reduce recurring plan cancellations?", a: "Most cancellations happen because clients forget the value between treatments. The AI sends pest activity reports, seasonal prevention tips, and before/after reminders that reinforce why the plan matters — so when renewal time comes, it is an easy yes." },
            { q: "Will it handle both residential and commercial pest control?", a: "Yes. Residential leads get quick qualification and fast booking, while commercial inquiries trigger a different workflow with facility assessment, compliance documentation, and multi-location contract options." }
        ]
    },
    {
        slug: "cleaning-services",
        name: "Cleaning Service Companies",
        hook: "Your Teams Are Spotless. Your Sales Process Is a Mess.",
        problem: "You get dozens of quote requests weekly but half never hear back because you are managing crews, not chasing leads. Clients cancel with no warning and you find out when the crew shows up to a locked door. Recurring clients quietly stop booking and you only notice when the revenue dip shows up months later. Your best marketing channel is referrals, but you never ask for them.",
        operatorProblem: "Cleaning is a high-volume, high-churn business. You need fast response to capture new clients, consistent communication to retain them, and automated systems to backfill cancellations before they become revenue holes. Your cleaning quality is excellent — your customer lifecycle management is where the money leaks out.",
        result: "Cleaning service companies recover $3,000-6,000 per month in lost leads and reduce client churn by 30-40%.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that stabilize and grow cleaning service revenue.",
                examples: [
                    { title: "Instant Quote & Booking System", detail: "AI that responds to every quote request within 60 seconds — asking about home size, cleaning type, frequency, and special requests — then provides a price range and books the first appointment.", roi: "Captures $3,000-6,000/month in leads lost to slow response." },
                    { title: "Client Retention & Re-Engagement Engine", detail: "AI that detects when recurring clients skip a booking, sends a check-in message, offers rescheduling options, and escalates to your team if the client is at risk of churning.", roi: "Reduces client churn by 30-40% and saves $25K-50K in annual revenue." },
                    { title: "Cancellation Backfill System", detail: "AI that instantly reaches out to waitlist clients and nearby one-time clients when a cancellation occurs — filling the gap before the crew arrives with dead time.", roi: "Recovers 60-70% of cancelled appointment revenue." },
                    { title: "The Upsell & Add-On Engine", detail: "AI that suggests add-on services based on season and history — deep cleaning before holidays, window washing in spring, move-out cleaning for clients who mention moving.", roi: "Adds $1,500-3,000/month in add-on service revenue." },
                    { title: "Referral Generation System", detail: "AI that asks happy clients for referrals after every 5th cleaning, offers referral incentives, and follows up with referred leads using the referring client's name for trust.", roi: "Generates 8-15 referral leads per month at near-zero cost." },
                    { title: "Review & Quality Feedback Loop", detail: "AI that sends a quick satisfaction survey after every cleaning, flags negative feedback for immediate resolution, and asks satisfied clients for Google reviews.", roi: "Doubles review volume and catches service issues before they become cancellations." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI for cleaning service operations.",
                areas: [
                    { area: "Lead Capture & Conversion", detail: "AI that handles all inbound quote requests, qualifies cleaning needs, provides instant pricing, books first appointments, and follows up with leads who did not convert immediately.", impact: "Lead-to-client conversion rate doubles." },
                    { area: "Scheduling & Route Management", detail: "AI that manages all recurring and one-time schedules, optimizes crew routes, handles cancellations and rebookings, and fills schedule gaps automatically.", impact: "Crew utilization reaches 90%+ with minimal dead time." },
                    { area: "Client Success & Retention", detail: "AI that monitors client engagement, detects churn signals, sends value-reinforcing messages, manages feedback, and re-engages lapsed clients.", impact: "Client lifetime value increases by 40-50%." },
                    { area: "Team & Finance Management", detail: "AI that tracks team hours, manages payroll data, processes invoices, handles collections, and generates revenue reports by service type and client.", impact: "Back office runs with 50% less effort." }
                ]
            },
            custom: {
                title: "The Cleaning Service OS",
                description: "Complete AI infrastructure for cleaning companies doing $300K+ in revenue.",
                features: [
                    "60-second quote response with property qualification and instant booking",
                    "Recurring schedule management with churn detection and prevention",
                    "Real-time cancellation backfill from waitlist and nearby clients",
                    "Seasonal upsell engine with service-history-based suggestions",
                    "Automated referral program with incentive tracking",
                    "Post-cleaning quality surveys with issue escalation",
                    "Crew route optimization and utilization tracking"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle different types of cleaning services?", a: "Yes. Whether it is recurring residential, deep cleaning, move-in/move-out, post-construction, or commercial office cleaning — the AI qualifies each lead with the right questions, provides appropriate pricing, and routes to the right team." },
            { q: "How does it detect that a client is about to cancel?", a: "The AI tracks patterns — skipped bookings, shortened frequency, delayed responses, and feedback scores. When it spots warning signs, it proactively reaches out with a friendly check-in and offer to adjust the service before the client decides to leave." },
            { q: "Will it help fill last-minute cancellations?", a: "That is one of its best features. The moment a cancellation comes in, the AI reaches out to your waitlist and nearby one-time clients with an available-today offer. Most gaps are filled within an hour." }
        ]
    },
    {
        slug: "painting",
        name: "Painting Companies",
        hook: "Your Work Speaks for Itself. But Nobody Hears It if You Do Not Follow Up.",
        problem: "You give 20 estimates a month and close 6 because the other 14 never heard back from you. Interior painting leads want quick scheduling and exterior leads are seasonal — but you treat them all the same. Your best jobs come from referrals, but you never systematically ask for them. And that $15,000 exterior repaint estimate from three weeks ago? The homeowner already hired someone else.",
        operatorProblem: "Painting is an estimate-heavy business with long decision cycles. Homeowners get 3-4 quotes and go with whoever follows up and makes it easiest. Your painting is excellent — but your follow-up is costing you 40-50% of your potential revenue. We install the AI systems that follow up on every estimate, nurture every lead, and turn every completed job into 2-3 referrals.",
        result: "Painting companies close $5,000-10,000 per month in additional estimates and increase referral volume by 3x.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that close more painting jobs and generate more referrals.",
                examples: [
                    { title: "Estimate Follow-Up Closer", detail: "AI that follows up on every outstanding painting estimate with smart timing — sending color inspiration photos, project timeline clarity, financing options, and gentle urgency as the season progresses.", roi: "Closes 25-35% more estimates worth $3K-15K each." },
                    { title: "Speed-to-Lead Response System", detail: "AI that responds to every new lead — web form, phone call, Thumbtack, Angi — within 60 seconds with a personalized message, qualifies the project, and books the estimate appointment.", roi: "Captures $3,000-7,000/month in leads lost to faster competitors." },
                    { title: "The Exterior Season Maximizer", detail: "AI that mines your customer database and lead list for exterior painting prospects and launches campaigns timed to weather windows — creating urgency around prep season and ideal painting conditions.", roi: "Books 30-50% more exterior jobs during peak season." },
                    { title: "Referral & Neighbor Campaign Engine", detail: "AI that reaches out to every completed job client for referrals, contacts neighbors of active job sites, and sends before/after photos to the surrounding area.", roi: "Generates 10-20 referral leads per month at near-zero cost." },
                    { title: "Color Consultation Scheduler", detail: "AI that nurtures leads who are undecided by offering free virtual color consultations, sending trending color palettes, and sharing portfolio photos of similar homes — keeping them engaged until they are ready.", roi: "Converts 20% of stalled leads into booked jobs." },
                    { title: "Commercial Repaint Pipeline", detail: "AI that identifies commercial repainting opportunities — property management companies, HOAs, retail locations, offices — and builds a pipeline of recurring repaint contracts.", roi: "Adds $30K-60K in commercial contract revenue annually." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "End-to-end AI for painting company operations.",
                areas: [
                    { area: "Lead Capture & Qualification", detail: "AI that handles all inbound leads, qualifies project scope (interior/exterior, rooms, square footage), provides ballpark pricing, and books estimate appointments within minutes.", impact: "Lead response time drops from hours to under 60 seconds." },
                    { area: "Estimating & Sales", detail: "AI that follows up on all estimates, presents financing options, shares color inspiration and portfolio photos, and converts quotes into signed contracts.", impact: "Estimate close rate increases by 30% across all job types." },
                    { area: "Production & Scheduling", detail: "AI that manages crew scheduling across multiple jobs, handles weather delays, coordinates material orders, and keeps clients informed on project timelines.", impact: "Crew utilization improves by 20% with fewer weather-related gaps." },
                    { area: "Marketing & Retention", detail: "AI that runs referral programs, manages neighbor campaigns around active job sites, reactivates past clients for refresh projects, and builds portfolio content from completed jobs.", impact: "Referral-generated revenue increases by 200%." }
                ]
            },
            custom: {
                title: "The Painting Company OS",
                description: "Complete AI infrastructure for painting companies doing $500K+ in revenue.",
                features: [
                    "60-second lead response with project qualification across all channels",
                    "Automated estimate follow-up with color inspiration and financing",
                    "Seasonal exterior campaign engine with weather-window urgency",
                    "Referral and neighbor marketing automation around active job sites",
                    "Crew scheduling with weather-aware rescheduling and client updates",
                    "Commercial repaint pipeline building and contract management",
                    "Before/after portfolio generation and review automation"
                ]
            }
        },
        faq: [
            { q: "Can the AI differentiate between interior and exterior painting leads?", a: "Yes. The AI asks qualifying questions upfront — interior vs. exterior, number of rooms or square footage, surface condition, timeline — and routes each lead through the appropriate workflow with relevant messaging, pricing, and scheduling." },
            { q: "How does the neighbor campaign work?", a: "When you start an exterior job, the AI sends a friendly introduction to surrounding homes — mentioning you are working in the neighborhood, sharing a portfolio photo, and offering a free estimate. It is the digital version of the yard sign, but much more effective." },
            { q: "Will it help with leads from Thumbtack, Angi, and other platforms?", a: "Absolutely. The AI monitors all your lead sources and responds to every one within 60 seconds — which is critical on platforms where the first responder wins. It qualifies the lead and books the estimate before competitors even see the notification." },
            { q: "What about clients who are not ready to commit yet?", a: "The AI nurtures undecided leads with value — color trend updates, portfolio photos of similar projects, seasonal timing tips. When they are ready, you are top of mind. Most painting purchases are not impulse decisions, so staying engaged through the decision cycle is where the revenue is." }
        ]
    }
];
