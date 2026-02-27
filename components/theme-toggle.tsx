"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="glass-card p-2.5 rounded-full cursor-pointer hover-glow"
            aria-label="Toggle theme"
        >
            <FaSun className="h-4 w-4 text-amber-400 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" />
            <FaMoon className="h-4 w-4 text-violet-400 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </motion.button>
    );
}