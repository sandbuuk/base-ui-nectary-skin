import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import remarkGfm from 'remark-gfm'
import webpack from 'webpack'
import type { Configuration } from 'webpack'

const PORT = 4000

const config: Configuration = {
  mode: 'development',
  entry: path.resolve('./src/index.tsx'),
  output: {
    chunkFilename: '[name].js',
    publicPath: '/',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.mdx'],
    alias: {
      '~': path.resolve('./src/'),
      '@mdx-js/react': path.resolve('./node_modules/@mdx-js/react/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['raw-loader', '@saas/html-minify-loader'],
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
        test: /\/pages\/Components\/.+?\/examples\/.+?\.tsx$/,
        exclude: /node_modules/,
        loader: '@saas/example-code-loader',
      },
      {
        test: /\.mdx?$/,
        exclude: /node_modules/,
        use: [
          {
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
            loader: '@mdx-js/loader',
            options: {
              providerImportSource: '@mdx-js/react',
              remarkPlugins: [remarkGfm],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // @ts-ignore
  devServer: {
    host: 'localhost',
    port: PORT,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      favicon: path.resolve('./public/favicon.png'),
    }),
    new webpack.DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',
    }),
  ],
}

export default config
