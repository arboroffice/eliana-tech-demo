"use client"
import Link from "next/link"

export function Footer() {
  return (
    <footer>
      <Link href="/" className="footer-logo">
        ELIANA<em>TECH</em>
      </Link>
      <ul className="footer-links">
        <li>
          <Link href="#what-we-do">What We Do</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
        <li>
          <a href="mailto:elianatech@yahoo.com">Contact</a>
        </li>
        <li>
          <Link href="/admin" className="text-[8px] opacity-20 hover:opacity-100 transition-opacity ml-4">Admin</Link>
        </li>
      </ul>
      <span className="footer-copy">© 2026 ELIANATECH</span>

      <style jsx>{`
        footer {
          padding: 44px 52px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-color);
          background: var(--white);
        }

        .footer-logo {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 22px;
          letter-spacing: 0.2em;
          text-decoration: none;
          color: var(--black);
        }

        .footer-logo em {
          color: var(--red);
          font-style: normal;
        }

        .footer-links {
          list-style: none;
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--dim);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--black);
        }

        .footer-copy {
          font-size: 10px;
          color: var(--border-mid);
          letter-spacing: 0.1em;
        }

        @media (max-width: 880px) {
          footer {
            flex-direction: column;
            gap: 20px;
            text-align: center;
            padding: 40px 24px;
          }
        }
      `}</style>
    </footer>
  )
}
