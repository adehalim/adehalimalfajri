"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredArticle = {
  id: "1",
  title: "Integrating Technology in Arabic Language Learning: A Comprehensive Guide",
  excerpt: "Explore how modern educational technology can revolutionize Arabic language teaching and learning experiences for students of all levels.",
  date: "2024-06-15",
  category: "Educational Technology",
  readingTime: 8,
  image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
  slug: "integrating-technology-arabic-learning",
};

const latestArticles = [
  {
    id: "2",
    title: "The Role of Gamification in Arabic Vocabulary Acquisition",
    excerpt: "How game-based learning approaches can enhance vocabulary retention and student engagement.",
    date: "2024-05-28",
    category: "Learning Strategies",
    readingTime: 6,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    slug: "gamification-arabic-vocabulary",
  },
  {
    id: "3",
    title: "Building Effective Arabic Curriculum for Modern Learners",
    excerpt: "Designing curriculum that balances traditional Arabic grammar with contemporary communication needs.",
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
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPreviewSection() {
  return (
    <section id="blog" className="section-spacing bg-background">
      <div className="container-main">
        <SectionTitle
          title="Blog"
          subtitle="Insights, articles, and reflections on Arabic language education, research, and technology integration."
        />

        {/* Featured Article */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Link href={`/blog/${featuredArticle.slug}`} className="group block">
            <div className="relative rounded-3xl overflow-hidden border border-border bg-card hover:border-soft-blue/30 transition-all duration-300 hover:shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <Badge variant="primary" size="sm" className="w-fit mb-4">
                    Featured
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-soft-blue transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(featuredArticle.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readingTime} min read
                    </span>
                    <Badge variant="outline" size="sm">
                      {featuredArticle.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Latest Articles */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {latestArticles.map((article, index) => (
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
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-3">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.date)}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="outline"
            size="lg"
            href="/blog"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
