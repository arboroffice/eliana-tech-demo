"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"


export function GlassmorphismNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const industries = [
    { name: "SaaS", slug: "saas" },
    { name: "Agencies", slug: "agencies" },
    { name: "E-commerce", slug: "ecommerce" },
    { name: "Home Services", slug: "home-services" },
    { name: "Real Estate", slug: "real-estate" },
    { name: "Healthcare", slug: "healthcare" },
    { name: "Law / Accounting", slug: "legal-finance" },
    { name: "Construction", slug: "construction" },
    { name: "Manufacturing", slug: "manufacturing" },
    { name: "Professional Services", slug: "professional-services" },
    { name: "Membership", slug: "membership" },
    { name: "Digital Products", slug: "digital-products" },
    { name: "Coaches", slug: "coaching" },
    { name: "Course Creators", slug: "course-creators" },
    { name: "Hospitality", slug: "hospitality" },
  ]

  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl">
              <Image
                src="/icon.png"
                alt="Elianatech Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              ELIANATECH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative group"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1 py-2">
                Industries
                <motion.span
                  animate={{ rotate: isIndustriesOpen ? 180 : 0 }}
                  className="text-[10px]"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-[480px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl grid grid-cols-2 gap-2 mt-2"
                  >
                    {industries.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        className="text-xs text-slate-400 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-all"
                      >
                        {ind.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/systems" className="text-sm text-slate-300 hover:text-white transition-colors">
              Systems
            </Link>
            <Link href="/about" className="text-sm text-slate-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/founder" className="text-sm text-slate-300 hover:text-white transition-colors">
              Founder
            </Link>
            <Link href="/blog" className="text-sm text-slate-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link
              href="/audit"
              className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
            >
              Free Automation Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-0 bg-black z-40 overflow-y-auto"
          >
            <div className="flex items-center justify-between px-4 py-6 sm:px-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative w-10 h-10 overflow-hidden rounded-xl">
                  <Image src="/icon.png" alt="Elianatech Logo" fill className="object-cover" />
                </div>
                <span className="text-xl font-bold text-white">ELIANATECH</span>
              </Link>
              <button className="text-white p-2" onClick={() => setIsMobileMenuOpen(false)}>
                <X />
              </button>
            </div>

            <div className="px-6 pb-10 space-y-1">
              {[
                { href: "/systems", label: "Systems" },
                { href: "/about", label: "About" },
                { href: "/founder", label: "Founder" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-2xl font-bold text-white py-3 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Industries - collapsible */}
              <div>
                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className="flex items-center justify-between w-full text-2xl font-bold text-white py-3 border-b border-white/5"
                >
                  Industries
                  <motion.span animate={{ rotate: isIndustriesOpen ? 180 : 0 }} className="text-xs text-slate-500">
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-3 pb-4">
                        {industries.map((ind) => (
                          <Link
                            key={ind.slug}
                            href={`/industries/${ind.slug}`}
                            className="text-sm text-slate-400 hover:text-white py-2 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {ind.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-6">
                <Link
                  href="/audit"
                  className="block w-full text-center px-6 py-4 rounded-full bg-white text-black text-base font-black uppercase tracking-wider hover:bg-slate-200 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Automation Audit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  )
}
