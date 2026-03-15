import { IndustryContent } from '../industry-data';

export const homeServicesCIndustries: IndustryContent[] = [
    {
        slug: "locksmith",
        name: "Locksmith Services",
        hook: "Someone Is Locked Out Right Now. Your Phone Went to Voicemail.",
        problem: "Locksmith calls are emergencies — locked out of a car at midnight, broken lock after a break-in, new employee needing access. If you do not answer in 30 seconds, they are calling the next locksmith on Google. Your commercial contracts go unrenewed because you are too busy running emergency calls to manage the relationship.",
        operatorProblem: "Locksmith revenue is won or lost in the first 30 seconds of a call. We install the AI that answers every call instantly, dispatches the closest tech, and builds the commercial contract business that creates stable recurring revenue between emergency calls.",
        result: "Locksmiths capture 100% of emergency calls, build $5K-15K in monthly commercial contract revenue, and optimize mobile routing to reduce response times by 40%.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for the emergency-driven locksmith business.",
                examples: [
                    { title: "The Instant Emergency Responder", detail: "AI that answers every locksmith call within 10 seconds, identifies the service type, provides an ETA and price range, and dispatches the nearest available tech.", roi: "Captures $5,000-10,000/month in previously lost emergency revenue." },
                    { title: "Mobile Tech Router", detail: "AI that tracks all mobile techs in real-time and dispatches the closest one to each emergency — minimizing response time and maximizing daily job count.", roi: "Response times drop by 40%. Fits 2 more jobs per tech per day." },
                    { title: "Commercial Contract Builder", detail: "AI that targets property managers, offices, and retail locations for master key systems, access control, and recurring re-key contracts.", roi: "Builds $5K-15K/month in recurring commercial revenue." },
                    { title: "Key Tracking System", detail: "AI that maintains digital records of key systems, master key hierarchies, and access control configurations for commercial clients.", roi: "Commercial clients stay because switching means rebuilding records." },
                    { title: "After-Hours Premium Pricer", detail: "AI that automatically applies after-hours pricing, communicates it clearly to the customer, and processes payment — eliminating awkward pricing conversations.", roi: "After-hours revenue margins increase by 20%." },
                    { title: "Auto Lockout Specialist", detail: "AI that identifies the vehicle make, model, and year during the call and alerts the tech to bring the correct tools and key blanks for that specific vehicle.", roi: "First-visit resolution rate for auto lockouts reaches 95%+." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered locksmith operations.",
                areas: [
                    { area: "Emergency Dispatch", detail: "AI that handles all calls, dispatches the nearest tech, provides ETAs, and manages the real-time queue of emergency jobs.", impact: "Zero missed calls. Fastest response times in the market." },
                    { area: "Commercial Development", detail: "AI that prospects commercial accounts, manages access control proposals, and handles recurring re-key schedules.", impact: "Steady commercial revenue between emergency calls." },
                    { area: "Operations & Routing", detail: "AI that optimizes mobile tech routing, manages inventory, and tracks key blanks and equipment across all vehicles.", impact: "Maximum jobs per tech per day." },
                    { area: "Marketing & Reviews", detail: "AI that generates reviews from emergency customers, manages online presence, and runs targeted campaigns.", impact: "Top Google ranking for locksmith searches." }
                ]
            },
            custom: {
                title: "The Locksmith OS",
                description: "AI for locksmith companies with multiple mobile techs.",
                features: [
                    "Instant call answering with emergency triage",
                    "Real-time mobile tech tracking and dispatch",
                    "Commercial access control management",
                    "Digital key system record keeping",
                    "After-hours pricing automation",
                    "Vehicle-specific lockout preparation",
                    "Inventory tracking across all service vehicles"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle true emergency calls at 2 AM?", a: "Yes. The AI answers 24/7 within 10 seconds, qualifies the emergency type, gives a price range, and dispatches your nearest tech — no human involvement required." },
            { q: "How does it know which tech to send?", a: "It tracks every tech via GPS in real-time, cross-references their current job status, skillset, and vehicle inventory to dispatch the fastest and best-equipped responder." },
            { q: "Can it help us win commercial contracts?", a: "Absolutely. The AI identifies property managers and commercial prospects, sends targeted outreach, manages proposals, and automates re-key scheduling to build sticky recurring revenue." },
            { q: "What about pricing transparency with customers?", a: "The AI communicates pricing clearly during the initial call — including after-hours premiums — so customers know exactly what to expect before the tech arrives. No surprises, no disputes." }
        ]
    },
    {
        slug: "window-cleaning",
        name: "Window Cleaning",
        hook: "You Are One Rainstorm Away From Losing Tomorrow's Revenue.",
        problem: "Your schedule is a house of cards. One rainy day and half your jobs get pushed. Customers cancel because they forgot, you forget to follow up on quotes, and your crews sit idle on slow days while you are drowning in callbacks the next week. Residential jobs pay the bills but commercial contracts are where the real money is — and you have no system to win them.",
        operatorProblem: "Window cleaning revenue is weather-dependent, seasonal, and fragile. The operators who win are the ones with systems that fill cancellation gaps instantly, lock in recurring commercial routes, and follow up on every quote before the customer finds someone cheaper on Thumbtack.",
        result: "Window cleaning companies stabilize revenue with 40% recurring commercial contracts, reduce weather-related downtime by 60%, and increase quote close rates to 55%+.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools that stabilize the unpredictable window cleaning business.",
                examples: [
                    { title: "The Weather-Smart Scheduler", detail: "AI that monitors 10-day forecasts, automatically reschedules affected jobs, notifies customers, and backfills gaps with waitlisted clients.", roi: "Weather-related idle time drops by 60%." },
                    { title: "Quote Follow-Up Engine", detail: "AI that follows up on every window cleaning quote 5-8 times over 3 weeks via text and email — including photos of similar completed jobs in the customer's neighborhood.", roi: "Quote close rate jumps from 30% to 55%+." },
                    { title: "Recurring Route Builder", detail: "AI that identifies residential and commercial customers who would benefit from monthly or quarterly service and sells them into recurring plans automatically.", roi: "Builds $8K-20K/month in predictable recurring revenue." },
                    { title: "Commercial Property Prospector", detail: "AI that targets property managers, office parks, restaurants, and storefronts for recurring commercial window cleaning contracts.", roi: "Wins 5-10 new commercial accounts per quarter." },
                    { title: "Crew Route Optimizer", detail: "AI that clusters jobs by geography, builds daily routes that minimize windshield time, and adjusts in real-time for cancellations and add-ons.", roi: "Fits 2-3 more jobs per crew per day." },
                    { title: "Seasonal Reactivation Campaigner", detail: "AI that contacts last year's spring and fall customers before the season starts, offering early-bird pricing and priority scheduling.", roi: "Reactivates 40% of previous seasonal customers." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered window cleaning operations.",
                areas: [
                    { area: "Scheduling & Dispatch", detail: "AI that manages weather-dependent scheduling, crew assignments, route optimization, and real-time gap filling across all crews.", impact: "Maximum utilization regardless of weather." },
                    { area: "Sales & Quoting", detail: "AI that handles quote requests, provides instant pricing based on window count and building type, and follows up until the deal closes.", impact: "Quote-to-close rate doubles." },
                    { area: "Commercial Accounts", detail: "AI that manages recurring commercial contracts, schedules service rounds, and handles billing and renewals automatically.", impact: "Commercial revenue grows on autopilot." },
                    { area: "Customer Retention", detail: "AI that sends service reminders, seasonal reactivation campaigns, and referral requests to keep the pipeline full year-round.", impact: "Customer lifetime value increases by 3x." }
                ]
            },
            custom: {
                title: "The Window Cleaning OS",
                description: "Complete AI infrastructure for window cleaning companies scaling past $500K.",
                features: [
                    "Weather-responsive scheduling with auto-rescheduling",
                    "GPS-based crew route optimization",
                    "Automated quote generation and follow-up",
                    "Commercial contract management and billing",
                    "Seasonal campaign automation with early-bird pricing",
                    "Customer portal for booking and service history",
                    "Real-time crew tracking and job status updates"
                ]
            }
        },
        faq: [
            { q: "How does it handle weather cancellations?", a: "The AI monitors forecasts continuously and proactively reschedules affected jobs 24-48 hours before bad weather hits. It notifies customers, fills the gaps with waitlisted jobs, and prevents revenue loss." },
            { q: "Can it help us win commercial contracts?", a: "Yes. It identifies and contacts property managers, office buildings, and retail locations with targeted outreach, manages proposals, and automates recurring service scheduling once they sign." },
            { q: "Will it work for both residential and commercial?", a: "Absolutely. The AI handles residential one-time and recurring bookings alongside commercial contract management — optimizing routes that mix both for maximum efficiency." }
        ]
    },
    {
        slug: "gutters",
        name: "Gutter Services",
        hook: "Your Best Leads Call During Storms. You Answer During Sunshine.",
        problem: "Gutter calls spike when it rains — but your crews are out on jobs and nobody is answering the phone. By the time the sun comes out, those homeowners already called someone else. Your gutter guard upsells happen inconsistently because techs forget or feel awkward selling. Seasonal demand swings mean feast or famine cash flow.",
        operatorProblem: "Gutter companies live and die by seasonal timing and speed to answer. The companies that win are the ones who capture every storm-driven lead, upsell gutter guards on every cleaning job, and build recurring maintenance plans that smooth out the seasonal rollercoaster.",
        result: "Gutter companies capture 100% of storm-surge leads, increase gutter guard attachment rates to 35%+, and build $10K-25K/month in recurring maintenance revenue.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools that capture seasonal demand and build recurring revenue for gutter companies.",
                examples: [
                    { title: "The Storm-Surge Lead Catcher", detail: "AI that answers every call during rain events within 15 seconds, qualifies the issue, provides pricing, and books the job — even when your crews are in the field.", roi: "Captures $6,000-12,000/month in storm-driven leads that previously went to voicemail." },
                    { title: "Gutter Guard Upsell Engine", detail: "AI that automatically presents gutter guard options to every cleaning customer via text and email after the job — with photos, pricing, and financing options.", roi: "Gutter guard attachment rate increases from 12% to 35%+." },
                    { title: "Seasonal Maintenance Plan Builder", detail: "AI that converts one-time cleaning customers into biannual or quarterly maintenance plans with automatic scheduling and billing.", roi: "Builds $10K-25K/month in predictable recurring revenue." },
                    { title: "The Leaf Season Blitz Campaigner", detail: "AI that launches targeted campaigns to previous customers and new prospects 3-4 weeks before peak leaf season, locking in schedules before competitors.", roi: "Pre-books 60% of fall capacity before the season starts." },
                    { title: "Roof & Fascia Inspector Bot", detail: "AI that prompts techs to photograph and document roof, fascia, and soffit issues during gutter jobs — and automatically generates repair proposals sent to the homeowner.", roi: "Generates $3K-7K/month in additional repair revenue." },
                    { title: "Review Blitz After Every Clean", detail: "AI that sends a review request with before/after gutter photos within 2 hours of every completed job.", roi: "Google reviews triple in 90 days. Photo reviews boost conversion by 40%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered gutter company operations.",
                areas: [
                    { area: "Call Center & Booking", detail: "AI that handles all inbound calls during storms and calm days alike, qualifies jobs, provides instant pricing, and books crews.", impact: "Zero missed calls during peak demand surges." },
                    { area: "Upselling & Add-Ons", detail: "AI that systematically presents gutter guards, downspout extensions, and repairs to every customer at the right moment.", impact: "Average ticket size increases by 45%." },
                    { area: "Scheduling & Routing", detail: "AI that builds efficient daily routes, manages seasonal crew scaling, and handles weather-related rescheduling.", impact: "Crews complete 20% more jobs per day." },
                    { area: "Retention & Reactivation", detail: "AI that manages maintenance plans, sends seasonal reminders, and reactivates past customers before each peak season.", impact: "Customer retention rate exceeds 80%." }
                ]
            },
            custom: {
                title: "The Gutter Company OS",
                description: "Complete AI infrastructure for gutter companies scaling past $500K.",
                features: [
                    "24/7 storm-surge call answering and instant booking",
                    "Automated gutter guard upsell with financing integration",
                    "Recurring maintenance plan management and billing",
                    "Seasonal pre-booking campaign automation",
                    "Before/after photo documentation and proposal generation",
                    "Weather-aware scheduling and crew routing",
                    "Roof and fascia repair lead generation from gutter jobs"
                ]
            }
        },
        faq: [
            { q: "How does it handle the flood of calls during storms?", a: "The AI handles unlimited simultaneous calls. While your human team can only answer one phone at a time, the AI qualifies, prices, and books every caller — even during the worst storms when demand spikes 5x." },
            { q: "Can it really upsell gutter guards effectively?", a: "Yes. It sends personalized gutter guard proposals with photos and financing options after every cleaning job. Because it follows up 5-8 times, it converts far more than a one-time verbal pitch from a tech on a ladder." },
            { q: "How does the seasonal pre-booking work?", a: "The AI contacts your entire customer database and targeted prospects 3-4 weeks before leaf season with early-bird pricing. Customers lock in their preferred dates, and you start the season with 60% of capacity already booked." }
        ]
    },
    {
        slug: "moving-companies",
        name: "Moving Companies",
        hook: "You Quoted It Tuesday. They Booked Someone Else Wednesday.",
        problem: "Moving quotes take time — you send a detailed estimate and then hear nothing. The customer got five quotes and went with whoever followed up first or had the best reviews. Your crews sit idle on slow days while weekends are overbooked. Damage claims eat your margins and bad reviews destroy months of marketing spend.",
        operatorProblem: "Moving is a one-shot business. The customer will never need you again for years — maybe ever. You need to win every quote the first time. We install the AI that follows up faster than any competitor, fills every truck, and protects your reputation from the damage claims that tank your ratings.",
        result: "Moving companies increase quote close rates to 50%+, fill midweek capacity gaps, and reduce damage claim disputes by 70%.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for the high-stakes, one-chance moving business.",
                examples: [
                    { title: "The Quote Closer", detail: "AI that follows up on every moving estimate within 1 hour and then 8-12 times over 2 weeks — addressing common objections, offering date flexibility discounts, and creating urgency.", roi: "Quote close rate increases from 25% to 50%+." },
                    { title: "Midweek Gap Filler", detail: "AI that offers dynamic discounts for Tuesday-Thursday moves, targets flexible customers like retirees and remote workers, and fills the trucks that would otherwise roll empty.", roi: "Midweek utilization jumps from 40% to 75%+." },
                    { title: "Inventory Documentation Bot", detail: "AI that guides customers through a video walkthrough of their home before the move, creating a detailed inventory list that protects against damage claims.", roi: "Damage claim disputes drop by 70%." },
                    { title: "The Crew Efficiency Tracker", detail: "AI that monitors crew speed, tracks loading and unloading times per cubic foot, and identifies training opportunities to improve efficiency.", roi: "Crews complete moves 15% faster on average." },
                    { title: "Review & Reputation Shield", detail: "AI that sends review requests within 1 hour of delivery, monitors for negative reviews, and triggers immediate service recovery before a bad review goes public.", roi: "Maintains 4.7+ star rating. Review volume doubles." },
                    { title: "Commercial & Corporate Mover", detail: "AI that targets HR departments, property managers, and corporate relocation companies for recurring commercial moving contracts.", roi: "Builds $10K-30K/month in corporate relocation revenue." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered moving company operations.",
                areas: [
                    { area: "Sales & Estimating", detail: "AI that handles all quote requests, provides instant ballpark pricing, follows up relentlessly, and converts quotes into booked moves.", impact: "Sales close rate doubles without adding sales staff." },
                    { area: "Operations & Dispatch", detail: "AI that optimizes truck assignments, crew scheduling, route planning, and manages the logistics of multi-stop and long-distance moves.", impact: "Every truck runs full. Every crew stays productive." },
                    { area: "Claims & Quality Control", detail: "AI that documents inventory pre-move, manages damage claim processes, and identifies patterns to improve crew training.", impact: "Claims costs drop by 50%+." },
                    { area: "Marketing & Reputation", detail: "AI that manages review generation, runs seasonal campaigns, and builds corporate relocation partnerships.", impact: "Consistent lead flow with a bulletproof online reputation." }
                ]
            },
            custom: {
                title: "The Moving Company OS",
                description: "Complete AI infrastructure for moving companies doing $1M+ in revenue.",
                features: [
                    "Instant quote follow-up with dynamic pricing",
                    "Midweek capacity optimization with flexible pricing",
                    "Video-based inventory documentation system",
                    "Crew performance tracking and training automation",
                    "Damage claim prevention and dispute resolution",
                    "Corporate relocation account development",
                    "Real-time truck tracking and customer ETAs"
                ]
            }
        },
        faq: [
            { q: "How does the AI follow up on quotes without being annoying?", a: "It uses a tested sequence that mixes helpful content — packing tips, moving checklists, date availability updates — with the quote follow-up. Customers find it useful, not pushy, and it keeps you top-of-mind during their decision window." },
            { q: "Can it really reduce damage claims?", a: "Yes. The video inventory walkthrough creates a documented record of item conditions before the move. When a customer claims damage, you have timestamped video evidence. Most disputes are resolved immediately." },
            { q: "How does the midweek pricing work?", a: "The AI identifies customers with flexible move dates and offers dynamic Tuesday-Thursday discounts that still maintain your margins. It targets retirees, remote workers, and anyone who mentions date flexibility during the quote process." },
            { q: "Can it help us get corporate accounts?", a: "Absolutely. The AI identifies companies with relocation needs, contacts HR departments and relocation managers, and presents your commercial moving packages. Once they sign, it manages the recurring relationship automatically." }
        ]
    },
    {
        slug: "carpet-cleaning",
        name: "Carpet Cleaning",
        hook: "They Googled You, Called You, Got Voicemail, and Called Your Competitor.",
        problem: "Carpet cleaning is a commodity — customers think every company is the same. They call three companies and book whoever answers first. Your average ticket is too low because techs do not upsell stain protection or furniture moving. You clean the carpet, leave, and never hear from that customer again because you have no system to bring them back.",
        operatorProblem: "The carpet cleaning companies that win are not the cheapest — they are the fastest to answer, the best at upselling, and the most consistent at getting customers to rebook. We install the AI that answers every call, upsells every job, and turns one-time cleanings into lifetime customers.",
        result: "Carpet cleaning companies increase average ticket size by 40%, build 30%+ recurring customer base, and capture every inbound lead with sub-30-second response times.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools that turn commodity carpet cleaning into a premium recurring business.",
                examples: [
                    { title: "The Instant Answer Machine", detail: "AI that answers every carpet cleaning call within 15 seconds, provides room-based pricing, checks availability, and books the appointment — even during your busiest hours.", roi: "Captures $4,000-8,000/month in calls that previously went to voicemail." },
                    { title: "The Upsell Maximizer", detail: "AI that automatically presents stain protection, pet odor treatment, upholstery cleaning, and tile & grout add-ons via text before every appointment.", roi: "Average ticket size increases from $180 to $260+." },
                    { title: "Recurring Clean Plan Builder", detail: "AI that converts one-time customers into quarterly or biannual cleaning plans with automatic scheduling and pre-authorized billing.", roi: "Builds a base of 200+ recurring customers within 12 months." },
                    { title: "The Reactivation Engine", detail: "AI that contacts every past customer at 6, 9, and 12 months after their last cleaning with personalized offers and seasonal promotions.", roi: "Reactivates 25-35% of past customers each cycle." },
                    { title: "Commercial Janitorial Prospector", detail: "AI that targets offices, rental property managers, and Airbnb hosts for recurring commercial carpet cleaning contracts.", roi: "Wins 3-5 recurring commercial accounts per month." },
                    { title: "Before/After Review Generator", detail: "AI that prompts techs to take before and after photos, sends them to the customer with a review request, and posts photo reviews to Google.", roi: "Photo reviews increase booking conversion by 35%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered carpet cleaning operations at scale.",
                areas: [
                    { area: "Booking & Call Handling", detail: "AI that manages all inbound calls and online bookings, provides instant pricing, handles rescheduling, and confirms appointments.", impact: "100% of calls answered. Zero scheduling friction." },
                    { area: "Revenue Optimization", detail: "AI that manages upselling before and during every job, presents add-on services, and handles post-job follow-up for additional work.", impact: "Revenue per job increases by 40%+." },
                    { area: "Customer Lifecycle", detail: "AI that manages the full customer journey from first clean to recurring plan — reactivation, seasonal offers, and referral generation.", impact: "Customer lifetime value triples." },
                    { area: "Technician Management", detail: "AI that optimizes tech routes, tracks job completion times, manages supply inventory, and monitors quality via customer feedback.", impact: "Techs complete 20% more jobs per day." }
                ]
            },
            custom: {
                title: "The Carpet Cleaning OS",
                description: "Complete AI infrastructure for carpet cleaning companies scaling past $500K.",
                features: [
                    "24/7 call answering with instant room-based pricing",
                    "Pre-appointment upsell automation via text and email",
                    "Recurring cleaning plan management and billing",
                    "Customer reactivation campaigns at optimal intervals",
                    "Before/after photo documentation and review generation",
                    "Commercial account prospecting and contract management",
                    "Tech route optimization and performance tracking"
                ]
            }
        },
        faq: [
            { q: "Can the AI give accurate carpet cleaning quotes?", a: "Yes. It asks the right questions — number of rooms, stairs, pet stains, carpet type — and provides accurate pricing based on your rate card. Complex jobs get flagged for an in-home estimate." },
            { q: "How does the upselling work without feeling pushy?", a: "The AI sends a pre-appointment text that presents add-on services as helpful options — stain protection to keep carpets cleaner longer, pet treatment if they have animals. Customers appreciate the information and opt in at 3x the rate of verbal upsells." },
            { q: "Can it help us compete against cheap operators?", a: "Absolutely. The AI positions you as the premium option by showcasing reviews, before/after photos, and the value of add-on services. Speed to answer alone wins you business over cheaper competitors who do not pick up the phone." }
        ]
    },
    {
        slug: "water-damage-restoration",
        name: "Water Damage Restoration",
        hook: "A Pipe Burst at 3 AM. Your Phone Rang Once and Stopped.",
        problem: "Water damage calls are emergencies with $5,000-50,000 tickets — and the company that answers first gets the job. Period. You are losing six-figure annual revenue to missed after-hours calls. Insurance paperwork buries your office staff. Your drying equipment sits in the warehouse because you cannot coordinate enough jobs to keep it deployed.",
        operatorProblem: "Restoration is the highest-ticket emergency service in home services. Every missed call is not a $200 loss — it is a $10,000-50,000 loss. We install the AI that answers every call in under 15 seconds, dispatches crews immediately, and handles the insurance documentation that chokes your operations.",
        result: "Restoration companies capture 100% of emergency calls, reduce insurance documentation time by 70%, and increase equipment utilization to 85%+.",
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for the high-stakes, high-ticket restoration business.",
                examples: [
                    { title: "The Emergency Triage Responder", detail: "AI that answers every water damage call within 10 seconds, assesses the severity and source, provides immediate mitigation advice, and dispatches the nearest crew.", roi: "Captures $15,000-40,000/month in previously lost emergency revenue." },
                    { title: "Insurance Documentation Automator", detail: "AI that generates moisture mapping reports, photo documentation, and IICRC-compliant drying logs — formatting everything for insurance adjuster submission.", roi: "Documentation time drops by 70%. Claims get approved 30% faster." },
                    { title: "Equipment Deployment Optimizer", detail: "AI that tracks all dehumidifiers, air movers, and moisture meters across active job sites and coordinates pickups and redeployments to maximize utilization.", roi: "Equipment utilization increases from 55% to 85%+." },
                    { title: "The Plumber & Agent Referral Network", detail: "AI that builds and maintains referral relationships with plumbers, insurance agents, and property managers — sending updates, thank-you messages, and referral incentives.", roi: "Referral-sourced jobs increase by 50%." },
                    { title: "Moisture Monitoring Alert System", detail: "AI that tracks drying progress across all active jobs via sensor data and alerts techs when readings are ready for final inspection — preventing over-drying and equipment waste.", roi: "Jobs complete 1-2 days faster. Equipment turns over more frequently." },
                    { title: "The Rebuild Upsell Converter", detail: "AI that identifies mitigation jobs with rebuild potential — drywall, flooring, painting — and presents reconstruction proposals to the homeowner and their insurance carrier.", roi: "Converts 40% of mitigation jobs into $8K-25K rebuild projects." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered restoration company operations.",
                areas: [
                    { area: "Emergency Response", detail: "AI that handles all emergency calls 24/7, triages severity, dispatches crews, and provides homeowners with immediate mitigation instructions.", impact: "100% call capture. Fastest response time in the market." },
                    { area: "Insurance & Documentation", detail: "AI that generates compliant documentation, manages adjuster communication, tracks claim status, and ensures maximum reimbursement.", impact: "Insurance approval rates increase to 95%+." },
                    { area: "Equipment & Logistics", detail: "AI that manages equipment inventory, tracks deployment across job sites, coordinates pickups and deliveries, and schedules maintenance.", impact: "Equipment never sits idle. ROI per unit doubles." },
                    { area: "Business Development", detail: "AI that manages plumber, agent, and property manager referral networks and runs targeted campaigns for commercial water damage prevention contracts.", impact: "Consistent pipeline of high-ticket jobs." }
                ]
            },
            custom: {
                title: "The Restoration Company OS",
                description: "Complete AI infrastructure for restoration companies doing $1M+ in revenue.",
                features: [
                    "24/7 emergency call answering with severity triage",
                    "IICRC-compliant documentation and insurance submission",
                    "Real-time equipment tracking and deployment optimization",
                    "Moisture monitoring with automated tech alerts",
                    "Referral network management for plumbers and insurance agents",
                    "Mitigation-to-rebuild conversion automation",
                    "Multi-job coordination dashboard with crew assignments"
                ]
            }
        },
        faq: [
            { q: "Can the AI handle the urgency of water damage calls?", a: "Yes. It answers in under 10 seconds, assesses the situation — burst pipe, sewage backup, flooding — provides immediate steps to minimize damage, and dispatches your crew. Speed is everything in restoration, and the AI never sleeps." },
            { q: "How does it handle insurance documentation?", a: "The AI generates IICRC-compliant moisture maps, drying logs, photo documentation, and scope-of-loss reports. It formats everything for adjuster submission and tracks claim status — reducing your office staff's documentation workload by 70%." },
            { q: "Can it help us get more referrals from plumbers?", a: "Absolutely. The AI maintains your referral network automatically — sending thank-you messages after every referral, providing job status updates, and keeping your company top-of-mind with regular check-ins. Plumber referrals typically increase by 50% within 6 months." },
            { q: "How does the equipment tracking work?", a: "The AI logs every piece of equipment — dehumidifiers, air movers, sensors — by serial number and job site. It tracks drying progress and alerts you when equipment is ready for pickup, so nothing sits idle and every unit generates maximum revenue." }
        ]
    }
];
