import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BlogList } from "@/components/blog-list";
import { FinalCTA } from "@/components/final-cta";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Solport",
  description:
    "Conteúdo sobre segurança eletrônica, portaria virtual, controle de acesso e eletromobilidade para condomínios em São Paulo.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        breadcrumbLabel="Blog"
        eyebrow="Conteúdo Solport"
        title="Blog Solport"
        subtitle="Guias práticos sobre segurança eletrônica, portaria virtual e eletromobilidade para condomínios de São Paulo."
        hideCtaRow
      />
      <BlogList posts={posts} />
      <FinalCTA />
    </>
  );
}
