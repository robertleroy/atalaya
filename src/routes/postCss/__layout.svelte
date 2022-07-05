<script>
	import { page } from '$app/stores';
  import { base } from '$app/paths';
	import { postCssNav, sidebarOpen } from '$lib/stores/store';
	import { titlecase } from '$lib/stores/filters';

  const closeSidebar = () => sidebarOpen.set(false);
</script>


<aside class:sidebarOpen={$sidebarOpen}> 
  <nav class="side-nav">
    <h4 class="sidenav-header"  class:active={$postCssNav.url === $page.url.pathname}>
      <a href="{base}{$postCssNav.url}">{titlecase($postCssNav.title)}</a>
    </h4>
      
    {#each $postCssNav.routes as {name, url}}
    <div class="sidenav-item" on:click={closeSidebar} 
         class:active={url === $page.url.pathname}>
      <a href='{base}{url}'>{titlecase(name)}</a>
    </div>
    {/each}

  </nav>
</aside>

<section class="page">
  <article class="content">
    <slot />
  </article>
</section>

