"use client"

import Link from "next/link"
import Image from "next/image"

export function GlassmorphismNav({ minimal = false, theme = "dark" }: { minimal?: boolean; theme?: "dark" | "light" }) {
  const isDark = theme === "dark"

  return (
    <nav className={`elianatech-nav ${isDark ? "dark-nav" : "light-nav"}`}>
      <Link href="/" className="logo">
        <Image
          src="/images/elianatech-logo.png"
          alt="Elianatech"
          width={160}
          height={40}
          className="logo-img"
          priority
        />
      </Link>

      <style jsx>{`
        nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 14px 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid transparent;
        }

        .dark-nav {
          background: rgba(5, 5, 5, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          color: white;
        }

        .light-nav {
          background: rgba(250, 250, 248, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          color: black;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        nav.scrolled {
          padding: 10px 80px;
        }

        .dark-nav.scrolled {
          background: rgba(5, 5, 5, 0.95);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .light-nav.scrolled {
          background: rgba(250, 250, 248, 0.98);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo :global(.logo-img) {
          height: 26px;
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }

        nav.scrolled .logo :global(.logo-img) {
          height: 22px;
        }

        .light-nav .logo :global(.logo-img) {
          filter: invert(1);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 36px;
          margin: 0;
          padding: 0;
        }

        .nav-links :global(a) {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 600;
          position: relative;
        }

        .nav-links :global(a::after) {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #D90019;
          transition: width 0.3s ease;
        }

        .nav-links :global(a:hover::after) {
          width: 100%;
        }

        .light-nav .nav-links :global(a) {
          color: rgba(0,0,0,0.45);
        }

        .nav-links :global(a:hover) {
          color: white;
        }

        .light-nav .nav-links :global(a:hover) {
          color: black;
        }

        .nav-btn {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: #D90019;
          color: white !important;
          padding: 12px 28px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-weight: 700;
        }

        .nav-btn:hover {
          background: white;
          color: black !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(217, 0, 25, 0.3);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          padding: 4px;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          padding: 32px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .dark-nav .mobile-menu {
          background: rgba(5, 5, 5, 0.98);
          backdrop-filter: blur(20px);
        }

        .light-nav .mobile-menu {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
        }

        .mobile-menu ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin: 0;
          padding: 0;
        }

        .mobile-menu :global(a) {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: inherit;
          text-decoration: none;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
           nav, nav.scrolled {
              padding-left: 40px;
              padding-right: 40px;
           }
        }

        @media (max-width: 880px) {
          .nav-links, .nav-btn:not(.mobile-menu .nav-btn) {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }

        @media (max-width: 640px) {
          nav, nav.scrolled {
            padding: 14px 20px;
          }
          .logo :global(.logo-img) {
            height: 26px;
          }
        }
      `}</style>
    </nav>
  )
}
