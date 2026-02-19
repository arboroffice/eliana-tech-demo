/**
 * Industry-Specific Audit Question Config
 * Maps business categories to custom labels, options, and content for audit steps 2-6
 */

export type BusinessCategory = 'online' | 'local' | 'professional' | 'product'

interface Option { value: string; label: string }
interface FieldOverride { label?: string; placeholder?: string; options?: Option[] }

export interface IndustryConfig {
  stepLabels: string[]
  encouragements: string[]
  step2: {
    productDescription: FieldOverride
    productPricePoint: FieldOverride
    numberOfProducts: FieldOverride
    platform: FieldOverride
    deliveryMethod: FieldOverride
  }
  step3: {
    bottleneck: FieldOverride
  }
  step4: {
    listSize: FieldOverride
    trafficSource: FieldOverride
    conversionRate: FieldOverride
    launchesPerYear: FieldOverride
    churnRate: FieldOverride
    contentCreationHours: FieldOverride
  }
  step5: {
    supportHoursPerWeek: FieldOverride
    onboardingAutomated: FieldOverride
  }
  step6: {
    tools: string[]
    biggestTimeWaste: FieldOverride
    next12MonthsGoal: FieldOverride
    problems: string[]
  }
}

export function getBusinessCategory(businessType: string): BusinessCategory {
  const online = ['course-creator', 'coaching', 'membership', 'saas', 'digital-products', 'newsletter', 'cohort']
  const local = ['home-services', 'healthcare', 'construction', 'restaurant-hospitality']
  const professional = ['agency', 'professional-services', 'real-estate']
  const product = ['ecommerce', 'manufacturing']

  if (online.includes(businessType)) return 'online'
  if (local.includes(businessType)) return 'local'
  if (professional.includes(businessType)) return 'professional'
  if (product.includes(businessType)) return 'product'
  return 'online'
}

export function getIndustryConfig(businessType: string): IndustryConfig {
  return CONFIGS[getBusinessCategory(businessType)]
}

// ─── Configs ──────────────────────────────────────────────────

