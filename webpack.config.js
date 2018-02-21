var join = require("path").join;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: join(__dirname, "./dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.less$/, use: ExtractTextPlugin.extract(["css-loader", "less-loader"])}
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
                template: "./src/index.html"
            }
        )
    ],
    devServer: {
        port: 8000
    }
};