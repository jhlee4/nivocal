var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'srcjs', 'nivocal.js'),
    output: {
        path: path.join(__dirname, 'inst', 'htmlwidgets'),
        filename: 'nivocal.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'reactR': 'window.reactR'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};