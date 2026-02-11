import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Covenant Associates. Visit our manufacturing facility, call us, or send an enquiry for PTFE products and custom components.",
};

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Us",
        details: [
            "HDIL Industries Park",
            "Building No.11, Unit No.1, Ground Floor",
            "Chandansar Road, Virar (E) - 401303",
            "Maharashtra, India",
        ],
    },
    {
        icon: Phone,
        title: "Call Us",
        details: ["+91 9881532102", "+91 7498631784"],
        links: ["tel:+919881532102", "tel:+917498631784"],
    },
    {
        icon: Mail,
        title: "Email Us",
        details: ["info@covenantassociates.com"],
        links: ["mailto:info@covenantassociates.com"],
    },
    {
        icon: Clock,
        title: "Business Hours",
        details: ["Monday - Saturday", "9:00 AM - 6:00 PM IST"],
    },
];

export default function ContactPage() {
    return (
        <div className="pt-8">
            {/* Page Header */}
            <div className="bg-gradient-covenant py-16 md:py-20 mb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <AnimatedSection>
                        <SectionHeading
                            title="Contact Us"
                            subtitle="We'd love to hear from you. Reach out for product enquiries, custom requirements, or factory visits."
                            light
                        />
                    </AnimatedSection>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((info, i) => (
                        <AnimatedSection key={info.title} delay={i * 0.1} direction="scale">
                            <div className="p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-shadow text-center h-full">
                                <div className="w-14 h-14 rounded-2xl bg-royal/10 flex items-center justify-center mx-auto mb-4">
                                    <info.icon className="w-7 h-7 text-royal" />
                                </div>
                                <h3 className="font-semibold mb-3">{info.title}</h3>
                                <div className="space-y-1">
                                    {info.details.map((detail, j) =>
                                        info.links?.[j] ? (
                                            <a
                                                key={j}
                                                href={info.links[j]}
                                                className="block text-sm text-muted-foreground hover:text-royal transition-colors"
                                            >
                                                {detail}
                                            </a>
                                        ) : (
                                            <p key={j} className="text-sm text-muted-foreground">
                                                {detail}
                                            </p>
                                        )
                                    )}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Map */}
                <AnimatedSection>
                    <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123456789!2d72.79!3d19.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI3JzM2LjAiTiA3MsKwNDcnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Covenant Associates Location"
                            className="w-full"
                        />
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
