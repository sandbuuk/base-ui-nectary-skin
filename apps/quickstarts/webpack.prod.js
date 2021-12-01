const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const CONTAINER = 'Quickstarts'
const PORT = 3001

module.exports = {
  mode: 'production',
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
        test: /\.css$/,
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
      filename: 'remoteEntry.js',
      exposes: {
        './Container': require.resolve('./src/container.tsx'),
      },
      shared: {
        '@nectary/components/button': {
          requiredVersion: '^0.0.0',
        },
        '@nectary/components/theme.css': {
          requiredVersion: '^0.0.0',
        },
        react: {
          requiredVersion: '^17.0.0',
          singleton: true,
        },
        'react-dom': {
          requiredVersion: '^17.0.0',
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
    new MiniCssExtractPlugin({
      insert: (linktag) => {
        const sinchVar = getComputedStyle(document.documentElement).getPropertyValue('--sinch-theme')

        if (sinchVar === '') {
          document.head.appendChild(linktag)
        } else {
          linktag.onload?.({ type: 'load' })
        }
      },
    }),
  ],
}
