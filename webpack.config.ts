import { resolve } from "path";
import { Configuration } from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export default {
  entry: "./src/main.ts",
  output: {
    path: resolve(__dirname, "./dist"),
    filename: 'static/js/app-[contenthash].js',
    chunkFilename: 'static/js/chunk-[contenhash].js',
    clean: true
  },
  devServer: {
    port: 9999,
    static: {
      directory: resolve(__dirname, './public/index.html')
    },
    hot: true,
    compress: true
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(t|m?j)s$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: resolve(__dirname, './public/index.html'),
      inject: 'body',
    }),
    new Dotenv({
      path: resolve(__dirname, `.env.${process.env.ENV}`)
    })
  ]
} as Configuration;