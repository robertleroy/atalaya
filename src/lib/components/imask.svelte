<script>
  import { imask } from 'svelte-imask';
  
  let phoneNum = undefined;
  const telMask = {
    mask: '(000) 000-0000'
  };
  const numMask = {
    mask: Number,
    scale: 2,  // digits after point, 0 for integers
    signed: false,  // disallow negative
    thousandsSeparator: ',',  // any single char
    padFractionalZeros: false,  // if true, then pads zeros at 
                                // end to the length of scale
    normalizeZeros: true,  // appends or removes zeros at ends
    radix: '.',  // fractional delimiter
    mapToRadix: ['.'],  // symbols to process as radix

    // additional number interval options (e.g.)
    // min: -10000,
    // max: 10000
  };
</script>

<div class="label">Enter Phone Number</div>
<input type="tel" placeholder={telMask.mask}
  use:imask={telMask}
  bind:value={phoneNum}  required>

<kbd>{phoneNum}</kbd>


<style>
  kbd {
    margin-left: 1rem;
  }
</style>