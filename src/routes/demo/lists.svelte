
<script>
  import { userData } from '$lib/stores/store.js';
  
  let fourCorners = $userData.fourCorners;
  let isOpen = false;
</script>

<h6>
  Unordered list:
</h6>
<ul>
  {#each new Array(2) as item, i}
    <li>Item {i+1}
      <ul>
        {#each new Array(2) as subitem, i}
        <li>Subitem {i+1}</li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>

<hr>

<h6>
  Unordered nav list:
</h6>
<nav>
  <ul>
    {#each new Array(2) as item, i}
      <li>Item {i+1}
        <ul>
          {#each new Array(2) as subitem, i}
          <li>Subitem {i+1}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</nav>

<hr>

<h6>
  Ordered list:
</h6>
<ol>
  {#each new Array(2) as item, i}
    <li>Item {i+1}
      <ol>
        {#each new Array(2) as subitem, j}
        <li>Subitem {i+1}.{j+1}</li>
        {/each}
      </ol>
    </li>
    {/each}
</ol>

<hr>

<ol>
  {#each new Array(3) as parent, i}
  <li>parent {i}
    <ol>
      {#each new Array(2) as child, i}
      <li>child {i}
        <ol>
          {#each new Array(2) as grandchild, i}
          <li>grandchild {i}</li>
          {/each}
        </ol>
      </li>
      {/each}
    </ol>
  </li>
  {/each}
</ol>

<hr>

<h6>
  Description list:
</h6>

<dl>
  {#each fourCorners as x}
    <dt>{x.key}</dt>
    <dd>{x.value}</dd>
  {/each}
</dl>

<hr>

<h6>
  Details / Summary Elements:
</h6>
<details bind:open={isOpen}>
	<summary>Details</summary>
	<p>
		Something small enough to escape casual notice.
	</p>
</details>

{#each fourCorners as x}
<details >
  <summary>{x.key}</summary>
  <p>{x.value}</p>
</details>
{/each}


<style>
  
</style>