<script>
  import { userData } from '$lib/stores/store';
  import { imask } from 'svelte-imask';

  const telMask = {
		mask: '(000) 000-0000'
  };
  const numMask = {
		mask: Number,
    scale: 2,  // digits after point, 0 for integers
    signed: false,  // disallow negative
    thousandsSeparator: ',',  // any single char
    padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
    normalizeZeros: true,  // appends or removes zeros at ends
    radix: '.',  // fractional delimiter
    mapToRadix: ['.'],  // symbols to process as radix

    // additional number interval options (e.g.)
    // min: -10000,
    // max: 10000
  };

  /* imask functions
  function accept({ detail: imask }) {
    console.log('accepted', imask);
  }
  function complete({ detail: imask }) {
    console.log('completed', imask);
  }
  */

  let valid = true;
  
  let displayText = "";
  let displaySearch = "";
  let displayEmail = "";
  let displayTel = "";
  let displayUrl = "";
  let displayPassword = "";
  let displayDate = "";
  let displayTime = "";
  let displayDatetime = "";
  let displayNumber;

  let selectedStooge = $userData.stooges[2];  
  $: likedStooges = $userData.stooges.filter((item) => {
    return item.checked;
  })

  function isFormValid(data) {
    if(!isRequiredFieldValid(data.firstName)) return false;
    if(!isRequiredFieldValid(data.lastName)) return false;
    return true
  }

  function isRequiredFieldValid(value) {
    return value != null && value.trim() !== "";
  }

  function onSubmit(e) {
		const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    if(isFormValid(data)){
      valid = true;
      console.log(data)
    } else {
      valid = false;
      console.log("Invalid Form")
    }
	}
</script>

