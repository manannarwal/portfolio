import { Metadata } from "next";
import { BlogSection } from "@/components/sections/blog";

export const metadata: Metadata = {
  title: "Blog | Nikhila Koneru",
  description: "Insights on technology, development, and innovation from Nikhila Koneru",
};

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <BlogSection />
    </main>
  );
}
