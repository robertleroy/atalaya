## Stores


``` html
<!-- component.svelte -->
<script>
  import { store } from './store';
</script>
```
<br>

#### Basic Store
``` js
/* store.js */
import { writable } from 'svelte/store';

export const store = writable();
```
<br>

#### Custom Store
``` js
/* store.js */
import { writable } from 'svelte/store';

function customStore() {
	const { subscribe, set, update } = writable({ name: 'One', id: 1 });

	return {
		subscribe,
		updateStore: (obj) => update(val => val = 
      {name: obj.name ?? 'Name', id: obj.id ?? 0}),
		reset: () => set({ name: 'One', id: 1 })
	};
}

export const store = customStore();
```
<br>