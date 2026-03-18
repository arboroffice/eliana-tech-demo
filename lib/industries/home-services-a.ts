import { IndustryContent } from '../industry-data';

export const homeServicesAIndustries: IndustryContent[] = [
    {
        slug: "plumbing",
        name: "Plumbing Companies",
        hook: "Your Phone Is Ringing But You Are Under a Sink.",
        problem: "Emergency calls go to voicemail. Estimates sit in email drafts for days. Your best techs are booked solid but your schedule has gaps because the office cannot keep up. You are losing $50K+ a year in missed calls alone — and you do not even know it.",
        operatorProblem: "Every missed call is a lost job. Every slow estimate follow-up is a customer who called the next plumber on Google. These are not staffing problems — they are system problems. We install the AI layer that answers every call, follows up on every estimate, and fills every gap in your schedule.",
        result: "Plumbing companies recover $4,000-8,000 per month in previously lost revenue and reduce office staff workload by 60%.",
        dreamVision: "Imagine a plumbing shop where every emergency call is answered in 10 seconds, every quote is followed up on 12 times automatically, and your schedule is perfectly optimized without you ever touching a calendar.",
        industryStats: [
            { stat: "24/7", label: "Emergency Response" },
            { stat: "35%", label: "Close Rate Increase" },
            { stat: "10s", label: "Speed to Lead" }
        ],
        useCases: [
            { title: "The 2AM Burst Pipe", scenario: "A homeowner has a flooded basement at 2 AM and calls 5 plumbers.", outcome: "AI answers your line instantly, triages the emergency, and dispatches the on-call tech while the other 4 voicemails are full." }
        ],
        comparisonTable: [
            { category: "After-Hours Calls", without: "Voicemail (Lost Job)", withAI: "Instant Booking (Captured Job)" },
            { category: "Estimate Follow-up", without: "Manual (Rarely happens)", withAI: "Persistent (12+ touches)" }
        ],
        processSteps: [
            { step: 1, title: "Call Audit", description: "Mapping your missed call revenue leaks." },
            { step: 2, title: "Triage Setup", description: "Launching your 24/7 AI response unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that fix the biggest revenue leaks in your plumbing business.",
                examples: [
                    { title: "The Missed Call Recapture Engine", detail: "AI that answers every missed call within 30 seconds, qualifies the job type and urgency, and books it on your calendar — even at 2 AM for emergency drain calls.", roi: "Recovers $4,000-8,000/month in lost revenue." },
                    { title: "Estimate Follow-Up Machine", detail: "AI that follows up on every outstanding estimate via text and email at optimized intervals — asking if they have questions, offering financing, and creating urgency.", roi: "Closes 25-35% more estimates without tech involvement." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI for plumbing company operations.",
                areas: [
                    { area: "Call Center & Booking", detail: "AI that handles all inbound calls, qualifies jobs, provides pricing estimates, and books appointments — 24/7 without hold times.", impact: "90% of calls handled without human CSR involvement." },
                    { area: "Dispatch & Scheduling", detail: "AI that optimizes daily routes, manages tech assignments, handles reschedules, and fills cancellation gaps in real-time.", impact: "15-20% increase in jobs completed per day." }
                ]
            },
            custom: {
                title: "The Plumbing Company OS",
                description: "Complete AI infrastructure for plumbing companies doing $1M+ in revenue.",
                features: [
                    "24/7 AI call answering with job qualification and emergency triage",
                    "Intelligent dispatch and route optimization across all technicians",
                    "Automated estimate follow-up with financing integration",
                    "Maintenance agreement sales and renewal automation"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle emergency vs. non-emergency plumbing calls?", a: "Yes. The AI triages every call by asking targeted questions about the issue — burst pipes and sewage backups get flagged as emergencies and routed to your on-call tech immediately." },
            { q: "Will it work with my existing dispatching software?", a: "We integrate with ServiceTitan, Housecall Pro, Jobber, FieldEdge, and most other field service platforms." }
        ],
        layers: [{ department: "Service Ops", roles: ["Dispatcher", "Lead Qualifier"], tasks: ["Triage emergencies", "Follow up on quotes"] }]
    },
    {
        slug: "hvac",
        name: "HVAC Companies",
        hook: "It Is 105 Degrees and Your Phone Is Melting.",
        problem: "Peak season hits and your phones are overwhelmed. Techs are running nonstop but your office staff is drowning in scheduling changes, no-shows, and callbacks.",
        operatorProblem: "The feast-or-famine cycle is not a weather problem — it is a systems problem. You need AI that captures every lead during peak season and fills the schedule during slow months.",
        result: "HVAC companies add $6,000-12,000 per month in recovered revenue and smooth out seasonal dips by 30-40%.",
        dreamVision: "Imagine a summer heatwave where every single call is answered, every repair lead is booked, and your team is only focused on high-value system replacements.",
        industryStats: [
            { stat: "2x", label: "Replacement Sales" },
            { stat: "100%", label: "Call Capture" },
            { stat: "40%", label: "Lower Seasonal Dip" }
        ],
        useCases: [
            { title: "The Summer Surge", scenario: "It's 100 degrees and you get 50 calls in 2 hours.", outcome: "AI handles all 50 calls simultaneously, books the top 15 priority repairs, and starts the nurture sequence for the rest." }
        ],
        comparisonTable: [
            { category: "Summer Scaling", without: "Adding temp staff (Expensive)", withAI: "Instant Scaling (Zero Cost)" },
            { category: "Maintenance Sales", without: "Manual (Rarely done)", withAI: "Autonomous (Year-round)" }
        ],
        processSteps: [
            { step: 1, title: "Seasonality Audit", description: "Mapping your revenue gaps across the year." },
            { step: 2, title: "Sales Node Launch", description: "Deploying your replacement-focussed AI unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions built for the unique challenges of heating and cooling businesses.",
                examples: [
                    { title: "The Peak Season Call Surge Handler", detail: "AI that answers every inbound call during heat waves and cold snaps — qualifying urgency and booking appointments.", roi: "Captures $5,000-10,000/month in calls that would go to voicemail." },
                    { title: "Replacement Estimate Closer", detail: "AI that follows up on every outstanding equipment replacement proposal with personalized messaging and financing.", roi: "Closes 20-30% more replacement estimates." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "End-to-end AI for HVAC company operations.",
                areas: [
                    { area: "Call Center & Dispatch", detail: "AI that handles all inbound calls, qualifies jobs by system type and urgency, and dispatches techs.", impact: "Handle 3x call volume without adding CSRs." },
                    { area: "Maintenance & Retention", detail: "AI that manages maintenance agreement renewals and schedules tune-ups.", impact: "Maintenance agreement retention jumps to 85%+." }
                ]
            },
            custom: {
                title: "The HVAC Company OS",
                description: "Complete AI infrastructure for HVAC companies doing $1M+ in revenue.",
                features: [
                    "24/7 AI call answering with emergency triage",
                    "Intelligent dispatch with skill-based routing",
                    "Automated replacement estimate follow-up",
                    "Seasonal campaign engine with weather triggers"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle no-AC emergencies?", a: "Absolutely. The AI asks targeted qualifying questions and flags true emergencies for immediate dispatch." },
            { q: "Will it work with our financing partners?", a: "Yes. We integrate with Synchrony, GreenSky, and most HVAC financing providers." }
        ],
        layers: [{ department: "Install Ops", roles: ["Replacement Concierge", "SDR"], tasks: ["Follow up on big quotes", "Schedule tune-ups"] }]
    },
    {
        slug: "electrical",
        name: "Electrical Contractors",
        hook: "You Are Wired for Hard Work. Your Office Is Not.",
        problem: "Service calls come in waves and your office scrambles to keep up. Half your estimates never get followed up on. Panel upgrades and EV charger installs are booming but you are losing those $3,000-10,000 jobs to competitors who respond faster.",
        operatorProblem: "Speed wins in electrical. The homeowner who calls about a panel upgrade is getting three quotes — the first company to respond, follow up, and make it easy to say yes gets the job.",
        result: "Electrical contractors recover $3,000-7,000 per month in lost leads and increase estimate close rates by 25-35%.",
        dreamVision: "Imagine a world where every panel upgrade query is answered with a ballpark quote and a booked site visit in under 60 seconds.",
        industryStats: [
            { stat: "60s", label: "Initial Response" },
            { stat: "30%", label: "Revenue Lift" },
            { stat: "Zero", label: "Lead Leakage" }
        ],
        useCases: [
            { title: "The EV Charger Inquirer", scenario: "A customer asks about EV charger installation on a Saturday.", outcome: "AI gathers their panel details, provides an estimate range, and books the install consultation immediately." }
        ],
        comparisonTable: [
            { category: "Quote Follow-up", without: "Manual (Rare)", withAI: "Machine-Driven Persistence" },
            { category: "Lead Intake", without: "Voicemail (Slow)", withAI: "Instant (10s SMS)" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Finding where your $5k+ jobs are leaking." },
            { step: 2, title: "Speed-to-Lead Launch", description: "Deploying your instant response layer." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that capture more revenue for electrical contracting businesses.",
                examples: [
                    { title: "Speed-to-Lead Responder", detail: "AI that responds to every new lead within 60 seconds to qualify the job and book the estimate.", roi: "Captures $3,000-7,000/month in leads lost to competitors." },
                    { title: "Estimate Follow-Up Closer", detail: "AI that follows up on every outstanding estimate with smart timing and financing options.", roi: "Closes 25-35% more estimates without electrician involvement." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI for electrical contractor operations.",
                areas: [
                    { area: "Lead Capture & Response", detail: "AI that handles all inbound calls and web leads, qualifies job type and scope, and books appointments.", impact: "Lead response time drops to under 60 seconds." },
                    { area: "Scheduling & Dispatch", detail: "AI that assigns jobs based on electrician certifications and location.", impact: "20% more jobs completed per week per electrician." }
                ]
            },
            custom: {
                title: "The Electrical Contractor OS",
                description: "Complete AI infrastructure for electrical companies doing $1M+ in revenue.",
                features: [
                    "60-second lead response across all channels",
                    "Certification-aware dispatch optimization",
                    "Automated estimate generation and follow-up",
                    "Permit tracking and inspection scheduling"
                ]
            }
        },
        faq: [
            { q: "Can it handle commercial electrical leads?", a: "Yes. Commercial inquiries trigger a specific workflow with site survey scheduling and bid preparation." },
            { q: "Will it help with EV charger installation leads?", a: "Absolutely. The AI is trained to qualify EV leads specifically — asking about panel capacity and garage setup." }
        ],
        layers: [{ department: "Technical Ops", roles: ["Certification Liaison", "Lead Setter"], tasks: ["Check electrician availability", "Book EV installs"] }]
    },
    {
        slug: "roofing-contractors",
        name: "Roofing Companies",
        hook: "Storms Create Demand. Your Office Creates Bottlenecks.",
        problem: "After every storm your phone explodes and you lose half the leads because nobody can answer fast enough. The rest of the year, you are chasing homeowners who got three quotes and ghosted.",
        operatorProblem: "Roofing is a speed-and-follow-up game. The company that responds first, follows up relentlessly, and makes the paperwork easy wins the job.",
        result: "Roofing companies recover $8,000-15,000 per month in lost leads and reduce sales cycle time by 40%.",
        dreamVision: "Imagine a hail storm where you catch 100% of the calls and have 50 inspections booked before your office even opens the next morning.",
        industryStats: [
            { stat: "10x", label: "Capacity during Storms" },
            { stat: "24/7", label: "Lead Response" },
            { stat: "30%", label: "Cycle Speed" }
        ],
        useCases: [
            { title: "The Post-Hail Surge", scenario: "Hail hits a high-value neighborhood at 6 PM.", outcome: "AI handles 45 simultaneous calls, qualifies the insurance damage, and fills your inspector's calendar for the next 3 days instantly." }
        ],
        comparisonTable: [
            { category: "Response Time", without: "Hours/Days (Manual)", withAI: "Seconds (Autonomous)" },
            { category: "Quote Chasing", without: "Manual (Occasional)", withAI: "Machine (Persistent)" }
        ],
        processSteps: [
            { step: 1, title: "Storm Readiness Audit", description: "Mapping your response capacity." },
            { step: 2, title: "Responder Launch", description: "Deploying your unlimited AI call center." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions designed for the high-stakes roofing sales cycle.",
                examples: [
                    { title: "Storm Surge Lead Capture", detail: "AI that handles the post-storm call flood — answering every call and scheduling inspections.", roi: "Captures $8,000-15,000/month in storm leads." },
                    { title: "The Quote Follow-Up Machine", detail: "AI that follows up on every outstanding roof estimate with financing and warranty info.", roi: "Closes 20-30% more estimates." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "End-to-end AI for roofing company operations.",
                areas: [
                    { area: "Sales & Estimating", detail: "AI that generates estimates from aerial measurements and tracks the pipeline.", impact: "Sales cycle shortened by 40%." },
                    { area: "Insurance & Collections", detail: "AI that manages insurance paperwork and tracks supplement approvals.", impact: "Insurance job revenue recovered 30% faster." }
                ]
            },
            custom: {
                title: "The Roofing Company OS",
                description: "Complete AI infrastructure for roofing companies doing $1M+ in revenue.",
                features: [
                    "24/7 storm response with unlimited call scaling",
                    "Insurance claim tracking and follow-up automation",
                    "Canvassing lead nurture and neighborhood engine",
                    "Before/after portfolio building and review automation"
                ]
            }
        },
        faq: [
            { q: "How does the AI handle the post-storm call surge?", a: "The AI answers every call simultaneously — there is no hold time. It qualifies damage and schedules inspections immediately." },
            { q: "Can it help with insurance restoration paperwork?", a: "Yes. The AI tracks every claim from filing through payment, following up with adjusters on your behalf." }
        ],
        layers: [{ department: "Sales & Storm Response", roles: ["Lead Triage Agent", "Inspector Concierge"], tasks: ["Qualify storm damage", "Schedule roof inspections"] }]
    },
    {
        slug: "landscaping-companies",
        name: "Landscaping Companies",
        hook: "Your Crews Are Out in the Field. Your Leads Are Dying on the Vine.",
        problem: "You get 30 quote requests a week but only follow up on half because you are out running crews. By the time you send the estimate, the homeowner already hired someone else.",
        operatorProblem: "Landscaping is a volume game with tight margins. Every lead you do not follow up on costs you $2,000-10,000. Every maintenance client who lapses is revenue gone.",
        result: "Landscaping companies recover $4,000-8,000 per month in lost leads and increase client retention by 35%.",
        dreamVision: "Imagine a spring season where every single maintenance quote is issued and signed before you even pull the mower off the trailer.",
        industryStats: [
            { stat: "35%", label: "Higher Retention" },
            { stat: "5x", label: "Booking Speed" },
            { stat: "15%", label: "Profitability Lift" }
        ],
        useCases: [
            { title: "The Spring Rush", scenario: "You get 15 quote requests while you're on a 4-hour hardscape job.", outcome: "AI responds to all 15, checks their property size via satellite, and has 8 site visits booked before you finish the job." }
        ],
        comparisonTable: [
            { category: "Maintenance Renewals", without: "Manual (Misses 20%)", withAI: "Autonomous (100% Renewal)" },
            { category: "Quote Speed", without: "Days (Manual)", withAI: "Seconds (AI-Assisted)" }
        ],
        processSteps: [
            { step: 1, title: "Operational Audit", description: "Finding your biggest revenue leaks in maintenance." },
            { step: 2, title: "Retention Node Launch", description: "Deploying your automated renewal engine." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that grow revenue for landscaping businesses.",
                examples: [
                    { title: "Instant Quote Response System", detail: "AI that responds to every quote request within 60 seconds to qualify the property and book the visit.", roi: "Captures $4,000-8,000/month in lost leads." },
                    { title: "Maintenance Contract Retention Engine", detail: "AI that manages all recurring service contracts — sending renewals and handling payment updates.", roi: "Increases contract retention by 35%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI for landscaping company operations.",
                areas: [
                    { area: "Lead Capture & Quoting", detail: "AI that handles inbound quote requests and schedules site visits.", impact: "Lead-to-quote time drops from days to minutes." },
                    { area: "Scheduling & Route Management", detail: "AI that optimizes daily crew routes and handles weather reschedules.", impact: "Crews complete 15-20% more jobs per week." }
                ]
            },
            custom: {
                title: "The Landscaping Company OS",
                description: "Complete AI infrastructure for landscaping companies doing $500K+ in revenue.",
                features: [
                    "60-second lead response with property qualification",
                    "Recurring maintenance contract management",
                    "Seasonal upsell engine with history-based suggestions",
                    "Weather-aware rescheduling and client communication"
                ]
            }
        },
        faq: [
            { q: "How does it handle weather-related schedule changes?", a: "The AI monitors weather and automatically reschedules affected jobs, notifying clients and crews to maximize productivity." },
            { q: "Will it help during the spring rush?", a: "Yes. The AI handles the entire surge — qualifying leads and keeping lower-priority leads warm until you have capacity." }
        ],
        layers: [{ department: "Route Ops", roles: ["Route Optimizer", "Customer Success Bot"], tasks: ["Manage renewals", "Handle weather reschedules"] }]
    },
    {
        slug: "pest-control-companies",
        name: "Pest Control Companies",
        hook: "Bugs Do Not Wait. Neither Should Your Customers.",
        problem: "A homeowner finds termites on a Tuesday and calls three companies. Whoever answers and books the inspection first gets the job. Your phone rings after hours and goes to voicemail.",
        operatorProblem: "Pest control is won on speed and retention. The initial call is urgent. After that, keeping them on a recurring plan requires constant reinforcement of the value.",
        result: "Pest control companies capture $3,000-6,000 per month in after-hours leads and increase recurring plan retention by 30%.",
        dreamVision: "Imagine a pest control business where every termite lead is fast-tracked and every recurring customer is nurtured automatically to never cancel.",
        industryStats: [
            { stat: "300%", label: "After-Hours Capture" },
            { stat: "30%", label: "Churn Reduction" },
            { stat: "15m", label: "Max Dispatch Time" }
        ],
        useCases: [
            { title: "The Termite Panic", scenario: "A homeowner spots termites at 9 PM on a Thursday.", outcome: "AI answers their call, reassures them, and has your inspector booked for 8 AM Friday before they recall the second company." }
        ],
        comparisonTable: [
            { category: "After-Hours Leads", without: "Voicemail (Wasted)", withAI: "Captured (Booked)" },
            { category: "Retention", without: "Passive (Manual)", withAI: "Proactive (Nurture-Led)" }
        ],
        processSteps: [
            { step: 1, title: "Churn Audit", description: "Mapping your current cancellation triggers." },
            { step: 2, title: "Retention Node Launch", description: "Deploying your value-reinforcement engine." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that capture urgency-driven pest control revenue.",
                examples: [
                    { title: "The Panic Call Responder", detail: "AI that answers every call 24/7 to qualify pests and book inspections within 24 hours.", roi: "Captures $3,000-6,000/month in after-hours leads." },
                    { title: "Recurring Plan Retention Engine", detail: "AI that reinforces value between treatments withactivity reports and prevention tips.", roi: "Reduces cancellations by 30%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "End-to-end AI for pest control company operations.",
                areas: [
                    { area: "Lead Capture & Booking", detail: "AI that answers all calls 24/7 and converts panic into booked revenue.", impact: "After-hours lead capture increases by 300%." },
                    { area: "Route & Schedule Management", detail: "AI that optimizes daily routes for maximum density.", impact: "Techs complete 20% more stops per day." }
                ]
            },
            custom: {
                title: "The Pest Control Company OS",
                description: "Complete AI infrastructure for pest control companies doing $500K+ in revenue.",
                features: [
                    "24/7 AI call answering with pest identification",
                    "Recurring treatment plan value reinforcement",
                    "High-value lead fast-tracking for termite jobs",
                    "Route density optimization and neighborhood targeting"
                ]
            }
        },
        faq: [
            { q: "Can the AI identify pest types over the phone?", a: "The AI asks targeted questions to categorize the issue and set expectations for the inspection." },
            { q: "How does it reduce recurring plan cancellations?", a: "The AI sends activity reports and seasonal tips that reinforce why the plan matters, making renewal an easy choice." }
        ],
        layers: [{ department: "Retention Ops", roles: ["Retention Captain", "Triage Agent"], tasks: ["Send pest reports", "Book panic calls"] }]
    },
    {
        slug: "cleaning-services-commercial",
        name: "Cleaning Service Companies",
        hook: "Your Teams Are Spotless. Your Sales Process Is a Mess.",
        problem: "You get dozens of quote requests weekly but half never hear back because you are managing crews. Recurring clients quietly stop booking and you only notice when the revenue dips.",
        operatorProblem: "Cleaning is a high-volume, high-churn business. You need fast response to capture new clients, and automated systems to backfill cancellations immediately.",
        result: "Cleaning service companies recover $3,000-6,000 per month in lost leads and reduce client churn by 30-40%.",
        dreamVision: "Imagine a cleaning business where every cancellation is backfilled in 15 minutes and your client retention is higher than your best competitor's.",
        industryStats: [
            { stat: "40%", label: "Lower Churn" },
            { stat: "15m", label: "Cancellation Backfill" },
            { stat: "2x", label: "LTV Increase" }
        ],
        useCases: [
            { title: "The Last-Minute Cancel", scenario: "An office client cancels at 7 AM for a 9 AM clean.", outcome: "AI instantly blasts your waitlist and books a one-time deep clean for the same slot before 7:30 AM." }
        ],
        comparisonTable: [
            { category: "Cancellations", without: "Revenue Loss (Dead Time)", withAI: "Revenue Protected (Backfill)" },
            { category: "Lead Capture", without: "Hours (Manual)", withAI: "Seconds (Instant Quote)" }
        ],
        processSteps: [
            { step: 1, title: "Churn Analysis", description: "Mapping your typical customer exit points." },
            { step: 2, title: "Success Node Launch", description: "Deploying your proactive re-engagement bot." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that stabilize and grow cleaning service revenue.",
                examples: [
                    { title: "Instant Quote & Booking System", detail: "AI that responds to quote requests within 60 seconds to provide pricing and book the first visit.", roi: "Captures $3,000-6,000/month in lost leads." },
                    { title: "Cancellation Backfill System", detail: "AI that reaches out to waitlist clients when a cancellation occurs.", roi: "Recovers 60-70% of cancelled appointment revenue." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI for cleaning service operations.",
                areas: [
                    { area: "Lead Capture & Conversion", detail: "AI that handles inbound quotes and follows up with leads.", impact: "Lead-to-client conversion rate doubles." },
                    { area: "Scheduling & Route Management", detail: "AI that manages recurring schedules and optimizes crew routes.", impact: "Crew utilization reaches 90%+." }
                ]
            },
            custom: {
                title: "The Cleaning Service OS",
                description: "Complete AI infrastructure for cleaning companies doing $300K+ in revenue.",
                features: [
                    "60-second quote response and instant booking",
                    "Recurring schedule management with churn detection",
                    "Real-time cancellation backfill from waitlist",
                    "Automated referral program with incentive tracking"
                ]
            }
        },
        faq: [
            { q: "How does it detect that a client is about to cancel?", a: "The AI tracks patterns like skipped bookings and delayed responses to proactively reach out before they churn." },
            { q: "Will it help fill last-minute cancellations?", a: "Yes. It reaches out to your waitlist the moment a cancellation is logged." }
        ],
        layers: [{ department: "Success & Recovery", roles: ["Backfill Specialist", "Success Bot"], tasks: ["Fill schedule gaps", "Nurture at-risk clients"] }]
    },
    {
        slug: "painting-contractors",
        name: "Painting Companies",
        hook: "Your Work Speaks for Itself. But Nobody Hears It if You Do Not Follow Up.",
        problem: "You give 20 estimates a month and close 6 because the other 14 never heard from you. Exterior leads are seasonal — but you treat them all the same.",
        operatorProblem: "Painting is an estimate-heavy business with long decision cycles. Homeowners go with whoever follows up and makes it easiest.",
        result: "Painting companies close $5,000-10,000 per month in additional estimates and increase referral volume by 3x.",
        dreamVision: "Imagine a painting business that follows up on every quote for 30 days straight and turns every job into 10 new high-value neighbors.",
        industryStats: [
            { stat: "3x", label: "Referral Volume" },
            { stat: "35%", label: "Close Rate Hike" },
            { stat: "30-Day", label: "Follow-up Window" }
        ],
        useCases: [
            { title: "The Neighbor Campaign", scenario: "You start an exterior job on a busy street.", outcome: "AI texts all past clients in a 1-mile radius and runs social ads focusing on that specific house, booking 4 more quotes in the same week." }
        ],
        comparisonTable: [
            { category: "Referrals", without: "Manual (Occasional)", withAI: "Systematic (3x Growth)" },
            { category: "Decision Window", without: "Leads go cold", withAI: "Continuous AI Education" }
        ],
        processSteps: [
            { step: 1, title: "Database Audit", description: "Mapping your past clients for referral gold." },
            { step: 2, title: "Follow-up Launch", description: "Deploying your 30-day persistence engine." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions that close more painting jobs and generate more referrals.",
                examples: [
                    { title: "Estimate Follow-Up Closer", detail: "AI that follows up on every outstanding estimate with inspiration photos and financing.", roi: "Closes 25-35% more estimates worth $3K-15K each." },
                    { title: "Speed-to-Lead Response System", detail: "AI that responds to every new lead within 60 seconds to qualify the project.", roi: "Captures $3,000-7,000/month in lost leads." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "End-to-end AI for painting company operations.",
                areas: [
                    { area: "Estimating & Sales", detail: "AI that follows up on all estimates and shares portfolio photos.", impact: "Estimate close rate increases by 30%." },
                    { area: "Marketing & Retention", detail: "AI that runs referral programs and neighbor campaigns.", impact: "Referral-generated revenue increases by 200%." }
                ]
            },
            custom: {
                title: "The Painting Company OS",
                description: "Complete AI infrastructure for painting companies doing $500K+ in revenue.",
                features: [
                    "60-second lead response across all channels",
                    "Automated estimate follow-up with color inspiration",
                    "Referral and neighbor marketing automation",
                    "Before/after portfolio generation and reviews"
                ]
            }
        },
        faq: [
            { q: "How does the neighbor campaign work?", a: "When you start a job, the AI sends intros to surrounding homes with portfolio photos and a free estimate offer." },
            { q: "Will it help with Thumbtack or Angi leads?", a: "Absolutely. The AI responds within 60 seconds, which is critical on platforms where the first responder wins." }
        ],
        layers: [{ department: "Expansion & Growth", roles: ["Referral Coordinator", "Neighbor Bot"], tasks: ["Manage neighbor campaigns", "Drive social proof"] }]
    }
];
