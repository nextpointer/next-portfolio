import TransitionLink from "@/components/TransitionLink";

export default function Page() {
  return (
    <>
      <title>blog [nextpointer]</title>
      <h1 className="text-3xl md:text-5xl h-12 md:h-16 mb-4 ">Playground</h1>
      <div className="grid place-items-start w-full p-8 pl-4">
        <TransitionLink
          className="group relative p-2"
          href={"/playground/chart"}
        >
          <h2>1. Chart Example</h2>

          {/* Corner borders */}
          <span className="absolute -top-1 -left-1 w-1 h-1 border-t border-l border-border group-hover:border-primary group-hover:top-0 group-hover:left-0 transition-all"></span>
          <span className="absolute -top-1 -right-1 w-1 h-1 border-t border-r border-border group-hover:border-primary group-hover:top-0 group-hover:right-0 transition-all"></span>
          <span className="absolute -bottom-1 -left-1 w-1 h-1 border-b border-l border-border group-hover:border-primary group-hover:bottom-0 group-hover:left-0 transition-all"></span>
          <span className="absolute -bottom-1 -right-1 w-1 h-1 border-b border-r border-border group-hover:border-primary group-hover:bottom-0 group-hover:right-0 transition-all"></span>
        </TransitionLink>
      </div>
    </>
  );
}
