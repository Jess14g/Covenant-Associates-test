import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { Factory, Cpu, FlaskConical, Wrench } from "lucide-react";

const capabilities = [
    {
        icon: Factory,
        title: "Compression Moulding",
        description:
            "High-tonnage presses for manufacturing PTFE billets, rods, bushes, and custom moulded shapes with uniform density.",
    },
    {
        icon: Cpu,
        title: "CNC Machining",
        description:
            "Multi-axis CNC lathes and mills for precision machining of complex PTFE and PEEK components to tight tolerances.",
    },
    {
        icon: FlaskConical,
        title: "Quality Testing",
        description:
            "In-house testing lab with dimensional inspection, material testing, and surface finish verification for every batch.",
    },
    {
        icon: Wrench,
        title: "Custom Engineering",
        description:
            "From prototype to production, our engineering team works with your CAD files to deliver custom solutions.",
    },
];

export default function FactorySection() {
    return (
        <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection>
                    <SectionHeading
                        title="Factory & Capabilities"
                        subtitle="Our modern manufacturing facility is equipped with state-of-the-art machinery for precision PTFE processing."
                    />
                </AnimatedSection>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap, i) => (
                        <AnimatedSection key={cap.title} delay={i * 0.1} direction="scale">
                            <div className="relative p-6 rounded-2xl bg-gradient-to-b from-navy/5 to-transparent border border-border/50 text-center group hover:from-navy/10 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <cap.icon className="w-7 h-7 text-gold" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">{cap.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {cap.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
