### Relative Links  

adapter-static has a bug with relative links.    
Prefacing links with 'base' is a work around.

``` html
<script>  
  import { base } from '$app/paths';
</script>

<span>{$page.url.pathname}</span>

<nav class="top-nav">
  {#each routes as route}
  <div class="nav-item" class:active={route.url === $page.url.pathname}>
    <a href='{base}{route.url}'>{route.name}</a>
  </div>  
  {/each}
</nav>
```