## Shadows

``` css
/* @import '$lib/styles/shadows.css';  */

/* #region shadows */
:where(html) {
  --umbra-shadow: 0.20 ;
  --penumbra-shadow: 0.14 ;
  --ambient-shadow: 0.12 ;

  --shadow-1: 
    0 3px 1px -2px rgba(0, 0, 0, var(--umbra-shadow)), 
    0 2px 2px 0 rgba(0, 0, 0, var(--penumbra-shadow)), 
    0 1px 5px 0 rgba(0, 0, 0, var(--ambient-shadow));

  --shadow-2: 
    0 2px 4px -1px rgba(0, 0, 0, var(--umbra-shadow)),
    0  4px  5px  0 rgba(0, 0, 0, var(--penumbra-shadow)),
    0  1px 10px  0 rgba(0, 0, 0, var(--ambient-shadow));

  --shadow-3: 
    0 3px 5px -1px rgba(0, 0, 0, var(--umbra-shadow)),
    0  6px 10px  0 rgba(0, 0, 0, var(--penumbra-shadow)),
    0  1px 18px  0 rgba(0, 0, 0, var(--ambient-shadow));

  --shadow-4: 
    0 5px 5px -3px rgba(0, 0, 0, var(--umbra-shadow)),
    0 8px 10px 1px rgba(0, 0, 0, var(--penumbra-shadow)),
    0 3px 14px 2px rgba(0, 0, 0, var(--ambient-shadow));

  --shadow-5: 
    0 8px 10px -5px rgba(0, 0, 0, var(--umbra-shadow)),
    0 16px 24px 2px rgba(0, 0, 0, var(--penumbra-shadow)),
    0  6px 30px 5px rgba(0, 0, 0, var(--ambient-shadow));

  --shadow-6: 
    0 24px 38px  3px rgba(0, 0, 0, var(--umbra-shadow)),
    0  9px 46px  8px rgba(0, 0, 0, var(--penumbra-shadow)),
    0 11px 15px -7px rgba(0, 0, 0, var(--ambient-shadow));
}
/* #endregion shadows */
```