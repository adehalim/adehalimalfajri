"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Timeline } from "@/components/ui/Timeline";
import { Download, Award, Briefcase, GraduationCap, Users } from "lucide-react";

const experienceData = [
  {
    id: "exp1",
    title: "Research Assistant",
    subtitle: "Language Education Research Lab",
    date: "2023 - Present",
    description: "Assisting in research projects related to Arabic language learning and technology integration in education.",
  },
  {
    id: "exp2",
    title: "Content Creator",
    subtitle: "Arabic Education Content",
    date: "2022 - Present",
    description: "Creating educational content about Arabic language learning on social media platforms.",
  },
];

const educationData = [
  {
    id: "edu1",
    title: "S1 Pendidikan Bahasa Arab",
    subtitle: "Universitas Islam Negeri",
    date: "2021 - Present",
    description: "Focusing on curriculum development, language pedagogy, and educational technology.",
  },
  {
    id: "edu2",
    title: "SMA Negeri 1",
    subtitle: "Science Stream",
    date: "2018 - 2021",
    description: "Strong academic performance with focus on sciences and foreign languages.",
  },
];

const achievementsData = [
  {
    id: "ach1",
    title: "Best Research Paper",
    subtitle: "National Student Research Competition",
    date: "2024",
    description: "Awarded for research on technology integration in Arabic language learning.",
  },
  {
    id: "ach2",
    title: "Academic Excellence",
    subtitle: "Dean's List",
    date: "2023",
    description: "Recognized for outstanding academic performance in the Arabic Education program.",
  },
];

const organizationData = [
  {
    id: "org1",
    title: "Arabic Language Student Association",
    subtitle: "Research Division",
    date: "2022 - Present",
    description: "Leading research initiatives and academic activities within the student association.",
  },
  {
    id: "org2",
    title: "Campus Media Organization",
    subtitle: "Content Writer",
    date: "2021 - 2023",
    description: "Writing articles about campus life and academic topics for the campus media outlet.",
  },
];

export function ResumeSection() {
  return (
    <section id="resume" className="section-spacing bg-background">
      <div className="container-main">
        <SectionTitle
          title="Resume"
          subtitle="A summary of my academic journey, professional experience, and achievements."
        />

        {/* Download CV */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="primary"
            size="lg"
            href="/documents/cv-ade-halim-alfajri.pdf"
            icon={<Download className="w-5 h-5" />}
            download
          >
            Download Full CV
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-soft-blue/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-soft-blue" />
              </div>
              <h3 className="heading-sm text-foreground">Experience</h3>
            </div>
            <Timeline items={experienceData} />
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-soft-blue/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-soft-blue" />
              </div>
              <h3 className="heading-sm text-foreground">Education</h3>
            </div>
            <Timeline items={educationData} />
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-soft-blue/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-soft-blue" />
              </div>
              <h3 className="heading-sm text-foreground">Achievements</h3>
            </div>
            <Timeline items={achievementsData} />
          </motion.div>

          {/* Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-soft-blue/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-soft-blue" />
              </div>
              <h3 className="heading-sm text-foreground">Organizations</h3>
            </div>
            <Timeline items={organizationData} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
