## Blockquote

``` css
/* @import '$lib/styles/blockquote.css';  */

/* #region blockquote */
:where(blockquote) {
  --quote-color: #445577bb;
  --quote-border-color: #44557780;
  position: relative;
  font-style: italic;
  padding: 0.5rem 2.5rem  0.5rem 2.5rem;
  font-size: var(--h5);
  color: var(--quote-color);
  border-left: 1rem solid var(--quote-border-color) ;
  word-wrap: break-word;
  quotes: "“" "”" "‘" "’";  
}

:where(blockquote:before) {
  position: absolute;
  top: -0.5rem;
  left: 0.1rem;

  font-family: sans-serif;
  content: open-quote;
  font-size: 4rem;
  color: var(--quote-border-color);
}

:where(blockquote:after) {
  position: absolute;
  bottom: -2.5rem;
  right: 1rem;

  font-family: sans-serif;
  content: close-quote;
  content: close-quote;
  font-size: 4rem;
  color: var(--quote-border-color);
}
/* #endregion blockquote */
```