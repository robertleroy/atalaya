<svelte:window 
	bind:innerWidth />



<script>
  import { page } from '$app/stores';
	import { base } from '$app/paths';
  import { mainNav, sidebarOpen } from '$lib/stores/store';
	import { titlecase } from '$lib/stores/filters';
	import BtnMenu from '$lib/components/btnMenu.svelte';
  import "../app.css";

  let innerWidth;

  const replaceSlashes = (str) => {
    // if (str === '/') return "Home";
    let stripped = str.slice(1).replace(/\//g, " | ") || "Atalaya"
    return titlecase(stripped);
  }
  $: pathname = replaceSlashes($page.url.pathname);
  // .slice(1).replace(/\//g, " | ") || "Home"

  $: {
    innerWidth > 900 ? $sidebarOpen = false : '';
  }

  const closeSidebar = () => sidebarOpen.set(false);
</script>

<svelte:head>
	<title>{pathname}</title>
</svelte:head>

<header>
  <div class="flex-header">
    <a class="title" href="{base}/" on:click={closeSidebar}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 9">
        <path d="M5.877 8.833c.78-.148 1.017-.386 1.099-1.11.058-.508.41-1.089.781-1.29.527-.286.634-.583.483-1.345-.262-1.33.183-1.235 2.036.438.862.778 1.924 1.724 2.36 2.1l.794.686-.591-.937c-.575-.911-.572-.957.121-1.705.391-.423.611-.87.487-.996-.123-.125-.055-.568.151-.983.207-.416.419-1.193.47-1.727.095-.968.107-.961 4.073 2.206 3.47 2.773 6.307 4.849 5.8 4.245-.09-.108-2.4-2.046-5.131-4.306l-4.966-4.11-2.003 2.253-2.003 2.251-1.018-.592-1.02-.593-3.779 2.627C1.943 7.391.14 8.665.013 8.78c-.292.26 4.538.306 5.864.055Z"/>
      </svg>
      <h1 class="h3">
        {titlecase($mainNav.title)}
      </h1>
    </a>

    <!-- <span>{innerWidth}, {$sidebarOpen}</span> -->
  
    <nav class="navbar">
      <span class="navbar-item" on:click={closeSidebar}
            class:active={$page.url.pathname === '/'}>
				<a href="{base}/">Home</a>
			</span>

      {#each $mainNav.routes as {url, name}}
      <div class="navbar-item" on:click={() => sidebarOpen.set(false)}
           class:active={url === '/' ? false : $page.url.pathname.includes(url) ? true : false}>
        <a href='{base}{url}'>{titlecase(name)}</a>
      </div>
      {/each}

      <!-- <div class="navbar-item">{innerWidth}</div> -->

    </nav>
  </div>

  <div class="btnMenu" on:click={() => $sidebarOpen = !$sidebarOpen}>
    <BtnMenu toggle={$sidebarOpen}/>
  </div>
</header>

<main>
  <div class="router">
    <slot />
  </div>
</main>


<style lang="postcss">

</style>