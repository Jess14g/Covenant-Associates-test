import { Product, Category } from "@/types";

export const categories: Category[] = [
    "PTFE Components",
    "Seals & Gaskets",
    "Rods & Bushes",
    "Custom Parts",
    "PEEK Products",
];

export const products: Product[] = [
    {
        id: "1",
        name: "PTFE Balls",
        slug: "ptfe-balls",
        category: "PTFE Components",
        description:
            "High-precision PTFE balls engineered for exceptional chemical resistance and low friction. Available in various sizes for valve, pump, and bearing applications.",
        image: "/products/ptfe-balls.jpg",
        features: [
            "Chemical inertness",
            "Low coefficient of friction",
            "Wide temperature range",
            "Custom sizes available",
        ],
    },
    {
        id: "2",
        name: "PTFE Bottle Caps",
        slug: "ptfe-bottle-caps",
        category: "PTFE Components",
        description:
            "Laboratory-grade PTFE bottle caps providing superior chemical resistance for safe storage of corrosive reagents and solvents.",
        image: "/products/ptfe-bottle-caps.jpg",
        features: [
            "Acid & alkali resistant",
            "FDA compliant",
            "Re-usable design",
            "Multiple thread sizes",
        ],
    },
    {
        id: "3",
        name: "PTFE Carbon Filled Components",
        slug: "ptfe-carbon-filled",
        category: "Custom Parts",
        description:
            "Carbon-filled PTFE components offering enhanced wear resistance, improved compressive strength, and better thermal conductivity over virgin PTFE.",
        image: "/products/ptfe-carbon-filled.jpg",
        features: [
            "Enhanced wear resistance",
            "Improved thermal conductivity",
            "Higher compressive strength",
            "Reduced deformation under load",
        ],
    },
    {
        id: "4",
        name: "PTFE Delrin Components",
        slug: "ptfe-delrin",
        category: "Custom Parts",
        description:
            "Precision-machined Delrin (POM) components combining high mechanical strength with excellent dimensional stability for demanding applications.",
        image: "/products/ptfe-delrin.jpg",
        features: [
            "High mechanical strength",
            "Excellent dimensional stability",
            "Low moisture absorption",
            "Good machinability",
        ],
    },
    {
        id: "5",
        name: "PTFE Filters",
        slug: "ptfe-filters",
        category: "PTFE Components",
        description:
            "Microporous PTFE filter elements for chemical processing, pharmaceutical, and food industries. Exceptional filtration efficiency with chemical compatibility.",
        image: "/products/ptfe-filters.jpg",
        features: [
            "Fine micron ratings",
            "Chemical compatibility",
            "High flow rates",
            "Cleanable & reusable",
        ],
    },
    {
        id: "6",
        name: "PTFE Glove Ports",
        slug: "ptfe-glove-ports",
        category: "PTFE Components",
        description:
            "PTFE glove port assemblies for pharmaceutical isolators and glove boxes, ensuring contamination-free handling in controlled environments.",
        image: "/products/ptfe-glove-ports.jpg",
        features: [
            "Pharma-grade finish",
            "Leak-proof sealing",
            "Autoclavable",
            "Custom flange sizes",
        ],
    },
    {
        id: "7",
        name: "PTFE Machining Components",
        slug: "ptfe-machining-components",
        category: "Custom Parts",
        description:
            "Custom CNC-machined PTFE parts manufactured to your exact specifications. From prototypes to production runs with tight tolerances.",
        image: "/products/ptfe-machining.jpg",
        features: [
            "CNC precision machining",
            "Tight tolerances (±0.05mm)",
            "Prototype to production",
            "CAD/CAM capabilities",
        ],
    },
    {
        id: "8",
        name: "PTFE Mechanical Seal Bellows",
        slug: "ptfe-seal-bellows",
        category: "Seals & Gaskets",
        description:
            "PTFE bellows for mechanical seal applications, providing superior chemical resistance and flexibility in aggressive media environments.",
        image: "/products/ptfe-seal-bellows.jpg",
        features: [
            "Corrosion resistant",
            "Flexible design",
            "High temperature capability",
            "Long service life",
        ],
    },
    {
        id: "9",
        name: "PTFE Moulded Bushes",
        slug: "ptfe-moulded-bushes",
        category: "Rods & Bushes",
        description:
            "Compression-moulded PTFE bushings for bearing and guide applications. Self-lubricating with excellent wear characteristics.",
        image: "/products/ptfe-moulded-bushes.jpg",
        features: [
            "Self-lubricating",
            "Low friction coefficient",
            "Maintenance-free operation",
            "Standard & custom sizes",
        ],
    },
    {
        id: "10",
        name: "PTFE Moulded Rods",
        slug: "ptfe-moulded-rods",
        category: "Rods & Bushes",
        description:
            "High-quality compression-moulded PTFE rods available in standard diameters. Ideal stock material for machining custom components.",
        image: "/products/ptfe-moulded-rods.jpg",
        features: [
            "Uniform density",
            "Excellent machinability",
            "Multiple diameters",
            "Cut-to-length service",
        ],
    },
    {
        id: "11",
        name: "PTFE Nylon Components",
        slug: "ptfe-nylon",
        category: "Custom Parts",
        description:
            "Engineering-grade nylon components with optional PTFE-filled variants for enhanced wear and reduced friction in mechanical assemblies.",
        image: "/products/ptfe-nylon.jpg",
        features: [
            "High impact resistance",
            "Excellent wear properties",
            "Self-lubricating options",
            "Injection or machined",
        ],
    },
    {
        id: "12",
        name: "PTFE O Rings",
        slug: "ptfe-o-rings",
        category: "Seals & Gaskets",
        description:
            "Precision-formed PTFE O-rings for static and dynamic sealing in chemical, pharmaceutical, and food processing equipment.",
        image: "/products/ptfe-o-rings.jpg",
        features: [
            "Chemical inertness",
            "Wide temperature range (-200°C to +260°C)",
            "FDA & USP compliant",
            "Standard AS568 sizes",
        ],
    },
    {
        id: "13",
        name: "PTFE PCD Rings",
        slug: "ptfe-pcd-rings",
        category: "Seals & Gaskets",
        description:
            "PTFE Pitch Circle Diameter rings engineered for precision sealing in flanged connections, valves, and process equipment.",
        image: "/products/ptfe-pcd-rings.jpg",
        features: [
            "Precision bolt-hole patterns",
            "Flat or profiled faces",
            "ASME / DIN standards",
            "Custom PCD layouts",
        ],
    },
    {
        id: "14",
        name: "PTFE Screws & Fasteners",
        slug: "ptfe-screws",
        category: "PTFE Components",
        description:
            "Non-conductive, chemically inert PTFE screws, bolts, and nuts for corrosive environments where metal fasteners cannot be used.",
        image: "/products/ptfe-screws.jpg",
        features: [
            "Non-conductive",
            "Corrosion-proof",
            "Metric & imperial threads",
            "High purity grades",
        ],
    },
    {
        id: "15",
        name: "PTFE T Bush",
        slug: "ptfe-t-bush",
        category: "Rods & Bushes",
        description:
            "T-shaped PTFE bushings for flanged bearing applications, offering self-lubrication and excellent load-bearing capacity.",
        image: "/products/ptfe-t-bush.jpg",
        features: [
            "Flanged design",
            "Self-lubricating",
            "High load capacity",
            "Easy installation",
        ],
    },
    {
        id: "16",
        name: "PTFE TC Gaskets",
        slug: "ptfe-tc-gaskets",
        category: "Seals & Gaskets",
        description:
            "PTFE Tri-Clamp gaskets for sanitary connections in pharmaceutical, dairy, brewing, and food processing applications.",
        image: "/products/ptfe-tc-gaskets.jpg",
        features: [
            "Sanitary Tri-Clamp compatible",
            "FDA / 3-A compliant",
            "Autoclavable",
            "Standard & custom sizes",
        ],
    },
    {
        id: "17",
        name: "PTFE Teflon Sheets & Films",
        slug: "ptfe-teflon",
        category: "PTFE Components",
        description:
            "Virgin PTFE (Teflon) sheets, skived films, and plates for gasket fabrication, lining, and non-stick surface applications.",
        image: "/products/ptfe-teflon.jpg",
        features: [
            "Skived & moulded grades",
            "Multiple thicknesses",
            "Excellent dielectric properties",
            "Non-stick surface",
        ],
    },
    {
        id: "18",
        name: "PTFE V Packing Sets",
        slug: "ptfe-v-packing",
        category: "Seals & Gaskets",
        description:
            "Multi-ring PTFE V-packing sets for reciprocating rod and piston sealing in hydraulic and pneumatic cylinders.",
        image: "/products/ptfe-v-packing.jpg",
        features: [
            "Adjustable compression",
            "Low friction operation",
            "Multiple ring configurations",
            "Pressure ratings to 400 bar",
        ],
    },
    {
        id: "19",
        name: "PTFE Wear Strips",
        slug: "ptfe-wear-strips",
        category: "PTFE Components",
        description:
            "PTFE and filled-PTFE wear strips for linear guide applications, providing low-friction sliding surfaces in machinery.",
        image: "/products/ptfe-wear-strips.jpg",
        features: [
            "Low friction coefficient",
            "Glass & carbon filled options",
            "Custom lengths & widths",
            "Adhesive-backed variants",
        ],
    },
    {
        id: "20",
        name: "PEEK Rods, Bushes & Rings",
        slug: "peek-products",
        category: "PEEK Products",
        description:
            "High-performance PEEK (Polyether Ether Ketone) components for extreme temperature and chemical environments where PTFE isn't sufficient.",
        image: "/products/peek-products.jpg",
        features: [
            "Operating temp to 260°C continuous",
            "Superior mechanical strength",
            "Excellent chemical resistance",
            "Sterilisable (steam, gamma, EtO)",
        ],
    },
];

export function getProductsByCategory(category: Category): Product[] {
    return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}
