// renders each url and puts the result to the dist/html folder

let fs = require('fs');
let path = require('path');
let ncp = require('ncp').ncp;
let mkdirp = require('mkdirp');
let rimraf = require('rimraf');

let urls = [
  '/',
  '/tools',
  '/tools/uri-component-encode-decode',
  '/tools/hex-editor',
  '/tables',
  '/tables/x-base',
  '/about',
  '/404',
];

function env(name, defValue) {
  let v = process.env[name];
  if (v !== undefined) {
    if (v === 'true') {
      return true;
    }
    if (v === 'false') {
      return false;
    }
    return v;
  }
  return defValue;
}

let buildDirSuffixServer = env('BUILD_DIR_SUFFIX_SERVER', '');
let buildDirSuffixClient = env('BUILD_DIR_SUFFIX_CLIENT', '');
let buildDirSuffixHtml = env('BUILD_DIR_SUFFIX_HTML', '');

let render = require(`../dist/server${buildDirSuffixServer}/rootEntry.bundle.js`);

let html = fs.readFileSync(`dist/client${buildDirSuffixClient}/index.html`, 'utf8');


// cleanup
rimraf.sync('dist/html');


function url2dir(url) {
  if (url === '/') {
    return '/'
  }
  return path.dirname(url);
}

function url2fname(url) {
  if (url === '/') {
    return 'index';
  }
  return path.parse(url).base;
}

function exportUrl(url) {
  let dir = `dist/html${buildDirSuffixHtml}${url2dir(url)}`;
  let fname = url2fname(url);

  let contents = html.replace('<!--APP_HERE-->', render.render(url));

  mkdirp.sync(dir);
  console.log('writing', `${dir}/${fname}.html`);
  fs.writeFileSync(`${dir}/${fname}.html`, contents);
}

urls.forEach((url) => {
  exportUrl(url);
});

// copy the assets from the client build
ncp(
  `dist/client${buildDirSuffixClient}/assets`,
  `dist/html${buildDirSuffixClient}/assets`,
);
