"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FileText, ExternalLink, Quote, Users } from "lucide-react";

const publications = [
  {
    id: "1",
    title: "The Impact of Digital Technology on Arabic Language Learning Outcomes",
    journal: "Journal of Arabic Language Education",
    year: 2024,
    volume: "12",
    issue: "3",
    pages: "45-62",
    doi: "10.1234/jale.2024.001",
    authors: ["Ade Halim Alfajri", "Dr. Ahmad Fauzi", "Prof. Sarah Abdullah"],
    abstract: "This study examines the effectiveness of digital learning tools in improving Arabic language proficiency among undergraduate students.",
    pdfUrl: "#",
    publisherUrl: "#",
    citations: 12,
  },
  {
    id: "2",
    title: "Student Motivation in Arabic Language Learning: A Qualitative Analysis",
    journal: "International Journal of Language Education",
    year: 2023,
    volume: "8",
    issue: "2",
    pages: "112-128",
    doi: "10.5678/ijle.2023.045",
    authors: ["Ade Halim Alfajri", "Dr. Fatima Hassan"],
    abstract: "An in-depth qualitative study examining factors that influence student motivation in learning Arabic as a foreign language.",
    pdfUrl: "#",
    publisherUrl: "#",
    citations: 8,
  },
  {
    id: "3",
    title: "Blended Learning Approach in Arabic Grammar Instruction",
    journal: "Educational Technology & Society",
    year: 2024,
    volume: "27",
    issue: "1",
    pages: "78-95",
    doi: "10.9012/ets.2024.112",
    authors: ["Ade Halim Alfajri"],
    abstract: "Exploring the implementation of blended learning models combining face-to-face instruction with online resources for teaching Arabic grammar.",
    pdfUrl: "#",
    publisherUrl: "#",
    citations: 5,
  },
  {
    id: "4",
    title: "Gamification in Arabic Vocabulary Acquisition: An Experimental Study",
    journal: "Journal of Educational Gaming",
    year: 2024,
    volume: "15",
    issue: "4",
    pages: "201-218",
    doi: "10.3456/jeg.2024.089",
    authors: ["Ade Halim Alfajri", "Prof. Muhammad Ali", "Dr. Aisha Rahman"],
    abstract: "This experimental study investigates the impact of gamification elements on Arabic vocabulary retention among beginner-level students.",
    pdfUrl: "#",
    publisherUrl: "#",
    citations: 3,
  },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="section-spacing bg-surface">
      <div className="container-main">
        <SectionTitle
          title="Publications"
          subtitle="Peer-reviewed academic publications in journals focused on Arabic language education and educational technology."
        />

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
            >
              <Card glass={false} hover={true}>
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <Badge variant="primary" size="sm">
                      {pub.year}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Quote className="w-3.5 h-3.5" />
                      {pub.citations} citations
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">{pub.journal}</span>
                    {", "}
                    Vol. {pub.volume}, Issue {pub.issue}, pp. {pub.pages}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Users className="w-3.5 h-3.5" />
                    {pub.authors.join(", ")}
                  </div>

                  {pub.doi && (
                    <p className="text-xs text-muted-foreground mb-4">
                      DOI: <span className="text-soft-blue">{pub.doi}</span>
                    </p>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="secondary"
                      size="sm"
                      href={pub.pdfUrl}
                      icon={<FileText className="w-4 h-4" />}
                    >
                      PDF
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      href={pub.publisherUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      Publisher
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      href={`#cite-${pub.id}`}
                      icon={<Quote className="w-4 h-4" />}
                    >
                      Cite
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
