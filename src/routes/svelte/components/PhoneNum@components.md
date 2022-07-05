<script>
  import PhoneNum from '$lib/components/phoneNum.svelte';
  let phoneNum;
</script>

### PhoneNum

<br>  

Demo: &nbsp;&nbsp;&nbsp;&nbsp; <PhoneNum bind:phoneNum={phoneNum}/>

<br> 

#### Import imask
``` bash
 npm install --save svelte-imask
```

``` html
<script>
  import { imask } from 'svelte-imask';
  
  export let phoneNum;
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
    // min: -10000,
    // max: 10000
  };
</script>

<input type="tel" placeholder={telMask.mask}
  use:imask={telMask}
  bind:value={phoneNum}  required>

<!-- 
<script>
  import PhoneNum from '$lib/components/phoneNum.svelte';
  let phoneNum;
</script>

<PhoneNum bind:phoneNum={phoneNum}/>
-->
```