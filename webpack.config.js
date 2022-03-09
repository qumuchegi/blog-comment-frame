const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    mode:'production',
    entry:{
        main:path.resolve(__dirname,'src/index.jsx')
    },
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'lib'),
        library:'blog_comment_import',
        libraryTarget:'commonjs2'
    },
    module:{
        rules:[
            {
                test:/\.(js)|(jsx)$/,
                include:[path.resolve(__dirname,'src')],
                exclude:[path.resolve(__dirname,'node_modules'),path.resolve(__dirname,'test')],
                use:{
                    loader:'babel-loader'
                }
            }
        ],
       
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    plugins:[
        new CleanWebpackPlugin()
    ],
    externals:[/^(react|babel-runtime)/]
}