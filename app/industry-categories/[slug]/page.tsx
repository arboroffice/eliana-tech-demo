"use client"

import { industries } from "@/lib/industry-data";
import type { IndustryContent } from "@/lib/industry-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const industryCategories = [
  {
    slug: "medical-dental",
    name: "Medical & Dental",
    description: "AI infrastructure for specialized medical and dental practices. We automate patient intake, appointment scheduling, insurance verification, follow-up sequences, and review generation — so your clinical team focuses on care, not admin.",
    subNiches: ["cosmetic-dentistry", "orthodontics-invisalign", "dental-implants", "oral-surgery-practices", "pediatric-dentists", "dentists-general-practices", "fertility-clinics", "hormone-therapy-trt-clinics", "addiction-treatment-centers", "weight-loss-clinics"]
  },
  {
    slug: "home-services-high-ticket",
    name: "Home Services — High Ticket",
    description: "High-ROI automation for expensive home installations and renovations. From solar to HVAC to pools — we build AI systems that qualify leads instantly, schedule estimates, follow up relentlessly, and close more jobs without adding headcount.",
    subNiches: ["solar-panel-installers", "hvac-companies", "pool-builders", "window-door-replacement", "general-contractors", "roofing-contractors", "home-remodeling-contractors", "kitchen-bathroom-remodeling", "water-damage-restoration"]
  },
  {
    slug: "legal",
    name: "Legal Services",
    description: "AI intake and case management for high-demand legal practices. We automate client screening, consultation booking, document collection, and follow-up — so attorneys spend time on cases, not chasing leads.",
    subNiches: ["divorce-family-law", "bankruptcy-lawyers", "immigration-lawyers", "dui-defense-attorneys", "personal-injury-lawyers", "workers-comp-lawyers", "criminal-defense-attorneys", "estate-planning-attorneys"]
  },
  {
    slug: "beauty-personal-care",
    name: "Beauty & Personal Care",
    description: "24/7 booking and client care for aesthetics and personal grooming. AI handles appointment scheduling, no-show prevention, rebooking sequences, and review generation — keeping your chairs full and your reputation growing.",
    subNiches: ["teeth-whitening-services", "laser-hair-removal-clinics", "hair-restoration-clinics", "lash-brow-studios", "nail-salons", "hair-salons-barbershops", "tattoo-studios", "med-spa"]
  },
  {
    slug: "home-services-recurring",
    name: "Home Services — Recurring",
    description: "AI retention and routing for repeat residential services. We build systems that auto-schedule recurring visits, send reminders, handle cancellations, upsell seasonal services, and keep your crews fully booked year-round.",
    subNiches: ["cleaning-services-commercial", "garage-door-repair-install", "landscaping-companies", "painting-contractors", "electricians", "pest-control-companies", "concrete-paving-contractors", "tree-service-companies", "fence-companies", "plumbing-companies", "flooring-companies"]
  },
  {
    slug: "real-estate-property",
    name: "Real Estate & Property",
    description: "Concierge-level AI for agents, brokers, and property managers. Automated lead nurture, showing scheduling, tenant communication, lease management, and review collection — so you scale without hiring more admin.",
    subNiches: ["real-estate-agents-teams", "storage-facilities", "property-management-companies", "home-inspection-services", "mortgage-brokers"]
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    description: "Automation for physical and mental health clinics. From patient intake and insurance verification to appointment reminders and reactivation campaigns — we remove every bottleneck between your patient and their next visit.",
    subNiches: ["iv-therapy-wellness-clinics", "physical-therapy-clinics", "mental-health-practices", "allergy-clinics", "senior-care-assisted-living", "dermatology-practices", "hearing-aid-clinics", "home-health-care-agencies", "veterinary-clinics", "pain-management-clinics", "chiropractors", "urgent-care-centers", "optometrists-eye-care"]
  },
  {
    slug: "pet-services",
    name: "Pet Services",
    description: "24/7 care coordination and scheduling for pet businesses. AI handles booking, vaccination reminders, grooming schedules, emergency triage, and owner communication — so you never miss a client or a callback.",
    subNiches: ["dog-grooming", "dog-training", "emergency-vet-clinics", "pet-boarding-daycare"]
  },
  {
    slug: "automotive",
    name: "Automotive",
    description: "AI BDC and service automation for dealerships and repair shops. We build systems that handle inbound leads, schedule test drives, manage service appointments, send follow-ups, and generate reviews — all without human intervention.",
    subNiches: ["auto-body-collision-repair", "towing-companies", "auto-detailing", "car-dealerships", "tire-shops", "auto-repair-shops"]
  },
  {
    slug: "professional-financial",
    name: "Professional & Financial Services",
    description: "Digital back-office and lead generation for consultants and firms. AI automates client onboarding, document collection, meeting scheduling, compliance reminders, and referral follow-up — freeing your team to focus on billable work.",
    subNiches: ["insurance-agencies", "it-services-managed-it", "commercial-printing-companies", "accounting-firms-cpas", "financial-advisors", "staffing-recruiting-agencies", "it-consultants"]
  },
  {
    slug: "events-hospitality",
    name: "Events & Hospitality",
    description: "Booking and coordination for high-touch hospitality venues. AI manages inquiry response, availability checks, deposit collection, vendor coordination, and post-event follow-up — turning every inquiry into a confirmed booking.",
    subNiches: ["photographers", "event-planners", "catering-companies", "food-trucks", "wedding-venues", "hotels-bbs-independent", "restaurants"]
  },
  {
    slug: "education-childcare",
    name: "Education & Childcare",
    description: "Onboarding and enrollment automation for learning centers. AI handles tour scheduling, enrollment forms, tuition reminders, parent communication, and waitlist management — so you fill every seat without the admin burden.",
    subNiches: ["tutoring-centers", "martial-arts-studios", "music-dance-schools", "private-charter-schools", "daycare-childcare-centers", "driving-schools"]
  },
  {
    slug: "misc-local-services",
    name: "Misc. Local Services",
    description: "AI-powered capture and follow-up for unique local providers. Whether you're in pressure washing, moving, or locksmithing — we build systems that answer every call, qualify every lead, and book every job automatically.",
    subNiches: ["pressure-washing", "pool-cleaning-maintenance", "locksmith-services", "window-cleaning-services", "moving-companies", "junk-removal", "car-wash-businesses"]
  },
  {
    slug: "saas",
    name: "SaaS Founders",
    description: "AI infrastructure for B2B and B2C SaaS platforms. We automate onboarding flows, churn prediction, trial conversion sequences, support triage, and expansion revenue — so your MRR grows while you sleep.",
    subNiches: ["saas"]
  },
  {
    slug: "course-creators",
    name: "Course Creators",
    description: "Automating student success, onboarding, and upsells. AI handles enrollment sequences, engagement nudges, completion tracking, testimonial collection, and upgrade offers — turning every student into a case study.",
    subNiches: ["course-creators"]
  },
  {
    slug: "coaching",
    name: "Coaches & Consultants",
    description: "AI triage, booking, and prep for high-ticket coaching. We automate application screening, calendar management, session prep, follow-up sequences, and referral generation — so you coach more and admin less.",
    subNiches: ["coaching"]
  },
  {
    slug: "ecommerce",
    name: "E-commerce & Retail",
    description: "Streamlining inventory, customer support, and fulfillment. AI handles order tracking, returns processing, abandoned cart recovery, review generation, and reorder campaigns — turning one-time buyers into repeat customers.",
    subNiches: ["ecommerce"]
  },
  {
    slug: "agencies",
    name: "Agencies",
    description: "Scale client delivery without scaling headcount. AI automates reporting, client communication, project updates, invoice follow-up, and upsell sequences — so you grow margin, not overhead.",
    subNiches: ["agencies"]
  }
];

