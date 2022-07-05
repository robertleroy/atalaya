<script>
  import Num from '$lib/components/num.svelte';
  
	import { page } from '$app/stores';
	import { mainNav, sidebarOpen } from '$lib/stores/store';
	import { titlecase } from '$lib/stores/filters';

  const closeSidebar = () => sidebarOpen.set(false); 

  let options = {
		mainStyle: "text-align:center;",
	};
</script>


<aside class="side-bar" class:sidebarOpen={$sidebarOpen}>
  <nav class="side-nav">
    <h4 class="sidesidenav-header" class:active={$mainNav.url === $page.url.pathname}>
      <a href="/">Atalaya</a>
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
    <Num {options} />
  </article>
</section>