import createMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMdx = createMdx({
  extension: /\.(md | mdx) $/,
});

export default withMdx(nextConfig);
