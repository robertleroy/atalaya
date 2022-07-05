<script>
  const tabs = ["SvelteKit", "Svelte Vite"];
	let selectedTab = "SvelteKit";
</script>

## Tabs Example

<br>

<div class='tabs'>
  {#each tabs as tab}
  <div class='tab' 
    on:click={() => selectedTab = tab}
    class:selectedTab={selectedTab === tab}>{tab}</div>
  <div class='spacer'>|</div>
  {/each}
</div>

{#if selectedTab === "SvelteKit"}
``` bash
# Init & follow prompts ~ svelte vite
npm init @svelte-add/kit@latest
```
{:else if selectedTab === "Svelte Vite"}
``` bash
# Init & follow prompts ~ sveltekit
npm init @svelte-add/vite@latest
```
{/if }


<br>

### Code

``` html
<script>
  const tabs = ["SvelteKit", "Svelte Vite"];
	let selectedTab = "SvelteKit";
</script>

<div class='tabs'>
  {#each tabs as tab}
  <div class='tab' 
    on:click={() => selectedTab = tab}
    class:selectedTab={selectedTab === tab}>{tab}</div>
  <div class='spacer'>|</div>
  {/each}
</div>


{#if selectedTab === "SvelteKit"}

    <!-- content here -->

{:else if selectedTab === "Svelte Vite"}

    <!-- content here -->

{/if }


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
    font-weight: bold;
  }
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
    font-weight: bold;
  }
</style>