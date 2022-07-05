import { defineMDSveXConfig as defineConfig } from "mdsvex";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// const behaviors = ['after']

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [
    rehypeSlug,
    rehypeAutolinkHeadings,
  ],
});

export default config;
