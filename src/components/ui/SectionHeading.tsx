interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    centered = true,
    light = false,
}: SectionHeadingProps) {
    return (
        <div className={centered ? "text-center" : ""}>
            <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold font-serif tracking-tight ${light ? "text-white" : "text-foreground"
                    }`}
            >
                {title}
            </h2>
            <div
                className={`mt-4 h-1 w-20 rounded-full bg-gradient-gold ${centered ? "mx-auto" : ""
                    }`}
            />
            {subtitle && (
                <p
                    className={`mt-4 max-w-2xl text-lg ${centered ? "mx-auto" : ""
                        } ${light ? "text-white/70" : "text-muted-foreground"}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
