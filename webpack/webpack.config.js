const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'js'),
    entry: {
        header: './header.js',
        body : './body.js',
        footer: './footer.js'
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
      },
      module:{
        rules: [
          { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource'
          }
        ]
      },
      performance: {
        hints: false
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        port: 8564,
        open: true
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: "Webpack Output",
        }),
        new CleanWebpackPlugin()
      ],
};