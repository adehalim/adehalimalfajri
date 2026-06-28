"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({ children, variant = "default", size = "sm", className }: BadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground",
    primary: "bg-soft-blue/15 text-soft-blue",
    success: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning",
    error: "bg-error/15 text-error",
    outline: "border border-border text-muted-foreground",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span className={cn(
      "inline-flex items-center rounded-full font-medium",
      variants[variant],
      sizes[size],
      className
    )}>
      {children}
    </span>
  );
}
