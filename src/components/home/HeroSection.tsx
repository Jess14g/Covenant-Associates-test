"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Cog } from "lucide-react";

const floatingShapes = [
    { size: 120, x: "10%", y: "20%", delay: 0, duration: 8 },
    { size: 80, x: "75%", y: "15%", delay: 1, duration: 10 },
    { size: 60, x: "60%", y: "65%", delay: 2, duration: 7 },
    { size: 100, x: "85%", y: "50%", delay: 0.5, duration: 9 },
    { size: 40, x: "25%", y: "75%", delay: 1.5, duration: 6 },
];

export default function HeroSection() {
    return (
        <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-covenant">
            {/* Floating abstract shapes */}
            {floatingShapes.map((shape, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full opacity-10"
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: shape.x,
                        top: shape.y,
                        background:
                            i % 2 === 0
                                ? "linear-gradient(135deg, #D4A843, #E8C96A)"
                                : "linear-gradient(135deg, #3B82F6, #1E40AF)",
                    }}
                    animate={{
                        y: [0, -30, 0, 30, 0],
                        x: [0, 15, -15, 10, 0],
                        scale: [1, 1.1, 0.95, 1.05, 1],
                    }}
                    transition={{
                        duration: shape.duration,
                        delay: shape.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gold text-sm font-medium backdrop-blur-sm border border-white/10 mb-8">
                            <Award className="w-4 h-4" />
                            Premium PTFE Products — Est. 2025
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif leading-[1.1] mb-6"
                    >
                        Precision-Engineered{" "}
                        <span className="text-gold">PTFE Solutions</span> for Industry
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed"
                    >
                        Covenant Associates delivers high-quality PTFE (Teflon) components
                        with unmatched precision, reliability, and ethical standards.
                        Trusted by industries worldwide.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-gold hover:bg-gold-light text-navy font-semibold h-13 px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Link href="/enquiry">
                                Get a Quote
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-white/30 text-white hover:bg-white/10 h-13 px-8 text-base backdrop-blur-sm"
                        >
                            <Link href="/products">Explore Products</Link>
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
                    >
                        {[
                            { value: "20+", label: "Products" },
                            { value: "500+", label: "Clients" },
                            { value: "100%", label: "Quality" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl md:text-3xl font-bold text-gold">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
