"use client"

import { industries } from "@/lib/industry-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const industryCategories = [
  {
    slug: "medical-dental",
    name: "Medical & Dental",
    description: "AI infrastructure for specialized medical and dental practices.",
    subNiches: ["cosmetic-dentistry", "orthodontics-invisalign", "dental-implants", "oral-surgery-practices", "pediatric-dentists", "fertility-clinics", "hormone-therapy-trt-clinics", "addiction-treatment-centers", "weight-loss-clinics"]
  },
  {
    slug: "home-services-high-ticket",
    name: "Home Services — High Ticket",
    description: "High-ROI automation for expensive home installments and renovations.",
    subNiches: ["solar-panel-installers", "hvac-companies", "pool-builders", "window-door-replacement", "general-contractors", "roofing-contractors", "home-remodeling-contractors", "kitchen-bathroom-remodeling", "water-damage-restoration"]
  },
  {
    slug: "legal",
    name: "Legal Services",
    description: "AI intake and case management for high-demand legal practices.",
    subNiches: ["divorce-family-law", "bankruptcy-lawyers", "immigration-lawyers", "dui-defense-attorneys", "personal-injury-lawyers", "workers-comp-lawyers", "criminal-defense-attorneys", "estate-planning-attorneys"]
  },
  {
    slug: "beauty-personal-care",
    name: "Beauty & Personal Care",
    description: "24/7 booking and patient care for aesthetics and personal grooming.",
    subNiches: ["teeth-whitening-services", "laser-hair-removal-clinics", "hair-restoration-clinics", "lash-brow-studios", "nail-salons", "hair-salons-barbershops", "tattoo-studios"]
  },
  {
    slug: "home-services-recurring",
    name: "Home Services — Recurring",
    description: "AI retention and routing for repeat residential services.",
    subNiches: ["cleaning-services-commercial", "garage-door-repair-install", "landscaping-companies", "painting-contractors", "electricians", "pest-control-companies", "concrete-paving-contractors", "tree-service-companies", "fence-companies", "plumbing-companies", "flooring-companies"]
  },
  {
    slug: "real-estate-property",
    name: "Real Estate & Property",
    description: "Concierge and management tools for agents and facilities.",
    subNiches: ["real-estate-agents-teams", "storage-facilities", "property-management-companies", "home-inspection-services", "mortgage-brokers"]
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    description: "Automation for physical and mental health clinics.",
    subNiches: ["iv-therapy-wellness-clinics", "physical-therapy-clinics", "mental-health-practices", "allergy-clinics", "senior-care-assisted-living", "dermatology-practices", "hearing-aid-clinics", "home-health-care-agencies", "veterinary-clinics", "pain-management-clinics", "chiropractors", "urgent-care-centers", "optometrists-eye-care"]
  },
  {
    slug: "pet-services",
    name: "Pet Services",
    description: "24/7 care coordination and scheduling for pet businesses.",
    subNiches: ["dog-grooming", "dog-training", "emergency-vet-clinics", "pet-boarding-daycare"]
  },
  {
    slug: "automotive",
    name: "Automotive",
    description: "AI BDC and service automation for dealerships and repair shops.",
    subNiches: ["auto-body-collision-repair", "towing-companies", "auto-detailing", "car-dealerships", "tire-shops", "auto-repair-shops"]
  },
  {
    slug: "professional-financial",
    name: "Professional & Financial Services",
    description: "Digital back-office and lead gen for consultants and firms.",
    subNiches: ["insurance-agencies", "it-services-managed-it", "commercial-printing-companies", "accounting-firms-cpas", "financial-advisors", "staffing-recruiting-agencies"]
  },
  {
    slug: "events-hospitality",
    name: "Events & Hospitality",
    description: "Booking and coordination for high-touch hospitality venues.",
    subNiches: ["photographers", "event-planners", "catering-companies", "food-trucks", "wedding-venues", "hotels-bbs-independent", "restaurants"]
  },
  {
    slug: "education-childcare",
    name: "Education & Childcare",
    description: "Onboarding and enrollment automation for learning centers.",
    subNiches: ["tutoring-centers", "martial-arts-studios", "music-dance-schools", "private-charter-schools", "daycare-childcare-centers", "driving-schools"]
  },
  {
    slug: "misc-local-services",
    name: "Misc. Local Services",
    description: "AI-powered capture and follow-up for unique local providers.",
    subNiches: ["pressure-washing", "pool-cleaning-maintenance", "locksmith-services", "window-cleaning-services", "moving-companies", "junk-removal", "car-wash-businesses"]
  },
  {
    slug: "saas",
    name: "SaaS Founders",
    description: "AI infrastructure for B2B and B2C SaaS platforms.",
    subNiches: ["saas"]
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
