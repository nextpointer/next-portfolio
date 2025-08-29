import { getAllPosts, getPostBySlug } from "@/app/lib/markdown";
import { useMDXComponents } from "@/components/MDXComponents";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { metadata, content } = getPostBySlug(params.slug);

  return (
    <>
      <title>{metadata.title}</title>
      <div className="">
        <h1 className="text-3xl">{metadata.title}</h1>
        <div className="flex flex-row gap-4">
          <p className="text-md text-subheading-text-color">{metadata.date}</p>
          <span className="bg-muted pl-2 pr-2 pt-1 pb-1 rounded-2xl text-[10px]">
            {metadata.readingTime} read
          </span>
        </div>

        <article className="text-sm mt-8">
          <MDXRemote source={content} components={useMDXComponents({})} />
        </article>
      </div>
    </>
  );
}

// Generate static params
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
