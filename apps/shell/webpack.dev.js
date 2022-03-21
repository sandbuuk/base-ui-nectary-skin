const path = require('path')
const { MFLiveReloadPlugin } = require('@module-federation/fmr')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const apps = require('./apps.dev.json')

const CONTAINER = 'Shell'
const PORT = 3000

module.exports = {
  mode: 'development',
  entry: [
    require.resolve('broadcastchannel-polyfill'),
    require.resolve('@webcomponents/scoped-custom-element-registry'),
    require.resolve('./src/index.ts'),
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
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          compact: false,
          presets: [
            [
              '@babel/preset-env',
              { modules: false },
            ],
            '@babel/preset-typescript',
            [
              '@babel/preset-react',
              { runtime: 'automatic' },
            ],
          ],
        },
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: PORT,
    hot: 'only',
    allowedHosts: ['.sinch.com', 'localhost', 'localhost:3000', 'localhost:3001'],
    static: {
      directory: path.resolve(__dirname, 'public'),
      publicPath: '/',
    },
    historyApiFallback: true,
  },
  watch: false,
  plugins: [
    new MFLiveReloadPlugin({
      container: CONTAINER,
      port: PORT,
    }),
    new ModuleFederationPlugin({
      name: CONTAINER,
      remotes: apps,
      shared: {
        '@sinch-engage/nectary/theme.css': {
          requiredVersion: '*',
        },
        react: {
          requiredVersion: '^17.0.0',
          singleton: true,
        },
        'react-dom': {
          requiredVersion: '^17.0.0',
          singleton: true,
        },
        'react-router-dom': {
          requiredVersion: '^6.0.0',
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      publicPath: '/',
    }),
  ],
}
