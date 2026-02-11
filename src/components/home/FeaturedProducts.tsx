"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
    const featured = products.slice(0, 6);

    return (
        <section className="section-padding bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection>
                    <SectionHeading
                        title="Featured Products"
                        subtitle="Explore our most popular PTFE components trusted by industries worldwide."
                    />
                </AnimatedSection>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                <AnimatedSection className="mt-12 text-center">
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="group h-12 px-8"
                    >
                        <Link href="/products">
                            View All Products
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </AnimatedSection>
            </div>
        </section>
    );
}
