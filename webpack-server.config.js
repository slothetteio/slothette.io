const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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

// flags
let useMinification = env('USE_MINIFICATION', false);
let logPerformance = env('LOG_PERFORMANCE', true);
let buildDirSuffix = env('BUILD_DIR_SUFFIX', '');


// project path
let ROOT = __dirname;
// build destination directory name
let distFolderName = 'dist/server' + buildDirSuffix;
// build destination path
let distRoot = path.join(ROOT, distFolderName);


let plugins = [
  new CleanWebpackPlugin(distFolderName + '/**'),
  new webpack.DefinePlugin({
    LOG_PERF: JSON.stringify(logPerformance),
    IS_SERVER: JSON.stringify(true),
    IS_CLIENT: JSON.stringify(false),
  }),
];

module.exports = {
  mode: useMinification ? 'production' : 'development',
  target: 'node',
  entry: {rootEntry: './src/server.jsx'},
  output: {
    filename: `[name].bundle.js`,
    chunkFilename: `[name].chunk.js`,
    path: distRoot,
    libraryTarget: 'commonjs2',
  },

  plugins,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            name: `[name]--worker.js`,
            inline: false,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:5]',
              exportOnlyLocals: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-nested')(),
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: false,
              localIdentName: '[local]-[hash:base64:5]',
              exportOnlyLocals: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  }
};
