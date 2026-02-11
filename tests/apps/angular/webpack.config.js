const PORT = 3023

module.exports = {
  output: {
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  devServer: {
    host: 'localhost',
    port: PORT,
    liveReload: false,
    hot: false,
    devMiddleware: {
      stats: false,
    }
  },
  infrastructureLogging: {
    level: 'warn',
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
              injectTestStyles: true
            }
          }
        ],
      },
      {
        test: /\.css$/,
        include: /themes/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
