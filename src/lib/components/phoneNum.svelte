<script>
  import { imask } from 'svelte-imask';
  
  export let phoneNum = undefined;
  const telMask = {
    mask: '(000) 000-0000'
  };
</script>

<input type="tel" placeholder={telMask.mask}
  use:imask={telMask}
  bind:value={phoneNum} required>
