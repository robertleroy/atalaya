## Tables

``` css
/* @import '$lib/styles/tables'; */

/* #region tables */
:where(table) {
  border-collapse: collapse;
  border-color: currentColor;
  text-indent: 0;
}
:where(th) {
  color: inherit;
	font-weight: bolder;
}
:where(td) {
  padding: 0 1ch;
  
}
/* #endregion tables */
```