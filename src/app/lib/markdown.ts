import fs from "fs";
import path from "path";
import matter from "gray-matter";

type PostData = {
  title: string;
  date: string;
  slug: string;
  readingTime: string;
};

type SnippetData = {
  title: string;
  about: string;
  date: string;
  slug: string;
  tags: string[];
  icon: string;
};

const BlogPostDir = path.join(
  process.cwd(),
  "src",
  "app",
  "BlogContent",
  "blogs",
);

const SnippetDir = path.join(
  process.cwd(),
  "src",
  "app",
  "SnippetContent",
  "snippets",
);

export function getAllPosts(): PostData[] {
  const files = fs.readdirSync(BlogPostDir);

  const posts = files.map((filename) => {
    const filePath = path.join(BlogPostDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...(data as PostData),
      slug: data.slug || filename.replace(/\.mdx$/, ""),
    };
  });

  // Sort by date (newest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(BlogPostDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  return { slug, metadata: data as PostData, content };
}

export function getAllSnippet(): SnippetData[] {
  const files = fs.readdirSync(SnippetDir);

  const posts = files.map((filename) => {
    const filePath = path.join(SnippetDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...(data as SnippetData),
      slug: data.slug || filename.replace(/\.mdx$/, ""),
    };
  });

  // Sort by date (newest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getSnippetBySlug(slug: string) {
  const fullPath = path.join(SnippetDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  return { slug, metadata: data as SnippetData, content };
}
