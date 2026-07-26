"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogList({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) {
    return (
      <section className="bg-surface-light py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-navy/60">Ainda não há posts publicados. Volte em breve.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-surface-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex h-full flex-col overflow-hidden rounded-card border border-surface-muted bg-white shadow-soft transition-shadow hover:shadow-glow-cyan"
              >
                <div className="relative h-44 w-full bg-navy">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#241134] to-navy" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  {post.tags.length > 0 && (
                    <span className="w-fit rounded-full border border-neon-cyan/40 bg-neon-cyan/5 px-2.5 py-1 text-xs font-medium text-navy">
                      {post.tags[0]}
                    </span>
                  )}
                  <h3 className="mt-3 font-heading text-lg font-bold text-navy">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-navy/70">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-navy/50">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readingTime}
                    </span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                    Ler artigo
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
