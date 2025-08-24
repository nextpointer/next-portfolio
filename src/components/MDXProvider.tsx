import { MDXProvider as Provider } from "@mdx-js/react";
import { motion } from "framer-motion";

// custom components
const components = {
  h1: (props: any) => (
    <motion.h1
      {...props}
      className="text-3xl font-bold text-heading-text-color"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    />
  ),
  p: (props: any) => (
      <motion.p
        {...props}
        className="text-sm text-subheading-text-color leading-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    )
};

export function MDXProvider({ children }: { children: React.ReactNode }) {
  return <Provider components={components}>{children}</Provider>;
}
