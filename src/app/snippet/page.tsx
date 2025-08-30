import { getAllSnippet } from "../lib/markdown";
import TransitionLink from "@/components/TransitionLink";
import { ReactBW } from "../../components/icons/ReactBW";

const snippetIcons: Record<string, JSX.Element> = {
  React: <ReactBW className="h-5 w-5" />,
};

export default function Page() {
  const snippets = getAllSnippet();

  return (
    <>
      <title>snippets [nextpointer]</title>
      <div className="w-full">
        <h1 className="text-3xl md:text-5xl h-1/2">Snippets</h1>

        <div
          className={`columns-1 ${
            snippets.length > 1 ? "md:columns-2" : ""
          } gap-6 md:gap-0 space-y-6 md:space-y-0`}
        >
          {snippets.map((snippet) => (
            <TransitionLink
              key={snippet.slug}
              href={`/snippet/${snippet.slug}`}
              className="break-inside-avoid block"
            >
              <div className="group relative border border-border bg-card p-5 transition-all border-dashed hover:border-primary/40">
                {/* Title */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-muted group-hover:bg-primary/40">
                    <span className="text-sm font-bold text-heading-text-color">
                      {snippetIcons[snippet.icon]}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-subheading-text-color group-hover:text-primary">
                    {snippet.title}
                  </h2>
                </div>

                <p className="text-sm text-muted-foreground">{snippet.about}</p>

                {snippet.tags?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {snippet.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-sm bg-muted px-2 py-1 text-xs text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Corner Borders */}
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-border group-hover:border-primary"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-border group-hover:border-primary"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-border group-hover:border-primary"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-border group-hover:border-primary"></span>
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </>
  );
}
