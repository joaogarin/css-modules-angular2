// @AngularClass

/*
 * Helper
 * env(), getBanner(), root(), and rootDir()
 * are defined at the bottom
 */
var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);
var NODE_ENV  = 'development';
var pkg = require('./package.json');

// Node
var path = require('path');

// NPM
var webpack = require('webpack');

// Webpack Plugins
var CommonsChunkPlugin   = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
 * Config
 */
module.exports = {
  devtool: 'source-map',
  debug: true,
  cache: true,

  verbose: true,
  displayErrorDetails: true,
  stats: {
    colors: true,
    reasons: true
  },

  // our Development Server config
  devServer: {
    inline: true,
    colors: true,
    historyApiFallback: true,
    contentBase: 'src/app',
    publicPath: '/__build__'
  },

  //
  entry: {
    'angular2': [
      // Angular 2 Deps
      'zone.js',
      'reflect-metadata',
      // to ensure these modules are grouped together in one file
      'angular2/angular2',
      'angular2/core',
    ],
    'app': [
      './src/app/bootstrap'
    ]
  },

  // Config for our build files
  output: {
    path: root('__build__'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
    // publicPath: 'http://mycdn.com/'
  },

  resolve: {
    root: __dirname,
    extensions: ['','.ts','.js','.json'],
    modulesDirectories: ['node_modules', 'components']
  },

  module: {
    loaders: [
      //{ test: /\.css$/,   loader: 'raw' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },

      { test: /\.ts$/,    loader: 'ts',
        query: {
          'ignoreDiagnostics': [
            // 2300, // 2300 -> Duplicate identifier
            // 2309 // 2309 -> An export assignment cannot be used in a module with other exported elements.
          ]
        },
        exclude: [
          /\.min\.js$/,
          /\.spec\.ts$/,
          /\.e2e\.ts$/,
          /web_modules/,
          /test/,
          /node_modules/
        ]
      }
    ],
    noParse: [
      /rtts_assert\/src\/rtts_assert/,
      /reflect-metadata/
    ]
  },

  postcss: [
    require('autoprefixer-core'),
    require('postcss-color-rebeccapurple')
  ],

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new CommonsChunkPlugin({
      name: 'angular2',
      minChunks: Infinity,
      filename: 'angular2.js'
    }),
    new CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    })
  ],

  /*
   * When using `templateUrl` and `styleUrls` please use `__filename`
   * rather than `module.id` for `moduleId` in `@View`
   */
  node: {
    crypto: false,
    __filename: true
  }
};

// Helper functions

function env(configEnv) {
  if (configEnv === undefined) { return configEnv; }
  switch (toString(configEnv[NODE_ENV])) {
    case '[object Object]'    : return Object.assign({}, configEnv.all || {}, configEnv[NODE_ENV]);
    case '[object Array]'     : return [].concat(configEnv.all || [], configEnv[NODE_ENV]);
    case '[object Undefined]' : return configEnv.all;
    default                   : return configEnv[NODE_ENV];
  }
}

function getBanner() {
  return 'Angular2 Webpack Starter v'+ pkg.version +' by @gdi2990 from @AngularClass';
}

function root(args) {
  args = sliceArgs(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
  args = sliceArgs(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}
