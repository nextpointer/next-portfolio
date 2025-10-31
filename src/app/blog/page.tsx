import { Lock } from "lucide-react";
import { getAllPosts } from "../lib/markdown";
import TransitionLink from "@/components/TransitionLink";

export default function ListBlogs() {
  const posts = getAllPosts();

  return (
    <>
      <title>blog [nextpointer]</title>
      <div className="w-full">
        <h1 className="text-3xl md:text-5xl h-12 md:h-16 mb-4">Blog</h1>
        <ul className="w-full">
          {posts.map((post) => {
            const isDraft = post.draft === true;
            const content = (
              <div
                className={`flex flex-row justify-between items-center group relative text-sm border border-transparent hover:border-dashed hover:border-ring/40 px-4 py-2 rounded-md ${
                  isDraft ? "cursor-not-allowed" : ""
                }`}
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-subheading-text-color leading-snug">
                    <span className="inline">
                      {post.title}
                      {isDraft && (
                        <span className="ml-1 inline-block align-middle -translate-y-[3px]">
                          <Lock className="w-3 h-3 opacity-70 inline-block" />
                        </span>
                      )}
                    </span>
                  </h2>

                  <span className="mr-8 text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap justify-end">
                  {isDraft && (
                    <span className="text-[10px] bg-destructive/20 text-destructive px-2 py-1 rounded-full tracking-wide">
                      Draft
                    </span>
                  )}
                  <span className="bg-muted px-2 py-1 rounded-2xl text-[10px] text-center">
                    {post.readingTime} read
                  </span>
                </div>

                {/* Corner borders */}
                <span className="absolute -top-1 -left-1 w-1 h-1 border-t border-l border-border group-hover:border-primary group-hover:top-0 group-hover:left-0 transition-all"></span>
                <span className="absolute -top-1 -right-1 w-1 h-1 border-t border-r border-border group-hover:border-primary group-hover:top-0 group-hover:right-0 transition-all"></span>
                <span className="absolute -bottom-1 -left-1 w-1 h-1 border-b border-l border-border group-hover:border-primary group-hover:bottom-0 group-hover:left-0 transition-all"></span>
                <span className="absolute -bottom-1 -right-1 w-1 h-1 border-b border-r border-border group-hover:border-primary group-hover:bottom-0 group-hover:right-0 transition-all"></span>
              </div>
            );

            return (
              <li key={post.slug} className="mb-2">
                {isDraft ? (
                  content
                ) : (
                  <TransitionLink href={`/blog/${post.slug}`}>
                    {content}
                  </TransitionLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
