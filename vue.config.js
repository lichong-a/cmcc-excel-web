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
  }
}