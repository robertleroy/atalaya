### [Svelte-Add](https://github.com/svelte-add/svelte-add#-svelte-add)

#### Create SvelteKit app with integrations
``` bash 
# Init & follow prompts
npm init @svelte-add/kit@latest

# Add plugins
npm i -D postcss-nested

npm install    
npm run dev
```

``` js
// postcss.config.cjs
const autoprefixer = require("autoprefixer");
const postcss_nested = require('postcss-nested');

const config = {
  plugins: [autoprefixer, postcss_nested],
};

module.exports = config;
```