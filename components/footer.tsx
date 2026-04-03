"use client"
import Link from "next/link"

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            ELIANA<em>TECH</em>
          </Link>
          <span className="footer-copy block mt-4">© 2026 ELIANATECH</span>
          <div className="mt-8 flex gap-4">
             <Link href="/admin" className="text-[8px] opacity-20 hover:opacity-100 transition-opacity">Admin</Link>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Systems</h4>
          <ul className="footer-links">
            <li><Link href="/caas">Claude as a Service</Link></li>
            <li><Link href="/os/command-center">OS Command Center</Link></li>
            <li><Link href="/audit">AI Operations Audit</Link></li>
            <li><Link href="/done-for-you">Done-For-You</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Industries</h4>
          <ul className="footer-links">
            <li><Link href="/industries-sitemap">Full Industry Sitemap</Link></li>
            <li><Link href="/industries/saas">SaaS Founders</Link></li>
            <li><Link href="/industries/agencies">Agencies</Link></li>
            <li><Link href="/industries/ecommerce">E-commerce</Link></li>
            <li><Link href="/industries/home-services">Home Services</Link></li>
            <li><Link href="/industries/coaching">Coaching</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li><Link href="/blog">Insights & Blog</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><a href="http://c12hsh4n5bfc02e5c9p4wyax.187.124.238.237.sslip.io" target="_blank" rel="noopener noreferrer">The Daily OS Brief</a></li>
            <li><a href="https://aiproof-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">AI Proof Book</a></li>
            <li className="text-[11px] opacity-30 cursor-default">FOTF Community — Coming Soon</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-links">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><a href="mailto:support@elianatech.com">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        footer {
          padding: 80px 52px;
          border-top: 1px solid var(--border-color);
          background: var(--white);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-logo {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 28px;
          letter-spacing: 0.2em;
          text-decoration: none;
          color: var(--black);
        }

        .footer-logo em {
          color: var(--red);
          font-style: normal;
        }

        .footer-heading {
          font-family: var(--font-syne), sans-serif;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--black);
          margin-bottom: 24px;
          font-weight: 800;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links :global(a) {
          font-size: 11px;
          letter-spacing: 0.05em;
          color: var(--dim);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links :global(a:hover) {
          color: var(--red);
        }

        .footer-copy {
          font-size: 10px;
          color: var(--border-mid);
          letter-spacing: 0.1em;
        }

        .block { display: block; }
        .mt-4 { margin-top: 1rem; }
        .mt-8 { margin-top: 2rem; }
        .flex { display: flex; }
        .gap-4 { gap: 1rem; }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .footer-brand {
            grid-column: span 3;
            margin-bottom: 40px;
          }
        }

        @media (max-width: 880px) {
          .footer-grid {
             grid-template-columns: 1fr 1fr;
          }
           .footer-brand {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          footer {
            padding: 60px 24px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-brand {
            grid-column: span 1;
            text-align: center;
          }
          .footer-column {
            text-align: center;
          }
          .flex {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}
