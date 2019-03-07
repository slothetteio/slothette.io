# Slothette.io website

## build flags (client)

- `USE_MINIFICATION`
- `USE_HASHES` - only for full template
- `USE_FULL_TEMPLATE`
- `LOG_PERFORMANCE` - passed to the app's runtime
- `EXTRACT_CSS` - only for full template
- `BUILD_DIR_SUFFIX`

## build commands

### build and serve client with dev-server

```bash
npx webpack-dev-server
```

### build client to disk
```bash
npx webpack --config webpack.config.js #--watch
```

### build server to disc, then run the server
```bash
npx webpack --config webpack-server.config.js
```

### run server
```bash
node src/run.js
```

## build scenarios

- develop the application, build and watch the client, server with webpack dev server

```bash
npx webpack-dev-server
```

- Deliver the application

```bash
USE_FULL_TEMPLATE=true USE_HASHES=true \
USE_MINIFICATION=true EXTRACT_CSS=true \
npx webpack --config webpack.config.js \
&& USE_MINIFICATION=true npx webpack --config webpack-server.config.js \
&& node build/export-html.js
```

