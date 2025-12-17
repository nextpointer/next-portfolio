import Chart from "@/components/playground/Chart";
import TransitionLink from "@/components/TransitionLink";
import { ArrowLeft } from "lucide-react";

export default async function Page({ params }: { params: { slug: string } }) {
  const param = params.slug;
  return (
    <>
      <div className="grid place-items-center w-full mt-12 ">
        <div className="flex flex-row gap-2 mr-auto">
          <TransitionLink
            href="/playground"
            className="relative group flex items-center text-sm p-2 text-muted-foreground transition-colors justify-center"
          >
            <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-border group-hover:border-primary/50"></span>
            <span className="absolute top-0 right-0 w-1 h-1 border-t border-r border-border group-hover:border-primary/50"></span>
            <span className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-border group-hover:border-primary/50"></span>
            <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-border group-hover:border-primary/50"></span>
            <ArrowLeft className="w-4 h-4" />
          </TransitionLink>
          <h1 className="text-3xl">chart-demo</h1>
        </div>
        <Chart />
      </div>
    </>
  );
}
