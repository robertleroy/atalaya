<script>
  import { ghsteps } from '$lib/stores/store.js';
  function clearall() {
    // console.log('clear');
    ghsteps.set({
      repo: false,
      svelteProj: false,
      ghPages: false,
      adapter: false,
      links: false,
      nojekyll: false,
      deploy: false
    })
  }
</script>

### Github Pages

#### Steps
<label>
  <input type="checkbox" bind:checked={$ghsteps.repo}>
  Create Repository
</label>
<label>
  <input type="checkbox" bind:checked={$ghsteps.svelteProj}>
  Create Sveletekit Project
</label>
<label>
  <input type="checkbox" bind:checked={$ghsteps.ghPages}>
  Initiate gh-pages
</label>
<label>
  <input type="checkbox" bind:checked={$ghsteps.adapter}>
  Adapter-Static
</label>
<label>
  <input type="checkbox" bind:checked={$ghsteps.links}>
  Add <kbd>&#123; base }</kbd> to relative links
</label>
<label>
  <input type="checkbox" bind:checked={$ghsteps.nojekyll}>
  Add <kbd>.nojekyll</kbd> file to <kbd>static</kbd> folder
</label>
<label>
  <input type="checkbox" bind:checked={$ghsteps.deploy}>
  Build & Deploy
</label>

<div class="btn" on:click={clearall}>clear all</div>

<style> 
  .btn {
    margin: 1rem 1.5rem;
    cursor: pointer;
     font-style: italic;
     font-size: var(--h7);
     color: #777;

     &:hover:not(:active) {
      opacity: 0.5;
     }
  }
  label { 
    display: flex; 
    align-items: center;
    gap: 0 1.5ch;
    margin: 0.5rem 0; 
    cursor: pointer;
  }
  input { 
    accent-color: 708090; 
    border: 1px solid #CFCFD3;
  }

  kbd { color: #777; }
</style>








