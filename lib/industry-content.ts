export type StageData = {
    title: string
    revenue: string
    team: string
    investment: string
    description: string
    automations: {
        category: string
        icon: string
        items: string[]
        examples?: string[]
    }[]
    ai_automations: {
        title: string
        items: string[]
    }
}

export const GROWTH_STAGES: StageData[] = [
    {
        title: "Stage 1-2: Startup Foundation",
        revenue: "Early Revenue",
        team: "1-5 People",
        investment: "Foundational Partner",
        description: "You're wearing all the hats. These automations help you stop doing everything manually so you can focus on growth.",
        automations: [
            {
                category: "Sales & Revenue",
                icon: "💰",
                items: [
                    "CRM setup and configuration (HubSpot, Pipedrive, etc.)",
                    "Automatic lead capture from website forms",
                    "Follow-up email sequences (5-10 emails that send automatically)",
                    "Quote and proposal templates with auto-fill",
                    "Appointment scheduling automation (Calendly integration)",
                    "Lead scoring basics (hot, warm, cold)",
                    "10 pre-written email templates for common situations",
                    "Inventory and stock level optimization",
                    "Invoice automation and payment reminders",
                ],
            },
            {
                category: "Marketing & Lead Gen",
                icon: "📣",
                items: [
                    "Brand basics (logo usage, colors, voice guidelines)",
                    "Website optimization for lead capture",
                    "Social media profile setup and optimization",
                    "Content calendar template (30-day plan)",
                    "Product listing and marketplace optimization",
                    "Basic SEO setup (keywords, meta descriptions)",
                    "Email newsletter setup and welcome sequence",
                    "Review request automation",
                    "Referral program setup with tracking",
                    "Lead magnet creation (PDF guide, checklist)",
                ],
            },
            {
                category: "Operations & Delivery",
                icon: "⚙️",
                items: [
                    "5-10 core process SOPs (Standard Operating Procedures)",
                    "Quality control checklists",
                    "Scheduling and calendar automation",
                    "Job/project tracking system",
                    "Basic inventory tracking",
                    "Training videos for common tasks (5-10 videos)",
                    "File organization and naming system",
                    "Customer communication templates",
                    "Service agreement and contract templates",
                ],
            },
            {
                category: "Finance & Accounting",
                icon: "📊",
                items: [
                    "Bookkeeping system setup (QuickBooks, Xero)",
                    "Cash flow tracking dashboard",
                    "Expense categorization automation",
                    "Invoice templates and numbering system",
                    "Basic financial forecasting (3-month view)",
                    "Profit margin calculator by service/product",
                    "Tax prep organization system",
                    "Receipt capture and storage automation",
                ],
            },
            {
                category: "People & HR",
                icon: "👥",
                items: [
                    "Job posting templates",
                    "Hiring process documentation",
                    "Interview question bank",
                    "New hire onboarding checklist",
                    "Employee handbook template",
                    "Time tracking setup",
                    "Basic payroll system integration",
                    "Contractor agreement templates",
                ],
            },
            {
                category: "Technology",
                icon: "🔧",
                items: [
                    "Tech stack audit (what tools do you actually need?)",
                    "Tool consolidation (eliminate redundant subscriptions)",
                    "Basic integrations (connect your tools together)",
                    "Password management setup",
                    "Cloud storage organization",
                    "Security basics (2FA, backup systems)",
                    "Tech roadmap for next 6 months",
                ],
            },
            {
                category: "Customer Experience",
                icon: "⭐",
                items: [
                    "Customer journey mapping",
                    "Feedback collection automation",
                    "Review request automation",
                    "Thank you and follow-up sequences",
                    "Birthday/anniversary automation",
                    "Re-engagement campaigns",
                    "FAQ and help documentation",
                ],
            },
        ],
        ai_automations: {
            title: "AI Automations (Stage 1-2)",
            items: [
                "AI chatbot for website (answer common questions 24/7)",
                "AI content creation setup (blog posts, social media)",
                "AI email writing assistant",
                "3 custom AI automations for your top time-wasters",
                "AI appointment booking assistant",
                "AI-powered lead qualification"
            ]
        }
    },
    {
        title: "Stage 3-4: Growth & Real Company",
        revenue: "Scaling Operations",
        team: "5-50 People",
        investment: "Growth Partner",
        description: "You have a team now. These automations help your business run without you being involved in every decision.",
        automations: [
            {
                category: "Sales & Revenue",
                icon: "💰",
                items: [
                    "Complete sales playbook (scripts, objection handling, closing)",
                    "Full pipeline automation with stage-based triggers",
                    "Sales training program for new hires",
                    "Revenue forecasting system with accuracy tracking",
                    "Commission and compensation structure design",
                    "Territory assignment and management",
                    "Deal scoring and prioritization automation",
                    "Competitive intelligence tracking",
                    "Upsell and cross-sell automation",
                    "Renewal tracking and automation",
                    "Sales performance dashboards",
                ],
            },
            {
                category: "Marketing & Lead Gen",
                icon: "📣",
                items: [
                    "Full marketing automation platform (HubSpot, ActiveCampaign)",
                    "Multi-step funnel optimization",
                    "Content strategy with editorial calendar",
                    "Paid advertising management",
                    "Lead attribution tracking",
                    "A/B testing automation",
                    "Landing page optimization",
                    "Webinar and event automation",
                    "Partner and affiliate program setup",
                    "Marketing ROI dashboards",
                    "Retargeting and remarketing campaigns"
                ],
            },
            {
                category: "Operations & Delivery",
                icon: "⚙️",
                items: [
                    "Full process optimization across all departments",
                    "Quality management system (QMS)",
                    "Capacity planning automation",
                    "Vendor management and procurement system",
                    "Compliance tracking basics",
                    "Project management automation (Asana, Monday, ClickUp)",
                    "Resource allocation optimization",
                    "SLA monitoring and alerts",
                    "Workflow approval automation",
                    "Document management system",
                    "Incident and issue tracking"
                ],
            },
            {
                category: "Finance & Accounting",
                icon: "📊",
                items: [
                    "FP&A (Financial Planning & Analysis) setup",
                    "Annual and quarterly budgeting system",
                    "Profitability analysis by service/product/client",
                    "Financial dashboards with real-time data",
                    "Controller-level financial support",
                    "Cash flow forecasting (12-month view)",
                    "Accounts receivable automation",
                    "Accounts payable automation",
                    "Financial reporting automation",
                    "Bank reconciliation automation"
                ]
            },
            {
                category: "People & HR",
                icon: "👥",
                items: [
                    "Full HR infrastructure (HRIS setup)",
                    "Recruiting automation (job posting to 50+ sites)",
                    "Applicant tracking system (ATS)",
                    "Training programs for each role",
                    "Compensation structure and salary bands",
                    "Performance review automation",
                    "Culture building programs",
                    "Benefits administration",
                    "Employee engagement surveys",
                    "Offboarding automation",
                    "Org chart and succession planning"
                ]
            },
            {
                category: "Technology",
                icon: "🔧",
                items: [
                    "Platform selection and migration support",
                    "Integration platform (Zapier, Make, custom APIs)",
                    "Data architecture and database design",
                    "Security upgrade (SOC 2 prep, penetration testing)",
                    "IT support system setup",
                    "Business intelligence dashboards",
                    "Mobile app integration",
                    "API development for custom integrations",
                    "Disaster recovery planning"
                ]
            },
            {
                category: "Customer Experience",
                icon: "⭐",
                items: [
                    "Customer success program",
                    "Churn prediction and prevention automation",
                    "Expansion and upsell playbook",
                    "Health scoring automation",
                    "Support automation (ticketing, routing, escalation)",
                    "Self-service portal and knowledge base",
                    "NPS and CSAT tracking",
                    "Customer segmentation and personalization",
                    "Loyalty program automation"
                ]
            }
        ],
        ai_automations: {
            title: "AI Automations (Stage 3-4)",
            items: [
                "Full AI opportunity assessment across all departments",
                "10+ AI automations implemented",
                "Custom AI agents for your specific workflows",
                "AI-powered sales outreach and personalization",
                "AI customer service system (handle 80% of inquiries)",
                "AI operations optimization",
                "AI-powered reporting and insights",
                "Team AI training program",
                "AI-assisted hiring"
            ]
        }
    },
    {
        title: "Stage 5-6: Scaling Enterprise",
        revenue: "Established Enterprise",
        team: "50-500 People",
        investment: "Scale Partner",
        description: "You're building for scale or exit. These automations create enterprise-grade operations and competitive advantage.",
        automations: [
            {
                category: "Sales & Revenue",
                icon: "💰",
                items: [
                    "Revenue Operations (RevOps) infrastructure",
                    "Sales enablement platform and content library",
                    "Territory optimization with data-driven assignment",
                    "Channel and partner strategy automation",
                    "Enterprise sales capability",
                    "CPQ (Configure, Quotation) automation",
                    "Contract lifecycle management",
                    "Sales intelligence and intent data integration",
                    "Conversation intelligence",
                    "Multi-currency and international sales support"
                ],
            },
            {
                category: "Marketing & Lead Gen",
                icon: "📣",
                items: [
                    "Full marketing transformation",
                    "Account-Based Marketing (ABM) program",
                    "Brand building and PR automation",
                    "International marketing expansion",
                    "Marketing operations optimization",
                    "Predictive analytics for lead scoring",
                    "Customer data platform (CDP) implementation",
                    "Marketing attribution modeling",
                    "Influencer and ambassador program management"
                ],
            },
            {
                category: "Operations & Delivery",
                icon: "⚙️",
                items: [
                    "Operations transformation and reengineering",
                    "Process mining and optimization",
                    "Supply chain optimization",
                    "Risk management framework",
                    "ESG (Environmental, Social, Governance) compliance",
                    "Global operations standardization",
                    "Continuous improvement program",
                    "Vendor consolidation and strategic sourcing",
                    "Business continuity planning"
                ],
            },
            {
                category: "Finance & Accounting",
                icon: "📊",
                items: [
                    "Fractional CFO services",
                    "M&A readiness",
                    "Capital strategy and fundraising support",
                    "Investor relations automation",
                    "IPO preparation and compliance",
                    "Treasury management",
                    "Cross-border tax and international strategy",
                    "Financial modeling and scenario planning",
                    "Board reporting automation",
                    "Audit preparation and management"
                ]
            },
            {
                category: "People & HR",
                icon: "👥",
                items: [
                    "HR transformation",
                    "Leadership development program",
                    "DEI program",
                    "Workforce planning and analytics",
                    "Employee experience platform",
                    "Executive compensation design",
                    "Global HR compliance",
                    "Employer branding automation",
                    "Succession planning",
                    "Learning management system (LMS)"
                ]
            },
            {
                category: "Technology",
                icon: "🔧",
                items: [
                    "Full digital transformation",
                    "Enterprise architecture design",
                    "Cybersecurity program (SOC 2, ISO 27001)",
                    "Cloud strategy and migration",
                    "Data lake and advanced analytics",
                    "Custom software development",
                    "Technology M&A integration",
                    "IT governance framework",
                    "DevOps and CI/CD implementation"
                ]
            },
            {
                category: "Customer Experience",
                icon: "⭐",
                items: [
                    "Enterprise CX transformation",
                    "Global support operations (24/7, multilingual)",
                    "AI-powered service at scale",
                    "Customer data platform with 360° view",
                    "Personalization at scale",
                    "Voice of customer program",
                    "Customer advisory board management",
                    "Community building and management",
                    "Journey orchestration across all channels"
                ]
            }
        ],
        ai_automations: {
            title: "AI Automations (Stage 5-6)",
            items: [
                "Enterprise AI strategy and roadmap",
                "Full AI infrastructure build",
                "Custom AI models trained on your data",
                "AI agents across all departments",
                "AI governance framework",
                "Change management for AI adoption",
                "Dedicated AI team support",
                "Ongoing AI partnership and optimization",
                "Industry-leading AI capabilities"
            ]
        }
    },
]

