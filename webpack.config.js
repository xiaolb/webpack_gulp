
var webpack=require('webpack');
var path=require('path');
var uglifyJsPlugin=webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin=require('html-webpack-plugin');
var autoprefixer=require('autoprefixer');
var extractTetxtWebpackPlugin=require('extract-text-webpack-plugin');
module.exports = {
    entry:'./src/js/index.js',
    output: {
        path: path.join(__dirname,"./src"),
        filename: "bundle.js" ,
        publicPath: "/" 
    },
    resolve: {
        //模块决议配置
        extensions: ['', '.js', '.jsx'],
        ////配置别名，在项目中可缩减引用路径
        alias: {
          'src': path.join(__dirname, './src'),
          'jquery':path.join(__dirname,'./src/js/jquery.js')
        }
    },
    module: {
        loaders: [
            { 
                test: /\.(css|less)$/, loader:extractTetxtWebpackPlugin.extract("style","css!less!postcss")
            },
            {
                test: /.js?$/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0&presets[]=stage-1'],
                exclude: /node_modules/
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins:[
        new uglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        new HtmlWebpackPlugin({
            title:'用htmlwebpackplugin生成的html',
            filename:'index.html',
            template:'./src/tpl/tpl.html',
            minify:{ removeAttributeQuotes: true },
            inject:true
        }),
        new extractTetxtWebpackPlugin("styles.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
