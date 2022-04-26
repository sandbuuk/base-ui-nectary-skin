const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const PORT = 3022

module.exports = {
  mode: 'development',
  entry: require.resolve('./src/index.ts'),
  output: {
    chunkFilename: '[name].js',
    publicPath: 'auto',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('sinch-'),
          },
        },
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(js|ts)$/,
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
  ],
}
