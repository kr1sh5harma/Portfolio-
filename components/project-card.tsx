"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    image?: StaticImageData;
    tags: string[];
    href: string;
    index: number;
}

export default function ProjectCard({
    title,
    description,
    image,
    tags,
    href,
    index,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        >
            <Link href={href} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="glass-card overflow-hidden">
                    {/* Image */}
                    {image && (
                        <div className="relative overflow-hidden aspect-video">
                            <Image
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                placeholder="blur"
                            />
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                            {/* View label */}
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 backdrop-blur-sm">
                                    View Project →
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-5">
                        <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors duration-300"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                            {title}
                        </h3>
                        <p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
                            {description}
                        </p>

                        {/* Tags */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/5 border border-white/8 text-zinc-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
