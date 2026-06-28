"use client";

import { motion, Variants } from "framer-motion";
import { Download, ArrowRight, Globe, Code, Camera, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const socialLinks = [
  { icon: Globe, href: "https://linkedin.com/in/adehalimalfajri", label: "LinkedIn" },
  { icon: Code, href: "https://github.com/adehalimalfajri", label: "GitHub" },
  { icon: Camera, href: "https://instagram.com/adehalimalfajri", label: "Instagram" },
  { icon: Mail, href: "mailto:adehalimalfajri@gmail.com", label: "Email" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
    >
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob w-96 h-96 bg-soft-blue top-20 -left-20" style={{ animationDelay: "0s" }} />
        <div className="blob w-80 h-80 bg-soft-blue-light bottom-20 right-10" style={{ animationDelay: "-7s" }} />
        <div className="blob w-64 h-64 bg-soft-blue top-1/2 left-1/3" style={{ animationDelay: "-14s" }} />
      </div>

      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-surface pointer-events-none" />

      <div className="container-main relative z-10 py-32">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Photo */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden border-4 border-glass-border shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Ade Halim Alfajri - Arabic Education Student"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-background flex items-center justify-center">
              <span className="w-2.5 h-2.5 bg-success rounded-full" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="heading-xl text-foreground mb-3"
          >
            Ade Halim Alfajri
          </motion.h1>

          {/* Tagline with typing animation */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              <span className="text-soft-blue">Arabic Education Student</span>
              <span className="mx-2 text-border">|</span>
              <span className="text-navy">Researcher</span>
              <span className="mx-2 text-border">|</span>
              <span className="text-muted-foreground">Content Creator</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="body-lg max-w-xl mb-8"
          >
            Passionate about Arabic language education, educational technology, and curriculum development. 
            Committed to advancing pedagogical innovation through research and digital content creation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button
              variant="primary"
              size="lg"
              href="/documents/cv-ade-halim-alfajri.pdf"
              icon={<Download className="w-5 h-5" />}
              download
            >
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#portfolio"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Portfolio
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-muted border border-border hover:border-muted transition-all duration-300"
                aria-label={social.label}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
