"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function GlassmorphismNav({ minimal = false }: { minimal?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`elianatech-nav ${isScrolled ? "scrolled" : ""}`}>
      <Link href="/" className="logo">
        ELIANA<em>TECH</em>
      </Link>
      <div className="nav-right">
        {!minimal && (
          <ul className="nav-links">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="http://c12hsh4n5bfc02e5c9p4wyax.187.124.238.237.sslip.io" target="_blank" rel="noopener noreferrer">The Brief</a>
            </li>
            <li>
              <a href="https://aiproof-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">AI Proof Book</a>
            </li>
            <li>
              <span className="text-[10px] tracking-[0.25em] uppercase text-black/20 cursor-default">FOTF (Soon)</span>
            </li>
          </ul>
        )}
        {!minimal && (
          <Link href="/audit" className="nav-btn">
            Get Free Audit
          </Link>
        )}
        {!minimal && (
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            <ul>
              <li>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <a href="http://c12hsh4n5bfc02e5c9p4wyax.187.124.238.237.sslip.io" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  The Brief
                </a>
              </li>
              <li>
                <a href="https://aiproof-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  AI Proof Book
                </a>
              </li>
              <li>
                <span className="text-[14px] uppercase tracking-[0.1em] text-black/20 cursor-default">FOTF (Coming Soon)</span>
              </li>
              <li className="pt-4">
                <Link href="/audit" className="nav-btn w-full block text-center" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Free Audit
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 52px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(250, 250, 248, 0.94);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        nav.scrolled {
          padding: 15px 52px;
          background: rgba(250, 250, 248, 0.98);
          border-bottom-color: var(--border-mid);
        }

        .logo {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 22px;
          letter-spacing: 0.2em;
          text-decoration: none;
          color: var(--black);
        }

        .logo em {
          color: var(--red);
          font-style: normal;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 28px;
        }

        .nav-links Link,
        .nav-links a {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--dim);
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--black);
        }

        .nav-btn {
          font-family: var(--font-dm-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: var(--black);
          color: var(--white) !important;
          padding: 11px 22px;
          text-decoration: none;
          transition: background 0.2s;
          border: none;
          cursor: pointer;
        }

        .nav-btn:hover {
          background: var(--red);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--black);
          cursor: pointer;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--white);
          padding: 20px;
          border-bottom: 1px solid var(--border-mid);
        }

        .mobile-menu ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .mobile-menu a {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--black);
          text-decoration: none;
          font-weight: 600;
        }

        @media (max-width: 880px) {
          nav {
            padding: 16px 24px;
          }
          nav.scrolled {
            padding: 12px 24px;
          }
          .nav-links {
            display: none;
          }
          .nav-btn:not(.mobile-menu .nav-btn) {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }

        @media (max-width: 640px) {
          nav {
            padding: 12px 16px;
          }
          .logo {
            font-size: 18px;
          }
          .nav-right {
            gap: 16px;
          }
        }
      `}</style>
    </nav>
  )
}
