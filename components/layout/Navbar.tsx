"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#certificates", label: "Certificates" },
  { href: "#blog", label: "Blog" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-glass py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container-main flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-navy text-white font-bold text-sm"
              animate={{ scale: isScrolled ? 0.85 : 1 }}
              transition={{ duration: 0.3 }}
            >
              AHA
            </motion.div>
            <motion.span
              className={`font-semibold text-foreground transition-all duration-300 ${
                isScrolled ? "text-sm" : "text-base"
              }`}
            >
              Ade Halim
            </motion.span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
            </button>

            <a
              href="/documents/cv-ade-halim-alfajri.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-navy text-white rounded-xl hover:bg-navy-light transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              download
            >
              <Download className="w-4 h-4" />
              CV
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 glass glass-strong rounded-3xl p-6 shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm rounded-xl hover:bg-muted transition-colors"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-4 h-4" /> Light
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" /> Dark
                    </>
                  )}
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm rounded-xl hover:bg-muted transition-colors">
                  <Globe className="w-4 h-4" /> EN
                </button>
              </div>

              <a
                href="/documents/cv-ade-halim-alfajri.pdf"
                className="mt-3 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-navy text-white rounded-xl hover:bg-navy-light transition-colors"
                download
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
