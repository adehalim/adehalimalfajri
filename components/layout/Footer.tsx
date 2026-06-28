"use client";

import { motion } from "framer-motion";
import { Globe, Code, Camera, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Globe, href: "https://linkedin.com/in/adehalimalfajri", label: "LinkedIn" },
  { icon: Code, href: "https://github.com/adehalimalfajri", label: "GitHub" },
  { icon: Camera, href: "https://instagram.com/adehalimalfajri", label: "Instagram" },
  { icon: Mail, href: "mailto:adehalimalfajri@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-surface">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-navy text-white font-bold text-sm">
              AHA
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Ade Halim Alfajri</p>
              <p className="text-xs text-muted-foreground">Arabic Education & Research</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={social.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ade Halim Alfajri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
