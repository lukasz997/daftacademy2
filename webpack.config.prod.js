const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const distDir = path.resolve(__dirname, "docs");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: distDir
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          isProduction
            ? MiniCssExtractPlugin.loader
            : { loader: "style-loader", options: { sourceMap: true } },
          { loader: "css-loader", options: { sourceMap: isProduction } },
          { loader: "postcss-loader", options: { sourceMap: isProduction } },
          { loader: "sass-loader", options: { sourceMap: isProduction } }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
