import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  tags: string[];
  author: string;
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  contentHtml: string;
}

interface BlogFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  tags?: string[];
  author?: string;
  draft?: boolean;
}

function readPostFile(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw) as unknown as { data: BlogFrontmatter; content: string };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostMeta[] {
  const posts = getAllSlugs()
    .map((slug) => {
      const { data, content } = readPostFile(slug);
      if (data.draft) return null;
      const meta: BlogPostMeta = {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        coverImage: data.coverImage,
        tags: data.tags ?? [],
        author: data.author ?? "Equipe Solport",
        readingTime: readingTime(content).text.replace("min read", "min de leitura"),
      };
      return meta;
    })
    .filter((post): post is BlogPostMeta => post !== null);

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = readPostFile(slug);
  if (data.draft) return null;

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    coverImage: data.coverImage,
    tags: data.tags ?? [],
    author: data.author ?? "Equipe Solport",
    readingTime: readingTime(content).text.replace("min read", "min de leitura"),
    contentHtml: marked.parse(content, { async: false }) as string,
  };
}
