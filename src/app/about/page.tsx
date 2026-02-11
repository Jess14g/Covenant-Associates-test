import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import {
    Shield,
    Target,
    Heart,
    Handshake,
    Factory,
    Award,
    Users,
    Globe,
} from "lucide-react";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Covenant Associates — a leading manufacturer and supplier of premium PTFE products. Est. 2025, committed to ethical excellence and precision engineering.",
};

const timeline = [
    {
        year: "2025",
        title: "Company Founded",
        description:
            "Covenant Associates established with a vision to deliver premium PTFE products with uncompromising quality and ethical values.",
    },
    {
        year: "2025",
        title: "Manufacturing Setup",
        description:
            "State-of-the-art manufacturing facility commissioned at HDIL Industries Park, Virar, with modern compression moulding and CNC machinery.",
    },
    {
        year: "2025",
        title: "Product Launch",
        description:
            "Full product range launched covering 20+ PTFE and PEEK product categories for pharmaceutical, chemical, and food processing industries.",
    },
    {
        year: "2026",
        title: "Growing Nationwide",
        description:
            "Expanding our client base across India and internationally, with a growing reputation for quality and reliability.",
    },
];

const values = [
    {
        icon: Shield,
        title: "Integrity",
        description: "Honest dealings and transparent pricing in every transaction.",
    },
    {
        icon: Target,
        title: "Precision",
        description: "Every component manufactured to the tightest tolerances.",
    },
    {
        icon: Heart,
        title: "Faith & Values",
        description:
            "Catholic-inspired ethical standards guide our business decisions.",
    },
    {
        icon: Handshake,
        title: "Covenant Promise",
        description:
            "We treat every client relationship as a sacred covenant of trust.",
    },
];

const stats = [
    { icon: Factory, value: "10,000+", label: "Sq.ft. Facility" },
    { icon: Award, value: "20+", label: "Product Lines" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Globe, value: "Pan India", label: "Delivery Network" },
];

export default function AboutPage() {
    return (
        <div className="pt-8">
            {/* Page Header */}
            <div className="bg-gradient-covenant py-16 md:py-20 mb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <AnimatedSection>
                        <SectionHeading
                            title="About Us"
                            subtitle="Building a legacy of precision engineering and ethical excellence since 2025."
                            light
                        />
                    </AnimatedSection>
                </div>
            </div>

            {/* Company Story */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection direction="left">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
                            <Image
                                src="/logo.png"
                                alt="Covenant Associates"
                                fill
                                className="object-contain p-16 bg-navy/5"
                            />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-serif">Our Story</h2>
                            <div className="h-1 w-16 bg-gradient-gold rounded-full" />
                            <p className="text-muted-foreground leading-relaxed">
                                Covenant Associates was founded in 2025 with a clear mission:
                                to be India&apos;s most trusted name in PTFE and high-performance
                                polymer components. The name &quot;Covenant&quot; reflects our
                                foundational belief that every business relationship is a
                                sacred promise.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Located at HDIL Industries Park in Virar, our manufacturing
                                facility is equipped with modern compression moulding presses,
                                multi-axis CNC machining centers, and a dedicated quality
                                testing laboratory. This enables us to produce everything from
                                standard PTFE rods and bushes to complex custom-machined
                                components.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We serve clients across pharmaceutical, chemical processing,
                                food & beverage, petrochemical, and general engineering
                                sectors, delivering products that consistently meet the most
                                demanding specifications.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-gradient-covenant py-16 mb-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <AnimatedSection key={stat.label} delay={i * 0.1} direction="scale">
                                <div className="text-center text-white">
                                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-gold" />
                                    <p className="text-3xl md:text-4xl font-bold text-gold mb-1">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-white/60">{stat.label}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
                <AnimatedSection>
                    <SectionHeading
                        title="Our Values"
                        subtitle="The principles that guide everything we do."
                    />
                </AnimatedSection>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, i) => (
                        <AnimatedSection key={value.title} delay={i * 0.1}>
                            <div className="p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-shadow text-center group">
                                <div className="w-14 h-14 rounded-2xl bg-royal/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-royal/20 transition-colors">
                                    <value.icon className="w-7 h-7 text-royal" />
                                </div>
                                <h3 className="font-semibold mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {value.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
                <AnimatedSection>
                    <SectionHeading
                        title="Our Journey"
                        subtitle="Key milestones in the Covenant Associates story."
                    />
                </AnimatedSection>
                <div className="mt-12 max-w-3xl mx-auto">
                    {timeline.map((item, i) => (
                        <AnimatedSection key={i} delay={i * 0.15} direction="left">
                            <div className="flex gap-6 mb-8 last:mb-0">
                                {/* Timeline dot & line */}
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-gold border-4 border-gold/20 shrink-0" />
                                    {i < timeline.length - 1 && (
                                        <div className="w-0.5 flex-1 bg-border mt-2" />
                                    )}
                                </div>
                                {/* Content */}
                                <div className="pb-8">
                                    <span className="text-sm font-medium text-gold">
                                        {item.year}
                                    </span>
                                    <h3 className="text-lg font-semibold mt-1 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
        </div>
    );
}