function collectStats(subs: IndustryContent[]) {
  const all: { stat: string; label: string }[] = [];
  for (const s of subs) {
    if (s.industryStats) all.push(...s.industryStats);
  }
  // Deduplicate by label, take first 6
  const seen = new Set<string>();
  return all.filter(s => {
    if (seen.has(s.label)) return false;
    seen.add(s.label);
    return true;
  }).slice(0, 6);
}

function collectUseCases(subs: IndustryContent[]) {
  const all: { title: string; scenario: string; outcome: string; niche: string }[] = [];
  for (const s of subs) {
    if (s.useCases) {
      for (const uc of s.useCases.slice(0, 1)) {
        all.push({ ...uc, niche: s.name });
      }
    }
  }
  return all.slice(0, 4);
}

function collectComparisons(subs: IndustryContent[]) {
  const all: { category: string; without: string; withAI: string }[] = [];
  const seen = new Set<string>();
  for (const s of subs) {
    if (s.comparisonTable) {
      for (const row of s.comparisonTable) {
        if (!seen.has(row.category)) {
          seen.add(row.category);
          all.push(row);
        }
      }
    }
  }
  return all.slice(0, 6);
}

function collectFaqs(subs: IndustryContent[]) {
  const all: { q: string; a: string }[] = [];
  const seen = new Set<string>();
  for (const s of subs) {
    if (s.faq) {
      for (const f of s.faq.slice(0, 2)) {
        if (!seen.has(f.q)) {
          seen.add(f.q);
          all.push(f);
        }
      }
    }
  }
  return all.slice(0, 8);
}

