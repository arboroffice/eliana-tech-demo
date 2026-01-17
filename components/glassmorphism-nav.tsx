"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react"

const FEATURED_INDUSTRIES = [
  { name: "Automotive", href: "/car-dealerships" },
  { name: "Real Estate", href: "/real-estate" },
  { name: "Healthcare", href: "/healthcare" },
  { name: "Dentists", href: "/dentists" },
  { name: "Retail", href: "/retail" },
  { name: "Ecommerce", href: "/ecommerce" },
  { name: "Restaurants", href: "/restaurants" },
  { name: "Finance", href: "/finance" },
  { name: "Salons & Spas", href: "/barbers-salons" }
]

export function GlassmorphismNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isIndustryOpen, setIsIndustryOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
                src="/placeholder-logo.png"
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
            {/* Industries Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsIndustryOpen(true)}
              onMouseLeave={() => setIsIndustryOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                Industries <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <AnimatePresence>
                {isIndustryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl grid grid-cols-2 gap-4"
                  >
                    {FEATURED_INDUSTRIES.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors group/item"
                      >
                        <span className="text-sm text-slate-300 group-hover/item:text-white font-medium">{item.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover/item:text-white opacity-0 group-hover/item:opacity-100 transition-all" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/audit" className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center">
              <span className="relative flex h-3 w-3 inline-block mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Free Audit
            </Link>

            <Link
              href="/#contact"
              className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
            >
              Contact Us
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Industries</div>
                {FEATURED_INDUSTRIES.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-slate-300 hover:text-white text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-white/10 my-4" />

              <Link
                href="/audit"
                className="block text-lg font-medium text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Audit
              </Link>
              <Link
                href="/#contact"
                className="block text-lg font-medium text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  )
}
