import { cn } from "@/lib/utils";

export function useMDXComponents(components: any) {
  return {
    // Headings
    h1: ({ children, ...props }: any) => (
      <h1
        className={cn("scroll-m-20 text-3xl lg:text-4xl mb-6 mt-10")}
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: any) => (
      <h2
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl text-subheading-text-color mb-4 mt-8",
        )}
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3
        className={cn(
          "scroll-m-20 text-xl lg:text-2xl text-subheading-text-color mb-3 mt-6",
        )}
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: any) => (
      <h4
        className={cn(
          "scroll-m-20 text-lg font-medium tracking-tight text-subheading-text-color mb-2 mt-5",
        )}
        {...props}
      >
        {children}
      </h4>
    ),

    // Paragraphs
    p: ({ children, ...props }: any) => (
      <p className={cn("text-sm mb-4 text-normral-text-color")} {...props}>
        {children}
      </p>
    ),

    // Lists
    ul: ({ children, ...props }: any) => (
      <ul
        className={cn(
          "list-disc list-inside space-y-1 my-4 pl-5 text-muted-foreground",
        )}
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol
        className={cn(
          "list-decimal list-inside space-y-1 my-4 pl-5 text-muted-foreground",
        )}
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li className="leading-6">{children}</li>
    ),

    // Blockquotes
    blockquote: ({ children, ...props }: any) => (
      <blockquote
        className={cn("mt-6 border-l-2 pl-6 italic text-muted-foreground")}
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Links
    a: ({ children, href, ...props }: any) => (
      <a
        href={href}
        className={cn(
          "font-medium text-primary underline-offset-4 hover:underline",
        )}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    ),

    // Horizontal rule
    hr: (props: any) => <hr className="my-8 border-border" {...props} />,

    // Merge custom components
    ...components,
  };
}
