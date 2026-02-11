"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { products, categories } from "@/data/products";
import type { Category } from "@/types";

interface ProductGridProps {
    initialCategory?: string | null;
}

export default function ProductGrid({ initialCategory }: ProductGridProps) {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState<Category | "All">(
        (initialCategory as Category) || "All"
    );

    const filtered = useMemo(() => {
        let result = products;
        if (activeCategory !== "All") {
            result = result.filter((p) => p.category === activeCategory);
        }
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q)
            );
        }
        return result;
    }, [search, activeCategory]);

    return (
        <div>
            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-10">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10 pr-8"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                    <Button
                        variant={activeCategory === "All" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory("All")}
                        className={
                            activeCategory === "All"
                                ? "bg-royal text-white hover:bg-royal-light"
                                : ""
                        }
                    >
                        All
                    </Button>
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveCategory(cat)}
                            className={
                                activeCategory === cat
                                    ? "bg-royal text-white hover:bg-royal-light"
                                    : ""
                            }
                        >
                            {cat}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-6">
                Showing {filtered.length} of {products.length} products
                {activeCategory !== "All" && (
                    <>
                        {" "}
                        in{" "}
                        <Badge variant="secondary" className="text-xs">
                            {activeCategory}
                        </Badge>
                    </>
                )}
            </p>

            {/* Product Grid */}
            <AnimatePresence mode="popLayout">
                {filtered.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filtered.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <Search className="w-12 h-12 text-muted-foreground/40 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No products found</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Try adjusting your search or category filter.
                        </p>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                setSearch("");
                                setActiveCategory("All");
                            }}
                        >
                            Reset Filters
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
