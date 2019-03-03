let fs = require('fs');
let express = require('express');

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

let render = require(`../dist/server${buildDirSuffixServer}/rootEntry.bundle.js`);

let html = fs.readFileSync(`dist/client${buildDirSuffixClient}/index.html`, 'utf8');

const app = express();

app.use(express.static(`dist/client${buildDirSuffixClient}/`, {index: false}));

app.get('*', (req, res) => {
  res.send(html.replace('<!--APP_HERE-->', render.render(req.url)));
});

app.listen(5000, () => {
  console.log('Running on http://localhost:5000/');
});
