const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')

const PORT = 3022

module.exports = {
  mode: 'development',
  entry: require.resolve('./src/index.js'),
  output: {
    chunkFilename: '[name].js',
    publicPath: 'auto',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    alias: {
      '@nectary/shared': path.resolve(__dirname, '../../../shared/index.ts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('sinch-'),
          },
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
          {
            loader: '@saas/html-minify-loader',
            options: {
              injectTestStyles: true
            }
          }
        ],
      },
      {
        test: /\.(js|ts)$/,
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
          ],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: PORT,
    historyApiFallback: true,
    liveReload: false,
    hot: false,
    devMiddleware: {
      stats: 'none',
    }
  },
  infrastructureLogging: {
    level: 'warn',
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false'
    }),
    {
      apply: (compiler) => {
        compiler.hooks.done.tap('log', (stats) => {
          if (stats.hasErrors()) {
            console.error('Build failed with errors:')
            stats.compilation.errors.forEach((error) => {
              console.error(error.message || error)
            })
          } else {
            console.log(`Build completed successfully at http://localhost:${PORT}`)
          }
        })
      },
    },
  ],
}
