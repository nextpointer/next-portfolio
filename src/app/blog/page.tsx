import { getAllPosts } from "../lib/markdown";
import TransitionLink from "@/components/TransitionLink";

export default function ListBlogs() {
  const posts = getAllPosts();

  return (
    <>
      <title>blog [nextpointer]</title>
      <div className="w-full">
        <h1 className="text-3xl md:text-5xl h-1/2 mb-4">Blog</h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li key={post.slug} className="mb-2 cursor-pointer">
              <TransitionLink href={`/blog/${post.slug}`} className="">
                <div className="flex flex-row justify-between items-center group relative text-sm border border-transparent hover:border-dashed hover:hover:border-ring/40 px-4 py-2">
                  <div className="flex flex-col">
                    <h2 className="text-subheading-text-color">{post.title}</h2>
                    <span className="mr-8">{post.date}</span>
                  </div>
                  <span className="bg-muted pl-2 pr-2 pt-1 pb-1 rounded-2xl text-[10px]">
                    {post.readingTime} read
                  </span>
                  <span className="absolute -top-1 -left-1 w-1 h-1 border-t border-l border-border group-hover:border-primary group-hover:top-0 group-hover:left-0 transition-all"></span>
                  <span className="absolute -top-1 -right-1 w-1 h-1 border-t border-r border-border group-hover:border-primary group-hover:top-0 group-hover:right-0 transition-all"></span>
                  <span className="absolute -bottom-1 -left-1 w-1 h-1 border-b border-l border-border group-hover:border-primary group-hover:bottom-0 group-hover:left-0 transition-all"></span>
                  <span className="absolute -bottom-1 -right-1 w-1 h-1 border-b border-r border-border group-hover:border-primary group-hover:bottom-0 group-hover:right-0 transition-all"></span>
                </div>
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
