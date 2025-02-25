const path= require('path')

module.exports = env =>({
    "entry":"./src/app.js",
    "output":{
        "filename":"bundle.js",
        "path":path.join(__dirname,'public')
    },
    "module":{
        "rules":[
            {
                "loader":"babel-loader",
                "test":/\.js$/,
                "exclude":/node_modules/
            },
            {
                "test":/\.(s)?css$/,
                "use":[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    "devtool":env==="production"?"source-map":"cheap-module-eval-source-map",
    "devServer":{
        "contentBase":path.join(__dirname,'public'),
        "historyApiFallback":true
    }
})