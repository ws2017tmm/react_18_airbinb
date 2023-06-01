/*
 * @Description:
 * @Version: 1.0
 * @Autor: StevenWu
 * @Date: 2023-05-25 11:17:45
 * @LastEditors: StevenWu
 * @LastEditTime: 2023-06-01 19:38:15
 */
const path = require("path")
const CracoLessPlugin = require("craco-less")
// webpack.config.js
// const SpriteLoaderPlugin = require("svg-sprite-loader/plugin")

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils")
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.module.rules[1].oneOf = [
        ...[
          {
            test: /.svg$/, // 存放svg的文件夹
            include: resolve("./src/assets/svg/icons"),
            use: [
              { loader: "svg-sprite-loader", options: {} },
              { loader: "svgo-loader", options: { symbolId: "icon-[name]" } }
            ]
          }
        ],
        ...webpackConfig.module.rules[1].oneOf
      ]
      return webpackConfig
    }
  }
}
