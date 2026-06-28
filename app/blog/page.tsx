import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and insights on Arabic language education, research, and technology integration.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
