const path = require('path')
const HTMLplugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const SVGSpriteMapPlugin = require('svg-spritemap-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin({})
        ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 4200
    },
    plugins: [
        new HTMLplugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new SVGSpriteMapPlugin('./src/svg/*.svg', {
          output: {
            filename: 'sprites.svg',
            svg4everybody: true,
            svgo: true,
          },
          sprite: {
              prefix: 'spr-',
          },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js|x$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
