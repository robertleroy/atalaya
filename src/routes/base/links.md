## Links

``` css
/* @import '$lib/styles/links.css';  */

/* #region Links */
:where( a ) {
  color: var(--link-color);
}
:where( a:not(:hover) ) {
  text-decoration: none;
}
:where( a:hover ) {
  /* color: var(--link-hover); */
}
:where( a:active ) {
  color: var(--accent-color);
  text-decoration: none;
}
/* #endregion Links */
```