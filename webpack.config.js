// @joaogarin

/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var webpack = require('webpack');
var helpers = require('./helpers');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const METADATA = {
  title: 'CSS modules Angular2',
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: ENV,
};

module.exports = function (options) {
  return {
    // for faster builds use 'eval'
    devtool: 'source-map',
    // cache: false,

    // our angular app
    // our angular app
    entry: {
      'polyfills': './src/polyfills.ts',
      'vendor': './src/vendor.ts',
      'main': './src/main.ts',
    },

    // Config for our build files
    output: {
      path: helpers.root('dist'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },

    /*
    * Options affecting the resolving of modules.
    *
    * See: http://webpack.github.io/docs/configuration.html#resolve
    */
    resolve: {

      /*
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['.ts', '.js', '.json'],

      // An array of directory names to be resolved to the current directory
      modules: [helpers.root('src'), 'node_modules'],

    },
    module: {
      rules: [
        // Support for .ts files.
        {
          test: /\.ts$/,
          use: 'awesome-typescript-loader',
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        {
          test: /\.css$/, loader: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  query: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
                  }
                },
                'postcss-loader']
            })
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: "url-loader",
          query: { limite: "10000", mimetype: "image/svg+xml" },
        }
      ]
    },

    plugins: [
      /*
      * Plugin: CommonsChunkPlugin
      * Description: Shares common code between the pages.
      * It identifies common modules and put them into a commons chunk.
      *
      * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
      * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
      */
      new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
      }),

      // Plugin : ExtractTextPlugin
      // Description: Extact sass into its own css file
      //
      // See: https://github.com/webpack/extract-text-webpack-plugin
      new ExtractTextPlugin("style.css"),

      // Plugin: HtmlWebpackPlugin
      // Description: Simplifies creation of HTML files to serve your webpack bundles.
      // This is especially useful for webpack bundles that include a hash in the filename
      // which changes every compilation.
      //
      // See: https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin(
        {
          template: 'src/index.html',
          title: METADATA.title,
          chunksSortMode: 'dependency',
          metadata: METADATA,
        }
      ),

      // Plugin: DefinePlugin
      // Description: Define free variables.
      // Useful for having development builds with debug logging or adding global constants.
      //
      // Environment helpers
      //
      // See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
      // NOTE: when adding more properties make sure you include them in custom-typings.d.ts
      new webpack.DefinePlugin({ 'ENV': JSON.stringify(METADATA.ENV) }),

      /**
       * Plugin LoaderOptionsPlugin (experimental)
       *
       * See: https://gist.github.com/sokra/27b24881210b56bbaff7
       */
      new LoaderOptionsPlugin({
        debug: true,
        options: {
          /**
           * Static analysis linter for TypeScript advanced options configuration
           * Description: An extensible linter for the TypeScript language.
           *
           * See: https://github.com/wbuchwalter/tslint-loader
           */
          tslint: {
            emitErrors: true,
            failOnHint: false,
            resourcePath: 'src'
          },
        }
      }),
    ],
    // our Webpack Development Server config
    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      // contentBase: 'src/',
      historyApiFallback: true,
      watchOptions: { aggregateTimeout: 300, poll: 1000 }
    },
    // we need this due to problems with es6-shim
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  }
};
