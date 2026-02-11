import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact Us", href: "/contact" },
    { label: "Get a Quote", href: "/enquiry" },
];

export default function Footer() {
    return (
        <footer className="bg-navy text-white/80">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <Image
                                src="/logo.png"
                                alt="Covenant Associates"
                                width={44}
                                height={44}
                                className="object-contain brightness-0 invert"
                            />
                            <div>
                                <span className="block text-lg font-bold text-white leading-tight">
                                    Covenant
                                </span>
                                <span className="block text-xs text-gold font-medium tracking-widest uppercase">
                                    Associates
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-white/60 mb-6">
                            Leading manufacturer and supplier of premium PTFE (Teflon)
                            products and precision-engineered components for diverse
                            industrial applications.
                        </p>
                        <p className="text-xs text-gold/80 font-medium">
                            ✦ Established 2025
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-gold transition-colors duration-200 flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Range */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                            Product Range
                        </h3>
                        <ul className="space-y-3">
                            {categories.map((category) => (
                                <li key={category}>
                                    <Link
                                        href={`/products?category=${encodeURIComponent(category)}`}
                                        className="text-sm hover:text-gold transition-colors duration-200"
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                                <span>
                                    HDIL Industries Park, Building No.11, Unit No.1, Ground
                                    Floor, Chandansar Road, Virar (E) - 401303, Maharashtra,
                                    India
                                </span>
                            </li>
                            <li>
                                <a
                                    href="tel:+919881532102"
                                    className="flex items-center gap-3 text-sm hover:text-gold transition-colors"
                                >
                                    <Phone className="w-4 h-4 text-gold shrink-0" />
                                    +91 9881532102 / 7498631784
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@covenantassociates.com"
                                    className="flex items-center gap-3 text-sm hover:text-gold transition-colors"
                                >
                                    <Mail className="w-4 h-4 text-gold shrink-0" />
                                    info@covenantassociates.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
                    <p>
                        © {new Date().getFullYear()} Covenant Associates. All rights
                        reserved.
                    </p>
                    <p>Manufacturer / Exporter / Supplier of PTFE Products</p>
                </div>
            </div>
        </footer>
    );
}
