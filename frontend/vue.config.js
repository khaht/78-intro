const path = require('path');
const webpack = require('webpack');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  outputDir: 'dist',
  assetsDir: 'assets',
  publicPath: process.env.BASE_URL,
  productionSourceMap: false,
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('images')
  //     .test(/\.(jpg|png|gif|webp)$/)
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .options({
  //       limit: false,
  //       publicPath:
  //         process.env.NODE_ENV === 'production'
  //           ? 'https://781078.cdn.vccloud.vn/assets/img/'
  //           : resolve('src/assets/images'),
  //       outputPath: 'assets/img',
  //       name: '[name].[ext]',
  //     })
  //     .end();
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        types: resolve('@types'),
        core: resolve('src/core'),
        mixins: resolve('src/mixins'),
        components: resolve('src/components'),
        modules: resolve('src/modules'),
        locales: resolve('src/locales'),
        store: resolve('src/store'),
        router: resolve('src/router'),
        directives: resolve('src/directives'),
        assets: resolve('src/assets'),
        fonts: resolve('src/assets/fonts'),
        images: resolve('src/assets/images'),
      },
    },

    module: {},
    plugins: [
      new webpack.NormalModuleReplacementPlugin(
        /element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/,
        'element-ui/lib/locale/lang/en',
      ),
      // new BundleAnalyzerPlugin()
    ],
    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
  devServer: {
    proxy: process.env.VUE_APP_SERVICE_ENDPOINT || 'http://localhost:3000',
  },
};
