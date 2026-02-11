import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { Shield, Award, Users, ArrowRight } from "lucide-react";

const values = [
    {
        icon: Shield,
        title: "Ethical Standards",
        description:
            "Built on integrity and Catholic-inspired values, we maintain the highest ethical standards in every transaction.",
    },
    {
        icon: Award,
        title: "Premium Quality",
        description:
            "Every component undergoes rigorous quality inspection to ensure dimensional accuracy and material purity.",
    },
    {
        icon: Users,
        title: "Client Partnership",
        description:
            "We treat every client relationship as a covenant — a promise of reliability, trust, and long-term partnership.",
    },
];

export default function AboutSnapshot() {
    return (
        <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection>
                    <SectionHeading
                        title="About Covenant Associates"
                        subtitle="Precision engineering meets ethical excellence. Since 2025, we've been manufacturing PTFE products that industries trust."
                    />
                </AnimatedSection>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <AnimatedSection direction="left">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
                            <Image
                                src="/logo.png"
                                alt="Covenant Associates Facility"
                                fill
                                className="object-contain p-12 bg-navy/5"
                            />
                            {/* Gold accent corner */}
                            <div className="absolute top-0 left-0 w-24 h-24">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
                                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-gold" />
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Content */}
                    <AnimatedSection direction="right">
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                Covenant Associates is a leading manufacturer, exporter, and
                                supplier of high-quality PTFE (Teflon) products and
                                precision-engineered components. Our state-of-the-art
                                manufacturing facility equipped with modern CNC machinery
                                enables us to deliver consistent quality across our entire
                                product range.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                From PTFE balls and gaskets to PEEK components and custom
                                machined parts, we serve pharmaceutical, chemical processing,
                                food & beverage, and heavy engineering industries with
                                products that meet the most demanding specifications.
                            </p>
                            <Button asChild variant="outline" className="group">
                                <Link href="/about">
                                    Learn More About Us
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Values */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item, i) => (
                        <AnimatedSection key={item.title} delay={i * 0.15}>
                            <div className="relative p-8 rounded-2xl border border-border/50 bg-white dark:bg-navy-light hover:shadow-lg transition-shadow duration-300 group">
                                <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center mb-5 group-hover:bg-royal/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-royal" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                                {/* Gold bottom accent */}
                                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
