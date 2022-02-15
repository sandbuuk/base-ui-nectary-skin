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
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader',
      }
    ],
  },
}
