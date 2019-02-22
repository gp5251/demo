const path = require("path")
const htmlPlugin = require("html-webpack-plugin")
const cleanPlugin = require("clean-webpack-plugin")

module.exports = {
    entry: {
        print: "./src/print.js",
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    module: {
       
    },
    plugins: [
        new htmlPlugin({
            title: "hahaha"
        }),
        new cleanPlugin("dist")
    ]
}