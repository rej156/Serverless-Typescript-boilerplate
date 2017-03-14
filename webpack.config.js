var path = require('path');

// Helper functions
var ROOT = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

module.exports = {
  entry: './src/handler.ts',
  target: 'node',
  resolve: {
    extensions: ['', '.ts', '.js', '.json'],

    // Make sure root is src
    root: root('src'),

    // remove other default values
    modulesDirectories: ['node_modules']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: 'handler.js'
  },
  module: {
    preLoaders: [
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  },
  plugins: [
  ],
};