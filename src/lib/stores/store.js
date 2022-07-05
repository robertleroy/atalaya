import { readable, writable } from 'svelte/store';

export const sidebarOpen = writable(false);



export const ghsteps = writable({
  repo: false,
  svelteProj: false,
  ghPages: false,
  adapter: false,
  links: false,
  nojekyll: false,
  deploy: false
});


// #region Routes
export const mainNav = readable({
  title: "Atalaya",
  url: '/',
  routes: [
    { name: "Svelte", url: "/svelte" }, 
    { name: "Github", url: "/github" }, 
    // { name: "PostCss", url: "/postCss" },
    { name: "Base", url: "/base" },
    // { name: "test", url: "/test" },
  ]
});

export const svelteNav = readable({
  title: "svelte",
  url: '/svelte',
  routes: [
    { name: "Stores", url: "/svelte/stores", routes: [] },
    { name: "Routing", url: "/svelte/routing", routes: [] },
    { name: "Components", url: "/svelte/components", routes: [
      { name: "BtnMenu", url: "/svelte/components/BtnMenu" },
      { name: "PhoneNum", url: "/svelte/components/PhoneNum" },
    ] },
    { name: "MDSVEX", url: "/svelte/mdsvex" ,
    routes: [
      { name: "Tabs", url: "/svelte/mdsvex/tabs" },
    ]},
  ]
});

export const componentsNav = readable({
  title: "components",
  url: '/svelte/components',
  routes: [
    { name: "Tabs", url: "/svelte/mdsvex/tabs" },
  ]
});

export const postCssNav = readable({
  title: "postCss",
  url: '/postCss',
  routes: [
    { name: "Imports", url: "/postCss/imports" },
  ]
});

export const baseNav = readable({
  title: "base",
  url: '/base',
  routes: [
    { name: "variables", url: "/base/variables" },
    { name: "shadows", url: "/base/shadows" },
    { name: "base", url: "/base/base" },
    { name: "lists", url: "/base/lists" },
    { name: "links", url: "/base/links" },
    { name: "forms", url: "/base/forms" },
    { name: "vs-dark", url: "/base/vs-dark" },
    { name: "codeblock", url: "/base/codeblock" },
    { name: "blockquote", url: "/base/blockquote" },
    { name: "tables", url: "/base/tables" },
  ]
});

export const demoNav = readable({
  title: "demo",
  url: '/demo',
  routes: [
    { name: "headings", url: "/demo/headings" },
    { name: "text", url: "/demo/text" },
    { name: "lists", url: "/demo/lists" },
    { name: "forms", url: "/demo/forms" },
    { name: "code", url: "/demo/code" },
    { name: "table", url: "/demo/table" },
  ]
});

export const githubNav = readable({
  title: "github",
  url: '/github',
  routes: [
    { name: "svelte add", url: "/github/svelteadd" },
    { name: "gh-pages", url: "/github/ghpages" },
    { name: "adapter-static", url: "/github/adapter" },
    { name: "relative links", url: "/github/links" },
    { name: "build & deploy", url: "/github/deploy" },
    { name: "", url: "/github/" },
  ]
});
// #endregion Routes




export const favs = readable([
  {
    topic: "Svelte",
    links: [
      {
        name: "Svelte",
        url: "https://svelte.dev/docs"
      },
      {
        name: "SvelteKit",
        url: "https://kit.svelte.dev/docs/"
      },
      {
        name: "Svelte-Add",
        url: "https://github.com/svelte-add/svelte-add"
      },
      {
        name: "",
        url: ""
      },
      {
        name: "",
        url: ""
      }
    ]
  },
  {
    topic: "Design",
    links: [
      {
        name: "Converting Colors",
        url: "https://convertingcolors.com/"
      },
      {
        name: "SVGOMG",
        url: "https://jakearchibald.github.io/svgomg/"
      },
      {
        name: "Code Spaces (vs-code)",
        url: "https://docs.github.com/en/codespaces?source=beta-welcome-email"
      },
      {
        name: "",
        url: ""
      },
      {
        name: "",
        url: ""
      }
    ]
  },
  {
    topic: "Style",
    links: [
      {
        name: "PostCSS",
        url: "https://postcss.org/"
      },
      {
        name: "Css Selectors",
        url: "https://www.w3schools.com/cssref/css_selectors.asp"
      }
    ]
  },
  {
    topic: "",
    links: [
      {
        name: "",
        url: ""
      },
      {
        name: "",
        url: ""
      }
    ]
  }
]);





const initialUserData = {
  name: {
    first: 'Horace', 
    last: 'Tabor'
  },
  userName: "robleroy",
  password: "1234",
  address: {
    street: "80401 E 7th Rd",
    city: "Leadville",
    state: "CO",
    zip: "80461"
  },
  phone: "3031234567",
  email: "horace@tabor.com",
  birthday: "1963-10-14",
  time: {
    min: "09:00", 
    max: "18:00",
    val: "10:13"
  },
  dateTime: {
    min: "2018-06-07T00:00", 
    max: "2018-06-14T00:00",
    val: "2018-06-12T19:30"
  },
  url: "github.com",
  fruit: "banana",
  checked: true,
  count: 7,
  percent: 33,
  
  stooges: [
    {name: "Larry", checked: false},
    {name: "Moe", checked: false},
    {name: "Curley", checked: true}
  ],

  fourCorners: [
    {
      key: "Term to be described",
      value: "Description of the term"
    },
    {
      key: "Coffee",
      value: "Black hot drink"
    },
    {
      key: "Milk",
      value: "White cold drink"
    },
  ]
  
}

export const userData = writable(initialUserData);