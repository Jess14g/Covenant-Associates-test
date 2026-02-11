"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimationDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

interface AnimatedSectionProps {
    children: React.ReactNode;
    direction?: AnimationDirection;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

const getHiddenProps = (direction: AnimationDirection) => {
    switch (direction) {
        case "up":
            return { opacity: 0, y: 60 };
        case "down":
            return { opacity: 0, y: -60 };
        case "left":
            return { opacity: 0, x: -60 };
        case "right":
            return { opacity: 0, x: 60 };
        case "scale":
            return { opacity: 0, scale: 0.85 };
        case "fade":
            return { opacity: 0 };
    }
};

const visibleProps = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
};

export default function AnimatedSection({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    className,
    once = true,
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-80px" });

    const hidden = getHiddenProps(direction);

    return (
        <motion.div
            ref={ref}
            initial={hidden}
            animate={isInView ? visibleProps : hidden}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
