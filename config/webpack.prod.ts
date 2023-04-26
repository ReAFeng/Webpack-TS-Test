import { Configuration } from "webpack";

export default {
  mode: 'production',
  output: {
    publicPath: './'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
    }
  }
} as Configuration;