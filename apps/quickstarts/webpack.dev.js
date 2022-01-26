const path = require('path')
const { MFLiveReloadPlugin } = require('@module-federation/fmr')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const CONTAINER = 'Quickstarts'
const PORT = 3001

const styleLoaderInsert = (styleElement) => {
  const name = 'sinch-quickstarts-app'

  if (document.getElementById(name) !== null) {
    // Standalone app
    document.head.appendChild(styleElement)
  } else {
    // Embedded app
    if (document.head[name] == null) {
      document.head[name] = document.createDocumentFragment()
    }

    document.head[name].appendChild(styleElement)
  }
}

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
        loader: 'raw-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          compact: false,
          presets: [
            ['@babel/preset-env', { modules: false }],
            '@babel/preset-typescript',
            ['@babel/preset-react', { runtime: 'automatic' }],
          ],
          cacheDirectory: true,
          cacheCompression: false,
        },
      },
      {
        test: /\.module\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { insert: styleLoaderInsert },
          },
          {
            loader: 'css-loader',
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { insert: styleLoaderInsert },
          },
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: PORT,
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
      filename: 'remoteEntry.js',
      exposes: {
        './Container': require.resolve('./src/container.tsx'),
      },
      shared: {
        '@nectary/components/theme.css': {
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
    }),
  ],
}
