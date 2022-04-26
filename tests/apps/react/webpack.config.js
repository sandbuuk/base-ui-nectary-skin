const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PORT = 3021

module.exports = {
  mode: 'development',
  entry: require.resolve('./src/index.tsx'),
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
    },
  },
  infrastructureLogging: {
    level: 'warn',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
  ],
}
