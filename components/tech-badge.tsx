"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TechBadgeProps {
    icon: ReactNode;
    label: string;
    delay?: number;
}

export default function TechBadge({ icon, label, delay = 0 }: TechBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="glass-card hover-glow px-4 py-3 flex items-center gap-3 cursor-default"
        >
            <span className="text-xl text-violet-400">{icon}</span>
            <span className="text-sm text-zinc-300">{label}</span>
        </motion.div>
    );
}
