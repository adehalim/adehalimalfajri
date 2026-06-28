"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  glass?: boolean;
}

export function Card({ children, className = "", hover = true, onClick, glass = false }: CardProps) {
  const baseStyles = "rounded-3xl overflow-hidden transition-all duration-300";
  const bgStyles = glass
    ? "glass glass-strong"
    : "bg-card border border-border";
  const hoverStyles = hover
    ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    : "";

  return (
    <motion.div
      className={`${baseStyles} ${bgStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      whileHover={hover ? { scale: 1.01 } : undefined}
      whileTap={hover ? { scale: 0.99 } : undefined}
    >
      {children}
    </motion.div>
  );
}
