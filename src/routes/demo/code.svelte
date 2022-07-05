<script>
  let sample = `{
  "name": "svelte-styles",
  "version": "0.0.1"
}`;
</script>

<div class="grid">
  <div class="block">
    <code class="small">/* pre */</code>
    <pre>{sample}</pre>
  </div>
  
  <div class="block">
    <code class="small">/* code */</code>
    <br>
    <code>{sample}</code>
  </div>
  
  <div class="block">
    <code class="small">/* pre code */</code>
    <pre><code>{sample}</code></pre>
  </div>
  
  <div class="block">
    <code class="small">/* pre.codeblock code */</code>
    <pre class='codeblock'><code>{sample}</code></pre>
  </div>
</div>

<style>
  .grid {
    --gap: 2rem;
    display: grid;
    grid-template-columns: max-content;
    gap: var(--gap);
  }

  code.small {
    font-size: 0.8em;
  }
  
  .block:not(:last-child) {
    padding-bottom: var(--gap);
    border-bottom: var(--border);
  }
</style>