module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.hbs/,
            loader: 'handlebars-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};