let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');


let MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
let useHashes = env('USE_HASHES', false);
let useFullTemplate = env('USE_FULL_TEMPLATE', false);
let extractCss = env('EXTRACT_CSS', false);
let logPerformance = env('LOG_PERFORMANCE', true);
let buildDirSuffix = env('BUILD_DIR_SUFFIX', '');


// project path
let ROOT = __dirname;
// build destination directory name
let distFolderName = 'dist/client' + buildDirSuffix;
// build destination path
let distRoot = path.join(ROOT, distFolderName);


let plugins = [
  new CleanWebpackPlugin(distFolderName + '/**'),
  new webpack.DefinePlugin({
    LOG_PERF: JSON.stringify(logPerformance),
    IS_SERVER: JSON.stringify(false),
    IS_CLIENT: JSON.stringify(true),
  }),
];

if (useFullTemplate) {
  plugins.push(
    new FaviconsWebpackPlugin({
      logo: './src/favicon/noun_Sloth_214186_cropped.png',
      prefix: 'assets/icons-[hash]/',
    }),
    new HtmlWebpackPlugin({
      title: 'Slothette.io',
      inject: false,
      template: 'src/index.ejs',
      hash: true,
      appMountId: 'app',
      appMountHtmlSnippet: '<!--APP_HERE-->',
      baseHref: '/',
      filename: 'index.html',
    }),
  );
} else {
  plugins.push(
    new CopyWebpackPlugin([{
      from: 'src/index.html',
      to: 'index.html',
    }]),
  );
}

if (extractCss) {
  plugins.push(new MiniCssExtractPlugin({
    filename: `assets/[name]${useHashes?'-[contenthash]':''}.bundle.css`,
    chunkFilename: `assets/[id]${useHashes?'-[contenthash]':''}.chunk.css`,
  }));
}

let cssLoaders = extractCss ?
  [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {},
    },
    {
      loader: "css-loader",
      options: {
        modules: true,
        localIdentName: '[local]-[hash:base64:5]',
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: [
          require('postcss-modules-values')(),
          require('postcss-nested')(),
        ],
      },
    },
  ] : // ELSE
  [
    { loader: "style-loader" },
    {
      loader: "css-loader",
      options: {
        modules: true,
        localIdentName: '[local]-[hash:base64:5]',
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: [
          require('postcss-modules-values')(),
          require('postcss-nested')(),

        ],
      },
    },
  ];
let sassLoaders = extractCss ?
  [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {},
    },
    {
      loader: "css-loader",
      options: {
        modules: false,
        localIdentName: '[local]-[hash:base64:5]',
      },
    },
    {
      loader: 'sass-loader',
    },
  ] : // ELSE
  [
    { loader: "style-loader" },
    {
      loader: "css-loader",
      options: {
        modules: false,
        localIdentName: '[local]-[hash:base64:5]',
      },
    },
    {
      loader: 'sass-loader',
    },
  ];


module.exports = {
  mode: useMinification ? 'production' : 'development',
  entry: {rootEntry: './src/client.jsx'},
  output: {
    filename: `assets/[name]${useHashes?'-[contenthash]':''}.bundle.js`,
    chunkFilename: `assets/[name]${useHashes?'-[contenthash]':''}.chunk.js`,
    path: distRoot,
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
            name: `assets/[name]${useHashes?'-[hash]':''}--worker.js`,
            inline: false,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: cssLoaders,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: sassLoaders,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  devServer: {
    contentBase: path.join(ROOT, distFolderName),
    compress: false,
    port: 9000,
    historyApiFallback: true,
  },
};
