const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { MFLiveReloadPlugin } = require('@module-federation/fmr')

const CONTAINER = 'HostApp'
const PORT = 3000

module.exports = {
  mode: 'development',
  entry: [
    'broadcastchannel-polyfill',
    require.resolve('./src/index.ts')
  ],
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
        test: /\.[jt]sx?$/,
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
            '@babel/preset-typescript',
            [
              '@babel/preset-react',
              { runtime: 'automatic' }
            ]
          ],
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: PORT,
    // open: true
  },
  watch: false,
  plugins: [
    new MFLiveReloadPlugin({
      container: CONTAINER,
      port: PORT
    }),
    new ModuleFederationPlugin({
      name: CONTAINER,
      remotes: {
        ReactApp1: 'ReactApp1@//localhost:3001/remoteEntry.js',
        ReactApp2: 'ReactApp2@//localhost:3002/remoteEntry.js',
        VueApp: 'VueApp@//localhost:3003/remoteEntry.js',
        AngularApp: 'AngularApp@//localhost:3004/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html')
    }),
  ],
}