<a href="#nums">nums</a>
<form on:submit|preventDefault={onSubmit}>
  <fieldset>
    <legend>Personal Data for {$userData.name.first} {$userData.name.last}</legend>

    <div class="formGrid">
      <label for="firstName" required>First Name</label>
      <input type="text" id="firstName" name="firstName"
            bind:value={$userData.name.first}>

      <label for="lastName" required>Last Name</label>
      <input type="text" id="lastName" name="lastName"
            bind:value={$userData.name.last}>

      <label for="email">Email</label>
      <input type="email" id="email" name="email"
            bind:value={$userData.email}>

      <label for="birthday">Birthday:</label>
      <input type="date" id="birthday" name="birthday"
            bind:value={$userData.birthday}>

      <input type="submit" value="Submit"> 

      {#if !valid}
      <div class="error">INVALID</div>
      {/if}
    </div> <!-- formGrid -->
  </fieldset>
</form> 

<section class="textualInput">
  <div class="label"  id="nums">text</div>
  <input type="text" placeholder="text" 
    bind:value={displayText}>
  <span>{displayText}</span>
  
  <div class="label">search</div>
  <input type="search" placeholder="search" 
    bind:value={displaySearch}>
  <span>{displaySearch}</span>
  
  <div class="label">email</div>
  <input type="email" placeholder="email"
    bind:value={displayEmail}>
  <span>{displayEmail}</span>
  
  <div class="label">tel</div>
  <input type="tel" placeholder="tel"
    bind:value={displayTel} 
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
  <span>{displayTel}</span>
  
  <div class="label">tel (imask)</div>
  <input type="tel" placeholder="tel (imask)"
    use:imask={telMask}
    bind:value={displayTel}  required>
  <span>{displayTel}</span>

  <div class="label">url</div>
  <input type="url" placeholder="url" 
    bind:value={displayUrl}>
  <span>{displayUrl}</span>
  
  <div class="label">password</div>
  <input type="password" placeholder="password" 
    bind:value={displayPassword}>
  <span>{displayPassword}</span>
  
  <div class="label">date</div>
  <input type="date" placeholder="date" 
    bind:value={displayDate}>
  <span>{displayDate}</span>
  
  <div class="label">time</div>
  <input type="time" placeholder="time" 
    bind:value={displayTime}>
  <span>{displayTime}</span>
  
  <div class="label">datetime-local</div>
  <input type="datetime-local" placeholder="datetime-local" 
    bind:value={displayDatetime}>
  <span>{displayDatetime}</span>

  <div class="label">number</div>
  <input type="number" placeholder="number"
    bind:value={displayNumber} >
  <span>
    {#if displayNumber !== undefined}  
    {displayNumber}
    {/if}
  </span>

  <div class="label">number (imask)</div>
  <input type="text" placeholder="number (imask)"
    use:imask={numMask}
    bind:value={displayNumber}>
    <span>
      {#if displayNumber !== undefined}  
      {displayNumber}
      {/if}
    </span>
</section> <!-- textualInput -->

<hr>   

<section class="buttons">
  <button>button</button>
  <input type="button" value="input btn">
  <input type="submit" value="submit">
  <input type="reset" value="reset">
  <input type="color" value="#008800">  
</section> <!-- buttons -->

<hr>   

<section class="checkables">
  <em>Which Stooges do you like?</em> 

  <span class="favStooge">
    {#each likedStooges as stooge}
      <span class="likedStooge">
        {stooge.name}
      </span>
    {/each}
  </span>

  <div class="checklist">
    {#each $userData.stooges as stooge}
      <label for={stooge.name}>
        <input type="checkbox" id={stooge.name} bind:checked={stooge.checked}>
        <span>{stooge.name}: </span>
        <span>{stooge.checked}</span>
      </label>
    {/each}
  </div>
  
  <em>Who is your favorite Stooge?</em> 
  <span class="favStooge">{selectedStooge.name}</span>

  <div class="radioList">
    {#each $userData.stooges as stooge}

    <label class="label" >
      <input type="radio" value={stooge} bind:group={selectedStooge}>{stooge.name}
    </label>
    {/each}
  </div>
</section> <!-- checkables -->

<hr>   

<section class="progress">
  <div class="div">
    <input type="number" min="0" max="100" bind:value={$userData.percent}>
    <br>
    <input type="range" min="0" max="100" bind:value={$userData.percent}>
    <br>
    <progress id="file" value={$userData.percent} max="100" /> 
  </div>
  <div class="div">
    <div class="emojies">
      {#each new Array($userData.percent) as count, i}
      <span style="filter: grayscale({100-$userData.percent}%)">{i > 80 ? '🌕' : i > 60 ? '🌔' : i > 40 ? '🌓' : i > 20 ? '🌒' : '🌑'}</span>
      {/each}
    </div>
  </div>
</section> <!-- progress -->

<hr>

<style lang="postcss">
  .formGrid {
    display: grid;
    grid-template-columns: 6rem 12rem;
    gap: 0.5rem 1rem;
  }

  legend { padding-right: 1rem; }
  .error { color: firebrick; }

  .textualInput {
    padding: 2rem 1rem 0;
    display: grid;
    grid-template-columns: 6rem 15rem 1fr;
    gap: 0.5rem 1rem;
    align-items: center;
  }

  .favStooge {
    margin-left: 1rem;

    .likedStooge { position: relative; }
    .likedStooge:not(:last-child):after {
      position: relative;
      right: 4px;
      content: ", ";
    }
  }

  .checklist {
    margin-bottom: 1rem;
    label {
      display: grid;
      grid-template-columns: 1.3rem 4rem 4rem;
    }

    [type="checkbox"] {
      justify-self: start;
      align-self: center;
    }
  }
  
  .radioList {
    display: flex;
    [type="radio"] {
      margin-right: 1ch;
    }
    label { margin-right: 1rem; }
  }
  
  .progress {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem 2rem;

    max-width: 768px;
    /* border: var(--border); */

    .emojies {
      display: flex;
      flex-wrap: wrap;
    }
    [type='number'] {
      width: 8rem;
      margin-bottom: 0.7rem;
    }
  }

  #nums {
    margin-top: -5rem;
    padding-top: 5rem;
  }
</style>