export const INDUSTRIES = {
    "Info Products & Courses": [
        "Online Course Creators", "Coaching Programs", "Membership Sites",
        "Digital Product Sellers", "Cohort-Based Programs", "Newsletter Operators",
        "Community Builders", "Certification Programs", "Mastermind Groups", "Workshop Facilitators"
    ],
    "Health & Wellness": [
        "Gyms & Fitness Studios", "Spas & Salons", "Chiropractors",
        "Therapists & Counselors", "Coaches", "Yoga & Pilates Studios",
        "Med Spas", "Nutritionists", "Physical Therapists", "Acupuncturists"
    ],
    "Professional Services": [
        "Law Firms", "Accounting Firms", "Real Estate Agents/Brokers",
        "Insurance Agencies", "Consultants", "Financial Advisors",
        "Architects", "Engineers", "Property Managers"
    ],
    "Food & Hospitality": [
        "Restaurants", "Cafes & Coffee Shops", "Caterers", "Food Trucks",
        "Hotels & B&Bs", "Event Venues", "Bakeries", "Bars & Breweries", "Meal Prep Services"
    ],
    "Retail & E-commerce": [
        "Online Stores", "Local Boutiques", "Specialty Shops", "Subscription Boxes",
        "Jewelry Stores", "Pet Stores", "Furniture Stores", "Thrift & Consignment"
    ],
    "Creative & Marketing": [
        "Marketing Agencies", "Photographers", "Videographers", "Graphic Designers",
        "Web Designers", "Content Creators", "PR Firms", "Branding Agencies"
    ],
    "Education & Training": [
        "Tutoring Services", "Online Course Creators", "Private Schools", "Trade Schools",
        "Music Schools", "Driving Schools", "Language Schools", "Corporate Training"
    ],
    "Tech & Software": [
        "Startups", "SaaS Companies", "App Developers", "IT Services",
        "Managed Service Providers", "Cybersecurity Firms", "Data Analytics", "AI/ML Companies"
    ],
    "Healthcare": [
        "Dental Practices", "Medical Clinics", "Optometrists", "Veterinarians",
        "Home Health Care", "Mental Health Practices", "Urgent Care Centers", "Medical Equipment"
    ],
    "Construction & Trades": [
        "General Contractors", "Home Builders", "Remodelers", "Concrete Companies",
        "Excavation", "Welding & Fabrication", "Cabinet Makers", "Solar Installation"
    ],
    "Transportation & Logistics": [
        "Moving Companies", "Delivery Services", "Auto Shops", "Trucking Companies",
        "Towing Services", "Car Detailing", "Courier Services", "Warehousing"
    ],
    "Manufacturing & Production": [
        "Small Manufacturers", "Food Production", "Packaging Companies", "Print Shops",
        "Machine Shops", "Assembly Operations", "Custom Fabrication", "Craft Production"
    ],
    "Wholesale & Distribution": [
        "Industrial Supply", "Food & Beverage Dist.", "Medical Supplies", "Construction Materials",
        "Electronics Wholesale", "Chemical Distribution", "Auto Parts Dist.", "Packaging Supplies"
    ],
    "Energy & Solar": [
        "Solar Installers", "Wind Energy Services", "Battery Storage", "Energy Consultants",
        "EV Charging Installers", "Green Building", "Energy Auditing", "Power Maintenance"
    ],
    "Oil & Gas": [
        "Field Services", "Pipeline Maintenance", "Drilling Support", "Equipment Rental",
        "Safety Consultants", "Land Surveying", "Proppant Logistics", "Water Hauling"
    ],
    "Industrial & B2B Services": [
        "Commercial Cleaning", "Facility Management", "Security Services", "Waste Management",
        "Equipment Rental", "Uniform Services", "Landscaping (Commercial)", "Vending Services"
    ],
    "Legal & Insurance": [
        "Corporate Law", "Personal Injury", "Family Law", "Insurance Agencies",
        "Claims Adjusters", "Risk Management", "Title Companies", "Compliance Firms"
    ],
    "Real Estate Development": [
        "Residential Developers", "Commercial Developers", "Land Developers", "Construction Mgmt",
        "Property Flippers", "Urban Planning", "Site Acquisition", "Project Finance"
    ],
    "Private Equity": [
        "portfolio Operations", "Due Diligence Firms", "Turnaround Consultants", "Venture Capital",
        "Investment Banks", "Asset Management", "Family Offices", "M&A Advisory"
    ]
}
