"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { MapPin, GraduationCap, BookOpen, Languages, Microscope } from "lucide-react";

const bioData = [
  { label: "Full Name", value: "Ade Halim Alfajri", icon: BookOpen },
  { label: "Location", value: "Indonesia", icon: MapPin },
  { label: "University", value: "Universitas Islam Negeri", icon: GraduationCap },
  { label: "Program", value: "Pendidikan Bahasa Arab", icon: BookOpen },
  { label: "Email", value: "adehalimalfajri@gmail.com", icon: BookOpen },
];

const educationTimeline = [
  {
    id: "1",
    title: "SMA Negeri 1",
    subtitle: "Science Stream",
    date: "2018 - 2021",
    description: "Completed high school with strong foundation in sciences and languages.",
  },
  {
    id: "2",
    title: "Universitas Islam Negeri",
    subtitle: "S1 Pendidikan Bahasa Arab",
    date: "2021 - Present",
    description: "Currently pursuing undergraduate degree in Arabic Language Education with focus on curriculum and technology integration.",
  },
];

const skills = [
  "Arabic Language",
  "Research Methodology",
  "Teaching & Learning",
  "Public Speaking",
  "Academic Writing",
  "Canva Design",
  "Microsoft Office",
  "Content Creation",
];

const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "Arabic", level: "Advanced" },
  { name: "English", level: "Intermediate" },
];

const researchInterests = [
  { title: "Arabic Education", icon: BookOpen },
  { title: "Educational Technology", icon: Microscope },
  { title: "Curriculum Development", icon: GraduationCap },
  { title: "Instructional Design", icon: BookOpen },
  { title: "Islamic Education", icon: BookOpen },
  { title: "Language Learning", icon: Languages },
];

export function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-surface">
      <div className="container-main">
        <SectionTitle
          title="About Me"
          subtitle="A passionate Arabic education student dedicated to advancing pedagogical innovation through research and technology."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Biodata */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6 }}
            className="space-y-6"
          >
            <h3 className="heading-sm text-foreground mb-4">Personal Information</h3>
            <div className="grid gap-3">
              {bioData.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-xl bg-soft-blue/10 flex items-center justify-center flex-shrink-1">
                    <item.icon className="w-5 h-5 text-soft-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6 }}
          >
            <h3 className="heading-sm text-foreground mb-4">Education</h3>
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border" />
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative mb-8 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                >
                  <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-soft-blue border-4 border-surface" />
                  <div className="bg-card border border-border rounded-2xl p-4">
                    <span className="text-xs font-medium text-soft-blue">{item.date}</span>
                    <h4 className="text-sm font-semibold text-foreground mt-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    <p className="text-xs text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6 }}
        >
          <h3 className="heading-sm text-foreground mb-6 text-center">Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="primary" size="md">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6 }}
        >
          <h3 className="heading-sm text-foreground mb-6 text-center">Languages</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="text-center p-4 rounded-2xl bg-card border border-border"
              >
                <p className="font-medium text-foreground">{lang.name}</p>
                <Badge variant="outline" size="sm" className="mt-2">
                  {lang.level}
                </Badge>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6 }}
        >
          <h3 className="heading-sm text-foreground mb-6 text-center">Research Interests</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {researchInterests.map((interest) => (
              <div
                key={interest.title}
                className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-soft-blue/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-soft-blue/10 flex items-center justify-center flex-shrink-1">
                  <interest.icon className="w-5 h-5 text-soft-blue" />
                </div>
                <span className="text-sm font-medium text-foreground">{interest.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
