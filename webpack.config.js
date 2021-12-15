const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        
        path:path.resolve(__dirname,'./dist')
    },
    mode:'development',
    devServer: {
        // contentBase
        static : {
          directory : path.join(__dirname, "./dist")
        },
        port: 3002,
        // publicPath
        devMiddleware:{
           publicPath: "https://localhost:3000/",
        },
        // hotOnly
        hot: "only",
      },
    module:{
        rules:[
            {
                test:/\.(sa|sc|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'index.css'
        }),
        new HtmlWebpackPlugin({
            filename:'index.html'
        }),
    ]
}