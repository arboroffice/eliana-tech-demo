import { IndustryContent } from '../industry-data';

export const automotiveIndustries: IndustryContent[] = [
    {
        slug: "dealerships",
        name: "Auto Dealerships",
        hook: "Your Inventory is Moving, but Your Lead Response is Lagging.",
        problem: "Potential buyers are shopping 24/7 on Autotrader and your website. If a lead inquiries about a $50k truck at 10 PM and doesn't get a reply for 12 hours, they've already moved on. Your BDC (Business Development Center) is overwhelmed with basic questions about financing and features.",
        operatorProblem: "Dealership growth is a speed-to-lead game. Every minute of delay reduces your show-up rate by 50%. We install the AI that answers every inventory question, qualifies the trade-in, and books the test drive in under 60 seconds.",
        result: "Dealerships increase test-drive show-up rates by 40% and reduce BDC payroll by 30% through automation.",
        dreamVision: "Imagine a dealership where every single web lead is engaged and booked into a test-drive slot before your sales team even knows they're interested.",
        industryStats: [
            { stat: "40%", label: "Higher Show-up Rate" },
            { stat: "30%", label: "Lower BDC Payroll" },
            { stat: "60s", label: "Response Time" },
            { stat: "15%", label: "Trade-in Lift" }
        ],
        useCases: [
            { title: "The Midnight Truck Inquiry", scenario: "Someone asks 'Is the 2024 F-150 still available?' on your site at 11 PM while your BDC is asleep.", outcome: "AI confirms availability from your inventory feed, asks about their trade-in, and books them for a 9 AM test drive. The sales rep walks in to a hot lead on their calendar." },
            { title: "The Trade-In Hook", scenario: "A customer is browsing your site, looking at a new SUV but worried about their current car's value.", outcome: "AI pops up: 'Want to see what your current car is worth towards this SUV?' It collects the VIN, condition, and contact info, providing a real-time market estimate and handing the lead to Sales." }
        ],
        comparisonTable: [
            { category: "Lead Response", without: "Manual (Hours/Days)", withAI: "Instant (10 Seconds)" },
            { category: "Inventory Search", without: "Manual (Slow search)", withAI: "AI Instant Lookup" },
            { category: "Trade-in Value", without: "Manual (Slow/Vague)", withAI: "Digital AI (Instant Est)" },
            { category: "Appointment Booking", without: "Phone tag", withAI: "Direct Calendar Sync" }
        ],
        processSteps: [
            { step: 1, title: "BDC Audit", description: "Mapping your current lead-to-test-drive drop-off points." },
            { step: 2, title: "Velocity Node Launch", description: "Deploying your 24/7 digital sales assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for dealership inventory and lead conversion.",
                examples: [
                    { title: "The 24/7 Inventory Concierge", detail: "AI that handles all inbound social and web leads for specific vehicles, qualifying trade-ins and booking test drives.", roi: "Increases test-drive volume by 40%." },
                    { title: "Service-Drive AI Upsell", detail: "AI that follows up with service customers to offer trade-in valuations and upgrade deals while their car is in the shop.", roi: "Typical 15% increase in trade-in acquisitions." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered dealership operations.",
                areas: [
                    { area: "Sales & BDC", detail: "AI that manages the entire lead-to-test-drive funnel across all channels (Autotrader, Facebook, Web).", impact: "Zero lead leakage." },
                    { area: "Service Planning", detail: "AI that handles service scheduling and loaner-car management without human input.", impact: "Higher service advisor efficiency." }
                ]
            },
            custom: {
                title: "The Dealership OS",
                description: "Complete AI infrastructure for dealership groups and campuses.",
                features: [
                    "Real-time inventory sync with AI lead routing",
                    "Integrated multi-channel trade-in valuation bot",
                    "Automated social commerce and lead capture engine",
                    "Predictive lead-to-close analytics and BDC performance dashboards"
                ]
            }
        },
        faq: [
            { q: "Does the AI work with my DMS?", a: "Yes. We build connectors for major DMS platforms (Reynolds & Reynolds, CDK, Dealertrack) to see real-time inventory and customer data." },
            { q: "Can it value a trade-in?", a: "It can ask the core VIN/mileage details and provide a 'soft' estimate based on current market data, pending a physical inspection." },
            { q: "How does it handle financing questions?", a: "The AI can provide general financing information, link to your secure credit application, and collect basic pre-qualification data for your F&I team." },
            { q: "Does it work with third-party leads like Zillow or Autotrader?", a: "Absolutely. We can ingest leads from any source and have the AI initiate the conversation via text or email instantly." },
            { q: "Can it schedule service appointments?", a: "Yes. It integrates with your service calendar to book oil changes, inspections, and repairs 24/7." },
            { q: "What happens if a customer wants to talk to a human?", a: "The AI can seamlessly hand off the conversation to a live agent in your BDC or Sales department when it detects high intent or a specific request for human help." },
            { q: "How does it know my current inventory?", a: "We sync with your inventory feed (Homenet, vAuto, etc.) every 15-30 minutes so the AI always knows what's on the lot." },
            { q: "Can it handle multi-location groups?", a: "Yes. The AI can route leads to the correct rooftop based on the specific vehicle inquired about or the customer's proximity." },
            { q: "What about multi-lingual support?", a: "Our AI can communicate in over 50 languages, allowing you to serve a much broader customer base without extra staff." },
            { q: "How long is the setup process?", a: "Most dealerships are live within 14 days. We start with lead response and inventory search, then layer in trade-in valuations and service booking." },
            { q: "What ROI should we expect?", a: "Most stores see an immediate 20-40% lift in test-drive appointments and a significant reduction in BDC 'grunt work' hours." }
        ],
        layers: [
            { department: "Sales Operations", roles: ["BDC Concierge", "Trade-in Bot", "Inventory Agent"], tasks: ["Qualify inbound leads", "Book test drives", "Initial trade valuations", "Inventory status updates"] },
            { department: "Service & Fixed Ops", roles: ["Service Scheduler", "Recall Coordinator", "Maintenance Bot"], tasks: ["Book service appointments", "Check recall status", "Send maintenance reminders", "Process loaner requests"] },
            { department: "Admin & Floor", roles: ["F&I Assistant", "Reception Bot", "Inventory Auditor"], tasks: ["Collect pre-qual data", "Answer basic showroom FAQs", "Verify lot counts", "Automate flyer generation"] }
        ]
    },
    {
        slug: "auto-repair-shops",
        name: "Auto Repair",
        hook: "Your Technicians Are Under the Hood. Your Phones Should be Running the Front.",
        problem: "A customer's car breaks down and they call 3 shops. If you don't answer, they call the next one. Your service advisors are too busy explaining 'why a timing belt is $800' to answer the new booking call.",
        operatorProblem: "Auto repair is a convenience and trust game. Most shops lose 20% of their volume to missed calls. We install the AI that answers every call, explains the repair process, and books the drop-off in seconds.",
        result: "Repair shops increase bay utilization by 25% and reduce service advisor stress by 80%.",
        dreamVision: "Imagine a shop where every morning you walk in to a perfectly balanced schedule of diagnostics and repairs, all booked by AI while your techs were sleeping.",
        industryStats: [
            { stat: "25%", label: "Higher Bay Utilization" },
            { stat: "80%", label: "Missed Call Capture" },
            { stat: "Zero", label: "Forgotten Follow-ups" },
            { stat: "30%", label: "Retention Lift" }
        ],
        useCases: [
            { title: "The Sunday Breakdown", scenario: "Someone's alternator dies on a Sunday afternoon while your shop is closed and they're searching for who can take them tomorrow.", outcome: "AI answers the call, explains your diagnostic process, and books them for a Monday 8 AM drop-off with a secure code for your key-drop box. Your advisor walks in to a full morning schedule already confirmed." },
            { title: "The Maintenance Reminder", scenario: "An existing customer is due for an oil change and brake inspection based on their last visit 6 months ago.", outcome: "AI sends a personalized text: 'Hi Sarah! Based on your last visit, your Camry is due for its 60k service. I have an opening this Thursday at 10 AM. Want me to grab it for you?' Sarah replies 'Yes', and the bay is filled." }
        ],
        comparisonTable: [
            { category: "Booking Speed", without: "Manual (Phone Tag)", withAI: "Instant (Digital/Voice)" },
            { category: "After-Hours Intake", without: "Voicemail (Leads Lost)", withAI: "24/7 AI Reception" },
            { category: "Service Education", without: "Advisor (Manual Talk)", withAI: "AI Assistant (Instant Edu)" },
            { category: "Repeat Business", without: "Manual paper records", withAI: "Automated Retention Drips" }
        ],
        processSteps: [
            { step: 1, title: "Efficiency Audit", description: "Mapping your current bay-gap and missed-call windows." },
            { step: 2, title: "Drive Node Launch", description: "Deploying your 24/7 service advisor assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for auto repair shop growth.",
                examples: [
                    { title: "The 24/7 Service Concierge", detail: "AI that handles all inbound calls and texts to book diagnostics and repairs, explaining pricing and timelines instantly.", roi: "Increases bookings by 25%." },
                    { title: "Maintenance Retention Bot", detail: "AI that follows up with past customers for oil changes and routine service based on their car's history.", roi: "Typical 30% increase in repeat business." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered repair shop operations.",
                areas: [
                    { area: "Service Desk", detail: "AI that manages the entire intake and customer update flow, including digital inspections and approvals.", impact: "Zero communication friction." },
                    { area: "Parts Intelligence", detail: "AI that predicts when common parts will be low based on scheduled repairs, reducing bay-down time.", impact: "15% lower parts waste." }
                ]
            },
            custom: {
                title: "The RepairOS",
                description: "Complete AI infrastructure for multi-bay repair centers.",
                features: [
                    "24/7 instant lead response and booking",
                    "Integrated diagnostic and price estimator educator",
                    "Automated session-reminder and retention sequences",
                    "Digital key-drop and secure payment portal"
                ]
            }
        },
        faq: [
            { q: "Can it handle complex diagnostic questions?", a: "It can explain common symptoms (e.g., 'squealing brakes') and the typical diagnostic process, then books them for a physical inspection." },
            { q: "Does it work with my shop management software?", a: "Yes. We integrate with major shop tools (Mitchell 1, Shop-Ware, Tekmetric) to sync schedules and repair orders." },
            { q: "How does it handle pricing for repairs?", a: "The AI can provide ranges based on your standard labor rates and common part costs, but always frames them as estimates pending a technician's inspection." },
            { q: "What happens after-hours?", a: "The AI acts as your virtual front desk, answering calls/texts 24/7, qualifying the issue, and booking the drop-off time so you don't lose leads to competitors." },
            { q: "Can it send digital inspections to customers?", a: "Yes. Once your tech uploads the inspection, the AI can text the link to the customer and even answer basic 'What does this mean?' questions about the findings." },
            { q: "Does it handle parts ordering?", a: "While it doesn't place orders directly, it can alert your parts manager when specific components are needed for upcoming booked repairs." },
            { q: "Can it coordinate loaner cars or shuttles?", a: "Yes. If a repair requires more than 4 hours, the AI can offer a loaner or coordinate a shuttle/Uber for the customer automatically." },
            { q: "How does it improve customer trust?", a: "By providing instant, transparent communication and educational content about the repairs, customers feel more informed and less 'sold' to." },
            { q: "Does it help with Google reviews?", a: "Absolutely. The AI automatically requests a review via text immediately after the vehicle is picked up and the invoice is paid." },
            { q: "What's the ROI for a small shop?", a: "Most 3-5 bay shops see an ROI within the first 30 days simply by capturing the after-hours and lunchtime calls they were previously missing." },
            { q: "How quickly can we be live?", a: "We can have a shop-specific AI agent live on your phones and website in less than 10 business days." }
        ],
        layers: [
            { department: "Front Office", roles: ["Digital Service Advisor", "Retention Specialist", "Review Bot"], tasks: ["Intake new bookings", "Send service reminders", "Manage Google reviews", "Handle after-hours calls"] },
            { department: "Shop Operations", roles: ["Bay Architect", "Parts Liaison", "Inspection Agent"], tasks: ["Optimize bay scheduling", "Flag parts needs for upcoming jobs", "Communicate inspection results", "Update project ETAs"] },
            { department: "Admin & Growth", roles: ["Billing Assistant", "Local SEO Bot", "Fleet Outreach"], tasks: ["Process digital payments", "Optimize local search ranking", "Triage fleet account inquiries", "Audit parts vs labor margins"] }
        ]
    },
    {
        slug: "auto-detailing",
        name: "Auto Detailing",
        hook: "A Clean Response Time leads to a Clean Car.",
        problem: "You and your crew are often focused on the work and can't answer the phone. If a customer wants a $300 detail and you don't answer their text in 5 minutes, they've already moved to the next detailer on Instagram.",
        operatorProblem: "Detailing is an impulse and visual business. Most detailers lose 30% of their revenue to slow response. We install the AI that represents your brand, gathers photos, and books the mobile or shop-visit instantly.",
        result: "Detailers increase booking volume by 35% and reduce scheduling stress to zero.",
        dreamVision: "Imagine a detailing business where every morning your schedule is perfectly packed, your deposits are paid, and your only job is the artistry of the clean.",
        industryStats: [
            { stat: "35%", label: "Higher Booking Volume" },
            { stat: "100%", label: "Web Lead Capture" },
            { stat: "Instant", label: "Booking Speed" },
            { stat: "20%", label: "Upsell Revenue Lift" }
        ],
        useCases: [
            { title: "The Instagram DM", scenario: "An influencer tags your detailing work at 9 PM. You're at home, and you get 30 DMs in an hour asking 'How much for a ceramic coating?'.", outcome: "AI answers every DM instantly, delivers your package price-list, asks for their vehicle type, and books 10 details with deposits paid before you even check your phone." },
            { title: "The Mobile Service Check", scenario: "A lead on your website wants a full interior detail but isn't sure if you travel to their specific office complex.", outcome: "AI asks for their zip code or address, verifies they are within your 20-mile service radius, and offers them a slot specifically when your truck is already scheduled to be in that area next Tuesday." }
        ],
        comparisonTable: [
            { category: "Response Speed", without: "Manual (Hours/Missed)", withAI: "Instant (10 Seconds)" },
            { category: "Booking Effort", without: "Manual Phonetag", withAI: "Autonomous (Digital)" },
            { category: "Photo Collection", without: "Requested manually later", withAI: "Auto-collected during intake" },
            { category: "Upsell Flow", without: "Inconsistent/Forgotten", withAI: "Automated at checkout" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Mapping your Instagram and web lead drop-off points." },
            { step: 2, title: "Detail Node Launch", description: "Deploying your 24/7 digital shop manager." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for detailing business growth.",
                examples: [
                    { title: "The 24/7 Detail Concierge", detail: "AI that handles all inquiries, pricing questions, and reschedules via text or web instantly.", roi: "Increases bookings by 35%." },
                    { title: "Review Multiplier for Detailers", detail: "AI that follows up post-service to gather Google reviews and before/after photos.", roi: "Dominates local search maps." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered detailing operations.",
                areas: [
                    { area: "Client Management", detail: "AI that manages your client history, ceramic coating warranty dates, and maintenance reminders.", impact: "High lifetime value and trust." },
                    { area: "Marketing & Growth", detail: "AI that manages seasonal specials and drives referrals from happy clients.", impact: "Predictable monthly cash flow." }
                ]
            },
            custom: {
                title: "The DetailOS",
                description: "Complete AI infrastructure for multi-tech detailing shops.",
                features: [
                    "24/7 instant lead response and booking",
                    "Integrated package-specific education and upsell",
                    "Automated session-reminder and retention sequences",
                    "Monthly recurring maintenance membership manager"
                ]
            }
        },
        faq: [
            { q: "Can it handle mobile detailing?", a: "Yes. It can ask for the location/address and verify if they are in your service zone before booking." },
            { q: "How does it handle ceramic coating questions?", a: "It provides high-quality education on the benefits and maintenance of ceramic coatings to help you close high-ticket packages." },
            { q: "Can it collect deposits?", a: "Yes. The AI can provide a secure link for deposits or full payments to secure the booking, reducing no-shows to near zero." },
            { q: "Does it work with Instagram and Facebook DMs?", a: "Absolutely. We integrate directly with your social media profiles so the AI can handle inquiries where your customers spend their time." },
            { q: "Can a customer reschedule through the AI?", a: "Yes. They can text your business line at any time to move their appointment based on your real-time availability rules." },
            { q: "How does it handle before and after photos?", a: "The AI can request before-photos during the booking process and follow up for after-photos, which it then uses for your social media and review requests." },
            { q: "Does it manage maintenance memberships?", a: "Yes. It can track recurring detail dates, process monthly payments, and remind members a day before their scheduled service." },
            { q: "Can it handle fleet or dealership accounts?", a: "The AI can qualify fleet inquiries and route them to you for a custom quote, while handling all individual retail bookings automatically." },
            { q: "What happens if there's bad weather for a mobile detail?", a: "You can trigger a weather-alert through the AI that automatically notifies affected customers and offers them immediate reschedule links." },
            { q: "Is there a limit to how many leads it can handle?", a: "No. Whether you get 5 leads or 500 leads in an hour, the AI handles every single one with the same 10-second response time." },
            { q: "How long does it take to train the AI on my pricing?", a: "We ingest your current service menu and pricing during the first 3 days of setup. You can update it at any time through your dashboard." }
        ],
        layers: [
            { department: "Studio Admin", roles: ["Glamour Concierge", "Review Bot", "Deposit Manager"], tasks: ["Book details", "Manage 5-star reviews", "Verify deposits", "Update social queues"] },
            { department: "Field & Mobile Ops", roles: ["Route Architect", "Location Scout", "Weather Analyst"], tasks: ["Optimize mobile routes", "Verify service zones", "Handle weather reschedules", "Trigger arrival notifications"] },
            { department: "Growth & Retention", roles: ["Membership Lead", "Upsell Agent", "Referral Bot"], tasks: ["Manage monthly members", "Execute ceramic coating upsells", "Automate referral credits", "Audit monthly revenue targets"] }
        ]
    }
];
