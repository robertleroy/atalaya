<script>
  import InitSvelt_kit from './initSvelt_kit.md';
  import InitSvelt_vite from './initSvelt_vite.md';
  import Index from './index.md';

  const tabs = [ 'SvelteKit', 'Svelte Vite' ];
  let activeTab = 'SvelteKit';
</script>

<h2>{activeTab}</h2>

<div class="tabpanel">
  <div class="tabs" >
    {#each tabs as tab}
    <div class="tab" 
      on:click={() => activeTab=tab}
      class:activeTab={activeTab===tab}>
      <span>{tab}</span>
    </div>
    {/each}
  </div>
  <div class="tabContent">
    {#if activeTab === 'SvelteKit'}
      <InitSvelt_kit />
    {:else if activeTab === 'Svelte Vite'}
      <InitSvelt_vite />
    {/if}
  </div>
</div>

<br>
<Index />

<style lang="postcss">
  .tabpanel {
    background-color: #1E1E1E;
    color: #4e8cbf;
    border-radius: .5rem;
  }
  .tabs {
    display: flex;
    gap: 0 1ch;
    padding: 0 1rem;
    margin-bottom: -1rem;

    .tab {
      padding: 1rem 1rem 0.5rem;
      cursor: pointer;
      font-size: var(--h7);
      border-bottom: 1px solid #4e8cbf;

      /* span { border-bottom: 1px solid #4e8cbf; } */
    }
  }
  .tab.activeTab {
    color: #bebebe;
    font-size: var(--h6);
    border-bottom-style: none;
    /* span { border-bottom-style: none; } */
  }
</style>