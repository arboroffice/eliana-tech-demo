"use client"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white py-24 px-6 md:px-[80px] border-t border-zinc-800/50 overflow-hidden relative">
      <div className="absolute top-0 left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#D90019]/15 to-transparent" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 md:gap-12 relative z-10">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block">
            <Image src="/images/elianatech-logo.png" alt="Elianatech" width={140} height={36} className="h-8 w-auto object-contain" />
          </Link>
          <p className="text-[11px] text-white/60 mt-6 leading-relaxed max-w-[220px] tracking-wide">
            Your AI Department.<br />
            &copy; 2026 ElianaTech.
          </p>
          <div className="mt-8 flex gap-4 opacity-10 hover:opacity-100 transition-opacity">
            <Link href="/admin" className="text-[9px] uppercase tracking-widest text-white/70 hover:text-white">Admin CC</Link>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-8">Infrastructure</h4>
          <ul className="flex flex-col gap-4 text-[13px] font-light text-white/70">
            <li><Link href="/os/command-center" className="hover:text-white transition-colors">Command Center</Link></li>
            <li><Link href="/audit" className="hover:text-white transition-colors">OS Audit</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-8">Solutions</h4>
          <ul className="flex flex-col gap-4 text-[13px] font-light text-white/70">
            <li><Link href="/done-for-you" className="hover:text-white transition-colors">Done-For-You</Link></li>
            <li><Link href="/done-with-you" className="hover:text-white transition-colors">Co-Founder Model</Link></li>
            <li><Link href="/industries" className="hover:text-white transition-colors">Playbook Library</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-8">Company</h4>
          <ul className="flex flex-col gap-4 text-[13px] font-light text-white/70">
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/apply" className="hover:text-white transition-colors">Apply</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-8">Legal</h4>
          <ul className="flex flex-col gap-4 text-[13px] font-light text-white/70">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            <li><a href="mailto:hello@elianatech.com" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

    </footer>
  )
}
