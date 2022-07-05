## Variables

``` css
/* @import '$lib/styles/variables.css'; */

/* #region Variables */
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap'); */

:root {
  --font-size: 15px;
  --line-height: 1.5;
  
  --font-color: #2C3E50;
  --font-light: rgba(44,62,80, 0.7);

  --heading-color: var(--font-color);

  --link-color: var(--font-color);
  /* --link-color: #0066cc; */
  --link-dark: #0053a6;
  --link-hover: #B8A08C;
  --link-active: #0066cc80;
  
  --surface-0: #ffffff;
  --surface-1: #f8f9fa;
  --surface-2: #e9ecef;
  --surface-3: #dee2e6;
  --surface-4: #ced4da;
  
  --background-color: var(--surface-0);
  --background-dark: #24292f;  
  
  /* --sans-serif: 'Poppins', sans-serif; */
  --sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  --serif: ui-serif,serif;
  --monospace: monospace, monospace;
  
  --button-background: #f6f8fa;
  --button-background-hover: #ced9e4;
  /* --button-bg-active: #f6f8fa; */  
  
  --accent-color: #8EA1B6;

  --border-width: 1px;
  --border-style: solid;
  --border-color: #dce0e5;
  /* --border-color: rgba(27, 31, 36, 0.2);   */
  --border-radius: 0.25rem;
  --border: var(--border-width)
            var(--border-style)
            var(--border-color);
  
  --h1: 2rem;
  --h2: 1.75rem;
  --h3: 1.5rem;
  --h4: 1.25rem;
  --h5: 1.125rem;
  --h6: 1rem;
  --h7: 0.875rem;
  --h8: 0.75rem;

  font-size: var(--font-size);
}

@media (min-width: 480px) {
  :root {
    --font-size: 16px;
  }
}
@media (min-width: 1200px) {
  :root {
    --font-size: 17px;
  } 
}
/* #endregion Variables */
```