import { IndustryContent } from '../industry-data';

export const medicalIndustries: IndustryContent[] = [
    {
        slug: "cosmetic-dentistry",
        name: "Cosmetic Dentistry",
        hook: "Your High-Ticket Veneer Inquiries Are Dying in Your Inbox While You're in Surgery.",
        problem: "You spend $10k/month on Google Ads for veneers and implants. Leads call at 6 PM or text on Saturdays. Your front desk doesn't answer after hours. By Monday morning, they've booked a consultation with the clinic down the street who answered in 2 minutes.",
        operatorProblem: "Cosmetic dentistry is a 'want' purchase, not a 'need' purchase. Momentum is everything. If you don't capture the lead, qualify their budget, and book the consult while they are excited, you lose the $30k case. We install the AI that answers, qualifies, and books 24/7.",
        result: "Practice revenue increases by $50k-150k/month through better lead capture and automated treatment plan follow-ups.",
        dreamVision: "Imagine a practice where every $20k veneer inquiry is answered in 30 seconds and your high-value treatment slots are always preserved for qualified patients.",
        industryStats: [
            { stat: "30%", label: "Procedure Growth" },
            { stat: "40%", label: "Acceptance Rate Hike" },
            { stat: "24/7", label: "Patient Capture" }
        ],
        useCases: [
            { title: "The Saturday Veneer Inquiry", scenario: "Prospect texts about 'Smile Makeover' pricing on Saturday at 8 PM.", outcome: "AI sends a before/after gallery, explains financing, and books a Monday afternoon consult before the doctor even knows they existed." }
        ],
        comparisonTable: [
            { category: "Lead Response", without: "Next Day (Dead)", withAI: "30 Seconds (Live)" },
            { category: "Acceptance", without: "Manual Follow-up (Rare)", withAI: "Persistent Education" }
        ],
        processSteps: [
            { step: 1, title: "Funnel Audit", description: "Mapping where your high-ticket leads are dropping off." },
            { step: 2, title: "Concierge Launch", description: "Deploying your 24/7 patient educator and setter." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for dental practice growth and efficiency.",
                examples: [
                    { title: "The 24/7 Case Concierge", detail: "AI that answers every call and text to book high-ticket consultations (Veneers, Implants, Invisalign) into your PMS 24/7.", roi: "Captures 3-5 additional high-ticket cases per month." },
                    { title: "Treatment Plan Educator", detail: "AI that follows up with patients who didn't sign their $10k+ treatment plan, answering questions about recovery and financing.", roi: "Increases treatment acceptance by 40%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered operations for dental practices.",
                areas: [
                    { area: "Patient Intake", detail: "AI that handles all inbound inquiries, insurance verification, and intake paperwork before the patient arrives.", impact: "Zero front-desk friction." },
                    { area: "Post-Op Care", detail: "Automated check-ins for complex cases (Implants, Surgery) that flag issues for clinical review.", impact: "Higher patient satisfaction and lower complications." }
                ]
            },
            custom: {
                title: "The Cosmetic Practice OS",
                description: "Complete AI infrastructure for high-volume aesthetic dental practices.",
                features: [
                    "HIPAA-compliant CRM and communication layer",
                    "Direct PMS integration (OpenDental, Dentrix, Eaglesoft)",
                    "Automated treatment plan nurturing and financing education",
                    "Predictive scheduling for high-value procedures"
                ]
            }
        },
        faq: [
            { q: "Is the AI HIPAA compliant?", a: "Yes. Our systems use enterprise-grade encryption and secure endpoints to ensure all patient data is protected." },
            { q: "Can it handle complex insurance questions?", a: "It can check basic benefits and verification immediately, and route complex coding questions to your billing team." }
        ],
        layers: [{ department: "Clinical Support", roles: ["Case Navigator", "Patient Concierge"], tasks: ["Follow up on $10k+ plans", "Verify insurance benefits"] }]
    },
    {
        slug: "orthodontics-invisalign",
        name: "Orthodontics & Invisalign",
        hook: "Your Consultation Room is Empty While Your Front Desk is Chasing Insurance Papers.",
        problem: "You have a high-volume practice, but 20% of your consults are no-shows. Your staff spends 3 hours a day on the phone with insurance companies instead of booking new Invisalign starts.",
        operatorProblem: "Orthodontic growth is built on volume and retention. If you can't book the consult while the parent is interested, or if the consult doesn't show up, your cost-per-start skyrockets. We install the AI that eliminates no-shows and automates the back-office doc chase.",
        result: "Ortho practices see a 25% increase in 'starts' and reduce insurance admin time by 70%.",
        dreamVision: "Imagine a practice where every consult is pre-vetted, their insurance is verified before they arrive, and your staff only focuses on clinicians and closings.",
        industryStats: [
            { stat: "25%", label: "Increase in Starts" },
            { stat: "70%", label: "Less Admin Time" },
            { stat: "95%", label: "Show-up Rate" }
        ],
        useCases: [
            { title: "The No-Show Prevention", scenario: "A parent forgets their child's 4 PM Invisalign consult.", outcome: "AI identifies the non-response to the 24-hour reminder and triggers an automated re-scheduling sequence that fills the slot in minutes." }
        ],
        comparisonTable: [
            { category: "Booking", without: "Manual (Phone Tag)", withAI: "Instant (Self-Serve)" },
            { category: "Insurance", without: "Manual Calling (Hours)", withAI: "Automated Verification" }
        ],
        processSteps: [
            { step: 1, title: "Efficiency Audit", description: "Identifying your biggest no-show and admin bottlenecks." },
            { step: 2, title: "Patient Node Launch", description: "Deploying your automated intake and reminder unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for orthodontic practice efficiency.",
                examples: [
                    { title: "The Invisalign Lead Closer", detail: "AI that nurtures Invisalign inquiries with personalized video testimonials and financing options for 30 days.", roi: "Increases lead-to-start conversion by 35%." },
                    { title: "Automated Insurance Verification", detail: "AI that pulls orthodontic benefits and verify coverage the moment a consult is booked.", roi: "Saves 15+ hours of front-office time weekly." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered orthodontic operations.",
                areas: [
                    { area: "Patient Experience", detail: "AI that handles all appointment reminders, rescheduling, and compliance check-ins for aligners.", impact: "Treatment times stay on track." },
                    { area: "Finance & Contracts", detail: "Automated contract signing and payment plan management for ortho bundles.", impact: "Zero manual billing follow-up." }
                ]
            },
            custom: {
                title: "The Ortho Growth OS",
                description: "Complete AI infrastructure for orthodontic groups and practices.",
                features: [
                    "Direct integration to Dolphin Management or OrthoTrac",
                    "Automated aligner compliance tracking and reminders",
                    "Multi-location booking and schedule optimization",
                    "Automated contract and financing execution"
                ]
            }
        },
        faq: [
            { q: "Can it handle family sibling discounts?", a: "Yes. The AI is trained on your specific pricing and discount logic to quote and contract correctly." },
            { q: "Does it work for both braces and aligners?", a: "Yes. It delivers procedure-specific education and follow-up sequences for both." }
        ],
        layers: [{ department: "Patient Flow", roles: ["Consult Coordinator", "Insurance Bot"], tasks: ["Nurture aligner leads", "Verify family benefits"] }]
    },
    {
        slug: "dental-implants",
        name: "Dental Implants",
        hook: "High-Value Implant Cases are Lost to the Clinic That Responds First.",
        problem: "Implant cases are $5k-25k+. Patients are researching heavily and calling multiple clinics. If you don't answer their 'All-on-4' question at 9 PM, they won't be in your chair on Monday.",
        operatorProblem: "The sales cycle for implants is long and emotional. You need a system that educates the patient, overcomes their fear of surgery, and manages their financing questions over several weeks. We install the AI that does the heavy lifting of patient education and conversion.",
        result: "Implant-focused practices double their high-value case volume through systematic education and follow-up.",
        dreamVision: "Imagine a practice where every 'All-on-4' inquiry is treated like a VIP, educated on the process, and pre-screened for bone density before the first consult.",
        industryStats: [
            { stat: "2x", label: "Implant Volume" },
            { stat: "50%", label: "Higher Case Acceptance" },
            { stat: "15m", label: "Education Saved/Case" }
        ],
        useCases: [
            { title: "The All-on-4 Nurture", scenario: "A patient downloads your 'Guide to Permanent Teeth' but doesn't book.", outcome: "AI follows up over 14 days with video testimonials and financing explainers, eventually booking a $25k case." }
        ],
        comparisonTable: [
            { category: "Patient Education", without: "Generic PDFs (Ignored)", withAI: "Interactive AI Concierge" },
            { category: "Follow-up", without: "Manual (Rarely happens)", withAI: "Persistent (14-day cycle)" }
        ],
        processSteps: [
            { step: 1, title: "Case Analysis", description: "Mapping your current high-ticket patient journey." },
            { step: 2, title: "Concierge Launch", description: "Deploying your implant-specific education agent." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for dental implant case management.",
                examples: [
                    { title: "The Implant Education Agent", detail: "AI that answers technical and recovery questions about implants 24/7, building trust before the consult.", roi: "Consult-to-start rate increases by 40%." },
                    { title: "Financing Closer", detail: "AI that explains complex financing and payment plan options to patients who are hesitant about the cost.", roi: "Reduces 'let me think about it' stalls by 50%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered implant practice operations.",
                areas: [
                    { area: "Case Coordination", detail: "AI that manages the long-cycle follow-up for high-ticket cases, ensuring zero leads go cold.", impact: "Consistent implant pipeline." },
                    { area: "Clinical Prep", detail: "AI that gathers medical histories and scans, preparing the surgeon with a full patient profile before the visit.", impact: "Consults are 30% more efficient." }
                ]
            },
            custom: {
                title: "The Implant OS",
                description: "Complete AI infrastructure for dental implant centers.",
                features: [
                    "High-ticket nurture automation (14-30 days)",
                    "Interactive before/after gallery and testimonial bot",
                    "Integrated financing and credit approval system",
                    "Post-op surgical recovery monitoring via AI"
                ]
            }
        },
        faq: [
            { q: "Can the AI explain different implant types?", a: "Yes. It can explain single implants vs. All-on-4, material differences (titanium vs. zirconia), and the recovery timeline." },
            { q: "How does it handle patient medical anxiety?", a: "It uses a professional, reassuring tone and provides evidence-based recovery information to reduce 'fear of the dentist' stalls." }
        ],
        layers: [{ department: "Case Management", roles: ["Implant Navigator", "Financing Bot"], tasks: ["Lead through All-on-4 funnel", "Explain payment plans"] }]
    },
    {
        slug: "oral-surgery-practices",
        name: "Oral Surgery",
        hook: "Referrals are Liquid Gold. But Your Callback System is Leaking.",
        problem: "You live and die by general dentist referrals. If you don't book their patient immediately, they'll send the next one elsewhere. Your front desk is bogged down in surgical coordination and medical clearance chasing.",
        operatorProblem: "Oral surgery is a logistics-heavy and referral-dependent business. Every hour of delay in booking a referral is a risk. We install the AI that captures referrals instantly and automates the medical clearance and insurance doc chase.",
        result: "Oral surgeons increase referral conversion by 30% and reduce surgery coordination time by 60%.",
        dreamVision: "Imagine an oral surgery practice where every referral is contacted within 5 minutes and medical clearances are tracked and flagged by AI until they are ready for surgery.",
        industryStats: [
            { stat: "30%", label: "Referral Growth" },
            { stat: "60%", label: "Less Admin Work" },
            { stat: "5min", label: "Referral Callback" }
        ],
        useCases: [
            { title: "The Dentist Referral", scenario: "A general dentist office send a fax/email referral for a wisdom tooth extraction.", outcome: "AI reads the referral, contacts the patient via text instantly, and has them on the schedule before they even leave the general dentist's parking lot." }
        ],
        comparisonTable: [
            { category: "Referral Response", without: "Next Day (Slow)", withAI: "5 Minutes (Instant)" },
            { category: "Medical Clearance", without: "Manual Chasing (Slow)", withAI: "AI Tracker (Persistent)" }
        ],
        processSteps: [
            { step: 1, title: "Referral Audit", description: "Finding where your referral pipeline is stalling." },
            { step: 2, title: "Coordinate Launch", description: "Deploying your instant referral intake node." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for oral surgery referral management.",
                examples: [
                    { title: "The Referral Fast-Track", detail: "AI that monitors referral inboxes, parses the data, and contacts patients instantly to book.", roi: "Eliminates referral decay and increases 'starts' by 30%." },
                    { title: "Medical Clearance Chaser", detail: "AI that follows up with primary care doctors to secure medical clearances for upcoming surgeries.", roi: "Reduces surgery delays due to missing paperwork by 80%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered oral surgery operations.",
                areas: [
                    { area: "Surgical Coordination", detail: "AI that manages the complex coordination between patient, referring doctor, and surgical suite.", impact: "Zero scheduling errors." },
                    { area: "Billing & Coding", detail: "AI-assisted surgical coding and insurance claim submission for complex oral procedures.", impact: "Faster reimbursement cycles." }
                ]
            },
            custom: {
                title: "The Surgery OS",
                description: "Complete AI infrastructure for high-volume oral surgery groups.",
                features: [
                    "Automated referral intake and instant patient contact",
                    "Persistent medical clearance tracking and vendor liaison",
                    "Integrated post-op monitoring and emergency triage",
                    "Referral partner reporting and communication portal"
                ]
            }
        },
        faq: [
            { q: "Can it handle complex surgical medical histories?", a: "Yes. It gathers the history and flags specific conditions (heart issues, medicine) for human review before surgery." },
            { q: "How do referring dentists like the system?", a: "They love it because their patients are taken care of immediately, making the dentist look better to their patient." }
        ],
        layers: [{ department: "Surgical Planning", roles: ["Referral Coordinator", "Clearance Bot"], tasks: ["Book dentist referrals", "Chase medical clearances"] }]
    },
    {
        slug: "pediatric-dentists",
        name: "Pediatric Dentists",
        hook: "Busy Parents Don't Want a Phone Call. They Want a Booked Appointment.",
        problem: "Your target audience is busy moms and dads on their phones 24/7. They don't have time for your front desk's 3-minute intake process. If they can't book at 9 PM after the kids are in bed, they'll find a clinic that lets them.",
        operatorProblem: "Pediatric dentistry is about household retention and extreme convenience. If a parent has to wait on hold, you've lost them. We install the AI that handles parent inquiries, scheduling, and family reminders via text — exactly how they want to communicate.",
        result: "Pediatric clinics see a 40% increase in new patient bookings and near-zero no-shows through text-first communication.",
        dreamVision: "Imagine a practice where every family's check-ups are booked via a quick text exchange and no-shows are eliminated by AI reminders that parents actually see.",
        industryStats: [
            { stat: "40%", label: "More Bookings" },
            { stat: "Zero", label: "No-Shows" },
            { stat: "90%", label: "Text Preference" }
        ],
        useCases: [
            { title: "The Late-Night Booking", scenario: "A mom remembers at 10 PM that her son needs a cleaning.", outcome: "She texts your clinic, AI checks the household records, and books both kids for a back-to-back Saturday morning slot in 30 seconds." }
        ],
        comparisonTable: [
            { category: "Communication", without: "Phone Calls (Ignored)", withAI: "SMS (Instant Response)" },
            { category: "Reminders", without: "Generic (Deleted)", withAI: "Personalized Family Texts" }
        ],
        processSteps: [
            { step: 1, title: "Parent Journey Audit", description: "Mapping your current booking friction points." },
            { step: 2, title: "Family Node Launch", description: "Deploying your text-first family concierge." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for pediatric practice convenience.",
                examples: [
                    { title: "The Family Text Concierge", detail: "AI that handles all family scheduling, insurance updates, and questions via text, exactly how modern parents communicate.", roi: "Booking rate increases by 40%." },
                    { title: "No-Show Prevention Bot", detail: "AI that uses persistent, multi-channel reminders to ensure parents don't forget the kids' appointments.", roi: "Reduces no-shows by 95%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered pediatric dentistry operations.",
                areas: [
                    { area: "Patient Experience", detail: "AI that manages the entire household's dental schedule and answers parent questions about behavior and care.", impact: "High family loyalty and LTV." },
                    { area: "Intake & Paperwork", detail: "Automated pre-visit intake for families, reducing wait times and crying kids in the lobby.", impact: "Clinic flow is 30% faster." }
                ]
            },
            custom: {
                title: "The Pediatric OS",
                description: "Complete AI infrastructure for family-focused dental practices.",
                features: [
                    "Text-first family booking and household management",
                    "Automated pre-visit intake and parent education",
                    "Integrated family referral and review program",
                    "Emergency dental helpline triage for parents"
                ]
            }
        },
        faq: [
            { q: "Can it book multiple kids at once?", a: "Yes. It identifies the household and suggests back-to-back or side-by-side slots to save the parent a trip." },
            { q: "Will parents know it's AI?", a: "The AI uses a friendly, professional tone that feels like an extension of your office. Parents appreciate the speed and ease of text." }
        ],
        layers: [{ department: "Family Support", roles: ["Parent Concierge", "Schedule Optimizer"], tasks: ["Book family blocks", "Automate text reminders"] }]
    },
    {
        slug: "fertility-clinics",
        name: "Fertility Clinics",
        hook: "The Journey to Parenthood is Emotional. Your Waiting Room Experience Shouldn't Be.",
        problem: "Fertility patients have extreme anxiety, urgent questions about cycles, and complex scheduling needs. Your clinical team is buried in answering 'can I take this medicine?' instead of handling procedures.",
        operatorProblem: "Fertility care is high-touch and high-stakes. If a patient feels neglected during their cycle, they lose trust. We install the AI concierge that answers 90% of non-medical cycle questions 24/7, keeping patients calm and clinics efficient.",
        result: "Fertility clinics increase patient satisfaction by 50% and reclaim 10+ hours of nurse time per week.",
        dreamVision: "Imagine a clinic where every patient feels personally supported 24/7 during their cycle, without your nurses ever answering a basic question about FSH or vitamins.",
        industryStats: [
            { stat: "50%", label: "Satisfaction Boost" },
            { stat: "10hr/wk", label: "Nurse Time Saved" },
            { stat: "24/7", label: "Patient Support" }
        ],
        useCases: [
            { title: "The Midnight Cycle Anxiety", scenario: "A patient is worried about a minor symptom at 1 AM during their IVF cycle.", outcome: "AI provides education on what's normal, reassures her, and flags the message for the nurse to review at 8 AM." }
        ],
        comparisonTable: [
            { category: "Patient Support", without: "Nurses buried in calls", withAI: "24/7 AI Concierge" },
            { category: "Intake", without: "Manual (2 hours)", withAI: "Digital (15 mins)" }
        ],
        processSteps: [
            { step: 1, title: "Care Audit", description: "Mapping your most frequent non-medical nurse inquiries." },
            { step: 2, title: "Care Node Launch", description: "Deploying your patient-facing digital concierge." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for fertility patient support and intake.",
                examples: [
                    { title: "The 24/7 Cycle Concierge", detail: "AI that explains cycle mechanics, medication timing, and next steps to confused or anxious patients.", roi: "Reclaims 10+ hours/week for and clinical staff." },
                    { title: "Digital Intake & Triage", detail: "AI that gathers comprehensive history and lab data, providing a structured report to the doctor before the first consult.", roi: "Consult efficiency increases 40%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered fertility clinic operations.",
                areas: [
                    { area: "Patient Education", detail: "AI that manages the entire education journey for IVF, IUI, and egg freezing patients.", impact: "High patient confidence/trust." },
                    { area: "Clinical Coordination", detail: "AI that manages the logistics of lab results, medication reminders, and cycle scheduling.", impact: "Zero coordination errors." }
                ]
            },
            custom: {
                title: "The Fertility Care OS",
                description: "Complete AI infrastructure for high-touch fertility practices.",
                features: [
                    "HIPAA-compliant patient cycle support assistant",
                    "Integrated medication and lab result triage",
                    "Automated pre-visit history and lab gatherer",
                    "Multi-channel patient anxiety monitoring"
                ]
            }
        },
        faq: [
            { q: "Can the AI give medical advice for cycles?", a: "No. It is trained to provide education on the process and standard protocol. Any medical concerns are instantly flagged for a nurse or doctor." },
            { q: "Is it secure for sensitive fertility data?", a: "Yes. We use enterprise-wide encryption and strict HIPAA-compliant nodes to protect all patient information." }
        ],
        layers: [{ department: "Patient Success", roles: ["Cycle Concierge", "Intake Specialist"], tasks: ["Answer non-medical questions", "Gather prep-consult data"] }]
    },
    {
        slug: "hormone-therapy-trt-clinics",
        name: "Hormone Therapy & TRT",
        hook: "Your Patients Are Searching for Answers at 10 PM. You Answer at 9 AM.",
        problem: "Hormone therapy is a high-ticket, consideration-heavy purchase. Prospects have 100 questions about labs, symptoms, and side effects. If your clinic doesn't answer them instantly, they'll find a telehealth competitor who does.",
        operatorProblem: "Hormone clinics are won or lost on education and conversion speed. Most clinics have a 5-day lag between lead and consult. We install the AI that qualifies the lead, schedules the labs, and books the doctor in 5 minutes.",
        result: "Hormone clinics double their conversion rates and eliminate manual lab-chasing admin.",
        dreamVision: "Imagine a clinic where every lead is qualified, their initial symptoms are logged, and their labs are scheduled before you even finish your morning coffee.",
        industryStats: [
            { stat: "2x", label: "Conversion Rate" },
            { stat: "50%", label: "Less Admin Time" },
            { stat: "5min", label: "Book Speed" }
        ],
        useCases: [
            { title: "The Quick Lab Booking", scenario: "A lead asks about 'Low T' symptoms on a Facebook ad.", outcome: "AI engages them via DM, qualifies their symptoms, and has them booked for a local blood draw in 2 minutes." }
        ],
        comparisonTable: [
            { category: "Lead Nurture", without: "Manual (Slow/Rare)", withAI: "Persistent (Instant)" },
            { category: "Lab Tracking", without: "Manual (Email/PDFs)", withAI: "Automated (AI-Sync)" }
        ],
        processSteps: [
            { step: 1, title: "Sales Audit", description: "Mapping your current lead-to-lab bottleneck." },
            { step: 2, title: "Growth Node Launch", description: "Deploying your instant-conversion agent." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for hormone clinic lead conversion.",
                examples: [
                    { title: "The Symptom-to-Lab Setter", detail: "AI that qualifies leads by symptoms and health history, then books their initial blood work automatically.", roi: "Conversion from lead to paid lab increases by 50%." },
                    { title: "Long-Term Retention Nurturer", detail: "AI that stays in touch with TRT/BHRT patients to monitor symptoms and ensure they stay on their protocol.", roi: "Patient retention increases by 30%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered hormone clinic operations.",
                areas: [
                    { area: "Sales & Marketing", detail: "AI that handles all inbound social and web leads, qualify them, and books consultations.", impact: "Zero lead decay." },
                    { area: "Patient Coordination", detail: "AI that manages lab results, follow-up scheduling, and prescription refills.", impact: "Clinic runs twice as many patients with the same staff." }
                ]
            },
            custom: {
                title: "The Hormone Clinic OS",
                description: "Complete AI infrastructure for hormone and wellness clinics.",
                features: [
                    "Symptom-based lead qualification and booking",
                    "Integrated lab requisition and tracking system",
                    "Automated patient protocol reminders and support",
                    "Integrated multi-channel sales and retention CRM"
                ]
            }
        },
        faq: [
            { q: "Can it explain the difference between TRT and BHRT?", a: "Yes. It delivers high-quality education on different protocols, side effects, and benefits to help patients decide." },
            { q: "How does it handle lab result questions?", a: "It can provide general education on what specific markers mean, then routes the patient to book a review with the provider." }
        ],
        layers: [{ department: "Patient Growth", roles: ["Symptom Specialist", "Lab Coordinator"], tasks: ["Qualify TRT leads", "Track lab completion"] }]
    },
    {
        slug: "addiction-treatment-centers",
        name: "Addiction Treatment",
        hook: "In Addiction Treatment, Five Minutes is the Difference Between a Life Saved and a Lost Lead.",
        problem: "Families and individuals call during crises. If you don't answer the phone or qualify the insurance in minutes, they call the next center or lose the moment of willingness. Your staff is buried in VOB (Verification of Benefits) instead of helping patients.",
        operatorProblem: "Treatment centers are won on empathy and speed. Most centers lose 40% of inquiries to slow VOB or slow callback. We install the AI that captures the lead, qualifiers the insurance (VOB), and connects them to an admissions counselor in 60 seconds.",
        result: "Treatment centers increase admissions by 35% and reduce VOB wait times from hours to seconds.",
        dreamVision: "Imagine a center where every crisis call is answered in 5 seconds and VOB is completed before the caller even hangs up.",
        industryStats: [
            { stat: "35%", label: "Admissions Jump" },
            { stat: "60s", label: "VOB Speed" },
            { stat: "100%", label: "Crisis Capture" }
        ],
        useCases: [
            { title: "The 2 AM Crisis", scenario: "A mother calls about her son's urgent need for detox at 2 AM.", outcome: "AI answers, provides compassionate triage, gathers insurance details, and runs VOB instantly while alerting the on-call counselor." }
        ],
        comparisonTable: [
            { category: "Admissions speed", without: "Hours (Manual VOB)", withAI: "Seconds (Instant VOB)" },
            { category: "Crisis response", without: "Voicemail (Wasted)", withAI: "24/7 (Live Triage)" }
        ],
        processSteps: [
            { step: 1, title: "Intake Audit", description: "Mapping your current callback and VOB delays." },
            { step: 2, title: "Response Node Launch", description: "Deploying your 24/7 compassionate triage unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for addiction treatment admissions.",
                examples: [
                    { title: "The Instant VOB Engine", detail: "AI that takes insurance details and runs a full Verification of Benefits in seconds, not hours.", roi: "Increases admission conversion by 30%." },
                    { title: "Compassionate Triage Agent", detail: "AI that provides high-empathy triage and qualification for crisis calls 24/7.", roi: "Captures 100% of after-hours opportunities." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered treatment center operations.",
                areas: [
                    { area: "Admissions & Intake", detail: "AI that manages the entire lead-to-bed journey, including insurance and travel coordination.", impact: "Zero lead leakage." },
                    { area: "Aftercare Nurture", detail: "AI that stays in touch with alumni to monitor recovery and manage the referral network.", impact: "Higher alumni success and referrals." }
                ]
            },
            custom: {
                title: "The Treatment Center OS",
                description: "Complete AI infrastructure for addiction and mental health centers.",
                features: [
                    "24/7 crisis triage with compassionate response logic",
                    "Integrated instant Verification of Benefits (VOB)",
                    "Automated aftercare and alumni support sequences",
                    "Referral partner management and reporting"
                ]
            }
        },
        faq: [
            { q: "Is the AI 'cold' for people in crisis?", a: "No. We use trauma-informed, highly compassionate language models that provide support while gathering the data needed to get them help fast." },
            { q: "Can it handle complex commercial insurance?", a: "Yes. It can run the VOB across all major commercial providers and some government plans instantly." }
        ],
        layers: [{ department: "Admissions Ops", roles: ["Crisis Triage", "VOB Bot"], tasks: ["Qualify crisis calls", "Verify insurance benefits"] }]
    },
    {
        slug: "weight-loss-clinics",
        name: "Weight Loss Clinics",
        hook: "Your Patients Want Results Now. Your Admin is Slowing Them Down.",
        problem: "GLP-1 and medical weight loss demand is exploding. You have a constant stream of leads, but your staff is buried in answering 'how much does it cost?' and 'do I qualify?' instead of running clinical visits.",
        operatorProblem: "Weight loss clinics are won on frictionless onboarding and long-term retention. If it takes 3 days to book a consult, they'll find a telehealth app. We install the AI that qualifies the patient, explains the program, and books the labs in 3 minutes.",
        result: "Weight loss clinics see a 50% increase in monthly starts and reduce staff admin by 15+ hours/week.",
        dreamVision: "Imagine a clinic where 100% of leads are qualified and labs are booked on autopilot, letting your medical team focus entirely on patient results.",
        industryStats: [
            { stat: "50%", label: "Start Growth" },
            { stat: "15hr/wk", label: "Admin Saved" },
            { stat: "3min", label: "Lead-to-Lab" }
        ],
        useCases: [
            { title: "The GLP-1 Inquiry", scenario: "Someone asks 'How much is your Semaglutide program?' on Instagram.", outcome: "AI answers, delivers the price menu, qualifiers their BMI/history, and books their blood work in 120 seconds." }
        ],
        comparisonTable: [
            { category: "Onboarding", without: "Manual (Slow/Clunky)", withAI: "Digital (Instant/Seamless)" },
            { category: "Retention", without: "Reactive (Phone tag)", withAI: "Proactive (AI Check-ins)" }
        ],
        processSteps: [
            { step: 1, title: "Onboarding Audit", description: "Finding the friction points in your current intake." },
            { step: 2, title: "Growth Node Launch", description: "Deploying your instant-qualification unit." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for weight loss clinic scaling.",
                examples: [
                    { title: "The 3-Minute Qualifier", detail: "AI that gathers health history, BMI, and goals, then books the labs and initial consult.", roi: "Increases new patient volume by 50%." },
                    { title: "Protocol Success Bot", detail: "AI that follows up weekly to check side effects, remind on Dosages, and keep motivation high.", roi: "Patient retention (LTV) increases by 40%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered medical weight loss operations.",
                areas: [
                    { area: "Sales & Onboarding", detail: "AI that handles all inbound social and web leads, converting them to lab appointments.", impact: "Zero lead decay." },
                    { area: "Clinical Support", detail: "AI that manages protocol questions, side effect triage, and pharmacy refill coordination.", impact: "Clinicians see 2x more patients." }
                ]
            },
            custom: {
                title: "The Weight Loss OS",
                description: "Complete AI infrastructure for medical weight loss practices.",
                features: [
                    "Symptom and BMI-based lead qualification",
                    "Automated lab scheduling and refill coordination",
                    "Patient retention and protocol success bot",
                    "Multi-channel sales and social commerce integration"
                ]
            }
        },
        faq: [
            { q: "Can it explain GLP-1 side effects?", a: "Yes. It can educational on common side effects and provide standard mitigation tips while flagging serious concerns for the provider." },
            { q: "Does it help with insurance for Wegovy/Zepbound?", a: "It can check basic coverage and run pre-authorizations or refer to your cash-pay alternatives." }
        ],
        layers: [{ department: "Growth Ops", roles: ["Onboarding Concierge", "Protocol Coach"], tasks: ["Qualify GLP-1 leads", "Send weekly motivation"] }]
    }
];
