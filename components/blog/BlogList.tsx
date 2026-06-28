"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Clock, Calendar, Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const allArticles = [
  {
    id: "1",
    title: "Integrating Technology in Arabic Language Learning: A Comprehensive Guide",
    excerpt: "Explore how modern educational technology can revolutionize Arabic language teaching and learning experiences for students of all levels.",
    date: "2024-06-15",
    category: "Educational Technology",
    readingTime: 8,
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "integrating-technology-arabic-learning",
  },
  {
    id: "2",
    title: "The Role of Gamification in Arabic Vocabulary Acquisition",
    excerpt: "How game-based learning approaches can enhance vocabulary retention and student engagement in Arabic language education.",
    date: "2024-05-28",
    category: "Learning Strategies",
    readingTime: 6,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    slug: "gamification-arabic-vocabulary",
  },
  {
    id: "3",
    title: "Building Effective Arabic Curriculum for Modern Learners",
    excerpt: "Designing curriculum that balances traditional Arabic grammar with contemporary communication needs and technology integration.",
    date: "2024-04-20",
    category: "Curriculum",
    readingTime: 10,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    slug: "effective-arabic-curriculum",
  },
  {
    id: "4",
    title: "Blended Learning: Combining Traditional and Digital Arabic Instruction",
    excerpt: "A practical approach to implementing blended learning models in Arabic language classrooms.",
    date: "2024-03-15",
    category: "Teaching Methods",
    readingTime: 7,
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    slug: "blended-learning-arabic",
  },
  {
    id: "5",
    title: "The Psychological Aspects of Second Language Acquisition in Arabic",
    excerpt: "Understanding cognitive and motivational factors that influence Arabic language learning outcomes.",
    date: "2024-02-10",
    category: "Research",
    readingTime: 12,
    image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=400",
    slug: "psychological-aspects-arabic",
  },
  {
    id: "6",
    title: "Digital Tools for Arabic Calligraphy and Writing Practice",
    excerpt: "Reviewing the best digital tools and applications for practicing Arabic script and calligraphy.",
    date: "2024-01-25",
    category: "Technology",
    readingTime: 5,
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
    slug: "digital-tools-arabic-calligraphy",
  },
];

const categories = [
  "All",
  "Educational Technology",
  "Learning Strategies",
  "Curriculum",
  "Teaching Methods",
  "Research",
  "Technology",
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="section-spacing">
      <div className="container-main">
        <SectionTitle
          title="Blog"
          subtitle="Articles, insights, and reflections on Arabic language education, research methodology, and technology integration in teaching."
        />

        {/* Search and Filter */}
        <motion.div
          className="mb-10 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-soft-blue/50 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-navy text-white shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${article.slug}`} className="group block">
                <div className="relative rounded-3xl overflow-hidden border border-border bg-card hover:border-soft-blue/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" size="sm">
                        {article.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {article.readingTime} min
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-soft-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-soft-blue group-hover:underline">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
