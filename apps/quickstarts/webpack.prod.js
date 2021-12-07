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
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
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
      insert: (linkElement) => {
        const getFilename = (path) => path.substr(path.lastIndexOf('/'))

        // Check if such css already exists in document.head
        for (const child of document.head.children) {
          if (child.tagName !== 'LINK') {
            continue
          }

          if (getFilename(child.href) === getFilename(linkElement.href)) {
            linkElement.onload?.({ type: 'load' })

            return
          }
        }

        const name = 'sinch-quickstarts-app'

        if (document.getElementById(name) !== null) {
          // Standalone app
          document.head.appendChild(linkElement)
        } else {
          // Embedded app
          if (document.head[name] == null) {
            document.head[name] = document.createDocumentFragment()
          }

          document.head[name].appendChild(linkElement)
          linkElement.onload?.({ type: 'load' })
        }
      },
    }),
  ],
}
