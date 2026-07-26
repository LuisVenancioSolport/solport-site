import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FinalCTA } from "@/components/final-cta";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

const SITE_URL = "https://www.solport.com.br";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog Solport`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Solport Soluções Tecnológicas" },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    ...(post.coverImage ? { image: `${SITE_URL}${post.coverImage}` } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero breadcrumbLabel={post.title} eyebrow="Blog Solport" title={post.title} subtitle={post.excerpt} hideCtaRow />

      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-navy/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readingTime}
            </span>
            <span>{post.author}</span>
          </div>

          {post.coverImage && (
            <div className="relative mt-8 h-64 w-full overflow-hidden rounded-card sm:h-96">
              <Image src={post.coverImage} alt="" fill className="object-cover" priority />
            </div>
          )}

          <div
            className="prose prose-navy mt-10 max-w-none prose-headings:font-heading prose-headings:text-navy prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2 border-t border-surface-muted pt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neon-cyan/40 bg-neon-cyan/5 px-2.5 py-1 text-xs font-medium text-navy"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10">
            <Link href="/blog" className="text-sm font-semibold text-brand-red">
              ← Voltar para o Blog
            </Link>
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
