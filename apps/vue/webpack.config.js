const path = require('path')
const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { MFLiveReloadPlugin } = require('@module-federation/fmr')

const CONTAINER = 'VueApp'
const PORT = 3003

module.exports = {
  mode: 'development',
  entry: require.resolve('./src/index.ts'),
  output: {
    chunkFilename: '[name].[chunkhash].js',
    publicPath: 'auto',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          compact: false,
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['last 1 Chrome version', 'last 1 Firefox version'],
                },
                ignoreBrowserslistConfig: true,
                modules: false
              },
            ],
            '@babel/preset-typescript'
          ],
          plugins: [
            ['@babel/plugin-proposal-decorators', { 'legacy': true }]
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('sinch-')
          }
        }
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: PORT,
  },
  watch: false,
  plugins: [
    new MFLiveReloadPlugin({
      container: CONTAINER,
      port: PORT
    }),
    new ModuleFederationPlugin({
      name: CONTAINER,
      filename: 'remoteEntry.js',
      exposes: {
        './Container': require.resolve('./src/container.ts')
      },
      shared: {
        '@saas/components/button': {
          requiredVersion: '^0.0.0',
        },
        // vue: '^3.0.0'
      }
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html')
    }),
    // https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    })
  ],
}
