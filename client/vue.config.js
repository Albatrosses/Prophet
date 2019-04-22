const path = require('path');

module.exports = {
  // 将部署应用程序的基本URL
  baseUrl :'/',
  // 网页输出目录
  outputDir: '../views',
  // 静态资源目录
  assetsDir: 'public',
  // 静态资源目录
  // indexPath: 'index.html',
  // 是否使用ESlint
  lintOnSave: true,
  // 是否需要生产源映射
  productionSourceMap: false,
  // 允许开发模式下使用Vue
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        'src': path.join(__dirname, 'src'),
        'helper': path.join(__dirname, 'src/helper'),
      },
    },
  },
  // CSS全局配置
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/global.scss";`
      }
    }
  },
  // 开发时服务配置
  devServer: {
    port: 8081,
    host: '0.0.0.0',
    https: false,
    open: false,
    proxy: {
      '/api': {
          target: 'http://localhost:8080',
          ws: true,
          changeOrigin: true
      },
    }
  }
}