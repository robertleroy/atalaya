<script>
  
</script>

<h2>Base Css</h2>

``` css
/*  app.css -- Write your global styles here, in PostCSS syntax  */

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

<blockquote>Ἐν ἀρχῇ ἦν Ὁ Λόγος
  <cite>Κατά Ιωάννην</cite>
</blockquote>


<style>
  blockquote {
    
    margin: 5rem 15% 4rem;
    font-size: var(--h4);
    font-weight: 500;
    /* color: #75879B; */
    /* padding: 2rem; */
    border-radius: 1rem;
    background: transparent;
    /* text-shadow: 2px 4px 1px #75879B40; */
    /* display: block; */
    width: 100%;
    max-width: 20rem !important;
  }
  cite {
    font-style: normal;
    font-size: var(--h7);
    font-weight: 500;
    color: var(--font-color);
    text-shadow: none;
    margin-top: 1rem;
  }
</style>