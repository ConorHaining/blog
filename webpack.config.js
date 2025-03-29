import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import tailwindConfig from "./tailwind.config.js";
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
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
              postcssImport,
              tailwindcss(tailwindConfig),
              autoprefixer,
            ]
          }
        }
      }
    ]
  }
};