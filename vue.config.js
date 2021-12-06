const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
  runtimeCompiler: true,
  devServer: {
    open: true,
    proxy:{
      '/api': {
        target: 'http://localhost:8080',
        ChangeOrigin: true
      }
    }
  },
  css:{
    loaderOptions: {
      less: {}
    }
  },
  chainWebpack:(config)=>{
    config.resolve.alias
    //set第一个参数：设置的别名，第二个参数：设置的路径
    .set('@',resolve('./src'))
    .set('components',resolve('./src/components'))
    .set('assets',resolve('./src/assets'))
    .set('api',resolve('./src/api'))
  }
}