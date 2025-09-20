"use client";

import { useState, useRef, ComponentProps } from "react";
import { Copy, Check } from "lucide-react";

export default function Pre({ children, ...props }: ComponentProps<"pre">) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const codeElement = preRef.current?.querySelector("code");
    if (!codeElement) return;

    const textToCopy = codeElement.innerText;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px";

      document.body.prepend(textArea);
      textArea.select();

      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Fallback copy failed", err);
      } finally {
        textArea.remove();
      }
    }
  };

  return (
    <pre
      ref={preRef}
      {...props}
      className={`${props.className || ""}
        relative group not-prose my-4
        border border-border
        !bg-background !dark:bg-background
        p-3 sm:p-4
        text-[13px] sm:text-[14px] leading-relaxed
        max-w-[90vw] overflow-x-auto
        break-words whitespace-pre-wrap
        border-dashed
      `}
    >
      {children}
      <button
        onClick={handleCopy}
        aria-label="Copy code to clipboard"
        className="absolute top-3 right-3 p-2 bg-gray-800/50 rounded-md text-gray-300 transition-all duration-200 hover:bg-gray-700/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
      >
        {copied ? (
          <Check size={16} className="text-green-400" />
        ) : (
          <Copy size={16} />
        )}
      </button>
      {/* Corner Borders */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-border group-hover:border-primary"></span>
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-border group-hover:border-primary"></span>
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-border group-hover:border-primary"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-border group-hover:border-primary"></span>
    </pre>
  );
}
