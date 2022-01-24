const path = require('path')
const sharedNectaryModules = require('@nectary/components/shared.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const apps = require('./apps.prod.json')

const CONTAINER = 'Shell'
const PORT = 3000

module.exports = {
  mode: 'production',
  entry: [
    require.resolve('broadcastchannel-polyfill'),
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
          MiniCssExtractPlugin.loader,
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: PORT,
  },
  watch: false,
  optimization: {
    minimize: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: CONTAINER,
      remotes: apps,
      shared: {
        ...sharedNectaryModules,
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
    }),
    new MiniCssExtractPlugin(),
  ],
}
