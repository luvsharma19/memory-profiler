const path = require('path');
const nodeExternals = require('webpack-node-externals');

const mode = process.env.NODE_ENV;

module.exports = [
  {
    entry: './index.js',
    target: 'node',
    externals: [nodeExternals()],
    mode,
    devtool: false,
    resolve: {
      extensions: ['.js']
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist')
    },
    node: {
      __dirname: false,
      __filename: false,
    }
  }
];