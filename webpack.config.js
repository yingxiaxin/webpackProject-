module.exports = 
{
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js", //已多次提及的唯一入口文件
  output: 
  {
    path: __dirname + "/public",  //打包后的文件存放的地方
    filename: "bundle.js" //打包后输出文件的文件名
  },
  devServer: 
  {
    contentBase: "./public",  //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true  //实时刷新
  },
  module: 
  {
    rules: 
    [
        {
          test: /(\.jsx|\.js)$/,
          use: 
          {
              loader: "babel-loader",
              options: 
              {
                  presets: 
                  [
                      "env", "react"
                  ]
              }
          },
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: 
          [
              {
                  loader: "style-loader"
              }, 
              {
                  loader: "css-loader",
                  options: 
                  {
                    modules: true, // 指定启用css modules
                    localIdentName: '[name]__[local]--[hash:base64:5]',   // 指定css的类名格式
                    importLoaders: 1 
                  }
              },
              {
                loader: "postcss-loader",
                options: 
                {
                  modules: true
                }
              }
          ]
        },
        {
          test:/\.(png|jpg|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
          use:
          {
            loader: "url-loader",
            options: 
            {  
              limit: '1024'  
            } 
          }
        }
    ]
  }
}