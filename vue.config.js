// vue.config.js
const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}



module.exports = {
    // 选项...
    chainWebpack: config => {
      config.resolve.alias
        // key,value自行定义，比如.set('@assets', resolve('src/assets'))
        .set('styles',resolve('src/assets/styles'))
    },
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:8080',
            pathRewrite: {
                '^/api': '/static/mock'
            }
          }
        }
    }
    
  }