function collectServices(subs: IndustryContent[]) {
  const examples: { title: string; detail: string; roi: string; niche: string }[] = [];
  for (const s of subs) {
    if (s.services?.singleSystems?.examples) {
      for (const ex of s.services.singleSystems.examples.slice(0, 1)) {
        examples.push({ ...ex, niche: s.name });
      }
    }
  }
  return examples.slice(0, 6);
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = industryCategories.find(c => c.slug === params.slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!category) {
    return (
      <div className="fn-page-not-found">
        <h1 className="fn-h1">Category Not Found</h1>
        <Link href="/" className="fn-link-red">Return Home <ArrowRight size={14} /></Link>
        <style jsx>{`
          .fn-page-not-found {
            height: 100vh; display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            background: #FAFAF8; color: #0C0C0C;
            font-family: var(--font-dm-mono), monospace;
          }
          .fn-h1 { font-family: var(--font-bebas-neue), sans-serif; font-size: 64px; margin-bottom: 24px; }
          .fn-link-red { display: inline-flex; align-items: center; gap: 8px; color: #D90019; text-decoration: none; font-weight: 700; }
        `}</style>
      </div>
    );
  }

  const subIndustries = industries.filter(ind => category.subNiches.includes(ind.slug));
  const stats = collectStats(subIndustries);
  const useCases = collectUseCases(subIndustries);
  const comparisons = collectComparisons(subIndustries);
  const faqs = collectFaqs(subIndustries);
  const services = collectServices(subIndustries);
  const firstHook = subIndustries.find(s => s.hook)?.hook;
  const firstDream = subIndustries.find(s => s.dreamVision)?.dreamVision;

  return (
    <div className="fn">
      <nav className="fn-nav">
        <Link href="/" className="fn-logo">ELIANA<span>TECH</span></Link>
        <Link href="/audit" className="fn-nav-cta">
          OS Audit <ArrowRight size={12} />
        </Link>
      </nav>

      <main>
        {/* ═══ HERO ═══ */}
        <section className="fn-hero-mini">
          <div className="fn-container">
            <Link href="/" className="fn-back-link">
              <ArrowRight size={12} style={{ transform: 'rotate(180deg)' }} /> BACK TO INDUSTRIES
            </Link>
            <h1 className="fn-h1">
              AI INFRASTRUCTURE FOR<br />
              <span>{category.name}.</span>
            </h1>
            <p className="fn-sub">{category.description}</p>
            <div className="fn-hero-actions">
              <Link href="/audit" className="fn-cta-red">
                TAKE YOUR OS AUDIT <ArrowRight size={16} />
              </Link>
              <span className="fn-micro">Takes 3 minutes. No call required.</span>
            </div>
          </div>
        </section>

        {/* ═══ THE CHALLENGE ═══ */}
        {firstHook && (
          <section className="fn-challenge">
            <div className="fn-container">
              <div className="fn-challenge-inner">
                <p className="fn-label">The Challenge</p>
                <p className="fn-challenge-text">&ldquo;{firstHook}&rdquo;</p>
              </div>
            </div>
          </section>
        )}

        {/* ═══ STATS ═══ */}
        {stats.length > 0 && (
          <section className="fn-section">
            <div className="fn-container">
              <p className="fn-label">Industry Intelligence</p>
              <h2 className="fn-h2">THE NUMBERS THAT <span>MATTER.</span></h2>
              <div className="fn-stats-grid">
                {stats.map((s, i) => (
                  <div key={i} className="fn-stat">
                    <div className="fn-stat-num">{s.stat}</div>
                    <div className="fn-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ NICHE GRID ═══ */}
        <section className="fn-section fn-section-alt">
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

        {/* ═══ USE CASES ═══ */}
        {useCases.length > 0 && (
          <section className="fn-section">
            <div className="fn-container">
              <p className="fn-label">Real-World Scenarios</p>
              <h2 className="fn-h2">HOW AI TRANSFORMS <span>YOUR DAY.</span></h2>
              <div className="fn-uc-grid">
                {useCases.map((uc, i) => (
                  <div key={i} className="fn-uc-card">
                    <div className="fn-uc-num">0{i + 1}</div>
                    <div className="fn-uc-niche">{uc.niche}</div>
                    <h3 className="fn-uc-title">{uc.title}</h3>
                    <p className="fn-uc-scenario">{uc.scenario}</p>
                    <div className="fn-uc-outcome">
                      <span className="fn-uc-outcome-label">Outcome</span>
                      <p>{uc.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ SERVICES / SYSTEMS ═══ */}
        {services.length > 0 && (
          <section className="fn-section fn-section-alt">
            <div className="fn-container">
              <p className="fn-label">Automation Systems</p>
              <h2 className="fn-h2">AI SYSTEMS WE <span>INSTALL.</span></h2>
              <div className="fn-srv-grid">
                {services.map((srv, i) => (
                  <div key={i} className="fn-srv-card">
                    <div className="fn-srv-niche">{srv.niche}</div>
                    <h3 className="fn-srv-title">{srv.title}</h3>
                    <p className="fn-srv-detail">{srv.detail}</p>
                    <div className="fn-srv-roi">ROI: {srv.roi}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ COMPARISON TABLE ═══ */}
        {comparisons.length > 0 && (
          <section className="fn-section">
            <div className="fn-container">
              <p className="fn-label">The Transformation</p>
              <h2 className="fn-h2">BEFORE VS. <span>AFTER AI.</span></h2>
              <div className="fn-compare-table">
                <div className="fn-compare-header">
                  <div className="fn-compare-col">Category</div>
                  <div className="fn-compare-col">Without AI</div>
                  <div className="fn-compare-col fn-compare-highlight">With Eliana AI</div>
                </div>
                {comparisons.map((row, i) => (
                  <div key={i} className={`fn-compare-row ${i % 2 === 0 ? '' : 'fn-compare-row-alt'}`}>
                    <div className="fn-compare-col fn-compare-cat">{row.category}</div>
                    <div className="fn-compare-col fn-compare-without">{row.without}</div>
                    <div className="fn-compare-col fn-compare-with">{row.withAI}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ DREAM VISION ═══ */}
        {firstDream && (
          <section className="fn-dream">
            <div className="fn-dream-bg">FREEDOM</div>
            <div className="fn-container fn-dream-inner">
              <p className="fn-dream-label">The Dream Outcome</p>
              <p className="fn-dream-text">{firstDream}</p>
            </div>
          </section>
        )}

        {/* ═══ FAQ ═══ */}
        {faqs.length > 0 && (
          <section className="fn-section">
            <div className="fn-container">
              <p className="fn-label">Common Questions</p>
              <h2 className="fn-h2">FREQUENTLY <span>ASKED.</span></h2>
              <div className="fn-faq-list">
                {faqs.map((faq, i) => (
                  <div key={i} className="fn-faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <div className="fn-faq-q">
                      <span>{faq.q}</span>
                      <span className={`fn-faq-toggle ${openFaq === i ? 'fn-faq-open' : ''}`}>+</span>
                    </div>
                    {openFaq === i && (
                      <div className="fn-faq-a">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ CTA ═══ */}
        <section className="fn-bottom-cta">
          <div className="fn-container fn-bottom-cta-inner">
            <h2 className="fn-bottom-h2">
              Ready to Automate Your<br /><span>{category.name}</span> Business?
            </h2>
            <p className="fn-bottom-desc">
              Take our 3-minute OS Audit and see exactly what to hand off first.
            </p>
            <Link href="/audit" className="fn-bottom-btn">
              TAKE MY OS AUDIT <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="fn-footer">
        <Link href="/" className="fn-logo">ELIANA<span>TECH</span></Link>
        <div className="fn-footer-links">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
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

        /* ═══ HERO ═══ */
        .fn-hero-mini { padding: 160px 0 80px; border-bottom: 1px solid var(--gray-100); }
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
        .fn-sub { font-size: 16px; color: var(--gray-500); line-height: 1.8; max-width: 640px; }
        .fn-hero-actions { margin-top: 40px; display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
        .fn-cta-red {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 20px; letter-spacing: 0.06em;
          padding: 18px 48px; text-decoration: none;
          background: var(--red); color: #fff;
          display: inline-flex; align-items: center; gap: 12px;
          transition: all 0.3s;
          box-shadow: 0 8px 30px rgba(217,0,25,0.15);
        }
        .fn-cta-red:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(217,0,25,0.25); }
        .fn-micro { font-size: 11px; color: var(--gray-400); }

        /* ═══ CHALLENGE ═══ */
        .fn-challenge { padding: 80px 0; background: var(--black); }
        .fn-challenge-inner { text-align: center; max-width: 800px; margin: 0 auto; }
        .fn-challenge-text {
          font-size: clamp(20px, 3vw, 32px); color: #fff;
          font-weight: 700; font-style: italic; line-height: 1.5;
        }

        /* ═══ SECTIONS ═══ */
        .fn-section { padding: 96px 0; }
        .fn-section-alt { background: var(--gray-50); }
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

        /* ═══ STATS ═══ */
        .fn-stats-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1px; background: var(--gray-200); border: 1px solid var(--gray-200);
        }
        .fn-stat {
          background: var(--white); padding: 32px 24px; text-align: center;
          transition: background 0.2s;
        }
        .fn-stat:hover { background: var(--gray-50); }
        .fn-stat-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 40px; color: var(--red); line-height: 1; margin-bottom: 8px;
        }
        .fn-stat-label {
          font-size: 11px; color: var(--gray-500); text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ═══ NICHE GRID ═══ */
        .fn-niche-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1px; background: var(--gray-200); border: 1px solid var(--gray-200);
        }
        .fn-niche-card {
          background: var(--white); padding: 40px;
          text-decoration: none; color: inherit;
          display: flex; gap: 24px; transition: all 0.3s;
        }
        .fn-niche-card:hover { background: var(--gray-50); padding-left: 48px; }
        .fn-niche-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 24px; color: var(--gray-200); transition: color 0.3s;
        }
        .fn-niche-card:hover .fn-niche-num { color: var(--red); }
        .fn-niche-content { flex: 1; }
        .fn-niche-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 28px; color: var(--black); margin-bottom: 12px; letter-spacing: 0.02em;
        }
        .fn-niche-desc {
          font-size: 13px; color: var(--gray-500); line-height: 1.7; margin-bottom: 24px;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
        }
        .fn-niche-link {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; display: flex; align-items: center; gap: 8px;
          transition: gap 0.2s;
        }
        .fn-niche-card:hover .fn-niche-link { gap: 12px; color: var(--red); }

        /* ═══ USE CASES ═══ */
        .fn-uc-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1px; background: var(--gray-200); border: 1px solid var(--gray-200);
        }
        .fn-uc-card { background: var(--white); padding: 36px; }
        .fn-uc-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 32px; color: var(--gray-200); margin-bottom: 4px;
        }
        .fn-uc-niche {
          font-size: 10px; color: var(--red); text-transform: uppercase;
          letter-spacing: 0.12em; font-weight: 700; margin-bottom: 16px;
        }
        .fn-uc-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 22px; color: var(--black); margin-bottom: 12px;
        }
        .fn-uc-scenario { font-size: 13px; color: var(--gray-500); line-height: 1.7; margin-bottom: 20px; }
        .fn-uc-outcome {
          border-top: 1px solid var(--gray-100); padding-top: 16px;
        }
        .fn-uc-outcome-label {
          font-size: 10px; color: var(--gray-400); text-transform: uppercase;
          letter-spacing: 0.1em; font-weight: 700; display: block; margin-bottom: 6px;
        }
        .fn-uc-outcome p { font-size: 13px; color: var(--black); font-weight: 600; line-height: 1.6; }

        /* ═══ SERVICES ═══ */
        .fn-srv-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        .fn-srv-card {
          padding: 32px; border: 1px solid var(--gray-100);
          transition: border-color 0.2s;
        }
        .fn-srv-card:hover { border-color: var(--red); }
        .fn-srv-niche {
          font-size: 10px; color: var(--gray-400); text-transform: uppercase;
          letter-spacing: 0.1em; font-weight: 700; margin-bottom: 12px;
        }
        .fn-srv-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 22px; color: var(--black); margin-bottom: 12px;
        }
        .fn-srv-detail { font-size: 13px; color: var(--gray-500); line-height: 1.7; margin-bottom: 16px; }
        .fn-srv-roi {
          font-size: 12px; color: var(--red); font-weight: 700;
        }

        /* ═══ COMPARISON TABLE ═══ */
        .fn-compare-table { border: 1px solid var(--gray-200); overflow-x: auto; }
        .fn-compare-header {
          display: grid; grid-template-columns: 1fr 1fr 1fr;
          background: var(--black);
        }
        .fn-compare-header .fn-compare-col {
          padding: 16px 24px; font-size: 10px; color: rgba(255,255,255,0.5);
          text-transform: uppercase; letter-spacing: 0.12em; font-weight: 700;
        }
        .fn-compare-header .fn-compare-highlight { color: var(--red); }
        .fn-compare-row {
          display: grid; grid-template-columns: 1fr 1fr 1fr;
          border-top: 1px solid var(--gray-100);
        }
        .fn-compare-row-alt { background: var(--gray-50); }
        .fn-compare-col { padding: 16px 24px; font-size: 13px; }
        .fn-compare-cat { font-weight: 700; color: var(--black); font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; }
        .fn-compare-without { color: var(--gray-400); }
        .fn-compare-with { color: var(--black); font-weight: 600; }

        /* ═══ DREAM ═══ */
        .fn-dream {
          padding: 100px 48px; background: var(--black);
          position: relative; overflow: hidden;
        }
        .fn-dream-bg {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 25vw; color: rgba(255,255,255,0.02);
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%); white-space: nowrap;
          pointer-events: none;
        }
        .fn-dream-inner { position: relative; z-index: 2; text-align: center; max-width: 800px; margin: 0 auto; }
        .fn-dream-label {
          font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--red); margin-bottom: 24px;
        }
        .fn-dream-text {
          font-size: clamp(16px, 2vw, 20px); color: rgba(255,255,255,0.85);
          line-height: 1.9;
        }

        /* ═══ FAQ ═══ */
        .fn-faq-list { max-width: 800px; }
        .fn-faq-item {
          border-bottom: 1px solid var(--gray-100); cursor: pointer;
          transition: background 0.2s;
        }
        .fn-faq-item:hover { background: var(--gray-50); }
        .fn-faq-q {
          padding: 24px 0; display: flex; justify-content: space-between;
          align-items: center; gap: 16px;
          font-size: 14px; font-weight: 600; color: var(--black);
        }
        .fn-faq-toggle {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 24px; color: var(--gray-400); transition: transform 0.3s;
          flex-shrink: 0;
        }
        .fn-faq-open { transform: rotate(45deg); color: var(--red); }
        .fn-faq-a {
          padding: 0 0 24px; font-size: 13px; color: var(--gray-500);
          line-height: 1.8; max-width: 700px;
        }

        /* ═══ BOTTOM CTA ═══ */
        .fn-bottom-cta {
          background: var(--red); padding: 80px 48px; color: #fff; text-align: center;
        }
        .fn-bottom-cta-inner {
          display: flex; flex-direction: column; align-items: center;
        }
        .fn-bottom-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(32px, 5vw, 56px); line-height: 1; margin-bottom: 20px;
        }
        .fn-bottom-h2 span { color: rgba(255,255,255,0.7); }
        .fn-bottom-desc {
          font-size: 14px; line-height: 1.7; max-width: 500px;
          margin-bottom: 32px; color: rgba(255,255,255,0.85);
        }
        .fn-bottom-btn {
          display: inline-flex; align-items: center; gap: 12px;
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 18px; letter-spacing: 0.08em;
          padding: 18px 40px; text-decoration: none;
          background: #fff; color: var(--red); transition: all 0.3s;
        }
        .fn-bottom-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.15);
          background: var(--black); color: #fff;
        }

        /* ═══ EMPTY ═══ */
        .fn-empty { padding: 80px; text-align: center; background: var(--gray-50); border: 1px dashed var(--gray-200); }
        .fn-empty p { color: var(--gray-400); margin-bottom: 24px; }
        .fn-btn-outline {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          padding: 16px 32px; text-decoration: none;
          border: 1px solid var(--black); color: var(--black); transition: all 0.3s;
        }
        .fn-btn-outline:hover { background: var(--black); color: #fff; }

        /* ═══ FOOTER ═══ */
        .fn-footer {
          padding: 64px 48px;
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid var(--gray-100); background: var(--white);
        }
        .fn-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .fn-footer-links a {
          font-size: 11px; color: var(--gray-400);
          text-decoration: none; transition: color 0.2s;
        }
        .fn-footer-links a:hover { color: var(--black); }
        .fn-copy { font-size: 10px; color: var(--gray-400); }

        /* ═══ RESPONSIVE ═══ */
        @media (max-width: 900px) {
          .fn-nav { padding: 0 24px; }
          .fn-hero-mini { padding: 120px 0 60px; }
          .fn-container { padding: 0 24px; }
          .fn-h1 { font-size: clamp(36px, 10vw, 64px); }
          .fn-section { padding: 64px 0; }
          .fn-niche-grid { grid-template-columns: 1fr; }
          .fn-uc-grid { grid-template-columns: 1fr; }
          .fn-srv-grid { grid-template-columns: 1fr; }
          .fn-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .fn-compare-header, .fn-compare-row { grid-template-columns: 1fr 1fr 1fr; }
          .fn-compare-col { padding: 12px 16px; font-size: 11px; }
          .fn-dream { padding: 64px 24px; }
          .fn-bottom-cta { padding: 56px 24px; }
          .fn-footer { flex-direction: column; gap: 32px; text-align: center; padding: 40px 24px; }
          .fn-footer-links { justify-content: center; }
        }

        @media (max-width: 500px) {
          .fn-hero-mini { padding: 100px 0 48px; }
          .fn-h1 { font-size: clamp(32px, 10vw, 48px); }
          .fn-cta-red { font-size: 16px; padding: 16px 32px; width: 100%; justify-content: center; }
          .fn-stats-grid { grid-template-columns: 1fr 1fr; }
          .fn-compare-header, .fn-compare-row { grid-template-columns: 100px 1fr 1fr; }
          .fn-compare-col { padding: 10px 12px; font-size: 10px; }
        }
      `}</style>
    </div>
  );
}
