import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Get a Quote",
    description:
        "Request a competitive quotation for PTFE products and custom components. Our team responds within 24 hours.",
};

export default function EnquiryPage() {
    return (
        <div className="pt-8">
            {/* Page Header */}
            <div className="bg-gradient-covenant py-16 md:py-20 mb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <AnimatedSection>
                        <SectionHeading
                            title="Get a Quote"
                            subtitle="Share your requirements and we'll respond with a competitive quotation within 24 hours."
                            light
                        />
                    </AnimatedSection>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <div className="p-8 rounded-2xl border border-border/50 bg-card shadow-sm">
                                <h2 className="text-2xl font-bold font-serif mb-2">
                                    Enquiry Form
                                </h2>
                                <p className="text-muted-foreground text-sm mb-8">
                                    Fields marked with <span className="text-destructive">*</span>{" "}
                                    are required.
                                </p>
                                <EnquiryForm />
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <AnimatedSection delay={0.2} direction="right">
                            <div className="sticky top-28 space-y-6">
                                {/* Quick info */}
                                <div className="p-6 rounded-2xl bg-gradient-covenant text-white">
                                    <h3 className="font-semibold mb-4 text-gold">
                                        Quick Contact
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-sm text-white/80">
                                            <Phone className="w-4 h-4 text-gold shrink-0" />
                                            +91 9881532102
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-white/80">
                                            <Mail className="w-4 h-4 text-gold shrink-0" />
                                            info@covenantassociates.com
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-white/80">
                                            <Clock className="w-4 h-4 text-gold shrink-0" />
                                            Mon - Sat, 9AM - 6PM IST
                                        </li>
                                    </ul>
                                </div>

                                {/* Why us */}
                                <div className="p-6 rounded-2xl border border-border/50 bg-card">
                                    <h3 className="font-semibold mb-4">Why Choose Us?</h3>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="text-gold mt-0.5">✦</span>
                                            Competitive pricing with transparent quotations
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gold mt-0.5">✦</span>
                                            Quick turnaround — response within 24 hours
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gold mt-0.5">✦</span>
                                            Custom machining to your exact specifications
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gold mt-0.5">✦</span>
                                            Quality inspection on every batch
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gold mt-0.5">✦</span>
                                            Pan-India delivery network
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    );
}
