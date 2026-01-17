"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const phases = [
    {
        title: "Startup Foundation",
        subtitle: "Phase 1-2 • $0 - $500K Rev",
        description: "Get your foundation right from the start. Stop guessing, start building.",
        price: "From $2,500",
        features: [
            "Business model audit & optimization",
            "Core process documentation",
            "Basic CRM & Automation setup",
            "30-day action plan",
        ],
        highlight: false,
    },
    {
        title: "Growth Accelerator",
        subtitle: "Phase 3-4 • $500K - $5M Rev",
        description: "Scale your operations without scaling your headaches.",
        price: "From $25,000",
        features: [
            "Full business audit (8 Depts)",
            "Sales process rebuild & automation",
            "Marketing & Ops overhaul",
            "KPI dashboard & Mgmt training",
        ],
        highlight: true,
    },
    {
        title: "Scale Operations",
        subtitle: "Phase 5-6 • $5M - $100M Rev",
        description: "Optimize and automate for efficiency at scale.",
        price: "From $150,000",
        features: [
            "Enterprise operations audit",
            "Process mining & AI strategy",
            "Tech stack consolidation",
            "Change management support",
        ],
        highlight: false,
    },
]

const departments = [
    {
        name: "Sales & Revenue",
        packages: [
            { name: "Sales Foundation", price: "$5,000" },
            { name: "Sales Machine", price: "$15,000" },
            { name: "Revenue Ops", price: "$50,000" },
        ],
    },
    {
        name: "Marketing & Lead Gen",
        packages: [
            { name: "Marketing Foundation", price: "$5,000" },
            { name: "Marketing Machine", price: "$20,000" },
            { name: "Demand Gen", price: "$75,000" },
        ],
    },
    {
        name: "Operations & Delivery",
        packages: [
            { name: "Ops Foundation", price: "$7,500" },
            { name: "Ops Excellence", price: "$25,000" },
            { name: "Enterprise Ops", price: "$100,000" },
        ],
    },
    {
        name: "AI & Automation",
        packages: [
            { name: "AI Starter", price: "$10,000" },
            { name: "AI Accelerator", price: "$35,000" },
            { name: "AI Transformation", price: "$100,000+" },
        ],
    },
]

export function ServiceCatalog() {
    const [activeTab, setActiveTab] = useState<"phases" | "departments">("phases")

    return (
        <section className="py-20 px-4 bg-black text-white relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Complete Service Catalog for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Business Growth</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                        From Startup to $100M+ | Every Phase | Every Department
                    </p>

                    <div className="inline-flex bg-white/10 p-1 rounded-full backdrop-blur-sm">
                        <button
                            onClick={() => setActiveTab("phases")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "phases" ? "bg-white text-black" : "text-white hover:bg-white/10"
                                }`}
                        >
                            Phase-Based Packages
                        </button>
                        <button
                            onClick={() => setActiveTab("departments")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "departments" ? "bg-white text-black" : "text-white hover:bg-white/10"
                                }`}
                        >
                            Department Packages
                        </button>
                    </div>
                </div>

                {activeTab === "phases" ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {phases.map((phase, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${phase.highlight
                                        ? "bg-white/10 border-blue-500/50 shadow-2xl shadow-blue-500/20"
                                        : "bg-white/5 border-white/10 hover:border-white/20"
                                    }`}
                            >
                                <div className="mb-4">
                                    <span className="text-sm font-medium text-blue-400">{phase.subtitle}</span>
                                    <h3 className="text-2xl font-bold mt-2 mb-2">{phase.title}</h3>
                                    <p className="text-slate-400 text-sm">{phase.description}</p>
                                </div>
                                <div className="text-3xl font-bold mb-6">{phase.price}</div>
                                <ul className="space-y-3 mb-8">
                                    {phase.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-300">
                                            <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full bg-white text-black hover:bg-slate-200">
                                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {departments.map((dept, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-blue-300">{dept.name}</h3>
                                <div className="space-y-4">
                                    {dept.packages.map((pkg, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0 last:pb-0">
                                            <span className="text-sm font-medium text-slate-200">{pkg.name}</span>
                                            <span className="text-sm text-slate-400">{pkg.price}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="ghost" className="w-full mt-6 text-white hover:text-white hover:bg-white/10">
                                    Explore <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-4">Retainer Partnerships</h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Ongoing advisory and implementation support to ensure your growth never stalls.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white/5 px-6 py-4 rounded-lg border border-white/10">
                            <div className="text-sm text-slate-400">Growth Partner</div>
                            <div className="text-xl font-bold">$5,000/mo</div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 px-6 py-4 rounded-lg border border-blue-500/30">
                            <div className="text-sm text-blue-300">Scale Partner</div>
                            <div className="text-xl font-bold">$15,000/mo</div>
                        </div>
                        <div className="bg-white/5 px-6 py-4 rounded-lg border border-white/10">
                            <div className="text-sm text-slate-400">Enterprise Partner</div>
                            <div className="text-xl font-bold">$35,000+/mo</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
