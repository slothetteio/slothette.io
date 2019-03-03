export default function() {
  import(/* webpackChunkName: "asd" */ './a.js').then((r) => {
    r.default();
    console.log('LOADED', r);
  });
}
