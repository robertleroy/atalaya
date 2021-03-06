<!-- @import '$lib/styles/base.css -->

## Base

``` css
/* @import '$lib/styles/base.css'; */

/* #region Document */
:where(*, *::before, *::after) { box-sizing: border-box; }
:where(*:not(ul ul, ol ol)) { margin: 0; padding: 0; }

:where(html, body, #app) { height: 100%; }
:where(html) {
  
  /* font-size: var(--font-size); set in variables */
  overflow-wrap: break-word;
  -webkit-tap-highlight-color: transparent;
  /* -webkit-text-size-adjust: 100%; */
  /* text-size-adjust: 100%; */
  accent-color: var(--accent-color);
}

:where(body) {
  font-family: var(--sans-serif);
  font-size: var(--h6);
  line-height: var(--line-height);

  color: var(--font-color);
  background-color: var(--background-color);
  background-repeat: no-repeat;
}
/* #endregion Document */


/* #region Headings */
:where(h1, h2, h3, h4, h5, h6) {
  margin: 0;
  font-weight: 600;
}

:where(h1, .h1) { font-size: var(--h1); }
:where(h2, .h2) { font-size: var(--h2); }
:where(h3, .h3) { font-size: var(--h3); }
:where(h4, .h4) { font-size: var(--h4); }
:where(h5, .h5) { font-size: var(--h5); }
:where(h6, .h6) { font-size: var(--h6); }
:where(.h7) { font-size: var(--h7); }
:where(.h8) { font-size: var(--h8); }

:where(hr) {
  height: 0; 
  overflow: hidden;
  margin: 1.5rem auto;
  background: transparent;
  
  border-width: 0.1px;
  border-color: inherit;
  border-style: none;
  border-bottom-style: solid;
  opacity: 0.3;
}
/* #endregion Headings */


/* #region Text Formatting */
:where(p) {
  margin: 0.125rem 0 1rem;
}

:where(b, strong) {
  font-weight: 600;
}

:where(code, kbd, samp) {
  font-family: var(--monospace); 
  font-size: 0.95em; 
}

:where(pre) {
  margin: 0.25rem 0 1rem;
  font-size: 1em; 
  font-family: var(--sans-serif); 

  white-space: pre-wrap;
  white-space: -pre-wrap;      
  white-space: -o-pre-wrap;
  word-wrap: break-word;

  overflow-y: auto; 
  -moz-tab-size: 2;
  tab-size: 2;
}

:where(small) {
  font-size: var(--h8); 
}

:where(abbr[title]) {
  text-decoration: underline;
  text-decoration: underline dotted;
}

:where(blockquote) {
  --quote-color: currentColor;
  --quote-border-color: #00000040;
  margin: 1rem 0;
  position: relative;
  font-style: italic;
  padding: 0rem 2rem  0rem 2rem;
  max-width: 500px;
  color: var(--quote-color);
  word-wrap: break-word;
  quotes: "???" "???" "???" "???";  
  /* border-left: 1rem solid var(--quote-border-color); */
}

:where(blockquote cite) {
  display: block;
  margin-top: 0.5rem;
  text-align: right;
}
/* #endregion Text Formatting */


/* #region Interactive */
:where(dialog) {
  position: absolute;
  left: 0;
  right: 0;

  width: fit-content;
  margin: auto;
  padding: 1em;
  
  background-color: #ffffff;
  color: var(--font-color);
  border: solid;
  height: fit-content;
}

:where(dialog:not([open])) {
  display: none;
}

:where(details > summary:first-of-type) {
  display: list-item;
}
/* #endregion Interactive */


/* #region Embedded */
:where(audio, canvas, iframe, img, svg, video) {
  vertical-align: middle;
  max-width: 100%;
}

:where(iframe) {
  border-style: none;
}

:where(svg:not([fill])) {
  fill: currentColor;
}
/* #endregion Embedded */


/* #region a11y */
:where([aria-busy="true" i]) {
  cursor: progress;
}

:where([aria-disabled="true" i], [disabled]) {
  cursor: not-allowed;
}

:where([aria-hidden="false" i][hidden]) {
  display: initial;
}

:where([aria-hidden="false" i][hidden]:not(:focus)) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}
/* #endregion a11y */
```