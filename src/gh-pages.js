/* ./gh-pages.js */
import { publish } from 'gh-pages';

publish(
 'build',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/robertleroy/atalaya',
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);