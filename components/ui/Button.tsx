"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  download?: boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
  download,
  target,
  rel,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-navy text-primary-foreground hover:bg-navy-light shadow-md",
    secondary: "bg-surface text-foreground hover:bg-muted border border-border",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
    ghost: "text-foreground hover:bg-muted",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combined = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combined}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        download={download}
        target={target}
        rel={rel}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={combined}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
