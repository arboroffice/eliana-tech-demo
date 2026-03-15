import { industries } from "@/lib/industry-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const industryCategories = [
  {
    slug: "saas",
    name: "SaaS Founders",
    description: "AI infrastructure for B2B and B2C SaaS platforms.",
    subNiches: ["saas"] // mapped to existing slugs
  },
  {
    slug: "course-creators",
    name: "Course Creators",
    description: "Automating student success, onboarding, and upsells.",
    subNiches: ["course-creators"]
  },
  {
    slug: "coaching",
    name: "Coaches & Consultants",
    description: "AI triage, booking, and prep for high-ticket coaching.",
    subNiches: ["coaching"]
  },
  {
    slug: "ecommerce",
    name: "E-commerce & Retail",
    description: "Streamlining inventory, customer support, and fulfillment.",
    subNiches: ["ecommerce"]
  },
  {
    slug: "agencies",
    name: "Agencies",
    description: "Scale client delivery without scaling headcount.",
    subNiches: ["agencies"]
  },
  {
    slug: "home-services",
    name: "Home Services",
    description: "Lead follow-up, dispatch, and billing for local operators.",
    subNiches: ["home-services", "storm-restoration", "roofing", "commercial-home-services", "solar-installers", "commercial-cleaning", "pool-construction"]
  },
  {
    slug: "healthcare",
    name: "Healthcare & Dental",
    description: "HIPAA-compliant intake and patient coordination.",
    subNiches: ["healthcare", "med-spas", "plastic-surgery", "senior-living"]
  },
  {
    slug: "legal-finance",
    name: "Law Firms & Accounting",
    description: "Automated document prep and client communication.",
    subNiches: ["legal-finance", "mortgage-brokers", "private-equity", "financial-advisors"]
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description: "24/7 concierge tools for buyers and sellers.",
    subNiches: ["real-estate", "luxury-real-estate"]
  },
  {
    slug: "hospitality",
    name: "Restaurants & Hospitality",
    description: "Guest management, reservations, and back-of-house AI.",
    subNiches: ["hospitality", "franchise-owners", "venues-events", "yacht-charters"]
  },
  {
    slug: "construction",
    name: "Construction & Trades",
    description: "Project updates, change orders, and sub routing.",
    subNiches: ["construction", "custom-home-builders"]
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Logistics",
    description: "Supply chain, inventory, and floor automation.",
    subNiches: ["manufacturing", "logistics-freight", "agricultural", "dealerships"]
  },
  {
    slug: "membership",
    name: "Membership & Community",
    description: "Dunning recovery, onboarding, and proactive retention.",
    subNiches: ["membership", "gyms-fitness"]
  },
  {
    slug: "digital-products",
    name: "Digital Products",
    description: "Scale fulfillment and post-purchase sequences.",
    subNiches: ["digital-products"]
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    description: "AI paraplanners and digital Chiefs of Staff.",
    subNiches: ["professional-services", "staffing-agencies", "personal-concierge"]
  }
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = industryCategories.find(c => c.slug === params.slug);

  if (!category) {
    return (
      <div className="fn bg-black min-h-screen text-white pt-32 pb-24 px-6 md:px-12 w-full text-center">
        <h1 className="text-4xl">Category Not Found</h1>
        <Link href="/" className="mt-8 text-[var(--fn-primary)] hover:underline inline-block">Return Home</Link>
      </div>
    );
  }

  const subIndustries = industries.filter(ind => category.subNiches.includes(ind.slug));

  return (
    <div className="fn bg-black min-h-screen text-white font-sans w-full">
      <main className="pt-32 pb-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="mb-16 border-b border-[#222] pb-12">
          <Link href="/" className="text-sm text-[#888] hover:text-white uppercase tracking-wider mb-6 inline-flex border border-[#333] px-3 py-1 rounded-sm items-center gap-2">
            ← Back
          </Link>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mt-6 mb-4 font-serif uppercase">
            {category.name}
          </h1>
          <p className="text-xl text-[#888] max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </div>

        <h2 className="text-2xl font-light tracking-wide uppercase text-[var(--fn-primary)] mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[var(--fn-primary)]" />
          Specific Playbooks
        </h2>

        {subIndustries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subIndustries.map((ind) => (
              <Link 
                key={ind.slug} 
                href={`/industries/${ind.slug}`} 
                className="group border border-[#222] bg-[#0A0A0A] p-6 hover:border-[var(--fn-primary)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--fn-primary)] to-transparent opacity-0 translate-x-[-100%] group-hover:animate-shine pointer-events-none" />
                
                <h3 className="text-xl tracking-wide uppercase mb-3 text-white group-hover:text-[var(--fn-primary)] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed mb-6 line-clamp-3">
                  {ind.problem}
                </p>
                <div className="flex items-center text-xs font-bold tracking-widest text-white mt-auto group-hover:text-[var(--fn-primary)] transition-colors">
                  VIEW PLAYBOOK <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-[#666] italic">No specific playbooks yet mapped for this category.</p>
        )}
      </main>
    </div>
  );
}
