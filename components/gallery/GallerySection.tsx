"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Modal } from "@/components/ui/Modal";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    id: "1",
    title: "Research Seminar Presentation",
    date: "2024",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "landscape",
  },
  {
    id: "2",
    title: "Arabic Language Workshop",
    date: "2024",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "portrait",
  },
  {
    id: "3",
    title: "Campus Academic Event",
    date: "2023",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "landscape",
  },
  {
    id: "4",
    title: "Study Group Session",
    date: "2023",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "square",
  },
  {
    id: "5",
    title: "Library Research",
    date: "2024",
    image: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "portrait",
  },
  {
    id: "6",
    title: "Conference Presentation",
    date: "2024",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "landscape",
  },
  {
    id: "7",
    title: "Graduation Ceremony",
    date: "2024",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "square",
  },
  {
    id: "8",
    title: "Cultural Exchange Program",
    date: "2023",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
    aspectRatio: "landscape",
  },
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const navigate = (direction: number) => {
    if (selectedIndex === null) return;
    const newIndex = (selectedIndex + direction + galleryItems.length) % galleryItems.length;
    setSelectedIndex(newIndex);
  };

  const selectedItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <section id="gallery" className="section-spacing bg-surface">
      <div className="container-main">
        <SectionTitle
          title="Gallery"
          subtitle="Moments captured from academic activities, research events, seminars, and milestones throughout my educational journey."
        />

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="masonry-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer group border border-border hover:border-soft-blue/30 transition-all duration-300 hover:shadow-xl"
                onClick={() => openImage(index)}
              >
                <div className={`relative ${
                  item.aspectRatio === "portrait" ? "aspect-[3/4]" :
                  item.aspectRatio === "square" ? "aspect-square" :
                  "aspect-[4/3]"
                }`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-sm font-medium text-white">{item.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-white/70 mt-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          maxWidth="max-w-4xl"
        >
          {selectedItem && (
            <div className="relative">
              <div className="relative aspect-[16/10] max-h-[70vh]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{selectedItem.title}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <Calendar className="w-4 h-4" />
                  {selectedItem.date}
                </div>
              </div>

              {/* Navigation */}
              {galleryItems.length > 1 && (
                <>
                  <button
                    onClick={() => navigate(-1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigate(1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/40 text-white text-sm backdrop-blur-sm">
                    {(selectedIndex ?? 0) + 1} / {galleryItems.length}
                  </div>
                </>
              )}
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
