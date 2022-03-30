const path = require('path')
const { MFLiveReloadPlugin } = require('@module-federation/fmr')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { createTemplate } = require('./webpack/index-template')

const CONTAINER = 'Quickstarts'
const PORT = 3001

module.exports = {
  mode: 'development',
  // These entries are only used for the standalone page.
  // The Micro FrontEnd is exposed through the ModuleFederationPlugin.
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
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name]_[contenthash:6].[ext]',
        },
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
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
        // Loader for MFE local styles.
        test: /\.css$/,
        resourceQuery: /^$/, // Only match empty resource query.
        use: [
          {
            loader: 'style-loader',
            options: {
              // Insert into a fragment for later so MFE can insert into the ShadowRoot.
              insert: (element) => {
                const getFilename = (path) => path.substr(path.lastIndexOf('/'))
                const name = 'sinch-quickstarts-app'
                const h = document.head
                // Needed for webpack to know the module has loaded.
                const dispatchLoad = (el) => el.dispatchEvent(new Event('load'))

                // Check if such css already exists in document.head
                // like a main entry would, and make sure we won't add it twice.
                for (const child of h.children) {
                  if (child.tagName !== 'LINK') {
                    continue
                  }

                  if (getFilename(child.href) === getFilename(element.href)) {
                    return void dispatchLoad(element)
                  }
                }

                // If it does not exist in the head, insert into the MFE style fragment.
                h[name] = h[name] || document.createDocumentFragment()
                h[name].appendChild(element)
                dispatchLoad(element)
              },
            },
          },
          // Module support is automatic for filenames containing ".module."
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: PORT,
    historyApiFallback: true,
    hot: 'only',
    allowedHosts: ['.sinch.com', 'localhost', 'localhost:3000', 'localhost:3001'],
    static: {
      directory: path.resolve(__dirname, 'public'),
      publicPath: '/',
    },
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
      templateContent: createTemplate(),
      // Override here to make `auto` publicPath work for loading the scripts for the stand alone page.
      publicPath: '/',
      minify: false,
    }),
  ],
}
