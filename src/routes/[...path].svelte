<script>
	import { page } from '$app/stores'; 
  import { mainNav, sidebarOpen } from '$lib/stores/store';
	import { titlecase } from '$lib/stores/filters';

  const closeSidebar = () => sidebarOpen.set(false);  
</script>


<aside class="side-bar" class:sidebarOpen={$sidebarOpen}>
  <nav class="side-nav">
    <h4 class="sidesidenav-header" class:active={$mainNav.url === $page.url.pathname}>
      <a href="/">Home</a>
    </h4>

    {#each $mainNav.routes as {name, url}}
    <div class="sidenav-item" on:click={closeSidebar}>
      <a href={url}>{titlecase(name)}</a>
    </div>
    {/each}
  </nav>
</aside>



<section class="page">
  <article class="content">
    <h2><kbd>{$page.url.pathname}</kbd></h2>
    <p>
      Error: &nbsp; unable to load the page your looking for.. 
    </p>
    
    <div>
      <a href="/">Home</a>
    </div>
  </article>
</section>

<style>
  .content a {
    color: #0066cc;
    text-decoration: underline;
  }
</style>