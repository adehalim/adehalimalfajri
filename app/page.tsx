import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ResumeSection } from "@/components/home/ResumeSection";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { ResearchSection } from "@/components/research/ResearchSection";
import { PublicationsSection } from "@/components/publications/PublicationsSection";
import { CertificatesSection } from "@/components/certificate/CertificatesSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { BlogPreviewSection } from "@/components/blog/BlogPreviewSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
        <ResearchSection />
        <PublicationsSection />
        <CertificatesSection />
        <GallerySection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
