"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, MessageSquareQuote } from "lucide-react";

export default function CTABanner() {
    return (
        <section className="relative overflow-hidden">
            <div className="bg-gradient-covenant py-20 md:py-28">
                {/* Decorative shapes */}
                <motion.div
                    className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-gold/5"
                    animate={{ y: [0, -20, 0], x: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transform: "translate(-50%, -50%)" }}
                />
                <motion.div
                    className="absolute top-0 right-0 w-96 h-96 rounded-full bg-royal/10"
                    animate={{ y: [0, 20, 0], x: [10, -10, 10] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transform: "translate(30%, -30%)" }}
                />

                <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-gold text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
                            <MessageSquareQuote className="w-4 h-4" />
                            Ready to get started?
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-6 leading-tight">
                            Need Custom PTFE Components?
                            <br />
                            <span className="text-gold">Let&apos;s Talk.</span>
                        </h2>
                        <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
                            Share your specifications and our engineering team will respond
                            with a competitive quotation within 24 hours.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gold hover:bg-gold-light text-navy font-semibold h-13 px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Link href="/enquiry">
                                    Get a Free Quote
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-white/30 text-white hover:bg-white/10 h-13 px-8 text-base"
                            >
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
