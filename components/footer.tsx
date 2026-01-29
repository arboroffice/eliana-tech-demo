"use client"
import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <AnimatedContainer className="flex items-center gap-4">
          <Image src="/placeholder-logo.png" alt="Elianatech Logo" width={48} height={48} className="size-12 rounded-lg" />
          <span className="font-bold text-2xl text-white">ELIANATECH</span>
        </AnimatedContainer>

        <AnimatedContainer delay={0.2} className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
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
            Get Your Free AI Audit
          </Link>
        </AnimatedContainer>
      </div>

      <div className="mt-8 text-center space-y-2">
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
