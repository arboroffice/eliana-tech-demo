import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-black py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">ELIANATECH</h3>
          <p className="text-slate-400 mb-4">
            Scaling infrastructure and operational excellence for ambitious founders.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Pages</h3>
          <ul className="text-slate-400 space-y-2">
            <li><Link href="/"><a className="hover:text-white transition-colors duration-300">Home</a></Link></li>
            <li><Link href="/audit"><a className="hover:text-white transition-colors duration-300">Audit</a></Link></li>
            <li><Link href="/blog"><a className="hover:text-white transition-colors duration-300">Blog</a></Link></li>
            <li><Link href="/founder"><a className="hover:text-white transition-colors duration-300">Founder</a></Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Contact</h3>
          <ul className="text-slate-400 space-y-2">
            <li><Link href="mailto:support@elianatech.com"><a className="hover:text-white transition-colors duration-300">support@elianatech.com</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10 text-center text-slate-400">
        &copy; {new Date().getFullYear()} ELIANATECH. All rights reserved.
      </div>
    </footer>
  )
}