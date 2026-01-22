"use client"

import { motion } from "framer-motion"
import { Building2, Factory, Stethoscope, ShoppingBag, Truck, Zap, GraduationCap, Gavel, Home, Wrench, Briefcase, Utensils, Globe, Shield, TrendingUp, Sprout, Plane, Calendar, Film } from "lucide-react"

const INDUSTRIES = [
    { name: "Automotive", icon: Truck },
    { name: "Real Estate", icon: Home },
    { name: "Healthcare", icon: Stethoscope },
    { name: "Dentists", icon: Stethoscope },
    { name: "Retail", icon: ShoppingBag },
    { name: "Ecommerce", icon: ShoppingBag },
    { name: "Restaurants", icon: Utensils },
    { name: "Finance", icon: TrendingUp },
    { name: "Salons & Spas", icon: Building2 },
    { name: "Construction & Trades", icon: Wrench },
    { name: "Creative & Marketing", icon: Globe },
    { name: "Education & Training", icon: GraduationCap },
    { name: "Energy & Solar", icon: Zap },
    { name: "Food & Hospitality", icon: Utensils },
    { name: "Health & Wellness", icon: Stethoscope },
    { name: "Home Services", icon: Wrench },
    { name: "Industrial & B2B Services", icon: Factory },
    { name: "Legal & Insurance", icon: Gavel },
    { name: "Manufacturing & Production", icon: Factory },
    { name: "Oil & Gas", icon: Factory },
    { name: "Private Equity", icon: TrendingUp },
    { name: "Professional Services", icon: Briefcase },
    { name: "Real Estate Development", icon: Building2 },
    { name: "Tech & Software", icon: Globe },
    { name: "Transportation & Logistics", icon: Truck },
    { name: "Wholesale & Distribution", icon: Factory },
    { name: "Agriculture", icon: Sprout },
    { name: "Travel & Tourism", icon: Plane },
    { name: "Event Management", icon: Calendar },
    { name: "Media & Entertainment", icon: Film }
]

export function IndustriesSection() {
    return (
        <section id="industries" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
                            Industries We Serve
                        </h2>
                        <p className="text-lg text-slate-400">
                            Our AI solutions are tailored to meet the unique challenges and opportunities of your sector.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {INDUSTRIES.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 flex items-center gap-3 cursor-default"
                        >
                            <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                <industry.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                            </div>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                                {industry.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
