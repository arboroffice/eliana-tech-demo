"use client"
import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <AnimatedContainer className="flex items-center gap-4">
          <div className="relative w-12 h-12 overflow-hidden rounded-lg">
            <Image src="/icon.png" alt="Elianatech Logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-2xl text-white uppercase tracking-tight">ELIANATECH</span>
        </AnimatedContainer>

        <AnimatedContainer delay={0.2} className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </AnimatedContainer>

        <AnimatedContainer delay={0.3}>
          <Link
            href="/audit"
            className="inline-block px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
          >
            Free Automation Audit
          </Link>
        </AnimatedContainer>
      </div>

      <div className="mt-8 flex items-center justify-center space-x-6">
        <a
          href="https://www.linkedin.com/company/elianatechh/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="w-5 h-5" />
        </a>
      </div>

      <div className="mt-6 text-center space-y-2">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Eliana Tech. All rights reserved.</p>
        <p className="text-muted-foreground/40 text-xs italic">Made with ease, light and love ✨</p>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
