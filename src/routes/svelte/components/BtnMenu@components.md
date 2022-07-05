<script>
  import BtnMenu from '$lib/components/btnmenu.svelte';
  let truth = false;
</script>

### BtnMenu

<br>  

Demo: &nbsp;&nbsp;&nbsp;&nbsp; <BtnMenu toggle={truth} on:click='{() => truth = !truth}'/>

<br> 

``` html
<script>
  export let toggle = false;
	export let color = 'currentColor';
</script> 

<div class="container" style="--bar-color: {color}" on:click class:change={toggle}>
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
  
<style>
  .container {
    --bar-color: currentColor;
		position: relative;
    display: inline-block;
		width: 1.5em;
		height: 1.125em;
		transform: rotate(0deg);
    cursor: pointer;
  }

  .bar1, .bar2, .bar3 {
		position: absolute;
		left: 0;
		height: 0.225em;
		width: 100%;
		border-radius: 0.225em;
		background: var(--bar-color);
		opacity: 1;
		transform: rotate(0deg);
		transition: .25s ease-in-out;
  }

	.bar1 {
		top: 0;
		transform-origin: left center; 
  }

	.bar2 {
		top: 0.45em;
		transform-origin: center center; 
  }

	.bar3 {
		top: 0.9em;
		transform-origin: left center; 
  }

	.change .bar1 {
		top: -.075em;
		right: 0.2em;
		transform: rotate(45deg); 
  }

	.change .bar2 {
		width: 0%;
		opacity: 0; 
  }

	.change .bar3 {
		top: 0.975em;
		right: 0.2em;
		transform: rotate(-45deg); 
  }
</style>

<!-- 
<script>
  import BtnMenu from '$lib/components/btnmenu.svelte';
  let truth = false;
</script>

<BtnMenu toggle={truth} on:click={() => truth = !truth} />
-->
```