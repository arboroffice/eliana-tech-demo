"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
    children: ReactNode
    delay?: number
    duration?: number
    direction?: "up" | "down" | "left" | "right"
    distance?: number
    className?: string
    once?: boolean
}

export function ScrollReveal({
    children,
    delay = 0,
    duration = 0.6,
    direction = "up",
    distance = 30,
    className,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once, amount: 0.2 })

    const directionOffset = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                ...directionOffset[direction],
            }}
            animate={
                isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, ...directionOffset[direction] }
            }
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
        >
            {children}
        </motion.div>
    )
}

interface StaggerContainerProps {
    children: ReactNode
    className?: string
    staggerDelay?: number
}

export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.08,
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.15 })

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    )
}

interface StaggerItemProps {
    children: ReactNode
    className?: string
    direction?: "up" | "down" | "left" | "right"
    distance?: number
}

export function StaggerItem({
    children,
    className,
    direction = "up",
    distance = 20,
}: StaggerItemProps) {
    const directionOffset = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
    }

    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, ...directionOffset[direction] },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    )
}

export function Divider({ className = "" }: { className?: string }) {
    return (
        <div className={`flex justify-center ${className}`}>
            <div className="w-16 h-px bg-white/10" />
        </div>
    )
}
