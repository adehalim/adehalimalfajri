"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  date: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative flex items-start gap-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-1 md:text-right md:px-8">
              <div className={`md:hidden ${index % 2 === 0 ? "" : "md:text-left"}`} />
              <div className="hidden md:block">
                {index % 2 === 0 ? (
                  <div className="text-right">
                    <span className="text-sm font-medium text-soft-blue">{item.date}</span>
                    <h3 className="heading-sm text-foreground mt-1">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-sm text-muted-foreground mt-0.5">{item.subtitle}</p>
                    )}
                    {item.description && (
                      <p className="body-sm mt-2">{item.description}</p>
                    )}
                  </div>
                ) : (
                  <div className="text-left">
                    <span className="text-sm font-medium text-soft-blue">{item.date}</span>
                    <h3 className="heading-sm text-foreground mt-1">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-sm text-muted-foreground mt-0.5">{item.subtitle}</p>
                    )}
                    {item.description && (
                      <p className="body-sm mt-2">{item.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-soft-blue border-4 border-background md:-translate-x-1/2 mt-1.5 z-10" />

            <div className="flex-1 pl-10 md:pl-8 md:hidden">
              <span className="text-sm font-medium text-soft-blue">{item.date}</span>
              <h3 className="heading-sm text-foreground mt-1">{item.title}</h3>
              {item.subtitle && (
                <p className="text-sm text-muted-foreground mt-0.5">{item.subtitle}</p>
              )}
              {item.description && (
                <p className="body-sm mt-2">{item.description}</p>
              )}
            </div>

            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
