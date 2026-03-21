"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Target, 
  Layers, 
  MousePointer2, 
  Smartphone, 
  Monitor, 
  Copy, 
  Check,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Leaf
} from 'lucide-react';

// Ad Data Types
type AdConcept = {
  id: string;
  stage: number;
  stageName: string;
  headline: string;
  body: string;
  cta: string;
  image: string;
  vibe: string;
};

type Brand = {
  id: string;
  name: string;
  handle: string;
  color: string;
  secondary: string;
  icon: React.ElementType;
  ads: AdConcept[];
};

const BRANDS: Brand[] = [
  {
    id: 'elianatech',
    name: 'ElianaTech',
    handle: '@elianatech',
    color: '#D90019', // Neon Red
    secondary: '#0C0C0C',
    icon: ShieldCheck,
    ads: [
      {
        id: 'e-1',
        stage: 1,
        stageName: 'Unaware',
        headline: 'Stop Renting. Start Owning.',
        body: 'Most businesses are just renting the hours of people who execute repetitive tasks. When the person leaves, the productivity leaves. ElianaTech installs technical infrastructure that you own. Systems that compound in value, run 24/7, and never churn.',
        cta: 'Own Your Assets',
        image: 'https://images.unsplash.com/photo-1558494949-ef0109583a84?auto=format&fit=crop&q=80&w=1080', // Replace with generated image path in final
        vibe: 'Industrial Minimalist'
      },
      {
        id: 'e-2',
        stage: 2,
        stageName: 'Problem Aware',
        headline: 'Why scaling feels harder, not easier.',
        body: 'If every $10k in new revenue requires a new hire, you aren\'t scaling—you\'re just growing overhead. Real scale is exponential. It happens when you install autonomous systems for intake, follow-up, and ops.',
        cta: 'Scale Correctly',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080',
        vibe: 'Data Brutalism'
      },
      {
        id: 'e-3',
        stage: 3,
        stageName: 'Solution Aware',
        headline: 'We Install Code, Not PDFs.',
        body: 'Consultants sell strategy. We sell servers. Don\'t pay for another 50-page PDF of "advice". We install the actual technical architecture that runs your business for you. From autonomous follow-up to financial reporting.',
        cta: 'Get Infrastructure',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080',
        vibe: 'System Architecture'
      },
      {
        id: 'e-4',
        stage: 4,
        stageName: 'Product Aware',
        headline: 'Your Business, On Autopilot.',
        body: 'ElianaTech connects every department into a single, autonomous circuit. One source of truth. Zero manual work. 100% Visibility. The AI Wing is the infrastructure that lets you scale without stress.',
        cta: 'See the Blueprint',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1080',
        vibe: 'Future Ops'
      },
      {
        id: 'e-5',
        stage: 5,
        stageName: 'Most Aware',
        headline: 'Where is your growth leaking?',
        body: 'Book your 30-minute Infrastructure Audit. We\'ll tear down your operations and show you exactly where manual work is killing your margins—and how to automate it in 90 days.',
        cta: 'Book My Audit',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1080',
        vibe: 'Direct Response'
      }
    ]
  },
  {
    id: 'arboroffice',
    name: 'ArborOffice',
    handle: '@arboroffice',
    color: '#1B3022', // Forest Green
    secondary: '#D90019',
    icon: Leaf,
    ads: [
      {
        id: 'a-1',
        stage: 1,
        stageName: 'Unaware',
        headline: 'You can\'t close a $5,000 job from a harness.',
        body: 'You\'re 40 feet up in a White Oak. Your phone is buzzing. That\'s a homeowner ready to sign, but they\'re calling your competitor because you didn\'t answer. Scale your revenue without adding headcount.',
        cta: 'Get the System',
        image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&q=80&w=1080',
        vibe: 'Relatable Pain'
      },
      {
        id: 'a-2',
        stage: 2,
        stageName: 'Problem Aware',
        headline: 'How many storm calls did you miss last night?',
        body: 'When the wind hits, the calls flood in. 40 simultaneous leads. Your voicemail is full. Every missed call is $3,000+ walking out the door. ArborOffice AI handles 50 calls at once.',
        cta: 'Plug the Leaks',
        image: 'https://images.unsplash.com/photo-1527482797697-87c5f0427f75?auto=format&fit=crop&q=80&w=1080',
        vibe: 'Storm Triage'
      },
      {
        id: 'a-3',
        stage: 3,
        stageName: 'Solution Aware',
        headline: 'Don\'t Rent Humans. Install Code.',
        body: 'Answering services take notes. ArborOffice BOOKS jobs. Our AI triages by species, hazard level, and equipment needs—automatically. Stop being the bottleneck.',
        cta: 'See AI in Action',
        image: 'https://images.unsplash.com/photo-1621905252507-b354bcadc0d6?auto=format&fit=crop&q=80&w=1080',
        vibe: 'Efficiency'
      },
      {
        id: 'a-4',
        stage: 4,
        stageName: 'Product Aware',
        headline: 'The Storm Ops Blueprint.',
        body: 'Built specifically for the $1M-$10M Tree Business. Generic CRMs are for dentists. We built ArborOffice for the field. The blueprint for dominating emergency events in your region.',
        cta: 'Download Blueprint',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1080',
        vibe: 'Technical Industrial'
      },
      {
        id: 'a-5',
        stage: 5,
        stageName: 'Most Aware',
        headline: 'Ready for the next big storm?',
        body: 'Book a 15-minute Storm Prep Audit. We\'ll tear down your intake process and show you how to capture 100% of your next surge. Limited slots for Q2.',
        cta: 'Book My Audit',
        image: 'https://images.unsplash.com/photo-1512403754473-27855fbcaccb?auto=format&fit=crop&q=80&w=1080',
        vibe: 'Urgency'
      }
    ]
  }
];

