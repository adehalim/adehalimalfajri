"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { ImageIcon, Calendar, Award } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: "1",
    title: "Arabic Language Proficiency Certificate",
    issuer: "Arabic Academy International",
    date: "2024",
    category: "Language",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Advanced Arabic language proficiency certification covering reading, writing, speaking, and listening skills.",
  },
  {
    id: "2",
    title: "Research Methodology Workshop",
    issuer: "Universitas Islam Negeri",
    date: "2024",
    category: "Research",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Intensive workshop on quantitative and qualitative research methods for social sciences.",
  },
  {
    id: "3",
    title: "Educational Technology Certification",
    issuer: "Google for Education",
    date: "2023",
    category: "Technology",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Certification in integrating Google tools and educational technology in classroom settings.",
  },
  {
    id: "4",
    title: "Public Speaking & Presentation Skills",
    issuer: "Toastmasters International",
    date: "2023",
    category: "Soft Skills",
    image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Completed comprehensive public speaking and presentation skills development program.",
  },
  {
    id: "5",
    title: "Content Creation Masterclass",
    issuer: "Digital Creator Academy",
    date: "2024",
    category: "Content",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Advanced training in creating educational content for social media and digital platforms.",
  },
  {
    id: "6",
    title: "Arabic Calligraphy Workshop",
    issuer: "Islamic Art Foundation",
    date: "2023",
    category: "Arts",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Traditional Arabic calligraphy workshop focusing on Naskh and Thuluth scripts.",
  },
];

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCert = (cert: typeof certificates[0], index: number) => {
    setSelectedCert(cert);
    setCurrentIndex(index);
  };

  const navigate = (direction: number) => {
    const newIndex = (currentIndex + direction + certificates.length) % certificates.length;
    setCurrentIndex(newIndex);
    setSelectedCert(certificates[newIndex]);
  };

  return (
    <section id="certificates" className="section-spacing bg-background">
      <div className="container-main">
        <SectionTitle
          title="Certificates"
          subtitle="Professional certifications and achievements that validate my skills and knowledge in various domains."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openCert(cert, index)}
            >
              <div className="relative rounded-3xl overflow-hidden border border-border bg-card hover:border-soft-blue/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Badge variant="primary" size="sm">{cert.category}</Badge>
                      <span className="text-xs text-white/80 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-soft-blue transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          maxWidth="max-w-2xl"
        >
          {selectedCert && (
            <div className="p-6 md:p-8">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <Badge variant="primary" size="md">{selectedCert.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {selectedCert.date}
                </div>
              </div>

              <h3 className="heading-sm text-foreground mb-2">
                {selectedCert.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Award className="w-4 h-4" />
                {selectedCert.issuer}
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                {selectedCert.description}
              </p>

              {certificates.length > 1 && (
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ImageIcon className="w-4 h-4" /> Previous
                  </button>
                  <span className="text-sm text-muted-foreground">
                    {currentIndex + 1} / {certificates.length}
                  </span>
                  <button
                    onClick={() => navigate(1)}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Next <ImageIcon className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
