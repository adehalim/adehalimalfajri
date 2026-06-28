"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Clock, Calendar, ArrowLeft, Share2, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArticleDetailProps {
  article: {
    title: string;
    content: string;
    date: string;
    category: string;
    readingTime: number;
    author: string;
    image: string;
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function generateTOC(content: string) {
  const headings = content.match(/^##\s+(.+)$/gm) || [];
  return headings.map((heading) => ({
    title: heading.replace(/^##\s+/, ""),
    id: heading.replace(/^##\s+/, "").toLowerCase().replace(/\s+/g, "-"),
  }));
}

export function ArticleDetail({ article }: ArticleDetailProps) {
  const toc = generateTOC(article.content);

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let inList = false;

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        if (inList && currentList.length > 0) {
          elements.push(
            <ol key={`list-${index}`} className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
              {currentList.map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ol>
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <h2
            key={`h2-${index}`}
            id={trimmed.replace("## ", "").toLowerCase().replace(/\s+/g, "-")}
            className="text-xl font-semibold text-foreground mt-8 mb-4"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        elements.push(
          <h3 key={`h3-${index}`} className="text-lg font-semibold text-foreground mt-6 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("- ") || trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ") || trimmed.startsWith("4. ")) {
        if (!inList) inList = true;
        currentList.push(trimmed.replace(/^[-\d\.\s]+/, ""));
      } else if (trimmed === "" && inList) {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
              {currentList.map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          );
          currentList = [];
        }
        inList = false;
      } else if (trimmed !== "") {
        if (inList && currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
              {currentList.map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <p key={`p-${index}`} className="text-sm text-muted-foreground leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      }
    });

    if (inList && currentList.length > 0) {
      elements.push(
        <ul key={`list-final`} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
          {currentList.map((item, i) => (
            <li key={i} className="text-sm">{item}</li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  return (
    <div className="section-spacing">
      <div className="container-main">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-12 max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Header Image */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-8">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="primary" size="md">
                {article.category}
              </Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {article.readingTime} min read
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                {article.author}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
              {article.title}
            </h1>

            {/* Content */}
            <div className="prose prose-sm max-w-none">
              {renderContent(article.content)}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground">Share this article:</span>
                <Button
                  variant="secondary"
                  size="sm"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://adehalimalfajri.com/blog/${article.title.toLowerCase().replace(/\s+/g, "-")}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Share2 className="w-4 h-4" />}
                >
                  Twitter
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://adehalimalfajri.com/blog/${article.title.toLowerCase().replace(/\s+/g, "-")}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Share2 className="w-4 h-4" />}
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar - TOC */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sticky top-28">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-muted-foreground hover:text-soft-blue transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
