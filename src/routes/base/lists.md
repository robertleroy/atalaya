## Lists

``` css
/* @import '$lib/styles/lists.css';  */

/* #region Lists */
.unlist, .unlist ol, .unlist ul,
nav ol, nav ul {
  list-style-type: none;
  padding: 0;
}
/* .unlist ol ol, .unlist ul ul,
nav ol ol, nav ul ul {
  padding: 0 0 1ch 0;
} */

:where(ol, ul) {
list-style-position: inside;
/* list-style-type: none; */
}
ul ul, ol ol, ul ol, ol ul {
  padding: 0 0 1ch 2ch;
}
:where(ol, ul) {
  /* list-style-type: none; */
  /* padding: 0 1ch; */
}
ol ol {
  list-style-type: lower-latin;
  padding-bottom: 1ch;
}
ol ol ol {
  list-style-type: lower-roman;
}
:where(dt, summary) {
  /* color: var(--text-1); */
	font-weight: var(--font-weight-6)
}

:where(summary) {
	/* background: var(--bg-3); */
	border-radius: var(--radius);
	margin: calc(0.5rem*-1) calc(1rem*-1);
	padding: 0.5rem 1rem;
}

:where(details) {
  display: block;
	/* background: var(--bg-2); */
	/* border-radius: 0.3rem; */
}
:where(summary) {
  display: list-item;
}
:where(details[open]>summary) {
	margin-bottom: 0.5rem;
}
/* #endregion Lists */
```