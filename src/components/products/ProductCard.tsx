"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
                y: -8,
                transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="group relative"
        >
            <Link href={`/products?product=${product.slug}`}>
                <div className="relative bg-white dark:bg-navy-light rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                    {/* Image container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Hover action */}
                        <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                                View Details
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <Badge
                            variant="secondary"
                            className="mb-3 bg-royal/5 text-royal border-royal/20 text-xs font-medium"
                        >
                            {product.category}
                        </Badge>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-royal transition-colors line-clamp-1">
                            {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* Gold accent bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
            </Link>
        </motion.div>
    );
}
