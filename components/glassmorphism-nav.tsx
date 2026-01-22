"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react"


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
            <Link href="/#industries" className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
              Industries
            </Link>


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
                <Link
                  href="/#industries"
                  className="block py-2 text-slate-300 hover:text-white text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Industries
                </Link>
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
