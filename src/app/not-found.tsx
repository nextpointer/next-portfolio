import TransitionLink from "@/components/TransitionLink";
import { ArrowUpRight } from "lucide-react";
import { NotFoundIcon } from "@/components/icons/not-found";

export default function NotFound() {
  return (
    <div className="flex h-128 flex-col w-full justify-center items-center gap-3">
      <NotFoundIcon className="h-32 w-32" />
      <h1 className="text-3xl font-bold">Not Found</h1>
      <p className="text-md text-normal-text-color relative bottom-1">
        Could not find requested resource
      </p>
      <TransitionLink
        href="/"
        className="text-subheading-text-color flex flex-row gap-1 px-2 py-1 items-center relative group"
      >
        <span className="absolute -top-1 -left-1 w-1 h-1 border-t border-l border-border group-hover:border-primary group-hover:top-0 group-hover:left-0 transition-all"></span>
        <span className="absolute -top-1 -right-1 w-1 h-1 border-t border-r border-border group-hover:border-primary group-hover:top-0 group-hover:right-0 transition-all"></span>
        <span className="absolute -bottom-1 -left-1 w-1 h-1 border-b border-l border-border group-hover:border-primary group-hover:bottom-0 group-hover:left-0 transition-all"></span>
        <span className="absolute -bottom-1 -right-1 w-1 h-1 border-b border-r border-border group-hover:border-primary group-hover:bottom-0 group-hover:right-0 transition-all"></span>
        <span>Return Home</span>
        <ArrowUpRight className="h-4 w-4" />{" "}
      </TransitionLink>
    </div>
  );
}
