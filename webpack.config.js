const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  entry: './scripts/main.js',
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    filename: 'main.js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: [
              require('postcss-import'),
              require('tailwindcss')(tailwindConfig),
              require('autoprefixer'),
            ]
          }
        }
      }
    ]
  }
};