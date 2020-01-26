var path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist"
  },
  plugins: [htmlWebpackPlugin],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
