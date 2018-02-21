const path = require('path');

module.exports = {
    // input
    entry: './src/index.js',

    // output
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },

    // transformations
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: [
						'transform-class-properties',
                        'transform-object-rest-spread',
                        ['transform-react-jsx', { pragma: 'h'}]
                    ]
                }
            }
        ]
    },

    // sourcemaps
    devtool: 'source-map',

    // server
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        historyApiFallback: true
    },

    resolve: {
        alias: {
            "react": "preact-compat",
            "react-dom": "preact-compat",
			"create-react-class": "preact-compat/lib/create-react-class",
        }
    }
};