const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { MFLiveReloadPlugin } = require('@module-federation/fmr')

const CONTAINER = 'ReactApp2'
const PORT = 3002

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
        test: /\.html$/,
        loader: 'raw-loader'
      },
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
        './Container': require.resolve('./src/container.tsx')
      },
      shared: {
        '@saas/components/button': {
          requiredVersion: '^0.0.0',
        },
        react: {
          requiredVersion: '^17.0.2',
          singleton: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^17.0.2',
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html')
    })
  ],
}
