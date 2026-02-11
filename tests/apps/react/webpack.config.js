const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

const PORT = 3021

module.exports = {
  mode: 'development',
  entry: require.resolve('./src/index.tsx'),
  output: {
    chunkFilename: '[name].js',
    publicPath: '/',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@nectary/shared': path.resolve(__dirname, '../../../shared/index.ts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
          {
            loader: '@saas/html-minify-loader',
            options: {
              injectTestStyles: true,
            },
          },
        ],
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
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: PORT,
    historyApiFallback: true,
    liveReload: false,
    hot: false,
    devMiddleware: {
      stats: 'none',
    },
  },
  infrastructureLogging: {
    level: 'warn',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
    new DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',
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
