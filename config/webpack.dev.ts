import { resolve } from "path";
import { Configuration } from "webpack";

export default {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    publicPath: '/'
  },
  devServer: {
    port: 9999,
    static: {
      directory: resolve(__dirname, '../public/index.html')
    },
    hot: true,
    compress: true,
    client: {
      logging: 'info',
      overlay: {
        errors: true,
        warnings: false
      }
    }
  }
} as Configuration;