export default function MarketingDashboard() {
  const [activeBrand, setActiveBrand] = useState(BRANDS[0]);
  const [activeStage, setActiveStage] = useState(1);
  const [copied, setCopied] = useState<string | null>(null);

  const currentAd = activeBrand.ads.find(a => a.stage === activeStage) || activeBrand.ads[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#FAFAF8] p-8 font-sans">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 italic">MARKETING OPS</h1>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Autonomous Ad Management Dashboard</p>
        </div>

        {/* Brand Toggle */}
        <div className="flex bg-[#1A1A1A] p-1 rounded-full border border-gray-800">
          {BRANDS.map((brand) => (
            <button
              key={brand.id}
              onClick={() => {
                setActiveBrand(brand);
                setActiveStage(1);
              }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeBrand.id === brand.id 
                  ? 'bg-white text-black shadow-lg scale-105' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              <brand.icon size={16} />
              {brand.name}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Strategy & Control */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Awareness Stepper */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Awareness Strategy</h3>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setActiveStage(num)}
                  className={`relative p-4 rounded-xl border transition-all text-left group ${
                    activeStage === num 
                      ? 'border-white bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                      : 'border-gray-800 bg-transparent hover:border-gray-600'
                  }`}
                >
                  <span className={`text-xs font-mono mb-1 block ${activeStage === num ? 'text-white' : 'text-gray-600'}`}>0{num}</span>
                  <span className={`text-xs font-bold uppercase transition-colors ${activeStage === num ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {activeBrand.ads.find(a => a.stage === num)?.stageName}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Ad Matrix */}
          <div className="bg-[#141414] rounded-3xl p-8 border border-gray-800 relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <Target className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-bold italic tracking-tight uppercase">Technical Hook Matrix</h4>
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] uppercase font-mono tracking-widest text-gray-400">
                  Stage 0{activeStage} Content
                </div>
              </div>

              <div className="space-y-6">
                {/* Headline Section */}
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Headline</span>
                    <button 
                      onClick={() => handleCopy(currentAd.headline, 'h')}
                      className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
                    >
                      {copied === 'h' ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                  <p className="text-2xl font-black italic tracking-tighter leading-tight group-hover:text-white transition-colors">
                    {currentAd.headline}
                  </p>
                </div>

                {/* Body Section */}
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Body Copy</span>
                    <button 
                      onClick={() => handleCopy(currentAd.body, 'b')}
                      className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
                    >
                      {copied === 'b' ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                  <p className="text-gray-400 text-lg font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                    {currentAd.body}
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest block mb-1">Visual Direction</span>
                    <span className="font-bold text-sm tracking-tight">{currentAd.vibe}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest block mb-1">Call to Action</span>
                    <span className="font-bold text-sm tracking-tight">{currentAd.cta}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Metrics Mock */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#141414] p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-2 mb-4 text-gray-500">
                <MousePointer2 size={16} />
                <span className="text-[10px] font-mono uppercase tracking-widest">Probable CTR</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-black italic">2.84%</span>
                <span className="text-green-500 text-xs font-bold flex items-center gap-0.5 mb-1">
                  <TrendingUp size={10} /> +12%
                </span>
              </div>
            </div>
            <div className="bg-[#141414] p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-2 mb-4 text-gray-500">
                <Zap size={16} />
                <span className="text-[10px] font-mono uppercase tracking-widest">Estimated ROAS</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-black italic">4.2x</span>
                <span className="text-green-500 text-xs font-bold flex items-center gap-0.5 mb-1">
                  <TrendingUp size={10} /> +5%
                </span>
              </div>
            </div>
            <div className="bg-[#141414] p-6 rounded-2xl border border-gray-800 group cursor-pointer hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 mb-4 text-gray-500 group-hover:text-white">
                <Smartphone size={16} />
                <span className="text-[10px] font-mono uppercase tracking-widest">Mobile Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black italic uppercase italic">98%</span>
                <ChevronRight size={16} className="text-gray-600 group-hover:text-white ml-auto" />
              </div>
            </div>
          </div>

        </div>

        {/* Right: Phone Live Feed Emulator */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-8">
            <div className="flex justify-center">
              {/* Phone Frame */}
              <div className="relative w-[340px] h-[680px] bg-[#000] rounded-[50px] border-[10px] border-[#1A1A1A] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-10 px-8 flex justify-between items-center z-50 pt-2">
                  <span className="text-[10px] font-bold">12:44</span>
                  <div className="flex items-center gap-1.5">
                    <BarChart3 size={10} />
                    <div className="w-4 h-2 rounded-sm border border-white/50 bg-white" />
                  </div>
                </div>

                {/* FB Viewport */}
                <div className="w-full h-full bg-[#1A1A1A] overflow-y-auto">
                  <div className="pt-12 px-4">
                    {/* FB Post Mockup */}
                    <div className="bg-[#242526] rounded-xl overflow-hidden shadow-xl border border-white/5">
                      {/* Ad Header */}
                      <div className="p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center`} style={{ backgroundColor: activeBrand.color }}>
                            <activeBrand.icon size={20} className="text-white" />
                          </div>
                          <div>
                            <h5 className="text-[13px] font-bold text-white mb-0.5 leading-tight">{activeBrand.name}</h5>
                            <div className="flex items-center gap-1">
                              <span className="text-[11px] text-gray-400">Sponsored</span>
                              <span className="text-gray-500 text-[10px]">·</span>
                              <ShieldCheck size={10} className="text-gray-500" />
                            </div>
                          </div>
                        </div>
                        <button className="text-gray-400 p-1">...</button>
                      </div>

                      {/* Ad Body (Top) */}
                      <div className="px-3 pb-3">
                        <p className="text-[13px] text-gray-200 leading-normal line-clamp-3">
                          {currentAd.body}
                        </p>
                      </div>

                      {/* Ad Image */}
                      <div className="w-full aspect-square bg-black border-y border-white/5 overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentAd.id}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            src={currentAd.image}
                            alt="Ad Creative"
                            className="w-full h-full object-cover"
                          />
                        </AnimatePresence>
                      </div>

                      {/* Ad Footer */}
                      <div className="p-3 pb-4 bg-[#3E4042] flex items-center justify-between">
                        <div className="max-w-[70%]">
                          <span className="text-[10px] text-gray-400 uppercase tracking-tighter block mb-0.5">{activeBrand.handle}</span>
                          <h6 className="text-[14px] font-bold text-white tracking-tight line-clamp-1">{currentAd.headline}</h6>
                        </div>
                        <button className="bg-[#4E4F50] px-4 py-2 rounded-lg text-white text-[13px] font-bold hover:bg-[#5E5F60] transition-colors whitespace-nowrap">
                          {currentAd.cta}
                        </button>
                      </div>
                    </div>

                    {/* Simulating Feed Context */}
                    <div className="mt-6 opacity-30 px-2 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700" />
                        <div className="space-y-2">
                          <div className="w-32 h-2 bg-gray-700 rounded" />
                          <div className="w-24 h-2 bg-gray-700 rounded" />
                        </div>
                      </div>
                      <div className="w-full h-40 bg-gray-800 rounded-xl" />
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#000] rounded-full z-50">
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#141414] rounded-full" />
                </div>
              </div>
            </div>

            {/* Hint */}
            <div className="mt-8 text-center">
              <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">
                Live Interaction Emulator Active
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Gradient */}
      <div className="fixed -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-[#D90019]/5 blur-[150px] -z-10 pointer-events-none" />
      <div className="fixed -top-[20%] -right-[10%] w-[50%] h-[50%] bg-white/5 blur-[150px] -z-10 pointer-events-none" />
    </div>
  );
}
