import type { Metadata } from "next";
import { Suspense } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/products/ProductGrid";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Browse our complete range of PTFE products including balls, gaskets, seals, O-rings, moulded rods, bushes, PEEK components, and custom machined parts.",
};

export default function ProductsPage() {
    return (
        <div className="pt-8 pb-20">
            {/* Page Header */}
            <div className="bg-gradient-covenant py-16 md:py-20 mb-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <AnimatedSection>
                        <SectionHeading
                            title="Our Products"
                            subtitle="Explore our comprehensive range of PTFE and PEEK components for every industrial application."
                            light
                        />
                    </AnimatedSection>
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <Suspense fallback={<div>Loading...</div>}>
                    <ProductGrid />
                </Suspense>
            </div>
        </div>
    );
}
