"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";
import { BookOpen, Calendar, Tag, ArrowRight } from "lucide-react";

const researchData = [
  {
    id: "1",
    title: "The Impact of Digital Technology on Arabic Language Learning Outcomes",
    abstract: "This study investigates the effectiveness of digital learning tools in improving Arabic language proficiency among undergraduate students. Using a mixed-methods approach, the research examines student engagement, vocabulary retention, and reading comprehension scores.",
    keywords: ["Arabic Language", "Digital Technology", "Learning Outcomes", "Educational Technology"],
    status: "Published",
    year: "2024",
    journal: "Journal of Arabic Language Education",
    doi: "10.1234/jale.2024.001",
    fullText: "This comprehensive study examines the impact of digital technology integration on Arabic language learning outcomes among 120 undergraduate students. The research employed a quasi-experimental design with pre-test and post-test measurements. Results indicate a statistically significant improvement (p < 0.05) in vocabulary retention and reading comprehension among students using digital learning tools compared to traditional methods.",
  },
  {
    id: "2",
    title: "Blended Learning Approach in Arabic Grammar Instruction",
    abstract: "Exploring the implementation of blended learning models combining face-to-face instruction with online resources for teaching Arabic grammar concepts to beginner-level students.",
    keywords: ["Blended Learning", "Arabic Grammar", "Instructional Design", "Online Learning"],
    status: "Ongoing",
    year: "2024",
    journal: "Under Review",
    doi: null,
    fullText: "This ongoing research explores the effectiveness of blended learning approaches in teaching Arabic grammar to beginner-level students. The study involves two groups: one receiving traditional face-to-face instruction and the other participating in a blended learning model that combines in-person classes with online interactive exercises. Data collection includes pre-test and post-test scores, student engagement metrics, and qualitative feedback from interviews.",
  },
  {
    id: "3",
    title: "Student Motivation in Arabic Language Learning: A Qualitative Analysis",
    abstract: "An in-depth qualitative study examining the factors that influence student motivation in learning Arabic as a foreign language, including cultural interest, religious motivation, and career aspirations.",
    keywords: ["Student Motivation", "Qualitative Research", "Arabic Learning", "Learning Psychology"],
    status: "Completed",
    year: "2023",
    journal: "International Journal of Language Education",
    doi: "10.5678/ijle.2023.045",
    fullText: "This qualitative study involved in-depth interviews with 25 Arabic language students to understand their motivations for learning the language. Thematic analysis revealed three primary motivation categories: intrinsic interest in Arabic culture and literature, religious motivations related to Islamic studies, and extrinsic motivations tied to career opportunities in Middle Eastern markets.",
  },
  {
    id: "4",
    title: "Development of Arabic Learning Media Based on Mobile Application",
    abstract: "Designing and developing a mobile application for Arabic language learning incorporating gamification elements and adaptive learning pathways.",
    keywords: ["Mobile Learning", "Gamification", "App Development", "Arabic Education"],
    status: "Ongoing",
    year: "2024",
    journal: "Research in Progress",
    doi: null,
    fullText: "This research and development project aims to create an innovative mobile application for Arabic language learning. The app incorporates gamification elements such as point systems, leaderboards, and achievement badges to enhance student engagement. Additionally, the app features adaptive learning pathways that adjust content difficulty based on individual student performance.",
  },
];

const statusColors = {
  Published: "success",
  Ongoing: "warning",
  Completed: "primary",
} as const;

export function ResearchSection() {
  const [selectedResearch, setSelectedResearch] = useState<typeof researchData[0] | null>(null);

  return (
    <section id="research" className="section-spacing bg-background">
      <div className="container-main">
        <SectionTitle
          title="Research"
          subtitle="My academic research contributions exploring various aspects of Arabic language education and technology integration."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {researchData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
            >
              <Card glass={false} hover={true} onClick={() => setSelectedResearch(item)}>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <Badge
                      variant={statusColors[item.status as keyof typeof statusColors] || "default"}
                      size="sm"
                    >
                      {item.status}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-foreground mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted-foreground mb-4 line-clamp-3">
                    {item.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.keywords.slice(0, 3).map((keyword) => (
                      <Badge key={keyword} variant="outline" size="sm">
                        <Tag className="w-3 h-3 mr-1" />
                        {keyword}
                      </Badge>
                    ))}
                    {item.keywords.length > 3 && (
                      <Badge variant="outline" size="sm">
                        +{item.keywords.length - 3}
                      </Badge>
                    )}
                  </div>

                  <button className="inline-flex items-center gap-1 text-xs font-medium text-soft-blue hover:underline">
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={!!selectedResearch}
          onClose={() => setSelectedResearch(null)}
          maxWidth="max-w-2xl"
        >
          {selectedResearch && (
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <Badge
                  variant={statusColors[selectedResearch.status as keyof typeof statusColors] || "default"}
                  size="md"
                >
                  {selectedResearch.status}
                </Badge>
                <span className="text-sm text-muted-foreground">{selectedResearch.year}</span>
              </div>

              <h3 className="heading-sm text-foreground mb-4">
                {selectedResearch.title}
              </h3>

              {selectedResearch.doi && (
                <p className="text-sm text-muted-foreground mb-4">
                  DOI: <span className="text-soft-blue">{selectedResearch.doi}</span>
                </p>
              )}

              <p className="text-sm text-muted-foreground mb-2">
                Journal: {selectedResearch.journal}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Abstract</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedResearch.abstract}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Full Text</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedResearch.fullText}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedResearch.keywords.map((keyword) => (
                    <Badge key={keyword} variant="outline" size="sm">
                      <Tag className="w-3 h-3 mr-1" />
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
