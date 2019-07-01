module.exports = {
    entry: __dirname + "/main.js",
    output: {
        path: __dirname + '/docs/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
            }]
        }]
    }
};