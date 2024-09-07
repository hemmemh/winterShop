const { defineConfig } = require('@vue/cli-service')
const { default: svgLoader } = require('vite-svg-loader')
module.exports = defineConfig({
  transpileDependencies: true,
  css:{
    loaderOptions:{
      sass:{

        additionalData:`@import "./src/styles/style.scss";`
      }
    }
  }
})
