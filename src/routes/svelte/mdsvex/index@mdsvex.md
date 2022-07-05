## MDSVEX


``` js
/* ./mdsvex.config.js */
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
```


<br>


<div>
  <a class="link" target="_blank" href="https://mdsvex.pngwn.io/">Mdsvex documentation</a>
</div>

<div>
  <a class="link" target="_blank" href="https://github.com/svelte-add/mdsvex">Svelte-Add Mdsvex</a>
</div>


<style>
  
</style>