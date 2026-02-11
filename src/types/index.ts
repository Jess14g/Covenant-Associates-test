export interface Product {
    id: string;
    name: string;
    slug: string;
    category: Category;
    description: string;
    image: string;
    features: string[];
}

export type Category =
    | "PTFE Components"
    | "Seals & Gaskets"
    | "Rods & Bushes"
    | "Custom Parts"
    | "PEEK Products";

export interface EnquiryFormData {
    name: string;
    email: string;
    phone: string;
    company?: string;
    products: string[];
    message: string;
}

export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}
