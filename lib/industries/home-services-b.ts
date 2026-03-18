import { IndustryContent } from '../industry-data';

export const homeServicesBIndustries: IndustryContent[] = [
    {
        slug: "fencing",
        name: "Fencing Companies",
        hook: "Your Estimates Are Sitting in Inboxes While Homeowners Sign With Your Competitor.",
        problem: "You measure the yard, price the materials, and send a detailed estimate. Then silence. The homeowner got three quotes and went with whoever followed up first. Your close rate is under 35% and every lost estimate is 20-40 hours of installation revenue that walked away.",
        operatorProblem: "Fencing is a high-ticket, low-frequency purchase. Homeowners research for weeks. The fencing company that stays top-of-mind during that window wins. We install the AI that follows up relentlessly, answers material questions, and closes the deal before your competitor even calls back.",
        result: "Fencing companies increase estimate close rates to 55%+, reduce material waste through better forecasting, and fill seasonal gaps with proactive outreach.",
        dreamVision: "Imagine a fencing business where every quote is followed up on for 45 days, material costs are predicted with 98% accuracy, and your crews are booked 3 months in advance.",
        industryStats: [
            { stat: "55%+", label: "Estimate Close Rate" },
            { stat: "20%", label: "Less Material Waste" },
            { stat: "3mo", label: "Booking Lead Time" }
        ],
        useCases: [
            { title: "The Ghosted Quote", scenario: "A homeowner gets your quote for a $12k cedar fence but doesn't reply for 10 days.", outcome: "AI follows up automatically, addresses their concern about wood vs vinyl, and secures the deposit via text while you're on a job site." }
        ],
        comparisonTable: [
            { category: "Quote Follow-up", without: "Manual (Rarely happens)", withAI: "Persistent (45-day cycle)" },
            { category: "BOA/HOA Help", without: "Homeowner's Problem", withAI: "AI-Generated Paperwork" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Finding where your $10k+ quotes are stalling." },
            { step: 2, title: "Closer Launch", description: "Deploying your automated follow-up unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for the fencing sales cycle and operations.",
                examples: [
                    { title: "The Estimate Follow-Up Engine", detail: "AI that follows up on every fencing estimate 8-12 times over 4-6 weeks with personalized messages about material options, HOA guidance, and financing.", roi: "Close rate increases from 35% to 55%+." },
                    { title: "Material Calculator Bot", detail: "AI that calculates exact material quantities from property measurements — posts, rails, pickets, concrete, hardware — reducing waste and improving estimate accuracy.", roi: "Material waste drops by 20%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered operations for fencing companies.",
                areas: [
                    { area: "Sales & Estimating", detail: "AI that handles lead intake, provides preliminary quotes based on linear footage, follows up on estimates, and presents financing options.", impact: "Sales pipeline velocity doubles." },
                    { area: "Production & Scheduling", detail: "AI that schedules crews, coordinates material deliveries, monitors weather, and manages multi-day installations.", impact: "Production runs at maximum efficiency." }
                ]
            },
            custom: {
                title: "The Fencing Company OS",
                description: "Complete AI infrastructure for fencing companies.",
                features: [
                    "Automated estimate follow-up with financing integration",
                    "Material quantity calculator with supplier pricing",
                    "Permit and HOA compliance research automation",
                    "Weather-aware crew scheduling and route optimization"
                ]
            }
        },
        faq: [
            { q: "How does the AI handle different fence types and materials?", a: "We train it on your specific product catalog — wood, vinyl, chain link, aluminum, composite — so it quotes accurately and explains material differences to homeowners." },
            { q: "Can it manage HOA approval processes?", a: "Yes. It researches HOA bylaws for the property, ensures your proposal meets requirements, and even helps the homeowner submit approval paperwork." }
        ],
        layers: [{ department: "Sales Alignment", roles: ["Persistence Bot", "HOA Liaison"], tasks: ["Follow up on big quotes", "Research property bylaws"] }]
    },
    {
        slug: "garage-door-repair-install",
        name: "Garage Door Services",
        hook: "A Garage Door Is Stuck Open Right Now. You Are on Another Job.",
        problem: "Broken springs and stuck doors are emergencies — homeowners cannot leave the house or secure their property. If your phone goes to voicemail, they call the next company. Meanwhile, your lucrative opener upgrades and new door installations sit unquoted because you are running emergency calls all day.",
        operatorProblem: "Garage door companies live in two worlds: urgent repairs that pay $300-500 and new door installations that pay $2,000-5,000. Most owners are so buried in emergency calls they never build the installation side of the business. We install the AI that handles emergencies instantly and builds your high-ticket pipeline simultaneously.",
        result: "Garage door companies capture 100% of emergency calls, increase new door installation revenue by 40%, and reduce windshield time between jobs by 25%.",
        dreamVision: "Imagine a service business where every emergency call is booked in 15 seconds and every repair lead is automatically nurtured into a high-ticket door replacement.",
        industryStats: [
            { stat: "100%", label: "Emergency Capture" },
            { stat: "40%", label: "Installation Growth" },
            { stat: "25%", label: "Less Windshield Time" }
        ],
        useCases: [
            { title: "The Midnight Spring Snap", scenario: "Customer's garage door spring snaps at 11 PM.", outcome: "AI answers, provides an emergency price range, and has your tech arriving at 7 AM while the customer is still asleep." }
        ],
        comparisonTable: [
            { category: "Emergency Intake", without: "Voicemail (Wasted)", withAI: "Instant Booking (Booked)" },
            { category: "Door Upsells", without: "Random (Hard to manage)", withAI: "Predictive (Based on age/cycles)" }
        ],
        processSteps: [
            { step: 1, title: "Call Audit", description: "Finding where your missed calls are going." },
            { step: 2, title: "24/7 Node Launch", description: "Deploying your unlimited AI dispatcher." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI solutions for emergency repair and installation sales.",
                examples: [
                    { title: "The Emergency Response System", detail: "AI that answers every broken spring and stuck door call within 15 seconds, triages the issue, provides an ETA and price range, and dispatches the nearest tech.", roi: "Captures $6,000-12,000/month in previously lost emergency revenue." },
                    { title: "New Door Upsell Engine", detail: "AI that identifies repair customers with aging doors (15+ years) and automatically presents replacement options with before/after visuals and financing.", roi: "Converts 20% of repair customers into $2,000-5,000 installation jobs." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "Full-scale AI for garage door company operations.",
                areas: [
                    { area: "Emergency Dispatch", detail: "AI that handles all inbound emergency calls, dispatches the nearest tech with the right parts, and keeps customers updated with real-time ETAs.", impact: "Zero missed emergency calls. Response time under 45 minutes." },
                    { area: "Installation Sales", detail: "AI that manages the full new door sales process — from lead capture to showroom-quality digital presentations to financing approval.", impact: "Installation revenue grows 40% without additional sales staff." }
                ]
            },
            custom: {
                title: "The Garage Door Company OS",
                description: "Complete AI infrastructure for garage door businesses.",
                features: [
                    "24/7 emergency call answering with triage and dispatch",
                    "New door installation sales pipeline with visual configurator",
                    "Preventive maintenance tracking for springs and openers",
                    "Real-time truck inventory and parts management"
                ]
            }
        },
        faq: [
            { q: "Can the AI diagnose garage door issues over the phone?", a: "It asks targeted questions — does the door move at all, is the spring visibly broken, is the opener clicking — to triage the issue and ensure the tech brings the right parts." },
            { q: "How does it handle after-hours emergency calls?", a: "It answers 24/7, qualifies the emergency, provides transparent after-hours pricing, and dispatches your on-call tech automatically." }
        ],
        layers: [{ department: "Dispatch Ops", roles: ["Emergency Coordinator", "Cycle Strategist"], tasks: ["Triage midnight calls", "Track spring lifetimes"] }]
    },
    {
        slug: "flooring-companies",
        name: "Flooring Services",
        hook: "They Loved Your Samples. Then They Got a Quote From a Big Box Store.",
        problem: "You spend an hour in someone's living room showing samples, measuring rooms, and building rapport. Then they ghost you for a big box store that undercuts your price by 15%. Your estimates take days because you are on other installs. Every day that estimate sits unsent, the close probability drops 10%.",
        operatorProblem: "Flooring is a consideration purchase — homeowners compare 3-5 quotes over 2-4 weeks. The company that educates, follows up, and makes it easy to say yes wins. We install the AI that sends estimates same-day, follows up with material comparisons, and closes the deal before the big box store can schedule their installer.",
        result: "Flooring companies increase close rates from 30% to 50%+, reduce estimate turnaround from 3 days to 3 hours, and build a referral engine that generates 20% of new business.",
        dreamVision: "Imagine a flooring business where every quote is delivered before you leave the driveway and every client is nurtured with material education until they sign.",
        industryStats: [
            { stat: "50%+", label: "Close Rate" },
            { stat: "3hr", label: "Estimate Speed" },
            { stat: "20%", label: "Referral Driven" }
        ],
        useCases: [
            { title: "The Big Box Rivalry", scenario: "Customer is tempted by a cheaper Big Box quote.", outcome: "AI sends a comparison highlighting your higher-grade underlayment and professional moisture testing, securing the job on quality." }
        ],
        comparisonTable: [
            { category: "Quote Speed", without: "3-5 Days (Manual)", withAI: "3-5 Minutes (AI)" },
            { category: "Education", without: "Generic PDFs", withAI: "Personalized Material Guides" }
        ],
        processSteps: [
            { step: 1, title: "Measurement Audit", description: "Standardizing your field data collection." },
            { step: 2, title: "Estimator Launch", description: "Deploying your instant-quote engine." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for flooring sales and installation operations.",
                examples: [
                    { title: "The Same-Day Estimate Engine", detail: "AI that generates detailed flooring estimates within hours of the in-home visit — with material options, labor breakdowns, and financing — before the homeowner contacts a competitor.", roi: "Close rate increases from 30% to 50%+." },
                    { title: "Material Comparison Educator", detail: "AI that sends personalized material comparison guides after every consultation — hardwood vs. LVP, porcelain vs. ceramic — educating the homeowner and positioning you as the expert.", roi: "Reduces price objections by 40%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered operations for flooring companies.",
                areas: [
                    { area: "Sales & Estimating", detail: "AI that handles lead intake, schedules in-home consultations, generates same-day estimates, and follows up with material education and financing options.", impact: "Estimate-to-close cycle cut in half." },
                    { area: "Installation Operations", detail: "AI that coordinates material delivery, acclimation periods, furniture moving, and crew scheduling across multiple concurrent projects.", impact: "Projects finish on time with zero material delays." }
                ]
            },
            custom: {
                title: "The Flooring Company OS",
                description: "Complete AI infrastructure for flooring businesses.",
                features: [
                    "Same-day estimate generation with material options and financing",
                    "Digital room visualization for every flooring option",
                    "Subfloor assessment and preparation cost calculator",
                    "Material acclimation and delivery coordination system"
                ]
            }
        },
        faq: [
            { q: "Can the AI explain the difference between flooring types?", a: "Yes. It sends detailed comparisons of hardwood, LVP, laminate, tile, and carpet — covering durability, moisture resistance, maintenance, and cost — tailored to each room in their home." },
            { q: "How does it compete with big box store pricing?", a: "It shifts the conversation from price to value — highlighting your professional installation warranty, subfloor expertise, and the hidden costs of big box installs like cheap underlayment and no moisture testing." }
        ],
        layers: [{ department: "Sales Education", roles: ["Material Specialist", "Follow-up Bot"], tasks: ["Draft quote comparisons", "Send floor care tips"] }]
    },
    {
        slug: "window-cleaning-services",
        name: "Window Cleaning",
        hook: "Your Calendar Has Gaps But Your Phone Has 14 Missed Calls.",
        problem: "Window cleaning is a volume business — you need 4-8 jobs per day to hit your numbers. But you are on a ladder when the calls come in. By the time you call back, the homeowner already booked someone else. Your quote-to-close rate is under 40% because you are competing on price instead of speed.",
        operatorProblem: "Window cleaning is won by whoever answers first and books fastest. Not whoever has the best equipment or the lowest price. We install the AI that answers every call, quotes instantly based on pane count or square footage, and books the job before you finish your current one.",
        result: "Window cleaning companies book 30-50% more jobs per month, eliminate phone tag, and build recurring revenue through automated maintenance plans.",
        dreamVision: "Imagine a washing business where every call is a booked job and every customer is automatically recurring for spring and fall cleanings.",
        industryStats: [
            { stat: "30-50%", label: "Booking Increase" },
            { stat: "24/7", label: "Quote Response" },
            { stat: "90%", label: "Retention Rate" }
        ],
        useCases: [
            { title: "The Missed Ladder Call", scenario: "You're cleaning windows and someone calls for a quote.", outcome: "AI answers, qualifies the number of panes, and has the job booked on your calendar while you're still cleaning the first pane." }
        ],
        comparisonTable: [
            { category: "Response Speed", without: "Hours (Manual)", withAI: "Seconds (Instant)" },
            { category: "Recurring Income", without: "Manual Outreach", withAI: "Autonomous Scheduling" }
        ],
        processSteps: [
            { step: 1, title: "Booking Audit", description: "Finding your biggest call drop-off points." },
            { step: 2, title: "Auto-Quote Launch", description: "Deploying your pane-count based pricing agent." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for high-volume window cleaning operations.",
                examples: [
                    { title: "The Instant Quote Machine", detail: "AI that answers every call and web inquiry, asks about window type and approximate pane count, and provides an instant price range — booking the job on the spot.", roi: "Books 30-50% more jobs per month." },
                    { title: "Recurring Wash Plan Builder", detail: "AI that converts one-time customers into quarterly or semi-annual wash plans with automatic scheduling and pre-payment discounts.", roi: "Builds $5K-12K/month in recurring revenue." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered window cleaning business operations.",
                areas: [
                    { area: "Booking & Scheduling", detail: "AI that handles all inbound calls and online requests, provides instant quotes, books jobs, and manages the daily schedule for multiple crews.", impact: "Every call converts to a quote. Every quote gets followed up." },
                    { area: "Route & Operations", detail: "AI that optimizes daily routes, manages equipment maintenance schedules, tracks chemical inventory, and coordinates multi-crew operations.", impact: "Maximum jobs per crew per day with minimum drive time." }
                ]
            },
            custom: {
                title: "The Window Cleaning OS",
                description: "Complete AI infrastructure for washing businesses.",
                features: [
                    "Instant quoting engine with pane-type pricing logic",
                    "Recurring wash plan management with auto-scheduling",
                    "Neighborhood-based route optimization",
                    "Weather monitoring with automatic reschedule management"
                ]
            }
        },
        faq: [
            { q: "How does the AI quote without seeing the windows?", a: "It asks targeted questions about pane count, stories, and condition — then provides a price range. Your tech confirms the final price on arrival. This books the job instantly." },
            { q: "Can it handle residential vs commercial windows?", a: "Yes. It identifies commercial leads for site-survey scheduling while booking residential jobs directly." }
        ],
        layers: [{ department: "Velocity Ops", roles: ["Rhythm Bot", "Route Captain"], tasks: ["Book instant quotes", "Manage spring schedules"] }]
    },
    {
        slug: "tree-service-companies",
        name: "Tree Service Companies",
        hook: "A Tree Fell on Someone's Fence. You Are Up in Another Tree.",
        problem: "Storm damage calls flood in all at once — you cannot answer because you are 40 feet up in a harness. By the time you climb down, the homeowner already called three other companies. Your bread-and-butter trimming and removal estimates take days to send because you are running from emergency to emergency.",
        operatorProblem: "Tree service is feast or famine. Storms create emergency demand you cannot handle, and dry spells leave your crews idle. We install the AI that captures every storm call, builds your trimming pipeline during calm periods, and keeps your crews booked 50 weeks a year.",
        result: "Tree service companies capture 100% of emergency calls, maintain 85%+ crew utilization year-round, and build $10K-20K/month in scheduled trimming revenue.",
        dreamVision: "Imagine a tree business where you catch 100% of storm calls and your crews are always optimized for high-ticket removals.",
        industryStats: [
            { stat: "100%", label: "Storm Call Capture" },
            { stat: "85%+", label: "Crew Utilization" },
            { stat: "20%", label: "Cycle Expansion" }
        ],
        useCases: [
            { title: "The Storm Surge", scenario: "Hail and wind knock out trees across 5 neighborhoods.", outcome: "AI handles 40 simultaneous calls, triages by severity (house vs yard), and fills your inspector's calendar for 3 days in 15 minutes." }
        ],
        comparisonTable: [
            { category: "Storm Response", without: "Voicemail (Clogged)", withAI: "Instant Triage (Unlimited)" },
            { category: "Trimming Cycles", without: "Manual (Rare)", withAI: "Predictive (Recurring)" }
        ],
        processSteps: [
            { step: 1, title: "Storm Audit", description: "Mapping your emergency response capacity." },
            { step: 2, title: "Triage Node Launch", description: "Deploying your unlimited AI phone unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for storm response and year-round tree service operations.",
                examples: [
                    { title: "The Storm Surge Capture System", detail: "AI that answers the flood of post-storm calls, triages by severity (on a house vs. blocking a driveway vs. leaning dangerously), provides ETAs, and queues jobs by priority.", roi: "Captures $15,000-30,000 in revenue per major storm event." },
                    { title: "Trimming Cycle Reminder", detail: "AI that tracks every tree serviced and sends automated outreach when it is time for the next trim cycle — typically every 2-3 years — keeping your pipeline full year-round.", roi: "Builds $10K-20K/month in scheduled trimming revenue." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered operations for tree service companies.",
                areas: [
                    { area: "Emergency Response", detail: "AI that handles all storm-related calls, triages by severity, dispatches crews by proximity and equipment, and manages the emergency queue in real-time.", impact: "Every storm call captured. Priority jobs handled first." },
                    { area: "Estimating & Sales", detail: "AI that schedules site assessments, generates estimates with species-specific pricing, follows up on outstanding quotes, and presents financing for large removals.", impact: "Estimate close rate increases to 55%+." }
                ]
            },
            custom: {
                title: "The Tree Service OS",
                description: "Complete AI infrastructure for tree service companies.",
                features: [
                    "Storm surge call management with priority triage",
                    "Trim cycle tracking and automated customer outreach",
                    "Species and hazard assessment intake system",
                    "Equipment-based crew scheduling and dispatch"
                ]
            }
        },
        faq: [
            { q: "How does the AI handle the post-storm call flood?", a: "It answers every call simultaneously, triages by severity — tree on a house gets priority over a branch in the yard — and queues jobs so your crews work the most urgent and profitable jobs first." },
            { q: "Can it estimate tree removal costs?", a: "It asks about species, size, location, and access — then provides a preliminary range. Your arborist confirms after the site visit." }
        ],
        layers: [{ department: "Storm Response", roles: ["Emergency Triage", "Inspector Setter"], tasks: ["Qualify storm damage", "Schedule house-priority removals"] }]
    },
    {
        slug: "moving-companies",
        name: "Moving & Logistics",
        hook: "You Sent the Quote. Now They Are Calling a Competitor Who Followed Up First.",
        problem: "Moving is a high-anxiety, one-chance business. Homeowners get 5 quotes in an hour and book the first one that follows up. You are driving a truck and cannot text back. By the time you do, they already signed the other contract.",
        operatorProblem: "Moving is a logistics-and-follow-up race. The company that responds in seconds, explains their insurance, and follows up relentlessly until the deposit is paid wins. We install the AI that converts every quote into a booked move before you even finish your current route.",
        result: "Moving companies increase booking rates by 35% and reduce claims by 20% through better pre-move automated education.",
        dreamVision: "Imagine a moving business where every quote is handled by an AI concierge that follows up until they book, then prepares the client so the move goes perfectly.",
        industryStats: [
            { stat: "35%", label: "Higher Booking" },
            { stat: "20%", label: "Lower Claims" },
            { stat: "10s", label: "Speed to Lead" }
        ],
        useCases: [
            { title: "The Busy Route Booking", scenario: "You're doing a move and 3 new leads come in.", outcome: "AI responds to all 3, provides inventory-based quotes, and secures 2 deposits before you finish unloading the truck." }
        ],
        comparisonTable: [
            { category: "Lead Response", without: "Hours (Manual)", withAI: "Seconds (AI)" },
            { category: "Client Prep", without: "Manual (Rarely done)", withAI: "Autonomous Video Guides" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Finding your biggest booking drop-off points." },
            { step: 2, title: "Concierge Launch", description: "Deploying your automated move coordinator." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for moving and storage sales and coordination.",
                examples: [
                    { title: "The Move Concierge", detail: "AI that handles inbound move requests, helps with basic inventory lists, provides quotes, and follows up until the move is booked.", roi: "Booking rate increases from 25% to 40%." },
                    { title: "Pre-Move Education Sequence", detail: "AI that sends packing guides, insurance explainers, and day-of tips to reducing client anxiety and claims.", roi: "Claims rate drops by 20%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered operations for moving companies.",
                areas: [
                    { area: "Sales & Estimating", detail: "AI that handles the entire quote-to-deposit cycle, identifies items that need special care (pianos, safes), and coordinates the move date.", impact: "Sales overhead reduced by 50%." },
                    { area: "Customer Experience", detail: "AI that manages the post-move follow-up, requests reviews, handles basic damage claims, and manages the referral program.", impact: "Repeat referral revenue increases 30%." }
                ]
            },
            custom: {
                title: "The Moving Company OS",
                description: "Complete AI infrastructure for moving and storage businesses.",
                features: [
                    "Inventory-aware instant quoting and booking",
                    "Automated multi-channel follow-up until deposit",
                    "Pre-move client education and preparation sequence",
                    "Simplified claim management and review automation"
                ]
            }
        },
        faq: [
            { q: "Can the AI quote a full house move?", a: "It asks for a basic room count and high-value items to provide a preliminary range. It then coordinates an in-person or video survey to finalize the quote." },
            { q: "How does it help reduce damage claims?", a: "By educating the customer on how to pack properly and what items should be moved by the owner, reducing the likelihood of accidents on move day." }
        ],
        layers: [{ department: "Logistics Coordination", roles: ["Move Concierge", "Prep Strategist"], tasks: ["Send packing guides", "Follow up on quotes"] }]
    },
    {
        slug: "appliance-repair-shops",
        name: "Appliance Repair",
        hook: "Their Fridge Died at 9 PM With $300 of Groceries Inside. You Missed the Call.",
        problem: "A broken fridge or washer is an emergency to the homeowner but just another voicemail in your phone. By the time you call back, they have already booked with a competitor who answered. Your techs waste time on diagnostic calls that could be resolved with the right questions upfront. Parts ordering delays turn one-visit repairs into two-visit headaches.",
        operatorProblem: "Appliance repair is a race — the first company to answer, diagnose, and show up with the right part wins. We install the AI that answers every call instantly, diagnoses the issue before dispatch, identifies the likely parts needed, and gets your tech there with everything required for a first-visit fix.",
        result: "Appliance repair companies increase first-visit fix rates to 85%+, capture $5,000-10,000/month in previously lost calls, and reduce average repair cycle time by 40%.",
        dreamVision: "Imagine a repair shop where every call is a diagnosis and every tech arrives with the exact part needed for a one-visit fix.",
        industryStats: [
            { stat: "85%+", label: "First-Visit Fix" },
            { stat: "40%", label: "Faster Cycle" },
            { stat: "15s", label: "Response Time" }
        ],
        useCases: [
            { title: "The Warm-Fridge Panic", scenario: "Customer's fridge hits 55 degrees at 10 PM.", outcome: "AI identifies the model and symptom (clicking sound), flags the likely starter relay, and has your tech arriving at 8 AM WITH the part." }
        ],
        comparisonTable: [
            { category: "Diagnoses", without: "Wait for tech (Slow)", withAI: "Immediate (AI-Assisted)" },
            { category: "Parts", without: "Check at warehouse", withAI: "Auto-ordered on call" }
        ],
        processSteps: [
            { step: 1, title: "Inventory Audit", description: "Mapping your high-frequency parts usage." },
            { step: 2, title: "Diagnostic Node Launch", description: "Deploying your symptom-based intake agent." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for appliance repair speed and efficiency.",
                examples: [
                    { title: "The Instant Triage System", detail: "AI that answers every call within 15 seconds, asks about the appliance brand, model, symptoms, and error codes — then dispatches the tech with a preliminary diagnosis and likely parts list.", roi: "First-visit fix rate increases to 85%+." },
                    { title: "Parts Prediction Engine", detail: "AI that cross-references the appliance model and reported symptoms against repair databases to identify the most likely failed component — ordering the part before the tech even arrives.", roi: "Two-visit repairs drop by 50%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered appliance repair operations.",
                areas: [
                    { area: "Call Intake & Diagnosis", detail: "AI that handles all inbound calls, performs pre-visit diagnostics using symptom-based questioning, and prepares the tech with a repair plan before arrival.", impact: "Techs arrive knowing the problem and carrying the right parts." },
                    { area: "Parts & Inventory", detail: "AI that manages parts inventory across all trucks and the warehouse, auto-orders high-frequency parts, and tracks vendor pricing across distributors.", impact: "Parts availability on first visit reaches 85%+." }
                ]
            },
            custom: {
                title: "The Appliance Repair OS",
                description: "Complete AI infrastructure for appliance repair companies.",
                features: [
                    "Instant call answering with symptom-based pre-diagnosis",
                    "Parts prediction and pre-ordering by model and symptom",
                    "Warranty status verification during intake",
                    "Replace vs. repair cost analysis tool"
                ]
            }
        },
        faq: [
            { q: "How does the AI diagnose appliances over the phone?", a: "It asks about the brand, model, age, symptoms, and any error codes — then cross-references repair databases to identify the most likely issue." },
            { q: "Can it handle all appliance brands?", a: "Yes. We build the knowledge base from manufacturer repair manuals and parts databases — covering all major brands." }
        ],
        layers: [{ department: "Technical Triage", roles: ["Diagnostic Bot", "Parts Strategist"], tasks: ["Pull error code data", "Order predicted parts"] }]
    },
    {
        slug: "pool-cleaning-maintenance",
        name: "Pool Service Companies",
        hook: "The Pool Is Green. The Homeowner Is Furious. Your Tech Forgot the Stop.",
        problem: "Pool routes are the backbone of your business but route management is chaos. Techs skip stops, chemical readings are inconsistent, and customers complain about green pools. Meanwhile, your one-time repair and equipment upgrade calls go to voicemail because your office is managing 200+ weekly service accounts manually.",
        operatorProblem: "Pool service companies have two revenue engines: recurring routes that pay the bills and one-time repairs and upgrades that drive profit. Most owners are so overwhelmed managing routes that the high-margin work slips away. We install the AI that manages every route stop, captures every repair call, and builds the equipment upgrade pipeline.",
        result: "Pool service companies reduce route management time by 70%, capture 100% of repair calls, and increase equipment upgrade revenue by 45%.",
        dreamVision: "Imagine a pool business where your routes are perfectly optimized and your high-ticket equipment installs are always sold out.",
        industryStats: [
            { stat: "70%", label: "Admin Reduction" },
            { stat: "45%", label: "Equipment Growth" },
            { stat: "Zero", label: "Missed Stops" }
        ],
        useCases: [
            { title: "The Green Pool Alert", scenario: "A tech enters data showing a chemical imbalance.", outcome: "AI instantly alerts the tech to add specific amounts, notifies the homeowner of the fix, and schedules a follow-up test for 48 hours later." }
        ],
        comparisonTable: [
            { category: "Route Management", without: "Manual (Chaotic)", withAI: "Autonomous (Perfect)" },
            { category: "Upgrades", without: "Reactive (Broken only)", withAI: "Proactive (Based on age)" }
        ],
        processSteps: [
            { step: 1, title: "Database Audit", description: "Mapping your equipment ages across all pools." },
            { step: 2, title: "Scheduler Launch", description: "Deploying your GPS-verified route unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for pool route management and growth.",
                examples: [
                    { title: "The Smart Route Manager", detail: "AI that optimizes weekly routes by geography, tracks every stop with GPS verification, and alerts you when a tech skips a pool.", roi: "Route efficiency increases 25%. Zero missed stops." },
                    { title: "Equipment Upgrade Pipeline", detail: "AI that tracks the age and condition of every pump, filter, heater, and salt system on your routes — triggering upgrade recommendations when equipment reaches end-of-life.", roi: "Equipment upgrade revenue increases 45%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered pool service company operations.",
                areas: [
                    { area: "Route Operations", detail: "AI that manages all weekly routes, optimizes stop order, verifies completion via GPS, and tracks chemical readings across every account.", impact: "Routes run on autopilot with zero missed stops." },
                    { area: "Repairs & Upgrades", detail: "AI that captures all repair calls, dispatches techs with the right parts, and identifies equipment upgrade opportunities across the customer base.", impact: "High-margin repair and upgrade revenue grows 45%." }
                ]
            },
            custom: {
                title: "The Pool Service OS",
                description: "Complete AI infrastructure for pool service companies.",
                features: [
                    "GPS-verified route management with stop tracking",
                    "Automated chemical logging and treatment recommendations",
                    "Equipment lifecycle tracking and upgrade pipeline",
                    "24/7 repair call answering with triage and dispatch"
                ]
            }
        },
        faq: [
            { q: "How does the AI verify that techs actually service each pool?", a: "GPS check-in at each stop, time-on-site tracking, and required chemical reading entry before the stop can be marked complete." },
            { q: "Can it manage equipment upgrades?", a: "It tracks the age of every pump, filter, and heater on your routes — automatically sending upgrade proposals as they hit end-of-life." }
        ],
        layers: [{ department: "Route Efficiency", roles: ["Route Architect", "Chem Specialist"], tasks: ["Check GPS logs", "Optimize chemical usage"] }]
    }
];
