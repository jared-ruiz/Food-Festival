const path = require("path");
const webpack = require("webpack");

module.exports = {
    //beginning of the dependency graph
    entry: './assets/js/script.js',
    //takes bundled code and outputs it where we tell it
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    //use plugins to tell webpack how to use certain things
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        })
    ],
    //default is production mode but we want development mode
    mode: 'development'
};