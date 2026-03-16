"use client"

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
  },
  {
    slug: "solar-installers",
    name: "Solar & Renewables",
    description: "Qualification, appointment setting, and project tracking for solar operators.",
    subNiches: ["solar-installers"]
  },
  {
    slug: "franchise-owners",
    name: "Franchise Owners",
    description: "Multi-location HR, training, and operational auditing.",
    subNiches: ["franchise-owners"]
  },
  {
    slug: "private-equity",
    name: "Private Equity & M&A",
    description: "Accelerated due diligence and post-acquisition margin expansion.",
    subNiches: ["private-equity"]
  },
  {
    slug: "staffing-agencies",
    name: "Staffing & Recruiting",
    description: "Automated candidate sourcing, screening, and database reactivation.",
    subNiches: ["staffing-agencies"]
  },
  {
    slug: "logistics-freight",
    name: "Logistics & Freight",
    description: "Autonomous dispatch, load bidding, and billing automation.",
    subNiches: ["logistics-freight"]
  },
  {
    slug: "med-spas",
    name: "Med Spas & Aesthetics",
    description: "24/7 patient coordination, booking, and membership management.",
    subNiches: ["med-spas"]
  },
  {
    slug: "mortgage-brokers",
    name: "Mortgage Brokers",
    description: "Lead nurturing, LOS integration, and automated document collection.",
    subNiches: ["mortgage-brokers"]
  },
  {
    slug: "roofing",
    name: "Roofing & Restoration",
    description: "Canvas tracking, appointment set, and insurance claim coordination.",
    subNiches: ["roofing"]
  },
  {
    slug: "luxury-real-estate",
    name: "Luxury Real Estate",
    description: "Billionaire-tier concierge and asset distribution systems.",
    subNiches: ["luxury-real-estate"]
  },
  {
    slug: "agricultural",
    name: "Agricultural & Farming",
    description: "Farm management, labor logistics, and data synthesis.",
    subNiches: ["agricultural"]
  },
  {
    slug: "financial-advisors",
    name: "Financial Advisors",
    description: "Digital paraplanners and high-net-worth lead generation.",
    subNiches: ["financial-advisors"]
  },
  {
    slug: "senior-living",
    name: "Senior Living Facilities",
    description: "Empathetic admissions counseling and staff recruiting.",
    subNiches: ["senior-living"]
  },
  {
    slug: "yacht-charters",
    name: "Yacht Charter & Marine",
    description: "Luxury guest concierges and fleet maintenance systems.",
    subNiches: ["yacht-charters"]
  },
  {
    slug: "venues-events",
    name: "Venues & Events",
    description: "Budget qualification, booking acceleration, and vendor coordination.",
    subNiches: ["venues-events"]
  },
  {
    slug: "pool-construction",
    name: "Pool Construction",
    description: "Project updates, change orders, and maintenance retention.",
    subNiches: ["pool-construction"]
  }
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = industryCategories.find(c => c.slug === params.slug);

  if (!category) {
    return (
      <div className="fn-page-not-found">
        <h1 className="fn-h1">Category Not Found</h1>
        <Link href="/" className="fn-link-red">Return Home <ArrowRight size={14} /></Link>
        <style jsx>{`
          .fn-page-not-found {
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #FAFAF8;
            color: #0C0C0C;
            font-family: var(--font-dm-mono), monospace;
          }
          .fn-h1 {
            font-family: var(--font-bebas-neue), sans-serif;
            font-size: 64px;
            margin-bottom: 24px;
          }
          .fn-link-red {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #D90019;
            text-decoration: none;
            font-weight: 700;
          }
        `}</style>
      </div>
    );
  }

  const subIndustries = industries.filter(ind => category.subNiches.includes(ind.slug));

  return (
    <div className="fn">
      <nav className="fn-nav">
        <Link href="/" className="fn-logo">ELIANA<span>TECH</span></Link>
        <Link href="/apply" className="fn-nav-cta">
          Apply Now <ArrowRight size={12} />
        </Link>
      </nav>

      <main>
        <section className="fn-hero-mini">
          <div className="fn-container">
            <Link href="/" className="fn-back-link">
              <ArrowRight size={12} style={{ transform: 'rotate(180deg)' }} /> BACK BY INDUSTRY
            </Link>
            <h1 className="fn-h1">
              PLAYBOOKS FOR<br />
              <span>{category.name}.</span>
            </h1>
            <p className="fn-sub">
              {category.description}
            </p>
          </div>
        </section>

        <section className="fn-section">
          <div className="fn-container">
            <p className="fn-label">Specific Infrastructure</p>
            <h2 className="fn-h2">CHOOSE YOUR <span>NICHE.</span></h2>
            
            {subIndustries.length > 0 ? (
              <div className="fn-niche-grid">
                {subIndustries.map((ind, i) => (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className="fn-niche-card">
                    <div className="fn-niche-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="fn-niche-content">
                      <h3 className="fn-niche-title">{ind.name}</h3>
                      <p className="fn-niche-desc">{ind.problem}</p>
                      <span className="fn-niche-link">View Detailed Playbook <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="fn-empty">
                <p>No specific playbooks yet mapped for this sector.</p>
                <Link href="/audit" className="fn-btn-outline">Talk to an Architect <ArrowRight size={14} /></Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="fn-footer">
        <Link href="/" className="fn-logo">ELIANA<span>TECH</span></Link>
        <div className="fn-footer-links">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/roadmap/build-program">Build</Link>
          <Link href="/custom">Custom</Link>
          <Link href="/audit">Audit</Link>
          <Link href="/blog">Blog</Link>
          <a href="mailto:elianatech@yahoo.com">Contact</a>
        </div>
        <span className="fn-copy">&copy; 2026 ELIANATECH</span>
      </footer>

      <style jsx>{`
        .fn {
          --red: #D90019; --black: #0C0C0C; --white: #FAFAF8;
          --gray-50: #F7F7F5; --gray-100: #EDEDEB; --gray-200: #E0E0DC;
          --gray-400: #999; --gray-500: #666; --gray-600: #444;
          background: var(--white); color: var(--black);
          font-family: var(--font-dm-mono), monospace;
        }

        .fn-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 72px; padding: 0 48px; background: rgba(250,250,248,0.8);
          backdrop-filter: blur(10px); border-bottom: 1px solid var(--gray-100);
          display: flex; align-items: center; justify-content: space-between;
        }
        .fn-logo {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 24px; letter-spacing: 0.05em;
          text-decoration: none; color: var(--black);
        }
        .fn-logo span { color: var(--red); }
        .fn-nav-cta {
          font-size: 11px; letter-spacing: 0.08em;
          padding: 8px 16px; text-decoration: none;
          display: flex; align-items: center; gap: 6px;
          background: var(--black); color: #fff;
          transition: opacity 0.2s;
        }

        .fn-hero-mini {
          padding: 160px 0 80px;
          border-bottom: 1px solid var(--gray-100);
        }
        .fn-container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        
        .fn-back-link {
          font-size: 10px; color: var(--gray-400); text-decoration: none;
          display: flex; align-items: center; gap: 8px; margin-bottom: 32px;
          letter-spacing: 0.1em; font-weight: 700; transition: color 0.2s;
        }
        .fn-back-link:hover { color: var(--red); }

        .fn-h1 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(48px, 8vw, 100px); line-height: 0.9;
          color: var(--black); margin-bottom: 32px;
        }
        .fn-h1 span { color: var(--red); }
        .fn-sub {
          font-size: 18px; color: var(--gray-500); line-height: 1.6;
          max-width: 600px;
        }

        .fn-section { padding: 96px 0; }
        .fn-label {
          font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--red); margin-bottom: 12px;
        }
        .fn-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(32px, 5vw, 64px); line-height: 0.95;
          color: var(--black); margin-bottom: 48px;
        }
        .fn-h2 span { color: var(--red); }

        .fn-niche-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1px;
          background: var(--gray-200);
          border: 1px solid var(--gray-200);
        }
        .fn-niche-card {
          background: var(--white);
          padding: 40px;
          text-decoration: none;
          color: inherit;
          display: flex;
          gap: 24px;
          transition: all 0.3s;
        }
        .fn-niche-card:hover {
          background: var(--gray-50);
          padding-left: 48px;
        }
        .fn-niche-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 24px; color: var(--gray-200);
          transition: color 0.3s;
        }
        .fn-niche-card:hover .fn-niche-num { color: var(--red); }
        .fn-niche-content { flex: 1; }
        .fn-niche-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 28px; color: var(--black); margin-bottom: 12px;
          letter-spacing: 0.02em;
        }
        .fn-niche-desc {
          font-size: 13px; color: var(--gray-500); line-height: 1.7;
          margin-bottom: 24px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .fn-niche-link {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; display: flex; align-items: center; gap: 8px;
          transition: gap 0.2s;
        }
        .fn-niche-card:hover .fn-niche-link { gap: 12px; color: var(--red); }

        .fn-empty {
          padding: 80px; text-align: center; background: var(--gray-50);
          border: 1px dashed var(--gray-200);
        }
        .fn-empty p { color: var(--gray-400); margin-bottom: 24px; }
        .fn-btn-outline {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          padding: 16px 32px; text-decoration: none;
          border: 1px solid var(--black); color: var(--black);
          transition: all 0.3s;
        }
        .fn-btn-outline:hover { background: var(--black); color: #fff; }

        .fn-footer {
          padding: 64px 48px;
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid var(--gray-100);
          background: var(--white);
        }
        .fn-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .fn-footer-links a {
          font-size: 11px; color: var(--gray-400);
          text-decoration: none; transition: color 0.2s;
        }
        .fn-footer-links a:hover { color: var(--black); }
        .fn-copy { font-size: 10px; color: var(--gray-400); }

        @media (max-width: 900px) {
          .fn-nav { padding: 0 24px; }
          .fn-hero-mini { padding-top: 120px; }
          .fn-container { padding: 0 24px; }
          .fn-h1 { font-size: 64px; }
          .fn-niche-grid { grid-template-columns: 1fr; }
          .fn-footer { flex-direction: column; gap: 32px; text-align: center; }
          .fn-footer-links { justify-content: center; }
        }
      `}</style>
    </div>
  );
}
