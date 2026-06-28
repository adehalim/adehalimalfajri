"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Carousel } from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { ExternalLink, Code, FileText } from "lucide-react";

const categories = [
  "All",
  "Research",
  "Website",
  "Article",
  "Certificate",
  "Video",
  "Design",
  "Organization",
];

const projects = [
  {
    id: "1",
    title: "Arabic Learning Mobile App",
    category: "Website",
    description: "A mobile-first web application designed to help students learn Arabic vocabulary through interactive flashcards and spaced repetition.",
    tech: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    images: [
      { src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "App Dashboard" },
      { src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Flashcards Feature" },
    ],
    github: "https://github.com/adehalimalfajri/arabic-learning-app",
    demo: "https://arabic-learning-app.vercel.app",
  },
  {
    id: "2",
    title: "Technology Integration in Arabic Language Learning",
    category: "Research",
    description: "A comprehensive study examining the effectiveness of digital tools in enhancing Arabic language acquisition among undergraduate students.",
    tech: ["Qualitative Research", "Survey Analysis", "SPSS"],
    images: [
      { src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Research Presentation" },
    ],
    github: null,
    demo: null,
  },
  {
    id: "3",
    title: "Educational Infographics Series",
    category: "Design",
    description: "A series of visually engaging infographics explaining complex Arabic grammar concepts for social media education.",
    tech: ["Canva", "Adobe Illustrator", "Figma"],
    images: [
      { src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Infographic Design" },
      { src: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Design Process" },
    ],
    github: null,
    demo: null,
  },
  {
    id: "4",
    title: "Arabic Education Podcast",
    category: "Video",
    description: "Educational podcast series discussing topics related to Arabic language learning, teaching methodology, and cultural insights.",
    tech: ["Audio Editing", "Script Writing", "Content Strategy"],
    images: [
      { src: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Podcast Recording" },
    ],
    github: null,
    demo: "https://youtube.com/adehalimalfajri",
  },
  {
    id: "5",
    title: "Student Research Competition Paper",
    category: "Article",
    description: "Published research paper analyzing the impact of blended learning on Arabic reading comprehension among university students.",
    tech: ["Academic Writing", "Data Analysis", "Literature Review"],
    images: [
      { src: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Research Paper" },
    ],
    github: null,
    demo: null,
  },
  {
    id: "6",
    title: "Arabic Language Association Website",
    category: "Organization",
    description: "Official website for the Arabic Language Student Association featuring event schedules, member resources, and blog posts.",
    tech: ["Next.js", "Tailwind CSS", "Content Management"],
    images: [
      { src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Website Homepage" },
    ],
    github: "https://github.com/adehalimalfajri/arabic-association",
    demo: "https://arabic-association.vercel.app",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-spacing bg-surface">
      <div className="container-main">
        <SectionTitle
          title="Portfolio"
          subtitle="A curated collection of my research projects, designs, articles, and organizational work."
        />

        {/* Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-navy text-white shadow-md"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative rounded-3xl overflow-hidden border border-border bg-card hover:border-soft-blue/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.images[0].src}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Badge variant="primary" size="sm">{project.category}</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-soft-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          maxWidth="max-w-3xl"
        >
          {selectedProject && (
            <div className="p-6 md:p-8">
              <Badge variant="primary" size="md" className="mb-4">
                {selectedProject.category}
              </Badge>
              <h3 className="heading-sm text-foreground mb-3">
                {selectedProject.title}
              </h3>
              <p className="body-md mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <Badge key={t} variant="outline" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {selectedProject.images.length > 0 && (
                <div className="mb-6">
                  <Carousel items={selectedProject.images} />
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {selectedProject.github && (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<Code className="w-4 h-4" />}
                  >
                    GitHub
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button
                    variant="primary"
                    size="sm"
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Demo
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  href="#"
                  icon={<FileText className="w-4 h-4" />}
                >
                  Details
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
