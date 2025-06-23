
import { getAllPosts } from "../lib/markdown";
import TransitionLink from "@/components/TransitionLink";

export default async function ListBlogs() {
  const posts = getAllPosts();
  return (
    <>
      <title>blog [nextpointer]</title>
      <div className="w-full md:w-full">
        <h1 className="text-2xl font-bold mb-4 text-heading-text-color">Blog</h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li key={post.slug} className="mb-2 cursor-pointer">
              <TransitionLink
                href={`/blog/${post.slug}`}
                className="text-blue-600 underline"
              >
                <div className="flex flex-row justify-between items-center group relative text-sm border border-sidebar-border p-2 rounded-md hover:border-zinc-700">
                  {/* <ArrowUpLeft className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute right-0" /> */}
                  <div className="flex flex-col">
                    <h2 className="text-subheading-text-color">{post.title}</h2>
                    <span className="mr-8">{post.date}</span>
                  </div>
                  <span className="bg-muted pl-2 pr-2 pt-1 pb-1 rounded-2xl text-[10px]">
                    {post.readingTime} read
                  </span>
                </div>
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
