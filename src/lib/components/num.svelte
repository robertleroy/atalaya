<script> /* https://svelte.dev/repl/70ff4046c8ac423ea0ecbea3588111c3?version=3.38.3 */
  export let value = 0;
  let previousN = value;
	export let min;
	export let max;
	export let step = 1;
	export let style = "text-align:center;";

  function validator(node, val) {
    return {
      update(val) {
				value = val === null || n < node.min ? previousN : parseFloat(val)
        previousN = value
      }
    }
  }
</script>

		
<input type='number' {min} {max} {step} {style}
  use:validator={value} bind:value={value}>

<kbd>{value}</kbd>




<style>
  input {
    outline: none;
  }
</style>