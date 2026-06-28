"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({ title, subtitle, align = "center", className = "" }: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <h2 className="heading-lg text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="body-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1 w-16 rounded-full bg-soft-blue ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
