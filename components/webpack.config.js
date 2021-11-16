module.exports = {
  mode: 'production',
  entry: {
    'button/primary': require.resolve('./button/primary/index.ts'),
    'button/secondary': require.resolve('./button/secondary/index.ts'),
    'button/cta': require.resolve('./button/cta/index.ts'),
    'button/destructive': require.resolve('./button/destructive/index.ts'),
  },
  output: {
    path: __dirname,
    filename: '[name]/index.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-html-loader',
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(ts|js)$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              { modules: false },
            ],
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
}
