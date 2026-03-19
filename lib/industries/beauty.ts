import { IndustryContent } from '../industry-data';

export const beautyIndustries: IndustryContent[] = [
    {
        slug: "med-spas",
        name: "Med Spas",
        hook: "Your Clinic is Full, but Your Staff is Burned Out.",
        problem: "You are spending too much on ads but 40% of leads never book because your front desk doesn't answer after hours. Your staff spends 20 hours a week answering 'how much is 1 unit of Botox?' and 'is it painful?'",
        operatorProblem: "Aesthetic medicine is a retail-speed business with a medical-grade intake. Most clinics lose 30-50% of their ad spend to lead decay. We install the AI that captures the lead, answers their 100 questions, and books the consult in 60 seconds.",
        result: "Med Spas increase booking rates by 40% and reclaim 15+ hours of front-desk time for retail sales and patient experience.",
        dreamVision: "Imagine a clinic where your staff only greets patients and upsells treatments, while your 24/7 AI handles the 500 DMs about lip filler and laser hair removal.",
        industryStats: [
            { stat: "40%", label: "Higher Booking Rate" },
            { stat: "15hr/wk", label: "Admin Reclaimed" },
            { stat: "Zero", label: "Missed Social DMs" },
            { stat: "25%", label: "Fill-rate Boost" }
        ],
        useCases: [
            { title: "The Midnight Botox Inquiry", scenario: "An influencer tags your clinic and you get 50 DMs about Botox pricing at 11 PM while your front desk is home.", outcome: "AI answers every DM, provides current pricing, shares a results gallery, and books 15 consults before you wake up. Your coordinator walks in to a full day of high-value appointments." },
            { title: "The Last-Minute Rescue", scenario: "A high-ticket laser patient cancels their $2,000 package session at 2 PM for tomorrow morning.", outcome: "AI instantly identifies the gap, texts the top 10 people on your 'Botox & Filler' waitlist, and fills the slot with a new patient within 15 minutes. Zero revenue lost." }
        ],
        comparisonTable: [
            { category: "Lead Intake", without: "Manual (Phone/Email Tag)", withAI: "Instant (SMS/Web/DM)" },
            { category: "Treatment Education", without: "Static Site/Voicemail", withAI: "Interactive AI Educator" },
            { category: "Re-engagement", without: "Manual (Rare/Slow)", withAI: "Persistent (Auto-Nurture)" },
            { category: "Cancellation Fill", without: "Manual Calling (Slow)", withAI: "Autonomous Waitlist Bot" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Mapping your Instagram and web lead drop-off points." },
            { step: 2, title: "Aesthetic Node Launch", description: "Deploying your 24/7 patient educator and setter." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for med spa growth and efficiency.",
                examples: [
                    { title: "The 24/7 Aesthetic Concierge", detail: "AI that answers every call, text, and Instagram DM to book consultations for Filler, Botox, and Lasers.", roi: "Captures 40% more leads." },
                    { title: "No-Show & Waitlist AI", detail: "AI that fills last-minute cancellations by instantly texting the next 5 people on your waitlist.", roi: "Adds $5k-15k/mo in billable time." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered aesthetic clinic operations.",
                areas: [
                    { area: "Patient Experience", detail: "AI that manages pre-appointment intake and post-procedure check-ins for complex treatments like Microneedling.", impact: "High patient LTV and reviews." },
                    { area: "Sales & Marketing", detail: "AI that handles all inbound social commerce and re-engages dormant patients during slow months.", impact: "Consistent monthly revenue." }
                ]
            },
            custom: {
                title: "The Med Spa OS",
                description: "Complete AI infrastructure for modern aesthetic practices.",
                features: [
                    "24/7 Multi-channel social and web lead capture",
                    "Integrated patient educator for all aesthetic services",
                    "Automated cancellation-filler and waitlist bot",
                    "Direct integration to Boulevard, MindBody, and Zenoti"
                ]
            }
        },
        faq: [
            { q: "Is the AI secure for HIPAA?", a: "Yes. Our medical nodes are enterprise-grade and secure, protecting all patient PII and following strict compliance protocols." },
            { q: "Can it handle Boulevard or MindBody?", a: "Yes. We integrate directly into major aesthetic PMS systems like Boulevard, Zenoti, and MindBody to book and sync in real-time." },
            { q: "How does it handle pricing questions?", a: "The AI can provide your current menu pricing or starting ranges for complex treatments, always qualification-first to ensure leads know the value." },
            { q: "Does it work with Instagram and Facebook DMs?", a: "Absolutely. We connect directly to your social profiles so the AI can handle inquiries, share before/after galleries, and book consults instantly." },
            { q: "Can it educate patients on treatment pre-care?", a: "Yes. It sends specific pre-care instructions (e.g., 'avoid blood thinners before Botox') automatically once a booking is confirmed." },
            { q: "What happens after a treatment like Microneedling?", a: "The AI triggers a 'Next Day' check-in to ask about their skin response, provide post-care tips, and flag any concerns to your medical director." },
            { q: "Can it sell membership programs?", a: "Yes. If a lead asks about long-term maintenance, the AI can explain your membership tiers and benefits to sign them up for recurring revenue." },
            { q: "How does it handle multi-location clinics?", a: "The AI can route inquiries and bookings to the correct location based on the patient's preference or the treatments offered at each site." },
            { q: "Can it speak multiple languages?", a: "Our AI is multi-lingual, allowing you to serve diverse patient populations in their preferred language without needing bilingual staff." },
            { q: "What's the typical ROI for a Med Spa?", a: "Most clinics see an ROI within 14 days by capturing after-hours leads and filling just 2-3 extra major consultations per month." },
            { q: "How much training do we need for our staff?", a: "Very little. Your staff simply sees new bookings and qualified leads on the calendar. We handle the technical setup and optimization." }
        ],
        layers: [
            { department: "Patient Coordination", roles: ["Front Desk AI", "Intake Assistant", "Waitlist Manager"], tasks: ["Answer inquiries 24/7", "Book consults & procedures", "Qualify treatment candidates", "Fill last-minute gaps"] },
            { department: "Clinical Ops & Care", roles: ["Pre-Care Bot", "Recovery Agent", "Procedure Educator"], tasks: ["Send pre-treatment instructions", "Post-treatment check-ins", "Answer medical FAQs", "Flag adverse reactions"] },
            { department: "Growth & Retention", roles: ["Membership Scout", "Review Collector", "Social Lead Setter"], tasks: ["Pitch loyalty programs", "Gather 5-star reviews", "Manage Instagram DMs", "Re-engage dormant patients"] }
        ]
    },
    {
        slug: "teeth-whitening-services",
        name: "Teeth Whitening",
        hook: "A Bright Smile Inquiry Deserves a Bright Response Speed.",
        problem: "You spend all day focused on patient treatments. When someone calls about a whitening special provided by your clinic, you don't answer the phone. They move on to the next dentist who answers within seconds.",
        operatorProblem: "Whitening is the 'entryway' service to high-ticket dentistry. If you can't book the $500 whitening, you'll never book the $20k veneer. We install the AI that captures every whitening lead and upsells them into a lifetime patient.",
        result: "Whitening services see a 50% increase in bookings and 20% higher conversion to long-term care.",
        dreamVision: "Imagine a practice where every whitening prospect is handled with speed, their first visit is booked, and they are nurtured for a lifetime of care.",
        industryStats: [
            { stat: "50%", label: "Higher Treatment Starts" },
            { stat: "20%", label: "Case-Acceptance Lift" },
            { stat: "Zero", label: "Missed Smile Leads" },
            { stat: "35%", label: "Referral Growth" }
        ],
        useCases: [
            { title: "The Billboard Inquiry", scenario: "Someone sees your whitening billboard at 8 AM and texts your number asking for the price.", outcome: "AI answers instantly, qualifies them for sensitivity, explains the 'Enlighten' process vs. basic strips, and books their 45-min treatment for next Tuesday." },
            { title: "The Veneer Bridge", scenario: "A whitening patient asks the AI if they can get their front gap closed during their whitening visit.", outcome: "AI identifies the high-ticket opportunity, explains the difference between whitening and composite bonding/veneers, and books a 15-min aesthetic consultation right before their whitening session. $500 lead becomes $5k." }
        ],
        comparisonTable: [
            { category: "Response Speed", without: "Manual (Hours/Days)", withAI: "Instant (10 Seconds)" },
            { category: "Patient Onboarding", without: "Paper forms at arrival", withAI: "Digital AI Pre-Intake" },
            { category: "High-Ticket Upsell", without: "Inconsistent/Awkward", withAI: "Educational & Automated" },
            { category: "Follow-up Care", without: "Manual (Often missed)", withAI: "Automated Sensitivity Check" }
        ],
        processSteps: [
            { step: 1, title: "Entry Audit", description: "Mapping your whitening-to-care conversion path." },
            { step: 2, title: "Smile Node Launch", description: "Deploying your 24/7 whitening concierge." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for teeth whitening lead capture.",
                examples: [
                    { title: "The 24/7 Whitening Concierge", detail: "AI that handles all inquiries about professional whitening and books them in seconds.", roi: "Increases treatment starts by 50%." },
                    { title: "Patient Upsell Educator", detail: "AI that follows up post-whitening to educate patients on routine care and long-term aesthetic goals.", roi: "Boosts long-term lifetime value per patient." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered whitening operations.",
                areas: [
                    { area: "Intake & Education", detail: "AI that manages the entire intake and pre-assessment for whitening candidates.", impact: "Zero chair-time waste." },
                    { area: "Marketing & Growth", detail: "AI that manages seasonal whitening specials and drives referrals from happy patients.", impact: "Predictable monthly cash flow." }
                ]
            },
            custom: {
                title: "The Whitening OS",
                description: "Complete AI infrastructure for whitening-heavy practices.",
                features: [
                    "24/7 instant lead response and booking",
                    "Integrated patient sensitivity pre-screening",
                    "Automated post-whitening care and upsell sequences",
                    "Multi-location booking and special-offer engine"
                ]
            }
        },
        faq: [
            { q: "Is whitening AI-conversational only?", a: "No. It can also educate the patient on whitening vs. bonding or veneers based on their specific aesthetic goals." },
            { q: "How long is the setup?", a: "Most whitening systems are live within 7-14 days. We connect to your current practice website and phone lines." },
            { q: "Can it handle gift card purchases?", a: "Yes. The AI can provide links to purchase digital gift cards for whitening treatments, perfect for wedding seasons and holidays." },
            { q: "What about patient sensitivity?", a: "The AI performs a basic sensitivity pre-screen and provides tips on using sensitivity toothpaste before the visit to ensure a comfortable experience." },
            { q: "Does it work with my current dental software?", a: "Yes. We integrate with major dental PMS like Dentrix, Open Dental, and Eaglesoft to manage your schedule." },
            { q: "How does it handle bulk or wedding-party bookings?", a: "The AI has a specialized flow for group bookings, allowing multiple slots to be secured at once for wedding parties or families." },
            { q: "Can it send post-whitening care instructions?", a: "Yes. Immediately after the treatment, it texts the 'White Diet' guide and care tips to ensure the results last." },
            { q: "Does it help grow my general practice?", a: "Absolutely. Whitening is the #1 gateway service. The AI identifies patients without a regular dentist and funnels them into your general hygiene schedule." },
            { q: "What happens if a patient has crowns or veneers?", a: "The AI is trained to explain that whitening only works on natural teeth and flags this for your clinician to discuss alternatives." },
            { q: "How does it handle cancellations?", a: "It uses our Waitlist AI logic to instantly offer the open slot to the next whitening inquirer, keeping your chair full." },
            { q: "Is the AI trained on my specific whitening systems (Zoom, GLO, etc.)?", a: "Yes. We customize the education based on the exact technology and results your practice delivers." }
        ],
        layers: [
            { department: "Patient Experience", roles: ["Smile Concierge", "Upsell Assistant", "Intake Specialist"], tasks: ["Book whitening slots", "Qualify for sensitivity", "Edu on veneers/bonding", "Manage paperless intake"] },
            { department: "Clinical Support", roles: ["Post-Care Agent", "Maintenance Bot", "Clinical Triage"], tasks: ["Send 'White Diet' guides", "Monitor sensitivity results", "Confirm pre-medication", "Flag high-risk cases"] },
            { department: "Growth Ops", roles: ["Referral Coordinator", "Gift Card Agent", "Hygiene Scout"], tasks: ["Automate referrals", "Process gift card leads", "Convert to general hygiene", "Manage holiday promos"] }
        ]
    },
    {
        slug: "laser-hair-removal-clinics",
        name: "Laser Hair Removal",
        hook: "Consistency is Key for Smooth Results. Consistency is Key for Your Lead Pipeline.",
        problem: "Patients have dozens of questions about machines, skin types, and session counts. If they call and get a voicemail, they'll call the next clinic with a 'buy one get one free' offer. Your front desk is too busy to nurture a lead over 10 sessions.",
        operatorProblem: "Laser hair removal depends on multi-session commitment. If a patient drops off after 3 sessions, you lose profit. We install the AI that manages the entire 12-month journey, ensuring every session is booked and paid for.",
        result: "Laser clinics see a 40% increase in lifetime value (LTV) through better session retention.",
        dreamVision: "Imagine a clinic where your staff only handles the laser, while your AI handles the 1,000 reminders and session bookings for every client.",
        industryStats: [
            { stat: "40%", label: "Higher Lifetime Value" },
            { stat: "95%", label: "Session Completion" },
            { stat: "Zero", label: "Missed Social Leads" },
            { stat: "25%", label: "Retention Boost" }
        ],
        useCases: [
            { title: "The Session Reminder", scenario: "A client forgets to book their 4th session 6 weeks out, which is the critical window for hair follicle cycles.", outcome: "AI follows up politely via text, asks about their skin response from session 3, and books their session automatically for next Thursday. The patient stays on track for smooth results." },
            { title: "The Late-Night Machine Query", scenario: "A potential client with a darker skin tone asks at 11 PM: 'Is your laser safe for my skin type?'.", outcome: "AI explains your specific Nd:YAG technology, the cooling mechanism, and the safety protocols for all Fitzpatrick skin types, then books an initial consultation." }
        ],
        comparisonTable: [
            { category: "Session Retention", without: "Manual (Inconsistent)", withAI: "Autonomous (Machine-led)" },
            { category: "Lead Nurture", without: "Manual (Hours/Days)", withAI: "Instant (SMS/Web)" },
            { category: "Skin Screening", without: "Manual at consult", withAI: "AI Pre-Screening" },
            { category: "Waitlist Filling", without: "Manual Calling", withAI: "Instant Text Filling" }
        ],
        processSteps: [
            { step: 1, title: "Success Audit", description: "Identifying where your multi-session patients are dropping off." },
            { step: 2, title: "Smooth Node Launch", description: "Deploying your 24/7 laser concierge." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for laser removal patient retention.",
                examples: [
                    { title: "The 24/7 Laser Concierge", detail: "AI that answers machine-specific questions and books initial consultations and sessions instantly.", roi: "Increases intake starts by 35%." },
                    { title: "Multi-session Retention AI", detail: "AI that monitors every patient's journey, ensuring they stay on schedule for their full treatment plan.", roi: "Boosts session-to-session retention by 25%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered laser clinic operations.",
                areas: [
                    { area: "Patient Experience", detail: "AI that manages pre-treatment intake (shaving instructions, etc.) and post-treatment care.", impact: "High patient comfort and trust." },
                    { area: "Sales & Packages", detail: "AI that explains the value of year-long packages vs single sessions, increasing upfront cash flow.", impact: "Higher average ticket value." }
                ]
            },
            custom: {
                title: "The SmoothOS",
                description: "Complete AI infrastructure for laser hair removal centers.",
                features: [
                    "24/7 instant lead response and booking",
                    "Integrated skin-type pre-screening and education",
                    "Automated session-reminder and retention sequences",
                    "Package-upsell and monthly recurring revenue engine"
                ]
            }
        },
        faq: [
            { q: "Can it explain different machine types (Alexandrite vs YAG)?", a: "Yes. It can provide high-quality education to help patients feel confident their skin type is safe and supported by your clinic's technology." },
            { q: "How does it handle no-shows?", a: "It identifies a gap in the schedule and instantly re-fills the slot using your waitlist AI, notifying the staff of the change." },
            { q: "Is the AI secure for my patient data?", a: "Yes. We use encrypted, non-training models to ensure all patient information and photos remain secure and private." },
            { q: "Does it work with my booking software?", a: "Yes. We integrate with major aesthetic platforms like Boulevard, MindBody, and Zenoti to sync schedules in real-time." },
            { q: "Can it handle package sales and financing?", a: "The AI can explain your current package deals and provide links to financing partners like CareCredit or Cherry to help patients commit to full treatment plans." },
            { q: "What happens if a patient has a reaction after treatment?", a: "The AI provides immediate first-step care advice ('apply cool compress') and flags the event to your medical team for follow-up if specific symptoms are reported." },
            { q: "Does it remind people to shave before their visit?", a: "Yes. It sends a 'Prep Day' text 24 hours before the appointment with specific shaving and sun-exposure reminders." },
            { q: "Can it help grow my Google reviews?", a: "Absolutely. The AI automatically requests a review via text 48 hours after a successful 3rd or 4th session, when satisfaction is highest." },
            { q: "How does it handle multi-location laser groups?", a: "The AI routes leads to the correct rooftop based on the specific lasers available at each site or the patient's proximity." },
            { q: "What languages does it support?", a: "It can converse in over 50 languages, which is huge for urban clinics serving diverse populations." },
            { q: "How long is the onboarding for our clinic?", a: "We typically have your 24/7 Laser Concierge live within 10-14 business days." }
        ],
        layers: [
            { department: "Patient Success", roles: ["Journey Concierge", "Package Advisor", "Retention Specialist"], tasks: ["Book sessions", "Retain for 10+ sessions", "Qualify machine-fit", "Nurture package leads"] },
            { department: "Clinical Safety", roles: ["Skin Pre-Screener", "Recovery Agent", "Care Educator"], tasks: ["Check skin-type safety", "Monitor post-treatment", "Send shaving reminders", "Flag contraindications"] },
            { department: "Revenue Growth", roles: ["Waitlist Filler", "Financing Agent", "Review Collector"], tasks: ["Fill schedule gaps", "Explain payment plans", "Gather patient testimonials", "Audit monthly retention rate"] }
        ]
    },
    {
        slug: "hair-restoration-clinics",
        name: "Hair Restoration",
        hook: "Discreet, Expert, and Instant. Your Patients Deserve Better Than a Recording.",
        problem: "Hair restoration leads are highly anxious and want privacy. They search for clinics at 11 PM. If your phone goes to voicemail, they leave. If your staff is 'too clinical,' they feel discouraged. They need a discreet educator and a fast booking experience.",
        operatorProblem: "Restoration cases are $10k-30k. Every lead is a massive opportunity. Most clinics lose 40% of their ad spend because they don't have a 24/7, empathetic intake. We install the AI that provides discreet education, qualifies the hair loss stage, and books the consult in seconds.",
        result: "Restoration clinics see a 40% increase in high-ticket starts and reduce consult no-shows by 30%.",
        dreamVision: "Imagine a practice where every midnight inquiry is met with a professional, discreet concierge who guides them through the process and books their life-changing procedure.",
        industryStats: [
            { stat: "40%", label: "Consult Starts" },
            { stat: "30%", label: "Less No-Shows" },
            { stat: "24/7", label: "Discreet Support" },
            { stat: "25%", label: "Case-Accept Lift" }
        ],
        useCases: [
            { title: "The Private Inquiry", scenario: "Someone wanting a high-ticket FUE transplant inquiries at midnight while feeling anxious about their hair loss.", outcome: "AI provides a warm, discreet education, identifies their hair loss stage via the Norwood scale, and books a 1-on-1 private consult for next Monday. The patient feels heard and supported immediately." },
            { title: "The Post-Op Companion", scenario: "A surgical patient is 3 days post-op and worried about some redness or graft protection.", outcome: "They text the AI at 9 PM. The AI provides standard post-surgical care advice, reassures them on normal healing signs, and flags the message for the surgeon to review in the morning." }
        ],
        comparisonTable: [
            { category: "Patient Education", without: "Manual (Rare/Slow)", withAI: "Instant (Discreet AI)" },
            { category: "Client Retention", without: "Manual Follow-up (None)", withAI: "Autonomous Nurture" },
            { category: "Intake Privacy", without: "Human (Can feel awkward)", withAI: "AI (Completely Discreet)" },
            { category: "Show-up Rate", without: "Standard Reminders", withAI: "Educational Value Sequence" }
        ],
        processSteps: [
            { step: 1, title: "Care Audit", description: "Mapping your current lead-to-consult friction points." },
            { step: 2, title: "Confidence Node Launch", description: "Deploying your 24/7 discreet restoration assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for hair restoration growth.",
                examples: [
                    { title: "The 24/7 Discreet Concierge", detail: "AI that provides high-empathy education on FUE/FUT and PRP, qualifying leads by hair loss stage.", roi: "Increases high-ticket consults by 40%." },
                    { title: "Patient Confidence Nurturer", detail: "AI that follows up with leads over 14-30 days with testimonials and financing options.", roi: "Increases case-acceptance by 25%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered restoration practice operations.",
                areas: [
                    { area: "Patient Intake & Vetting", detail: "AI that manages the entire intake journey, gathering photos and medical history discreetly.", impact: "Zero intake friction." },
                    { area: "Post-Op Experience", detail: "AI that provides daily post-op care tips and monitoring to ensure optimal graft survival.", impact: "Higher patient results and reviews." }
                ]
            },
            custom: {
                title: "The Confidence OS",
                description: "Complete AI infrastructure for hair restoration centers.",
                features: [
                    "24/7 discreet conversational intake",
                    "Integrated Norwood/Ludwig scale pre-screening",
                    "Automated high-ticket legacy nurture sequences",
                    "Integrated financing and surgical payment portal"
                ]
            }
        },
        faq: [
            { q: "Is it really discreet?", a: "Yes. All communications are private and handled on secure, enterprise-grade nodes. Your identity and data are fully protected." },
            { q: "Can it differentiate between FUE and FUT?", a: "Yes. It explains both procedures, their recovery times, and their specific benefits in detail to help patients choose the right path." },
            { q: "Does the AI diagnose hair loss?", a: "No. It provides education and identifies patterns on the Norwood/Ludwig scales to help the surgeon prepare for the consultation, but it never offers a medical diagnosis." },
            { q: "How does it handle financing questions?", a: "The AI provides a direct link to your financing partners (CareCredit, PatientFi, etc.) and can explain common payment plan ranges for surgeries." },
            { q: "Can it gather photos for the surgeon?", a: "Yes. The AI can prompt the patient to upload photos of their frontal, crown, and donor areas securely within the chat for the surgeon to review before the consult." },
            { q: "Does it work after-hours?", a: "Absolutely. Most hair restoration research happens at night. The AI captures those 'midnight leads' and gets them into your schedule before they cool off." },
            { q: "How long is the setup process?", a: "A custom Restoration Concierge is usually live within 14 business days, including training on your specific methodology." },
            { q: "What about post-op check-ins?", a: "We build a multi-week post-op care sequence where the AI checks in daily to ensure the patient is following the washing and graft-protection protocols." },
            { q: "Can it handle multi-location clinics?", a: "Yes. The AI can route consults to the correct surgical center based on the patient's location and surgeon availability." },
            { q: "What is the ROI for a restoration clinic?", a: "Since cases are high-ticket ($10k+), capturing just one extra case per month that would have gone to a competitor pays for the entire system multiple times over." },
            { q: "Does it help with case acceptance?", a: "Yes. By nurturing the lead with education and testimonials over the 30 days following a consult, case acceptance rates typically jump by 20-30%." }
        ],
        layers: [
            { department: "Patient Growth", roles: ["Care Navigator", "Surgical Liaison", "High-Ticket Nurturer"], tasks: ["Educate on FUE/PRP", "Book high-ticket surgery", "Nurture consult leads", "Manage Norwood pre-screening"] },
            { department: "Clinical Ops", roles: ["Post-Op Care Bot", "History Agent", "Medical Vetting Bot"], tasks: ["Execute post-op protocols", "Gather medical history", "Monitor graft recovery", "Educate on results timelines"] },
            { department: "Finance & Admin", roles: ["Financing Specialist", "Surgery Scheduler", "Review Collector"], tasks: ["Coordinate payment plans", "Optimize surgical suite calendar", "Gather high-intent reviews", "Audit lead-to-case margins"] }
        ]
    },
    {
        slug: "lash-brow-studios",
        name: "Lash & Brow Studios",
        hook: "Your Schedule is Your Income. Don't Let it Have Gaps.",
        problem: "You and your techs are the service providers. When you're lashing, you can't answer the phone or text. Every missed text is $150 losing to the studio down the street that answers faster.",
        operatorProblem: "High-volume studios live and die by a full book. You need a system that fills every gap, handles every reschedule, and manages your waitlist at 3 AM. We install the AI that represents your brand and keeps your studio booked 100%.",
        result: "Lash & Brow studios increase booking capacity by 35% and reduce no-shows to near-zero.",
        dreamVision: "Imagine a studio where every afternoon cancellation is automatically filled by the next client on the waitlist, without you ever touching your phone.",
        industryStats: [
            { stat: "35%", label: "Higher Capacity" },
            { stat: "98%", label: "Show-up Rate" },
            { stat: "Zero", label: "Missed Social DMs" },
            { stat: "40%", label: "Fill-rate Boost" }
        ],
        useCases: [
            { title: "The Last-Minute Opening", scenario: "Someone cancels their 2 PM classic lash fill at 11 AM while you are in the middle of a 2-hour mega-volume set.", outcome: "AI instantly identifies the gap, texts your top 5 waitlist clients, and confirms a new booking by 11:05 AM. You don't even have to put down your tweezers." },
            { title: "The Late-Night Inquiry", scenario: "A new lead DMs your Instagram at 10 PM asking 'How long does a lash lift take?' and 'Can I swim after?'.", outcome: "AI answers the aftercare question instantly, explains the 45-minute duration, and shares your next 3 available slots. The booking is confirmed before you wake up." }
        ],
        comparisonTable: [
            { category: "Slot Filling", without: "Manual (Phone Tag)", withAI: "Autonomous (Instant)" },
            { category: "Client Support", without: "Delayed (Hours)", withAI: "Instant (24/7)" },
            { category: "Waitlist Management", without: "Paper/Mental lists", withAI: "Digital AI Automation" },
            { category: "Aftercare Edu", without: "Inconsistent/Verbal", withAI: "Automated Text Guides" }
        ],
        processSteps: [
            { step: 1, title: "Booking Audit", description: "Mapping your current cancellation and no-show gaps." },
            { step: 2, title: "Glamour Node Launch", description: "Deploying your 24/7 digital studio manager." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for lash & brow studio efficiency.",
                examples: [
                    { title: "The 24/7 Booking Assistant", detail: "AI that handles all inquiries, aftercare questions, and reschedules via text/Instagram instantly.", roi: "Increases bookings by 35%." },
                    { title: "Waitlist Optimization Engine", detail: "AI that automatically texts waitlist clients when gaps open up in your schedule.", roi: "Adds $2k-5k/mo per tech in rescued revenue." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered beauty studio operations.",
                areas: [
                    { area: "Client Experience", detail: "AI that manages pre-appointment intake (patch tests, etc.) and post-appointment aftercare reminders.", impact: "Higher lash retention and reviews." },
                    { area: "Growth & Membership", detail: "AI that promotes and manages your monthly lash membership, increasing upfront predictable cash flow.", impact: "Predictable monthly income." }
                ]
            },
            custom: {
                title: "The StudioOS",
                description: "Complete AI infrastructure for high-volume beauty studios.",
                features: [
                    "24/7 instant lead response and booking",
                    "Integrated patch-test education and intake",
                    "Automated session-reminder and retention sequences",
                    "Membership-upsell and monthly recurring revenue engine"
                ]
            }
        },
        faq: [
            { q: "Can it handle Boulevard or Vagaro?", a: "Yes. We integrate with major salon booking platforms like Boulevard, Vagaro, and Acuity to manage your book in real-time." },
            { q: "How does it handle aftercare questions?", a: "It provides instant, brand-aligned answers for common questions like 'can I get them wet?' and 'how do I clean them?' 24/7." },
            { q: "Can it verify patch tests?", a: "Yes. For new clients booking services like brow lamination or lash tints, the AI explains the patch-test requirement and can even schedule a 5-minute drop-in for it." },
            { q: "Does it work with my Instagram DMs?", a: "Absolutely. We connect directly to your Instagram so the AI can handle inquiries, share your portfolio, and book appointments right from the DM." },
            { q: "How does it handle reschedules?", a: "The AI allows clients to reschedule through a secure link or via text, applying your specific cancellation policy rules (e.g., 'must be 24 hours in advance') automatically." },
            { q: "Can it sell individual aftercare products?", a: "Yes. After a service, the AI can text the client a link to your online shop for lash cleansers or brow gels, increasing your retail revenue." },
            { q: "How does it manage multi-technician studios?", a: "The AI can check availability across all your artists, or allow a client to request their 'usual' tech specifically." },
            { q: "What happens if a client has an allergic reaction?", a: "The AI provides immediate first-step advice and flags the situation to the studio owner instantly via an urgent notification." },
            { q: "Can it automate brow mapping education?", a: "Yes. If a client is curious about brow shaping, the AI can explain your mapping process and show examples of different styles." },
            { q: "How much time does it save the studio owner?", a: "Most studio owners reclaim 10-15 hours a week previously spent on text-back-and-forth and manual waitlist calling." },
            { q: "How quickly can we be live?", a: "We can typically have your Studio Concierge live and connected to your booking system within 10 business days." }
        ],
        layers: [
            { department: "Studio Operations", roles: ["Glamour Concierge", "Schedule Filler", "Cancellation Guard"], tasks: ["Book fills & full sets", "Manage waitlist 24/7", "Enforce cancel policies", "Handle after-hours inquiries"] },
            { department: "Client Success", roles: ["Aftercare Agent", "Patch Test Coordinator", "Review Bot"], tasks: ["Send care instructions", "Verify patch test status", "Gather 5-star reviews", "Answer product FAQs"] },
            { department: "Growth & Retail", roles: ["Membership Lead", "Retail Scout", "Referral Bot"], tasks: ["Manage lash memberships", "Pitch aftercare products", "Automate referral credits", "Audit monthly tech utilization"] }
        ]
    },
    {
        slug: "nail-salons",
        name: "Nail Salons",
        hook: "Your Technicians Are at the Table. Your Phone shouldn't be at a Desk.",
        problem: "Your salon is loud, busy, and focused on artistry. When the phone rings, it's often ignored. You lose potentially 10-20 appointments a day because customers want an instant answer and move to the 'book now' option on Google.",
        operatorProblem: "Nail salons are a convenience-driven impulse business. If they can't book in 30 seconds via text or web, you've lost them. We install the AI that represents your brand, answers common price questions, and books the set in seconds.",
        result: "Nail salons increase booking volume by 30% and reduce staff distraction by 80%.",
        dreamVision: "Imagine a salon where 100% of appointments are handled by AI, and your techs can focus entirely on beautiful sets and high-quality service.",
        industryStats: [
            { stat: "30%", label: "Higher Booking Volume" },
            { stat: "80%", label: "Less Front-desk Noise" },
            { stat: "Instant", label: "Booking Speed" },
            { stat: "20%", label: "Upsell Conversion" }
        ],
        useCases: [
            { title: "The Pedicure Group", scenario: "Someone wanting colors and 3 pedicures at 6 PM for Saturday texts your salon while it's packed with walk-ins.", outcome: "AI checks for back-to-back availability across your techs, confirms the group count, explains your group-booking policy, and secures the slot in 60 seconds. Your staff never has to leave their tables." },
            { title: "The Art Inquiry", scenario: "A client sends a complex nail art photo and asks 'Can you do this and how much?' at 9 PM.", outcome: "AI identifies the style (e.g., '3D Gel French'), provides a pricing range based on your tier, and asks the client to book a 'Level 3 Art' slot. It saves the artist from 10 minutes of manual quoting." }
        ],
        comparisonTable: [
            { category: "Booking Speed", without: "Human (Slow/Lagged)", withAI: "Instant (Digital)" },
            { category: "Staff Focus", without: "Constant interruptions", withAI: "Deep artistic focus" },
            { category: "Group Bookings", without: "Manual (Phone Tag)", withAI: "Autonomous Logic" },
            { category: "Art Quoting", without: "Manual/Inconsistent", withAI: "Automated by Service Tier" }
        ],
        processSteps: [
            { step: 1, title: "Traffic Audit", description: "Mapping your most frequent missed-call windows." },
            { step: 2, title: "Artistry Node Launch", description: "Deploying your 24/7 salon concierge." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for nail salon booking and intake.",
                examples: [
                    { title: "The 24/7 Nail Concierge", detail: "AI that handles all appointment requests, pricing questions, and reschedules via text or web instantly.", roi: "Increases bookings by 30%." },
                    { title: "Review Multiplier for Salons", detail: "AI that follows up post-service to gather Google reviews and photos for social media.", roi: "Dominates local SEO maps." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered nail salon operations.",
                areas: [
                    { area: "Client Management", detail: "AI that manages your client history, favorite colors, and seasonal recommendations.", impact: "Personalized feel at scale." },
                    { area: "Inventory Intelligence", detail: "AI that predicts when your most popular colors and supplies are low based on booking data.", impact: "Zero stockouts on top shades." }
                ]
            },
            custom: {
                title: "The ArtistryOS",
                description: "Complete AI infrastructure for multi-station nail salons.",
                features: [
                    "24/7 instant lead response and booking",
                    "Integrated technician-specific calendar management",
                    "Automated group-booking and special-event logic",
                    "Monthly membership and recurring-fill manager"
                ]
            }
        },
        faq: [
            { q: "Can it handle custom nail art requests?", a: "Yes. It can ask the client to upload a photo and quote estimated pricing/time for the artist to review based on your service tiers." },
            { q: "Does it work for both gel and polish?", a: "Yes. It differentiates service types (Gel-X, Apres, Structured Mani, etc.) and assigns the correct duration and technician." },
            { q: "How does it handle walk-ins?", a: "The AI can be displayed on a table-top QR code, allowing walk-ins to see current wait times and join a digital queue without a host." },
            { q: "Can a client request a specific technician?", a: "Absolutely. The AI checks that specific tech's calendar and offers their exact openings to the client." },
            { q: "Does it support group bookings?", a: "Yes. It has specialized logic to handle group requests for bridal parties or birthdays, checking for multiple technician availability." },
            { q: "Does it work with my current POS like Clover or Square?", a: "We integrate with major salon platforms like Mangomint, Vagaro, and Square Appointments." },
            { q: "How does it handle no-shows?", a: "The AI can collect deposits for high-value sets or first-time clients to ensure your techs' time is protected." },
            { q: "Can it sell gift cards?", a: "Yes. The AI provides links to purchase digital gift cards instantly via text or web 24/7." },
            { q: "Does it send aftercare tips for Gel-X or acrylics?", a: "Yes. It sends a 'Maintenance Guide' 24 hours after the set to help the client keep their nails healthy and long-lasting." },
            { q: "How long is the setup process?", a: "Most salons are live with their AI Concierge in less than 7 days." },
            { q: "What's the ROI for a 10-station salon?", a: "By reclaiming 100% of missed calls and filling just 5 extra sets a week, the system pays for itself in the first month." }
        ],
        layers: [
            { department: "Salon Support", roles: ["Front-of-House AI", "Review Bot", "Queue Manager"], tasks: ["Book mani-pedis", "Manage 5-star reviews", "Manage walk-in digital queue", "Handle after-hours inquiries"] },
            { department: "Artistry Ops", roles: ["Art Quoting Agent", "Tech Liaison", "Inventory Bot"], tasks: ["Quote complex art", "Coordinate tech schedules", "Predict supply needs", "Gather portfolio photos"] },
            { department: "Studio Growth", roles: ["Membership Agent", "Gift Card Lead", "Referral Scout"], tasks: ["Manage recurring fills", "Process holiday gift cards", "Automate referral credits", "Audit monthly tech utilization"] }
        ]
    },
    {
        slug: "tattoo-studios",
        name: "Tattoo Studios",
        hook: "Your Artists Are for Art. Your AI is for the Business.",
        problem: "Elite tattooers spend hours a day answering 'how much for this piece?' and 'do you have time Tuesday?'. This is unpaid admin work that kills their creativity and billable time. Most inquiries go cold because they aren't answered in the moment of excitement.",
        operatorProblem: "Tattooing is a custom-service business with a high-friction intake. Most artists lose 30% of their income to admin and 'no-show' clients. We install the AI that gathers the references, qualifies the budget, and secures the deposit instantly.",
        result: "Tattoo studios increase billable days by 25% and reduce no-shows to near-zero via automated deposits.",
        dreamVision: "Imagine a studio where every artist wakes up to a calendar full of pre-vetted projects with reference photos and deposits already secured by their digital assistant.",
        industryStats: [
            { stat: "25%", label: "Higher Billable Time" },
            { stat: "Zero", label: "No-Shows" },
            { stat: "2h/day", label: "Artist Admin Saved" },
            { stat: "40%", label: "Deposit-capture Rate" }
        ],
        useCases: [
            { title: "The Midnight Impulse", scenario: "Someone wanting a small linework piece inquiries at midnight while Browsing Instagram.", outcome: "AI gathers the reference photo, explains your shop minimum, and books them for the next available walk-in slot with a $50 deposit paid on the spot. Your shop starts the day with revenue already in the bank." },
            { title: "The Sleeve Consultation", scenario: "A high-ticket client wants a full botanical sleeve and asks about your artist's hourly rate and process.", outcome: "AI explains the consultation process, gathers reference images for the artist to review, and books a 20-minute design consultation. It turns a complex inquiry into a scheduled win in 3 minutes." }
        ],
        comparisonTable: [
            { category: "Booking Flow", without: "Endless DM Back-and-forth", withAI: "Instant (Vetted/Deposit)" },
            { category: "Deposit Security", without: "Manual (Cash/Paypal)", withAI: "Automated (Secure Link)" },
            { category: "Reference Intake", without: "Manual/Scattered", withAI: "Clean Digital Folders" },
            { category: "Aftercare Support", without: "Inconsistent/Verbal", withAI: "Automated Step-by-Step" }
        ],
        processSteps: [
            { step: 1, title: "Artflow Audit", description: "Mapping your current intake and no-show bottlenecks." },
            { step: 2, title: "Ink Node Launch", description: "Deploying your 24/7 studio manager." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for tattoo studio intake and conversion.",
                examples: [
                    { title: "The 24/7 Ink Concierge", detail: "AI that gathers references, explains care, and books consultations/appointments 24/7.", roi: "Increases artist billable time by 25%." },
                    { title: "Automated Deposit Guard", detail: "AI that ensures every appointment is backed by a secure digital deposit before it hits the calendar.", roi: "Reduces no-shows by 95%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered tattoo studio operations.",
                areas: [
                    { area: "Artist Management", detail: "AI that manages individual artist styles, minimums, and waitlists perfectly.", impact: "Fair and optimized studio book." },
                    { area: "Aftercare & Retention", detail: "AI that sends personalized healing tips and re-engagement offers for their next piece.", impact: "Higher lifetime value per client." }
                ]
            },
            custom: {
                title: "The InkOS",
                description: "Complete AI infrastructure for elite tattoo studios.",
                features: [
                    "24/7 multi-channel reference and lead capture",
                    "Integrated artist-style matching and routing",
                    "Automated deposit-secure booking engine",
                    "Integrated healing and follow-up CRM"
                ]
            }
        },
        faq: [
            { q: "Can it handle custom styles like realism or traditional?", a: "Yes. It can route leads to specific artists based on the keywords and references provided by the lead, ensuring a perfect match." },
            { q: "Is there a limit on artists?", a: "No. The system scales to manage 1 or 50 artists with individual preferences, style filters, and schedule blocks." },
            { q: "How does it handle deposits?", a: "The AI provides a secure link (via Stripe or your preferred gateway) and requires a deposit to be paid before the appointment is finalized on your calendar." },
            { q: "Can it gather reference images?", a: "Yes. The AI prompts the client to upload their references during the intake process and saves them for the artist to review." },
            { q: "What happens if a client needs a custom quote?", a: "The AI gathers the size, placement, and detail level, then flags it for the artist to provide a custom range, which the AI then delivers to the client." },
            { q: "Does it help with aftercare?", a: "Absolutely. The AI sends a 'Day 1' care text and follow-up reminders over the next 14 days to ensure the piece heals perfectly." },
            { q: "Can it handle walk-ins?", a: "Yes. You can have a QR code at your front desk that allows walk-ins to see who is available today and book their spot instantly." },
            { q: "Is it secure for our shop data?", a: "Yes. All client data and photos are stored securely and never used for training external AI models." },
            { q: "How does it handle reschedules?", a: "Clients can request reschedules through the AI, which applies your shop's specific deposit-forfeiture or date-move rules." },
            { q: "What's the ROI for a busy shop?", a: "By eliminating no-shows and reclaiming artist admin time, most shops see a 20-30% lift in monthly revenue." },
            { q: "How long is the setup?", a: "We typically have a studio's custom AI live within 10-14 business days." }
        ],
        layers: [
            { department: "Studio Admin", roles: ["Booking Manager", "Aftercare Bot", "Deposit Guard"], tasks: ["Qualify tattoo leads", "Manage digital deposits", "Automate health waivers", "Handle after-hours inquiries"] },
            { department: "Artist Support", roles: ["Reference Agent", "Style Matcher", "Portfolio Bot"], tasks: ["Gather design references", "Route to correct artist", "Organize project folders", "Gather healing photos"] },
            { department: "Growth & Retention", roles: ["Review Collector", "Loyalty Agent", "Event Coordinator"], tasks: ["Gather 5-star reviews", "Nurture repeat clients", "Manage flash event bookings", "Audit artist billable efficiency"] }
        ]
    }
];
