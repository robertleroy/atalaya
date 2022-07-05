

function titlecase(value) {
  if (!value) return '';
  value = value.toString().toLowerCase()  ;
  return value.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}

function sentencecase(value) {
  if (!value) return ''
  value = value.toString()  ;
    return value.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,function(c){return c.toUpperCase()});
}

function str2arr(str) {
  let arr = str.slice(1).split('/');
    arr.forEach((el,i) => {
    arr[i] = el.charAt(0).toUpperCase() + el.slice(1);
  });
  return arr.join(" | ") || "Atalaya";
} /* $: currentRouteName = str2arr($page.url.pathname); */

function replaceSlashes(str) {
  let stripped = str.slice(1).replace(/\//g, " | ") || "Atalaya"
  return titlecase(stripped);
}

export {titlecase, sentencecase, str2arr}