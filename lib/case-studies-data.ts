
export interface CaseStudy {
    slug: string
    title: string
    industry: string
    description: string
    challenge: string
    solution: string
    results: {
        metric: string
        value: string
        description: string
    }[]
    testimonial: {
        quote: string
        author: string
        role: string
    }
}

export const CASE_STUDIES: CaseStudy[] = [
    {
        slug: "automotive-leader",
        title: "Automotive Leader",
        industry: "Car Dealership",
        description: "How a premier dealership increased test drive bookings by 50% using AI.",
        challenge: "The dealership was missing 70% of inbound inquiries that came in after hours. Potential buyers were browsing in the evenings but receiving no immediate response, leading them to competitor sites.",
        solution: "We deployed 'Michael', an AI Sales Agent trained on their specific inventory and financing options. Michael engages visitors 24/7, answers questions about specific models, and books test drives directly into the sales CRM.",
        results: [
            { metric: "Lead Capture", value: "140%", description: "Increase in after-hours lead capture" },
            { metric: "Test Drives", value: "50%", description: "Increase in monthly test drive bookings" },
            { metric: "Response Time", value: "< 2s", description: "Average response time to inquiries" }
        ],
        testimonial: {
            quote: "We went from missing leads to waking up to full calendars. The AI handles the tire kickers and qualifies the serious buyers for us.",
            author: "Mike Rodriguez",
            role: "Dealership Owner"
        }
    },
    {
        slug: "real-estate-firm",
        title: "Real Estate Firm",
        industry: "Real Estate",
        description: "Automating property viewings and inquiries for a 50-agent brokerage.",
        challenge: "Agents were overwhelmed by repetitive questions about property details and scheduling viewings, spending 15+ hours a week on administrative tasks instead of closing deals.",
        solution: "Eliana Tech implemented a centralized AI receptionist that handles all property inquiries across Zillow, website, and SMS. It pre-screens tenants/buyers and automatically schedules viewings based on agent availability.",
        results: [
            { metric: "Time Saved", value: "200+", description: "Hours saved monthly across the team" },
            { metric: "Showings", value: "35%", description: "Increase in qualified showings" },
            { metric: "Engagement", value: "24/7", description: "Instant response to every inquiry" }
        ],
        testimonial: {
            quote: "My agents have their weekends back. The AI filters out the noise and only sends us people ready to buy or lease.",
            author: "Sarah Jenkins",
            role: "Broker / Owner"
        }
    },
    {
        slug: "medtech-startup",
        title: "MedTech Scaling",
        industry: "Healthcare / SaaS",
        description: "Scaling customer support from 9-5 to 24/7 without adding headcount.",
        challenge: "A rapidly growing health-tech startup faced a 300% surge in support tickets. They needed to provide round-the-clock triage without hiring a massive overseas support center.",
        solution: "We built a custom AI support agent capable of handling Level 1 and Level 2 queries, including technical troubleshooting and account management. Complex medical issues are smartly escalated to human experts.",
        results: [
            { metric: "Coverage", value: "100%", description: "24/7 support coverage achieved instantly" },
            { metric: "Resolution", value: "85%", description: "Tickets resolved without human intervention" },
            { metric: "Cost Savings", value: "60%", description: "Reduction in support operational costs" }
        ],
        testimonial: {
            quote: "Our customers feel heard instantly. The AI empathy and accuracy are unmatched. It allowed us to scale globally overnight.",
            author: "Dr. James Chen",
            role: "CTO"
        }
    },
    {
        slug: "dental-practice",
        title: "City Dental Care",
        industry: "Dentistry",
        description: "Filling cancellation gaps and triaging emergencies automatically.",
        challenge: "Missed calls during lunch hours and weekends meant lost patients. Emergency triage relied solely on an answering service that couldn't schedule appointments.",
        solution: "An AI Voice and Chat receptionist was integrated to answer calls, screen for dental emergencies (pain, swelling), and book immediate slots or routine checkups directly into the practice management software.",
        results: [
            { metric: "Appointments", value: "25+", description: "New appointments booked monthly via AI" },
            { metric: "Revenue", value: "$12k", description: "Additional monthly revenue from recovered missed calls" },
            { metric: "Patient Sat", value: "4.9/5", description: "Patient satisfaction score with AI booking" }
        ],
        testimonial: {
            quote: "It's like having a receptionist who never takes a break. Our chair utilization is at an all-time high.",
            author: "Elena Vasquez",
            role: "Practice Manager"
        }
    }
]
