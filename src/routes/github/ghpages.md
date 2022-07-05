### [GH-Pages](https://github.com/tschaub/gh-pages#gh-pages)

#### Install GH-Pages

``` bash 
npm install gh-pages --save-dev
```

#### Add gh-pages.js to root folder

``` js
/* ./gh-pages.js */
import { publish } from 'gh-pages';

publish(
 'build',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/robertleroy/REPO_NAME',
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
```

#### Inintialize git
``` bash
# push to main branch
git init
git add .
git commit -m 'initial'
git branch -M main
git remote add origin https://github.com/robertleroy/REPO_NAME.git
git push -u origin main

# build & deploy to gh-pages branch
npm run build
npm run deploy
```