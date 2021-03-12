const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./lib/popup.js", //入口文件，就是在src目录下的index.js文件，
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist"), //输出路径dist目录
    publicPath: "/dist/",
    filename: "popup.min.js", //打包后输出的文件名字,这里需要和package.json文件下main应该写为:'dist/toast.min.js'
    libraryTarget: "umd",
    // 　libraryTarget：为了支持多种使用场景，我们需要选择合适的打包格式。libraryTarget 属性。这是可以控制 library 如何以不同方式暴露的选项。
    libraryExport: "default",
    umdNamedDefine: true,
    globalObject: "this"
  },
  //这里我们可以剔除掉一些通用包,自己的包不打包这些类库,需要用户环境来提供
  externals: {
    vue: "vue",
    axios: "axios"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader" //babel的相关配置在.babelrc文件里
      },
      {
        test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
        loader: "url-loader"
        /* query: {
          limit: 30000 //把一些小图片打包为base64
        } */
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
    //压缩js代码
    /* new webpack.optimize.UglifyJsPlugin({
      //输出不显示警告
      compress: {
        warnings: false //默认值
      },
      //输出去掉注释
      output: {
        comments: false //默认值
      }
    }) */
  ]
};
