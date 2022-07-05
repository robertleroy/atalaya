<script>
  const tabs = ["SvelteKit", "Svelte Vite"];
	let selectedTab = "SvelteKit";
</script>

<!-- <h3>{selectedTab}</h3> -->


<h3 class='tabs'>
  {#each tabs as tab}
  <div class='tab' 
    on:click={() => selectedTab = tab}
    class:selectedTab={selectedTab === tab}>{tab}</div>
  <div class='spacer'>|</div>
  {/each}
</h3>

{#if selectedTab === "SvelteKit"}
``` bash
# Init & follow prompts ~ svelte vite
npm init @svelte-add/kit@latest

# Add plugins
npm i -D postcss-nested

npm install    
npm run dev
```
{:else if selectedTab === "Svelte Vite"}
``` bash
# Init & follow prompts ~ sveltekit
npm init @svelte-add/vite@latest

# Add plugins
npm i -D postcss-nested

npm install    
npm run dev
```
{/if }


<br>


### PostCSS Config
``` js
/* postcss.config.cjs */
const autoprefixer = require("autoprefixer");
const postcss_nested = require('postcss-nested');

const config = {
  plugins: [
    autoprefixer, 
    postcss_nested
  ],
};

module.exports = config;
```

<br>

### PostCSS Import
``` css
/* app.css -- Write your global styles here, in PostCSS syntax */

@import '$lib/styles/variables.css'; 
@import '$lib/styles/base.css';
@import '$lib/styles/lists.css'; 
@import '$lib/styles/links.css'; 
@import '$lib/styles/forms.css'; 
@import '$lib/styles/shadows.css'; 
@import '$lib/styles/vs-dark.css'; 
/* @import '$lib/styles/codeblock.css';  */
/* @import '$lib/styles/blockquote.css';  */
/* @import '$lib/styles/tables.css';  */
```

<br>


### Component
``` html
<!-- component.svelte -->
<script>
  let title = 'title';
</script>


<section class="">
  {title}
</section>


<style lang='postcss'>
  
</style>
```
<br>



<style lang='postcss'>
  .tabs {
    display: flex;
    align-items: center;
    gap: 0 1rem;
  }
  .tab {
    position: relative;
    cursor: pointer;
    color: #999;
    font-size: var(--h5);
    align-self: baseline;
  }
  .spacer {
    font-size: var(--h6);
    color: #999;
    &:last-of-type { display: none; }
  }
  .selectedTab {
    font-size: inherit;
    color: currentColor;
  }
</style>