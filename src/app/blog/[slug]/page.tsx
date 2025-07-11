import { getAllPosts, getPostHtmlBySlug } from "@/app/lib/markdown";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { processed, metadata } = await getPostHtmlBySlug(params.slug);

  return (
    <>
      <title>{metadata.title}</title>
      <div className="">
        <h1 className="text-3xl text-heading-text-color">{metadata.title}</h1>
        <div className="flex flex-row gap-4">
          <p className="text-md text-subheading-text-color">{metadata.date}</p>
          <span className="bg-muted pl-2 pr-2 pt-1 pb-1 rounded-2xl text-[10px]">
            {metadata.readingTime} read
          </span>
        </div>

        <article
          dangerouslySetInnerHTML={{ __html: processed.value }}
          className="text-sm mt-8"
        />
      </div>
    </>
  );
}

// make it statically generated
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
