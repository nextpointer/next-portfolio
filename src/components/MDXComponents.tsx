export function useMDXComponents(components: any) {
  return {
    // Headings
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-heading-text-color mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-heading-text-color mt-6 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold text-heading-text-color mt-5 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-medium text-heading-text-color mt-4 mb-2">
        {children}
      </h4>
    ),

    // Paragraphs
    p: ({ children }: any) => (
      <p className="text-base leading-7 text-subheading-text-color my-4">
        {children}
      </p>
    ),

    // Lists
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside my-4 pl-4">{children}</ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside my-4 pl-4">{children}</ol>
    ),
    li: ({ children }: any) => (
      <li className="my-1 text-subheading-text-color">{children}</li>
    ),

    // Code blocks
    code: ({ children, className }: any) => {
      const isInline = !className?.includes("language-");

      return isInline ? (
        <code className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono">
          {children}
        </code>
      ) : (
        <code className={className}>{children}</code>
      );
    },
    pre: ({ children }: any) => (
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
        {children}
      </pre>
    ),

    // Blockquotes
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),

    // Links
    a: ({ children, href }: any) => (
      <a
        href={href}
        className="text-blue-600 hover:text-blue-800 underline"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),

    // Horizontal rule
    hr: () => <hr className="my-6 border-t border-gray-200" />,

    // Add any custom components you want to use in MDX
    ...components,
  };
}
