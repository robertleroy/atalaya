<script>
	import { page } from '$app/stores';
  import { base } from '$app/paths';
	import { baseNav, demoNav, sidebarOpen } from '$lib/stores/store';
	import { titlecase } from '$lib/stores/filters';

  const closeSidebar = () => sidebarOpen.set(false); 
</script>


<aside class="side-bar" class:sidebarOpen={$sidebarOpen} >
  <nav class="side-nav">
    <h4 class="sidenav-header"  class:active={$demoNav.url === $page.url.pathname}>
      <a href="{ base }{$demoNav.url}">{titlecase($demoNav.title)}</a>
    </h4>
    
    {#each $demoNav.routes as {name, url}}
    <div class="sidenav-item" on:click={closeSidebar} 
         class:active={url === $page.url.pathname}>
      <a href={ base }{url}>{titlecase(name)}</a>
    </div>
    {/each}

    <hr>

    <h4 class="sidenav-header"  class:active={$baseNav.url === $page.url.pathname}>
      <a href="{ base }{$baseNav.url}">{titlecase($baseNav.title)}</a>
    </h4>
    
    {#each $baseNav.routes as {name, url}}
    <div class="sidenav-item" on:click={closeSidebar} 
         class:active={url === $page.url.pathname}>
      <a href={ base }{url}>{titlecase(name)}</a>
    </div>
    {/each}
  </nav>
</aside>

<section class="page">
  <article class="content">
    <slot />
  </article>
</section>

<style>

</style>