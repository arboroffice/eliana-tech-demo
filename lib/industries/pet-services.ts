import { IndustryContent } from '../industry-data';

export const petIndustries: IndustryContent[] = [
    {
        slug: "veterinary-clinics",
        name: "Veterinary Clinics",
        hook: "Your Patients Are Furry. Your Clients Are Stressed. Always Be Answering.",
        problem: "When a pet is sick, the owner is in a panic. If they call and get a voicemail, they'll call the next clinic with an 'emergency' slot. Your front desk is too busy to manage the insurance doc-chase properly.",
        operatorProblem: "Vet clinics are won on empathy, speed, and appointment integrity. Most clinics lose 25% of inquiries to slow response or booking confusion. We install the AI that captures the lead, qualifies the symptoms (no red flags), and books the EVAL in 60 seconds.",
        result: "Vet clinics increase starts by 30% and reduce admin time on records by 60%.",
        dreamVision: "Imagine a clinic where 100% of appointments are handled by AI, and your techs can focus entirely on clinical animal care.",
        industryStats: [
            { stat: "30%", label: "Evaluation Starts" },
            { stat: "100%", label: "Lead Capture" },
            { stat: "Zero", label: "Missed Emergencies" }
        ],
        useCases: [
            { title: "The Sudden Limp", scenario: "Someone wakes up to find their dog is limping on a Saturday and texts your clinic.", outcome: "AI answers, qualifies the severity (no bleeding/trauma), and books their EVAL for 9 AM that morning." }
        ],
        comparisonTable: [
            { category: "Booking speed", without: "Manual (Phone Tag)", withAI: "Instant (Digital)" },
            { category: "Patient Pre-Intake", without: "Manual (Slow)", withAI: "Digital (Smooth/AI)" }
        ],
        processSteps: [
            { step: 1, title: "Efficiency Audit", description: "Mapping your current Eval-to-charting bottleneck." },
            { step: 2, title: "Paws Node Launch", description: "Deploying your 24/7 digital clinical assistant." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for vet clinic growth and appointment integrity.",
                examples: [
                    { title: "The 24/7 Pet Concierge", detail: "AI that handles all inbound ad leads and queries, qualifying symptoms and booking evaluations instantly.", roi: "Increases new patient starts by 30%." },
                    { title: "Medication Renewal Bot", detail: "AI that follows up proactively before every flea/heartworm refill is due to secure the recurring revenue.", roi: "Typical 30% increase in medicine sales." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered vet clinic operations.",
                areas: [
                    { area: "Patient Experience & Intake", detail: "AI that manages the entire pre-visit journey, ensuring all records are for the vet.", impact: "Zero clinical-day friction." },
                    { area: "Vaccination & Compliance", detail: "AI that follows up with patients to remind them of their shots and checks for completion.", impact: "Higher patient completion and health results." }
                ]
            },
            custom: {
                title: "The PawsOS",
                description: "Complete AI infrastructure for mid-sized vet practices.",
                features: [
                    "24/7 instant lead response and symptom-triage",
                    "Integrated patient-history pre-screening and education",
                    "Automated vaccination-reminder and retention sequences",
                    "Integrated pharmacy and refill-manager"
                ]
            }
        },
        faq: [
            { q: "Is the AI secure for clinical records?", a: "Yes. Our nodes are enterprise-grade and secure, protecting all patient PII and medical records." },
            { q: "Does it work with Cornerstone or AVImark?", a: "Yes. We integrate with major vet management platforms to sync data and schedules." }
        ],
        layers: [{ department: "Clinical Support", roles: ["Symptom Specialist", "Refill Bot"], tasks: ["Book evaluations", "Chase missing records"] }]
    },
    {
        slug: "dog-grooming-services",
        name: "Dog Grooming",
        hook: "Your Groomers Are at the Tub. Your Phone Should be Running the Front.",
        problem: "Grooming is loud and wet work. When the phone rings, it's often ignored. You lose potentially 10-20 appointments a day because customers want an instant answer and move to the 'book now' option on Google.",
        operatorProblem: "Grooming is a convenience-driven impulse business. If they can't book in 30 seconds via text or web, you've lost them. We install the AI that represents your brand, answers common price questions, and books the groom in seconds.",
        result: "Grooming salons increase booking volume by 35% and reduce staff distraction by 80%.",
        dreamVision: "Imagine a studio where 100% of appointments are handled by AI, and your groomers can focus entirely on beautiful cuts and high-quality service.",
        industryStats: [
            { stat: "35%", label: "Waitlist Filling" },
            { stat: "80%", label: "Less Noise" },
            { stat: "Instant", label: "Booking Speed" }
        ],
        useCases: [
            { title: "The Doodle Groom", scenario: "Someone wanting a full groom for a Goldendoodle texts your studio at 7 PM.", outcome: "AI identifies the breed, explains the 'Doodle tax' or time requirements, and books the $150 groom for Wednesday at 10 AM." }
        ],
        comparisonTable: [
            { category: "Booking speed", without: "Manual (Hours)", withAI: "Instant (Digital)" },
            { category: "Staff focus", without: "Constant distractions", withAI: "Deep grooming focus" }
        ],
        processSteps: [
            { step: 1, title: "Groom Audit", description: "Mapping your most frequent missed-call and no-show windows." },
            { step: 2, title: "Artistry Node Launch", description: "Deploying your 24/7 digital studio manager." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for dog grooming booking and intake.",
                examples: [
                    { title: "The 24/7 Groomer Concierge", detail: "AI that handles all appointment requests, pricing questions, and reschedules via text or web instantly.", roi: "Increases bookings by 35%." },
                    { title: "Review Multiplier for Groomers", detail: "AI that follows up post-service to gather Google reviews and photos for social media.", roi: "Dominates local search maps." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered beauty studio operations.",
                areas: [
                    { area: "Client Management", detail: "AI that manages your client history, favorite cuts, and breed-specific reminders.", impact: "Personalized feel at scale." },
                    { area: "Marketing & Growth", detail: "AI that manages seasonal specials and re-engages dormant clients during slow months.", impact: "Predictable monthly cash flow." }
                ]
            },
            custom: {
                title: "The GroomOS",
                description: "Complete AI infrastructure for multi-station grooming salons.",
                features: [
                    "24/7 instant lead response and booking",
                    "Integrated breed-specific education and intake",
                    "Automated session-reminder and retention sequences",
                    "Monthly membership and recurring-grooming manager"
                ]
            }
        },
        faq: [
            { q: "Can it handle breed-specific pricing?", a: "Yes. It can ask the breed and weight to give an accurate 'starting at' estimate for your review." },
            { q: "Does it work for both mobile and shop grooming?", a: "Yes. It can verify service addresses or shop availability before booking." }
        ],
        layers: [{ department: "Studio Admin", roles: ["Glamour Concierge", "Review Bot"], tasks: ["Book grooms", "Manage 5-star reviews"] }]
    },
    {
        slug: "pet-boarding-facilities",
        name: "Pet Boarding",
        hook: "Vacations Are Booked at Midnight. Your Boarding Should be Too.",
        problem: "People plan their trips on weekends and late at night. If your boarding facility doesn't have an instant way to book or your phone goes to voicemail, they call the firm down the street. You're losing 20% of your capacity to slow response.",
        operatorProblem: "Pet boarding is a luxury convenience game. Most facilities lose business because they make it too hard to book. We install the AI that answers every question about vaccines, suites, and playtime — then books the stay and collects the deposit 24/7.",
        result: "Boarding facilities increase occupancy by 15% and cut manager admin by 60%.",
        dreamVision: "Imagine a facility that runs at 96% occupancy with an AI manager that handles 100% of the late-night bookings and vaccine-chasing questions.",
        industryStats: [
            { stat: "15%", label: "Occupancy Jump" },
            { stat: "60%", label: "Less Admin Time" },
            { stat: "24/7", label: "Booking Capability" }
        ],
        useCases: [
            { title: "The Sudden Trip", scenario: "Someone has to go out of town for a funeral at 10 PM and needs 3 nights for their Lab.", outcome: "AI answers their call, confirms the suite is available, takes the deposit, and verifies they have current Bordetella shots in 3 minutes." }
        ],
        comparisonTable: [
            { category: "Booking window", without: "Office Hours Only", withAI: "24/7 (Autonomous)" },
            { category: "Response Speed", without: "Voicemail (Wasted lead)", withAI: "Instant (Converted)" }
        ],
        processSteps: [
            { step: 1, title: "Vacancy Audit", description: "Mapping your lost revenue from empty suites." },
            { step: 2, title: "Booking Node Launch", description: "Deploying your 24/7 digital manager." }
        ],
        services: {
            singleSystems: {
                title: "Single System Installs",
                description: "AI tools for pet boarding booking and vaccine vetting.",
                examples: [
                    { title: "The 24/7 Booking Concierge", detail: "AI that explains the different suite levels, checks availability, and issues deposit invoices via phone or text.", roi: "Captures 15% more bookings, especially after-hours." },
                    { title: "Vaccine Record Chaser", detail: "AI that follows up politely with owners and their vets to secure the Rabies/Distemper records before check-in.", roi: "Reduces intake-day stress and delays by 90%." }
                ]
            },
            departments: {
                title: "Department Automation",
                description: "AI-powered pet boarding operations.",
                areas: [
                    { area: "Client Experience & Onboarding", detail: "AI that manages the entire intake and pre-assessment for multiple pets.", impact: "Zero intake friction." },
                    { area: "Facility Success", detail: "AI that handles annual reviews, funding reminders, and basic trust admin questions.", impact: "High lifetime value and referrals." }
                ]
            },
            custom: {
                title: "The BoardingOS",
                description: "Complete AI infrastructure for multi-suite pet boarding facilities.",
                features: [
                    "24/7 instant lead response and booking",
                    "Integrated vaccine-record and health pre-screening",
                    "Automated stay-reminder and retention sequences",
                    "Integrated multi-pet and loyalty manager"
                ]
            }
        },
        faq: [
            { q: "Can it handle multiple pets at once?", a: "Yes. It identifies the household and suggests shared suites or adjacent units to save the owner money or keep pets together." },
            { q: "Will clients know it's AI?", a: "The AI uses a friendly, pet-loving tone that feels like an extension of your office. Owners appreciate the speed and ease of booking." }
        ],
        layers: [{ department: "Facility Ops", roles: ["Digital Manager", "Lease Bot"], tasks: ["Rent suites 24/7", "Chase missing vaccine records"] }]
    }
];
