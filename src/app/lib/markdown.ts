import fs from "fs";
import path from "path";
import matter from "gray-matter";

type PostData = {
  title: string;
  date: string;
  slug: string;
  readingTime: string;
};

const postsDir = path.join(process.cwd(), "src", "app", "BlogContent", "blogs");

export function getPostSlugs() {
  return fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
}

export function getAllPosts(): PostData[] {
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDir, filename);
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
  const fullPath = path.join(postsDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  return { slug, metadata: data as PostData, content };
}
