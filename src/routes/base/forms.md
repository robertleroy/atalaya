## Forms

``` css
/* @import '$lib/styles/forms.css';  */

/* #region Form Elements */
:where( button, select, [type="button"], 
[type="reset"], [type="submit"]) {
  background-color: var(--button-background);
  border-radius: var(--border-radius);
  border-width: var(--border-width);
  border-color: var(--border-color);
  border-style: solid;
  padding: 0.40575rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
}

:where( [type='color'] ) {
  block-size: 2.3125rem;  
  padding: 0.3rem;
  background-color: var(--button-background);
  border-radius: var(--border-radius);
  border-width: var(--border-width);
  border-color: var(--border-color);
  border-style: solid;
  cursor: pointer;
  vertical-align: top;
}

:where( button:hover:not(:active), select:hover:not(:active),
[type="button"]:hover:not(:active), [type="reset"]:hover:not(:active), 
[type="submit"]:hover:not(:active), [type='color']:hover:not(:active)) {
  /* background-color: var(--button-background-hover); */
  filter: brightness(95%);
}

:where( textarea, [type="text"],
[type="search"], [type="tel"],
[type="email"], [type="password"],
[type="url"], [type="number"],
[type="date"], [type="time"],
[type="datetime-local"]) {
  border-radius: var(--border-radius);
  border-width: var(--border-width);
  border-color: var(--border-color);
  border-style: solid;
  padding: 0.40575rem 0.75rem;
  font-size: 0.875rem;
  
  outline: none;
}



:where([type="checkbox"], [type="radio"], label[for]) {
  cursor: pointer;
}

:where(button, input, optgroup,
select,textarea) {
  margin: 0;
  font-family: inherit;
}

:where(textarea) {
  margin: 0;
  resize: vertical; 
  -moz-tab-size: 2;
  tab-size: 2;
  max-width: 100%;
}

:where(button, select) {
  text-transform: none;
}

:where(button, [type="button"], [type="reset"], [type="submit"], [type="color"]) {
  -webkit-appearance: button;
}

:where(button::-moz-focus-inner),
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  [type="color"]::-moz-focus-inner {
  border-style: none;
  /* padding: 0; */
}

:where(button:-moz-focusring),
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring,
  [type="color"]:-moz-focusring {
  outline: none;
}

:where([type="search" i]) {
  -webkit-appearance: textfield; 
}

:where([type="search"]::-webkit-search-decoration) {
  -webkit-appearance: none;
}

:where(progress) {
  vertical-align: baseline;
}

:where(fieldset) {
  padding: 0.375em 0.75em 0.625em;
  border: 1px solid #a0a0a0;
  border-radius: var(--border-radius);
}

:where(:-moz-ui-invalid) {
  box-shadow: none;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
}
/* #endregion Form Elements */
```