const CONFIGS: Record<BusinessCategory, IndustryConfig> = {

  // ═══════════════════════════════════════════════════════════
  // ONLINE: course creators, coaches, memberships, SaaS, digital products, newsletters, cohorts
  // ═══════════════════════════════════════════════════════════
  online: {
    stepLabels: ["About You", "Your Product", "Revenue & Growth", "Audience & Acquisition", "Time & Operations", "Tech & Automation", "Let's Go"],
    encouragements: [
      "Great start! Let's look at what you sell.",
      "Nice -- now let's understand your numbers.",
      "Halfway there! Let's look at your audience.",
      "Almost done -- how you spend your time matters most.",
      "Last two steps! Let's see your tech stack.",
      "Final step -- just a few more clicks.",
    ],
    step2: {
      productDescription: { label: "Briefly describe what you sell", placeholder: "e.g. A 12-week coaching program for early-stage SaaS founders..." },
      productPricePoint: {
        label: "Primary Price Point",
        options: [
          { value: "under-50", label: "Under $50" },
          { value: "50-200", label: "$50 - $200" },
          { value: "200-1k", label: "$200 - $1,000" },
          { value: "1k-5k", label: "$1,000 - $5,000" },
          { value: "5k+", label: "$5,000+" },
          { value: "recurring", label: "Recurring (monthly/annual sub)" },
        ]
      },
      numberOfProducts: {
        label: "Number of Products / Offers",
        options: [
          { value: "1", label: "1 core offer" },
          { value: "2-3", label: "2 - 3 offers" },
          { value: "4-10", label: "4 - 10 products" },
          { value: "10+", label: "10+ products" },
        ]
      },
      platform: {
        label: "Primary Platform",
        options: [
          { value: "kajabi", label: "Kajabi" },
          { value: "teachable", label: "Teachable" },
          { value: "skool", label: "Skool" },
          { value: "circle", label: "Circle" },
          { value: "gumroad", label: "Gumroad" },
          { value: "shopify", label: "Shopify" },
          { value: "wordpress", label: "WordPress" },
          { value: "custom-saas", label: "Custom-built SaaS" },
          { value: "stripe-direct", label: "Stripe (direct)" },
          { value: "other", label: "Other" },
        ]
      },
      deliveryMethod: {
        label: "How do you deliver?",
        options: [
          { value: "self-paced", label: "Self-paced (async)" },
          { value: "live", label: "Live (calls, cohorts)" },
          { value: "hybrid", label: "Hybrid (mix of both)" },
          { value: "software", label: "Software / SaaS product" },
          { value: "done-for-you", label: "Done-for-you service" },
        ]
      },
    },
    step3: {
      bottleneck: {
        options: [
          { value: "traffic", label: "Traffic / audience growth" },
          { value: "conversion", label: "Conversion (traffic but no sales)" },
          { value: "fulfillment", label: "Fulfillment / delivery at scale" },
          { value: "churn", label: "Churn / retention" },
          { value: "time", label: "Time (I'm the bottleneck)" },
          { value: "team", label: "Team / hiring" },
        ]
      },
    },
    step4: {
      listSize: {
        label: "Email List / User Base Size",
        options: [
          { value: "under-1k", label: "Under 1,000" },
          { value: "1k-5k", label: "1,000 - 5,000" },
          { value: "5k-10k", label: "5,000 - 10,000" },
          { value: "10k-50k", label: "10,000 - 50,000" },
          { value: "50k+", label: "50,000+" },
        ]
      },
      trafficSource: {
        label: "Primary Traffic / Lead Source",
        options: [
          { value: "organic-social", label: "Organic social (Twitter/X, LinkedIn, IG, TikTok)" },
          { value: "paid-ads", label: "Paid ads (Meta, Google, YouTube)" },
          { value: "seo", label: "SEO / Content marketing" },
          { value: "email", label: "Email list" },
          { value: "affiliates", label: "Affiliates / Partnerships" },
          { value: "referrals", label: "Word of mouth / Referrals" },
          { value: "mixed", label: "Mix of several" },
        ]
      },
      conversionRate: {
        label: "Visitor / Lead to Customer Conversion Rate",
        options: [
          { value: "under-1", label: "Under 1%" },
          { value: "1-3", label: "1 - 3%" },
          { value: "3-5", label: "3 - 5%" },
          { value: "5-10", label: "5 - 10%" },
          { value: "10+", label: "10%+" },
          { value: "unknown", label: "I don't know" },
        ]
      },
      launchesPerYear: {
        label: "Launches or Campaigns Per Year",
        options: [
          { value: "0-1", label: "0 - 1 (evergreen only)" },
          { value: "2-4", label: "2 - 4 launches" },
          { value: "5-8", label: "5 - 8 launches" },
          { value: "continuous", label: "Continuous (always selling)" },
        ]
      },
      churnRate: {
        label: "Churn / Refund Rate",
        options: [
          { value: "under-5", label: "Under 5% (healthy)" },
          { value: "5-10", label: "5 - 10%" },
          { value: "10-20", label: "10 - 20% (needs work)" },
          { value: "20+", label: "20%+ (urgent)" },
          { value: "unknown", label: "I don't track this" },
        ]
      },
      contentCreationHours: {
        label: "Hours / Week on Content Creation",
        options: [
          { value: "under-5", label: "Under 5 hours" },
          { value: "5-10", label: "5 - 10 hours" },
          { value: "10-20", label: "10 - 20 hours" },
          { value: "20+", label: "20+ hours" },
        ]
      },
    },
    step5: {
      supportHoursPerWeek: { label: "Hours / Week on Support & Admin" },
      onboardingAutomated: { label: "Is your onboarding / delivery automated?" },
    },
    step6: {
      tools: [
        "Kajabi / Teachable / Thinkific",
        "Skool / Circle / Mighty Networks",
        "ConvertKit / Mailchimp / ActiveCampaign",
        "Stripe / PayPal",
        "Zapier / Make",
        "Slack / Discord",
        "Notion / ClickUp / Asana",
        "Webflow / WordPress",
        "Intercom / Zendesk / Crisp",
        "Analytics (GA, Mixpanel, etc.)",
        "CRM (HubSpot, Pipedrive, etc.)",
        "Calendar Booking (Cal, Calendly)",
      ],
      biggestTimeWaste: { placeholder: "e.g. Answering DMs, onboarding calls, content editing..." },
      next12MonthsGoal: { placeholder: "e.g. Hit $1M ARR, launch new product, take a month off" },
      problems: [
        "Burnout / overwork",
        "High churn / refunds",
        "Inconsistent revenue",
        "Support overwhelm",
        "Can't scale without hiring",
        "Content creation hamster wheel",
        "Low conversion rates",
        "Tech overwhelm",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════
  // LOCAL SERVICES: home services, healthcare, construction, restaurants
  // ═══════════════════════════════════════════════════════════
  local: {
    stepLabels: ["About You", "Your Services", "Revenue & Growth", "Customers & Marketing", "Time & Operations", "Tech & Automation", "Let's Go"],
    encouragements: [
      "Great start! Let's learn about your services.",
      "Nice -- now let's understand your numbers.",
      "Halfway there! Let's look at your customers.",
      "Almost done -- how you spend your time matters most.",
      "Last two steps! Let's see your systems.",
      "Final step -- just a few more clicks.",
    ],
    step2: {
      productDescription: { label: "Briefly describe your core services", placeholder: "e.g. Residential HVAC installation, repair, and maintenance contracts..." },
      productPricePoint: {
        label: "Average Job / Service Value",
        options: [
          { value: "under-50", label: "Under $200" },
          { value: "50-200", label: "$200 - $500" },
          { value: "200-1k", label: "$500 - $2,000" },
          { value: "1k-5k", label: "$2,000 - $10,000" },
          { value: "5k+", label: "$10,000+" },
          { value: "recurring", label: "Recurring (maintenance contracts)" },
        ]
      },
      numberOfProducts: {
        label: "Number of Service Lines",
        options: [
          { value: "1", label: "1 core service" },
          { value: "2-3", label: "2 - 3 services" },
          { value: "4-10", label: "4 - 10 service lines" },
          { value: "10+", label: "Full-service provider (10+)" },
        ]
      },
      platform: {
        label: "Booking / Dispatch System",
        options: [
          { value: "servicetitan", label: "ServiceTitan" },
          { value: "jobber", label: "Jobber" },
          { value: "housecall-pro", label: "Housecall Pro" },
          { value: "other-scheduling", label: "Other scheduling software" },
          { value: "google", label: "Google Calendar / Sheets" },
          { value: "manual", label: "Phone / pen & paper" },
          { value: "other", label: "Other" },
        ]
      },
      deliveryMethod: {
        label: "Service Delivery Model",
        options: [
          { value: "on-site", label: "On-site (at customer location)" },
          { value: "in-office", label: "In-office / In-store" },
          { value: "hybrid", label: "Both on-site and in-office" },
          { value: "emergency", label: "Emergency / on-call service" },
          { value: "project", label: "Project-based (multi-day)" },
        ]
      },
    },
    step3: {
      bottleneck: {
        options: [
          { value: "traffic", label: "Getting more leads / calls" },
          { value: "conversion", label: "Closing leads into booked jobs" },
          { value: "fulfillment", label: "Scheduling / dispatch efficiency" },
          { value: "churn", label: "Customer retention / repeat business" },
          { value: "time", label: "I'm the bottleneck (doing everything)" },
          { value: "team", label: "Hiring / managing crews" },
        ]
      },
    },
    step4: {
      listSize: {
        label: "Number of Active Customers",
        options: [
          { value: "under-1k", label: "Under 100" },
          { value: "1k-5k", label: "100 - 500" },
          { value: "5k-10k", label: "500 - 2,000" },
          { value: "10k-50k", label: "2,000 - 10,000" },
          { value: "50k+", label: "10,000+" },
        ]
      },
      trafficSource: {
        label: "Primary Lead Source",
        options: [
          { value: "seo", label: "Google Search / SEO" },
          { value: "paid-ads", label: "Google LSA / Paid Ads" },
          { value: "organic-social", label: "Yelp / Angi / HomeAdvisor" },
          { value: "email", label: "Direct mail / door hangers" },
          { value: "affiliates", label: "Partnerships / contractors" },
          { value: "referrals", label: "Word of mouth / referrals" },
          { value: "mixed", label: "Mix of several" },
        ]
      },
      conversionRate: {
        label: "Lead to Booked Job Close Rate",
        options: [
          { value: "under-1", label: "Under 20%" },
          { value: "1-3", label: "20 - 40%" },
          { value: "3-5", label: "40 - 60%" },
          { value: "5-10", label: "60 - 80%" },
          { value: "10+", label: "80%+" },
          { value: "unknown", label: "I don't track this" },
        ]
      },
      launchesPerYear: {
        label: "Average Jobs / Appointments Per Week",
        options: [
          { value: "0-1", label: "Under 5" },
          { value: "2-4", label: "5 - 15" },
          { value: "5-8", label: "15 - 30" },
          { value: "continuous", label: "30+ (high volume)" },
        ]
      },
      churnRate: {
        label: "Customer Loss / Complaint Rate",
        options: [
          { value: "under-5", label: "Under 5% (excellent)" },
          { value: "5-10", label: "5 - 10%" },
          { value: "10-20", label: "10 - 20% (needs work)" },
          { value: "20+", label: "20%+ (urgent)" },
          { value: "unknown", label: "I don't track this" },
        ]
      },
      contentCreationHours: {
        label: "Hours / Week on Marketing & Social Media",
        options: [
          { value: "under-5", label: "Under 5 hours" },
          { value: "5-10", label: "5 - 10 hours" },
          { value: "10-20", label: "10 - 20 hours" },
          { value: "20+", label: "20+ hours" },
        ]
      },
    },
    step5: {
      supportHoursPerWeek: { label: "Hours / Week on Calls, Scheduling & Admin" },
      onboardingAutomated: { label: "Is your scheduling / dispatch automated?" },
    },
    step6: {
      tools: [
        "ServiceTitan / Jobber / Housecall Pro",
        "QuickBooks / FreshBooks / Wave",
        "Google Workspace / Calendar",
        "CRM (HubSpot, Salesforce, etc.)",
        "Scheduling (Calendly, Setmore, etc.)",
        "Review Management (Birdeye, Podium)",
        "GPS / Fleet Tracking",
        "Slack / Teams",
        "Square / Stripe / Payment Processing",
        "Mailchimp / Constant Contact",
        "Social Media Management",
        "Zapier / Make",
      ],
      biggestTimeWaste: { placeholder: "e.g. Phone calls, dispatching, invoicing, following up..." },
      next12MonthsGoal: { placeholder: "e.g. Double revenue, hire 3 technicians, open new territory" },
      problems: [
        "Burnout / overwork",
        "Not enough leads / calls",
        "Inconsistent revenue",
        "Scheduling chaos",
        "Can't find good employees",
        "Too much time on phone & admin",
        "Seasonal slowdowns",
        "Tech overwhelm",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════
  // PROFESSIONAL: agencies, professional services, real estate
  // ═══════════════════════════════════════════════════════════
  professional: {
    stepLabels: ["About You", "Your Services", "Revenue & Growth", "Clients & Pipeline", "Time & Operations", "Tech & Automation", "Let's Go"],
    encouragements: [
      "Great start! Let's learn about your services.",
      "Nice -- now let's understand your numbers.",
      "Halfway there! Let's look at your pipeline.",
      "Almost done -- how you spend your time matters most.",
      "Last two steps! Let's see your systems.",
      "Final step -- just a few more clicks.",
    ],
    step2: {
      productDescription: { label: "Briefly describe your services", placeholder: "e.g. Full-service digital marketing agency for B2B SaaS companies..." },
      productPricePoint: {
        label: "Average Engagement / Project Value",
        options: [
          { value: "under-50", label: "Under $500" },
          { value: "50-200", label: "$500 - $2,000" },
          { value: "200-1k", label: "$2,000 - $5,000" },
          { value: "1k-5k", label: "$5,000 - $15,000" },
          { value: "5k+", label: "$15,000+" },
          { value: "recurring", label: "Recurring retainer" },
        ]
      },
      numberOfProducts: {
        label: "Number of Service Offerings",
        options: [
          { value: "1", label: "1 core service" },
          { value: "2-3", label: "2 - 3 services" },
          { value: "4-10", label: "4 - 10 service lines" },
          { value: "10+", label: "Full-service firm (10+)" },
        ]
      },
      platform: {
        label: "Project / Practice Management System",
        options: [
          { value: "notion", label: "Notion" },
          { value: "clickup", label: "ClickUp" },
          { value: "asana", label: "Asana / Monday.com" },
          { value: "practice-mgmt", label: "Practice management software" },
          { value: "crm", label: "CRM (HubSpot, Salesforce)" },
          { value: "spreadsheets", label: "Spreadsheets / manual" },
          { value: "other", label: "Other" },
        ]
      },
      deliveryMethod: {
        label: "Service Delivery Model",
        options: [
          { value: "retainer", label: "Retainer (ongoing monthly)" },
          { value: "project", label: "Project-based" },
          { value: "hourly", label: "Hourly billing" },
          { value: "hybrid", label: "Mix of retainer & project" },
          { value: "done-for-you", label: "Done-for-you / managed service" },
        ]
      },
    },
    step3: {
      bottleneck: {
        options: [
          { value: "traffic", label: "Client acquisition / pipeline" },
          { value: "conversion", label: "Closing deals (proposals but no sales)" },
          { value: "fulfillment", label: "Delivery / capacity at scale" },
          { value: "churn", label: "Client retention / renewals" },
          { value: "time", label: "I'm the bottleneck (doing everything)" },
          { value: "team", label: "Hiring / managing talent" },
        ]
      },
    },
    step4: {
      listSize: {
        label: "Number of Active Clients",
        options: [
          { value: "under-1k", label: "Under 10" },
          { value: "1k-5k", label: "10 - 30" },
          { value: "5k-10k", label: "30 - 100" },
          { value: "10k-50k", label: "100 - 500" },
          { value: "50k+", label: "500+" },
        ]
      },
      trafficSource: {
        label: "Primary Client Acquisition Channel",
        options: [
          { value: "referrals", label: "Referrals / word of mouth" },
          { value: "organic-social", label: "LinkedIn / networking" },
          { value: "seo", label: "SEO / content marketing" },
          { value: "paid-ads", label: "Paid ads" },
          { value: "affiliates", label: "Partnerships / alliances" },
          { value: "email", label: "Cold outreach / email" },
          { value: "mixed", label: "Mix of several" },
        ]
      },
      conversionRate: {
        label: "Proposal to Client Close Rate",
        options: [
          { value: "under-1", label: "Under 15%" },
          { value: "1-3", label: "15 - 30%" },
          { value: "3-5", label: "30 - 50%" },
          { value: "5-10", label: "50 - 70%" },
          { value: "10+", label: "70%+" },
          { value: "unknown", label: "I don't track this" },
        ]
      },
      launchesPerYear: {
        label: "New Clients Per Month (Average)",
        options: [
          { value: "0-1", label: "0 - 1" },
          { value: "2-4", label: "2 - 4" },
          { value: "5-8", label: "5 - 10" },
          { value: "continuous", label: "10+ (high volume)" },
        ]
      },
      churnRate: {
        label: "Client Churn / Loss Rate (Annual)",
        options: [
          { value: "under-5", label: "Under 5% (excellent retention)" },
          { value: "5-10", label: "5 - 10%" },
          { value: "10-20", label: "10 - 20% (needs work)" },
          { value: "20+", label: "20%+ (urgent)" },
          { value: "unknown", label: "I don't track this" },
        ]
      },
      contentCreationHours: {
        label: "Hours / Week on Biz Dev & Marketing",
        options: [
          { value: "under-5", label: "Under 5 hours" },
          { value: "5-10", label: "5 - 10 hours" },
          { value: "10-20", label: "10 - 20 hours" },
          { value: "20+", label: "20+ hours" },
        ]
      },
    },
    step5: {
      supportHoursPerWeek: { label: "Hours / Week on Client Communication & Admin" },
      onboardingAutomated: { label: "Is your client intake / onboarding automated?" },
    },
    step6: {
      tools: [
        "CRM (HubSpot, Salesforce, Pipedrive)",
        "Project Management (ClickUp, Asana, Monday)",
        "Slack / Microsoft Teams",
        "QuickBooks / Xero / FreshBooks",
        "Scheduling (Cal, Calendly)",
        "Email Marketing (Mailchimp, ActiveCampaign)",
        "Document Management (Google Drive, Dropbox)",
        "Time Tracking (Toggl, Harvest)",
        "Proposals (PandaDoc, DocuSign)",
        "Analytics (Google Analytics, etc.)",
        "Zapier / Make",
        "Notion / Wiki / Knowledge Base",
      ],
      biggestTimeWaste: { placeholder: "e.g. Proposals, client follow-ups, reporting, admin..." },
      next12MonthsGoal: { placeholder: "e.g. Double revenue, hire 5 people, systematize delivery" },
      problems: [
        "Burnout / overwork",
        "Feast-or-famine revenue",
        "Client acquisition",
        "Scope creep",
        "Can't scale without hiring",
        "Proposal / admin overhead",
        "Client communication overhead",
        "Tech overwhelm",
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════
  // PRODUCT: ecommerce, manufacturing / logistics
  // ═══════════════════════════════════════════════════════════
  product: {
    stepLabels: ["About You", "Your Products", "Revenue & Growth", "Customers & Sales", "Time & Operations", "Tech & Automation", "Let's Go"],
    encouragements: [
      "Great start! Let's learn about your products.",
      "Nice -- now let's understand your numbers.",
      "Halfway there! Let's look at your customers.",
      "Almost done -- how you spend your time matters most.",
      "Last two steps! Let's see your systems.",
      "Final step -- just a few more clicks.",
    ],
    step2: {
      productDescription: { label: "Briefly describe your products", placeholder: "e.g. Premium skincare products sold DTC and wholesale..." },
      productPricePoint: {
        label: "Average Order Value",
        options: [
          { value: "under-50", label: "Under $50" },
          { value: "50-200", label: "$50 - $200" },
          { value: "200-1k", label: "$200 - $1,000" },
          { value: "1k-5k", label: "$1,000 - $5,000" },
          { value: "5k+", label: "$5,000+" },
          { value: "recurring", label: "Subscription / recurring" },
        ]
      },
      numberOfProducts: {
        label: "Number of Products / SKUs",
        options: [
          { value: "1", label: "1 core product" },
          { value: "2-3", label: "2 - 10 products" },
          { value: "4-10", label: "10 - 100 SKUs" },
          { value: "10+", label: "100+ SKUs" },
        ]
      },
      platform: {
        label: "Primary Sales Platform",
        options: [
          { value: "shopify", label: "Shopify" },
          { value: "woocommerce", label: "WooCommerce" },
          { value: "amazon", label: "Amazon" },
          { value: "etsy", label: "Etsy" },
          { value: "wholesale", label: "Wholesale / B2B" },
          { value: "custom", label: "Custom website" },
          { value: "other", label: "Other" },
        ]
      },
      deliveryMethod: {
        label: "Fulfillment Model",
        options: [
          { value: "self-fulfilled", label: "Self-fulfilled (warehouse / office)" },
          { value: "3pl", label: "3PL / fulfillment center" },
          { value: "dropship", label: "Dropship" },
          { value: "hybrid", label: "Mix of methods" },
          { value: "digital", label: "Digital / no shipping" },
        ]
      },
    },
    step3: {
      bottleneck: {
        options: [
          { value: "traffic", label: "Getting more traffic / sales" },
          { value: "conversion", label: "Conversion rate (traffic but low sales)" },
          { value: "fulfillment", label: "Fulfillment / inventory management" },
          { value: "churn", label: "Repeat purchases / customer retention" },
          { value: "time", label: "I'm the bottleneck (doing everything)" },
          { value: "team", label: "Team / hiring / operations" },
        ]
      },
    },
    step4: {
      listSize: {
        label: "Total Customer Base Size",
        options: [
          { value: "under-1k", label: "Under 500" },
          { value: "1k-5k", label: "500 - 5,000" },
          { value: "5k-10k", label: "5,000 - 20,000" },
          { value: "10k-50k", label: "20,000 - 100,000" },
          { value: "50k+", label: "100,000+" },
        ]
      },
      trafficSource: {
        label: "Primary Sales / Traffic Channel",
        options: [
          { value: "organic-social", label: "Social media (IG, TikTok, Pinterest)" },
          { value: "paid-ads", label: "Paid ads (Meta, Google Shopping)" },
          { value: "seo", label: "SEO / organic search" },
          { value: "email", label: "Email marketing" },
          { value: "affiliates", label: "Affiliates / influencers" },
          { value: "referrals", label: "Word of mouth / referrals" },
          { value: "mixed", label: "Mix of several" },
        ]
      },
      conversionRate: {
        label: "Website / Store Conversion Rate",
        options: [
          { value: "under-1", label: "Under 1%" },
          { value: "1-3", label: "1 - 3%" },
          { value: "3-5", label: "3 - 5%" },
          { value: "5-10", label: "5 - 10%" },
          { value: "10+", label: "10%+" },
          { value: "unknown", label: "I don't know" },
        ]
      },
      launchesPerYear: {
        label: "Average Orders Per Month",
        options: [
          { value: "0-1", label: "Under 50" },
          { value: "2-4", label: "50 - 500" },
          { value: "5-8", label: "500 - 2,000" },
          { value: "continuous", label: "2,000+ (high volume)" },
        ]
      },
      churnRate: {
        label: "Return / Refund Rate",
        options: [
          { value: "under-5", label: "Under 5% (healthy)" },
          { value: "5-10", label: "5 - 10%" },
          { value: "10-20", label: "10 - 20% (needs work)" },
          { value: "20+", label: "20%+ (urgent)" },
          { value: "unknown", label: "I don't track this" },
        ]
      },
      contentCreationHours: {
        label: "Hours / Week on Marketing & Content",
        options: [
          { value: "under-5", label: "Under 5 hours" },
          { value: "5-10", label: "5 - 10 hours" },
          { value: "10-20", label: "10 - 20 hours" },
          { value: "20+", label: "20+ hours" },
        ]
      },
    },
    step5: {
      supportHoursPerWeek: { label: "Hours / Week on Support & Customer Service" },
      onboardingAutomated: { label: "Is your order fulfillment automated?" },
    },
    step6: {
      tools: [
        "Shopify / WooCommerce / BigCommerce",
        "Amazon Seller Central",
        "Inventory Management (TradeGecko, Cin7)",
        "Shipping (ShipStation, Shippo)",
        "QuickBooks / Xero",
        "Email Marketing (Klaviyo, Mailchimp)",
        "CRM (HubSpot, etc.)",
        "Analytics (Google Analytics, Triple Whale)",
        "Social Media Management",
        "Review Management (Yotpo, Stamped)",
        "Zapier / Make",
        "Design (Canva, Adobe)",
      ],
      biggestTimeWaste: { placeholder: "e.g. Order processing, inventory updates, customer emails, returns..." },
      next12MonthsGoal: { placeholder: "e.g. Double revenue, launch wholesale channel, automate fulfillment" },
      problems: [
        "Burnout / overwork",
        "Inventory management",
        "Inconsistent sales",
        "High return rates",
        "Shipping / fulfillment issues",
        "Marketing overwhelm",
        "Cash flow",
        "Tech overwhelm",
      ],
    },
  },
}
