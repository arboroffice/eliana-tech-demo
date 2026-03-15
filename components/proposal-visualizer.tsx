"use client"

import { motion, AnimatePresence } from "framer-motion"
import { FileText, CheckCircle2, Loader2, Sparkles } from "lucide-react"

interface ProposalVisualizerProps {
    currentStep: number
    totalSteps: number
    formData: any
}

export function ProposalVisualizer({ currentStep, totalSteps, formData }: ProposalVisualizerProps) {
    const progress = (currentStep / totalSteps) * 100

    const sections = [
        { id: 'profile', label: 'Owner Profile', completeAt: 1 },
        { id: 'systems', label: 'Systems Map', completeAt: 2 },
        { id: 'economics', label: 'Unit Economics', completeAt: 3 },
        { id: 'audience', label: 'Audience Scan', completeAt: 4 },
        { id: 'operations', label: 'Ops Hierarchy', completeAt: 5 },
        { id: 'stack', label: 'Tech Stack Gap', completeAt: 6 },
        { id: 'roadmap', label: 'Final Roadmap', completeAt: 7 },
    ]

    return (
        <div className="bg-white border border-[#E4E3DE] p-6 sticky top-24 font-mono shadow-none rounded-none">
            <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#D90019]" />
                <h3 className="text-black font-black uppercase tracking-tighter text-sm">Real-time Proposal Build</h3>
            </div>

            <div className="space-y-4">
                {sections.map((section, idx) => {
                    const isComplete = currentStep >= section.completeAt
                    const isCurrent = currentStep + 1 === section.completeAt

                    return (
                        <div key={section.id} className="flex items-start gap-4">
                            <div className="mt-1">
                                {isComplete ? (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                        <CheckCircle2 className="w-4 h-4 text-[#D90019]" />
                                    </motion.div>
                                ) : isCurrent ? (
                                    <Loader2 className="w-4 h-4 text-[#D90019] animate-spin" />
                                ) : (
                                    <div className="w-4 h-4 rounded-full border border-[#E4E3DE]" />
                                )}
                            </div>
                            <div className="flex-1">
                                <p className={`text-[10px] font-black uppercase tracking-widest ${isComplete ? 'text-black' : isCurrent ? 'text-[#D90019]' : 'text-[#888]'}`}>
                                    {section.label}
                                </p>
                                {isCurrent && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        className="h-0.5 bg-[#D90019]/10 mt-1 rounded-full overflow-hidden"
                                    >
                                        <motion.div
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                            className="h-full w-1/2 bg-[#D90019]"
                                        />
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4E3DE]">
                <div className="bg-[#F2F1ED] p-3 border border-[#E4E3DE]">
                    <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-3 h-3 text-[#555]" />
                        <span className="text-[9px] text-[#555] font-bold uppercase">Live Compiled Context</span>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] text-[#0C0C0C] font-medium truncate">
                            {formData.fullName ? `IDENTITY: ${formData.fullName}` : 'WAITING FOR NAME...'}
                        </p>
                        <p className="text-[10px] text-[#555] font-medium truncate">
                            {formData.businessType ? `SECTOR: ${formData.businessType}` : 'WAITING FOR SECTOR...'}
                        </p>
                        {currentStep > 1 && (
                            <p className="text-[10px] text-[#D90019] font-bold animate-pulse">
                                SYSTEM ARCHITECTURE DETECTED
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
