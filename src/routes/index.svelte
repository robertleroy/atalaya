
<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { mainNav, sidebarOpen } from '$lib/stores/store';
	import { titlecase } from '$lib/stores/filters';

  const closeSidebar = () => sidebarOpen.set(false);  
</script>


<aside class="side-bar" class:sidebarOpen={$sidebarOpen}>
  <nav class="side-nav">
    <h4 class="sidesidenav-header" class:active={$mainNav.url === $page.url.pathname}>
      <a href="{base}/">Atalaya</a>
    </h4>

    {#each $mainNav.routes as {name, url}}
    <div class="sidenav-item" on:click={closeSidebar}>
      <a href='{base}{url}'>{titlecase(name)}</a>
    </div>
    {/each}
  </nav>
</aside>



<section class="page">
  <article class="content">
    <h2>Atalaya</h2>

    <p>
      <img src="{base}talaya.png" alt="talaya" id="image">
    </p>

    <section class="reference">
      <ul>
        <span>
          <a class="link" target="_blank" href="https://svelte.dev/docs">Svelte</a>
        </span>
        <span>|</span>
        <span>
          <a class="link" target="_blank" href="https://kit.svelte.dev/docs/">SvelteKit</a>
        </span>
        
        <span>|</span>
        <span>
          <a class="link" target="_blank" href="https://github.com/svelte-add/svelte-add">Svelte-Add</a>
      </span>
        
      <span>|</span>
        <span>
          <a class="link" target="_blank" href="https://svelte.dev/repl/">Repl</a>
        </span>
      </ul>

      <ul>
        <span>
          <a class="link" target="_blank" href="https://www.w3schools.com/cssref/css_selectors.asp">Css Selectors</a>
        </span>
        <span>|</span>
        <span>
          <span>
            <a class="link" target="_blank" href="https://postcss.org/">PostCSS</a>
          </span>
          <span>|</span>
          <span>
            <span>
              <a class="link" target="_blank" href="https://www.w3schools.com/howto/default.asp">w3schools: How To</a>
            </span>
      </ul>

      <ul>
        <span>
          <a class="link" target="_blank" href="https://jakearchibald.github.io/svgomg/">SVGOMG</a>
        </span>
        <span>|</span>
        <span>
          <a class="link" target="_blank" href="https://convertingcolors.com/">Converting Colors</a>
        </span>
      </ul>
    </section>
  </article>
</section>

<style lang='postcss'>

  img {
    /* width: 100%; */
    filter: hue-rotate(10deg);
  }
  ul {
    margin-bottom: 0.2rem;
  }
</style>