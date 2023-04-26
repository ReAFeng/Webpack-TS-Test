import { Configuration } from "webpack";
import { merge } from 'webpack-merge';
import common from "./config/webpack.common";
import dev from "./config/webpack.dev";
import prod from "./config/webpack.prod";

export default (_env: any, args: Configuration) => {
  const config = args.mode === "development" ? dev : prod;
  return merge(common, config);
}