/**
 * Created by gilangaramadan on 16-12-17.
 */
let path = require('path');
let webpack = require('webpack');
let assetsPath = path.join(__dirname, 'src');

module.exports = {
    entry :  {
        bundle :  ['webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/only-dev-server',
            path.resolve(assetsPath,'index.js')],
    },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js', //
        path: path.join(assetsPath ,"dist/js/"),
        publicPath: 'http://localhost:8080/assets/'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['react-hot-loader/webpack','babel'],
                include: [path.resolve(assetsPath)]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool : '#source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};