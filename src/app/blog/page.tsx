import { getAllPosts } from "../lib/markdown";
import TransitionLink from "@/components/TransitionLink";

export default function ListBlogs() {
  const posts = getAllPosts();

  return (
    <>
      <title>blog [nextpointer]</title>
      <div className="w-full">
        <h1 className="text-2xl mb-4">Blog</h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li key={post.slug} className="mb-2 cursor-pointer">
              <TransitionLink
                href={`/blog/${post.slug}`}
                className="text-blue-600 underline"
              >
                <div className="flex flex-row justify-between items-center group relative text-sm border border-dashed px-4 py-2">
                  <div className="flex flex-col">
                    <h2 className="text-subheading-text-color">{post.title}</h2>
                    <span className="mr-8">{post.date}</span>
                  </div>
                  <span className="bg-muted pl-2 pr-2 pt-1 pb-1 rounded-2xl text-[10px]">
                    {post.readingTime} read
                  </span>
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-border group-hover:border-primary"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-border group-hover:border-primary"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-border group-hover:border-primary"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-border group-hover:border-primary"></span>
                </div>
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
