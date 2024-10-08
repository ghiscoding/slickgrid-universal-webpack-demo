const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { EsbuildPlugin } = require('esbuild-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { IgnorePlugin } = require('webpack');
const path = require('path');

// primary config:
const title = 'Slickgrid-Universal';
const baseUrl = '';
const outDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');

module.exports = ({ production } = {}) => ({
  mode: production ? 'production' : 'development',
  entry: `${srcDir}/main.ts`,
  stats: {
    warnings: false
  },
  target: production ? 'browserslist' : 'web',
  devServer: {
    static: {
      directory: outDir,
    },
    historyApiFallback: true,
    compress: true,
    liveReload: false,
    port: 3000,
    host: 'localhost',
    // open: true,
  },
  devtool: production ? false : 'source-map',
  output: {
    path: outDir,
    publicPath: baseUrl,
    filename: '[name].[contenthash].bundle.js',
    sourceMapFilename: '[name].[contenthash].bundle.js.map',
    chunkFilename: '[name].[contenthash].chunk.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [srcDir, 'node_modules'],
    mainFields: ['module', 'main'],
    fallback: {
      assert: false,
      buffer: false,
      crypto: false,
      fs: false,
      http: false,
      https: false,
      net: false,
      os: false,
      path: false,
      stream: false,
      tls: false,
      tty: false,
      url: false,
      util: false,
      vm: false,
      zlib: false,
    }
  },
  module: {
    rules: [
      { test: /\.css$/i, use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'] },
      {
        test: /\.(sass|scss)$/, use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: { quietDeps: true },
            },
          }
        ], issuer: /\.[tj]s$/i
      },
      {
        test: /\.(sass|scss)$/, use: [
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: { quietDeps: true },
            },
          }
        ], issuer: /\.html?$/i
      },
      { test: /\.html$/i, loader: 'html-loader', options: { esModule: false } },
      {
        test: /\.ts?$/,
        loader: 'esbuild-loader',
        include: [srcDir],
        options: { loader: 'ts', target: 'es2020' }
      },
    ],
  },
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2020',
        format: 'iife',
        css: true,
      })
    ]
  },
  watchOptions: {
    ignored: '**/node_modules',
    poll: 1000, // Check for changes every second
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      favicon: `${srcDir}/favicon.ico`,
      metadata: {
        // available in index.ejs //
        title, baseUrl
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
        { from: 'src/examples/data', to: 'assets/data' }
      ]
    }),
    new MiniCssExtractPlugin({ // updated to match the naming conventions for the js files
      filename: '[name].[contenthash].bundle.css',
      chunkFilename: '[name].[contenthash].chunk.css'
    }),
    // Note that the usage of following plugin cleans the webpack output directory before build.
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new IgnorePlugin({ resourceRegExp: /jsdom$/ })
  ]
});
