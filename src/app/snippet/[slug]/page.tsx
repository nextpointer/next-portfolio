import { getSnippetBySlug, getAllSnippet } from "@/app/lib/markdown";
import { useMDXComponents } from "@/components/MDXComponents";
import Pre from "@/components/Pre";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const options = {
  grid: true,
  theme: "one-dark-pro",
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { content, metadata } = await getSnippetBySlug(params.slug);
  // Merge MDX components with your custom Pre component
  const mdxComponents = useMDXComponents({});

  return (
    <>
      <title>{metadata.title + " [nextpointer]"}</title>
      <div className="max-w-2xl mx-auto ">
        {" "}
        <div className="flex items-center gap-2 mb-6">
          <Link
            href="/snippet"
            className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Link>
        </div>
        <h1 className="text-3xl">{metadata.title}</h1>
        <p className="text-md text-normral-text-color mb-8">{metadata.about}</p>
        <article className="max-w-[650px] w-full">
          <MDXRemote
            source={content}
            components={{
              ...mdxComponents,
              pre: Pre,
            }}
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, options]],
              },
            }}
          />
        </article>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const snippets = getAllSnippet();
  return snippets.map((snippet) => ({ slug: snippet.slug }));
}
