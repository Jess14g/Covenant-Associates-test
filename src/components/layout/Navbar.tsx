"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ChevronDown,
    Phone,
    Mail,
    FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { categories } from "@/data/products";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top bar */}
            <div className="hidden lg:block bg-navy text-white/80 text-sm">
                <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a
                            href="tel:+919881532102"
                            className="flex items-center gap-2 hover:text-gold transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            +91 9881532102
                        </a>
                        <a
                            href="mailto:info@covenantassociates.com"
                            className="flex items-center gap-2 hover:text-gold transition-colors"
                        >
                            <Mail className="w-3.5 h-3.5" />
                            info@covenantassociates.com
                        </a>
                    </div>
                    <Link
                        href="/enquiry"
                        className="flex items-center gap-2 hover:text-gold transition-colors"
                    >
                        <FileText className="w-3.5 h-3.5" />
                        Get a Quote
                    </Link>
                </div>
            </div>

            {/* Main Navbar */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-white/95 dark:bg-navy/95 backdrop-blur-md shadow-lg"
                        : "bg-white dark:bg-navy"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Covenant Associates"
                                width={48}
                                height={48}
                                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                priority
                            />
                            <div className="hidden sm:block">
                                <span className="block text-lg font-bold text-navy dark:text-white leading-tight">
                                    Covenant
                                </span>
                                <span className="block text-xs text-gold font-medium tracking-widest uppercase">
                                    Associates
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.href}
                                    className="relative"
                                    onMouseEnter={() =>
                                        link.hasDropdown && setProductsOpen(true)
                                    }
                                    onMouseLeave={() =>
                                        link.hasDropdown && setProductsOpen(false)
                                    }
                                >
                                    <Link
                                        href={link.href}
                                        className={`group relative px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${pathname === link.href
                                                ? "text-royal"
                                                : "text-navy dark:text-white/90 hover:text-royal"
                                            }`}
                                    >
                                        {link.label}
                                        {link.hasDropdown && (
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        )}
                                        {/* Animated underline */}
                                        <span
                                            className={`absolute bottom-0 left-4 h-0.5 bg-gold transition-all duration-300 ${pathname === link.href
                                                    ? "w-[calc(100%-2rem)]"
                                                    : "w-0 group-hover:w-[calc(100%-2rem)]"
                                                }`}
                                        />
                                    </Link>

                                    {/* Mega menu dropdown */}
                                    {link.hasDropdown && (
                                        <AnimatePresence>
                                            {productsOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 8 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 w-64 bg-white dark:bg-navy-light rounded-xl shadow-xl border border-border/50 overflow-hidden"
                                                >
                                                    <div className="p-2">
                                                        {categories.map((category) => (
                                                            <Link
                                                                key={category}
                                                                href={`/products?category=${encodeURIComponent(category)}`}
                                                                className="block px-4 py-2.5 text-sm text-navy dark:text-white/90 hover:bg-royal/5 hover:text-royal rounded-lg transition-colors"
                                                            >
                                                                {category}
                                                            </Link>
                                                        ))}
                                                        <div className="border-t border-border/50 mt-1 pt-1">
                                                            <Link
                                                                href="/products"
                                                                className="block px-4 py-2.5 text-sm font-medium text-gold hover:bg-gold/5 rounded-lg transition-colors"
                                                            >
                                                                View All Products →
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button
                                asChild
                                className="bg-gradient-to-r from-royal to-royal-light hover:from-royal-light hover:to-royal text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Link href="/enquiry">Get a Quote</Link>
                            </Button>
                        </div>

                        {/* Mobile menu */}
                        <Sheet>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="w-6 h-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80 p-0 bg-white dark:bg-navy">
                                <div className="flex flex-col h-full">
                                    {/* Mobile header */}
                                    <div className="flex items-center justify-between p-4 border-b border-border/50">
                                        <Link href="/" className="flex items-center gap-2">
                                            <Image
                                                src="/logo.png"
                                                alt="Covenant Associates"
                                                width={36}
                                                height={36}
                                                className="object-contain"
                                            />
                                            <span className="font-bold text-navy dark:text-white">
                                                Covenant
                                            </span>
                                        </Link>
                                    </div>

                                    {/* Mobile links */}
                                    <nav className="flex-1 p-4 space-y-1">
                                        {navLinks.map((link) => (
                                            <SheetClose asChild key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${pathname === link.href
                                                            ? "bg-royal/10 text-royal"
                                                            : "text-navy dark:text-white/90 hover:bg-muted"
                                                        }`}
                                                >
                                                    {link.label}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </nav>

                                    {/* Mobile CTA */}
                                    <div className="p-4 border-t border-border/50">
                                        <SheetClose asChild>
                                            <Button
                                                asChild
                                                className="w-full bg-gradient-to-r from-royal to-royal-light text-white"
                                            >
                                                <Link href="/enquiry">Get a Quote</Link>
                                            </Button>
                                        </SheetClose>
                                        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                                            <a
                                                href="tel:+919881532102"
                                                className="flex items-center gap-2 hover:text-royal"
                                            >
                                                <Phone className="w-4 h-4" /> +91 9881532102
                                            </a>
                                            <a
                                                href="mailto:info@covenantassociates.com"
                                                className="flex items-center gap-2 hover:text-royal"
                                            >
                                                <Mail className="w-4 h-4" /> info@covenantassociates.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </>
    );
}
