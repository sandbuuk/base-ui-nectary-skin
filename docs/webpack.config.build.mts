import path from 'path'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import HtmlPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import type { Configuration } from 'webpack'

const NODE_MODULES_REGEXP = /[\\/]node_modules[\\/]/

const config: Configuration = {
  mode: 'production',
  entry: path.resolve('./src/index.tsx'),
  output: {
    path: path.resolve('./build/'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.mdx'],
    alias: {
      '~': path.resolve('./src/'),
      '@mdx-js/react': path.resolve('./node_modules/@mdx-js/react/'),
    },
  },
  module: {
    parser: {
      javascript: {
        importMetaContext: true,
      },
    },
    rules: [
      {
        test: /\.html$/,
        exclude: NODE_MODULES_REGEXP,
        use: ['raw-loader', '@saas/html-minify-loader'],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: NODE_MODULES_REGEXP,
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
        exclude: NODE_MODULES_REGEXP,
        loader: '@saas/example-code-loader',
      },
      {
        test: /\.mdx?$/,
        exclude: NODE_MODULES_REGEXP,
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
              shouldPrintComment: (val: string) => val.startsWith(' webpackChunkName'),
            },
          },
          {
            loader: '@mdx-js/loader',
            options: {
              providerImportSource: '@mdx-js/react',
              remarkPlugins: [remarkGfm, remarkToc],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  performance: {
    hints: false,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
        terserOptions: {
          ecma: 2020,
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        vendor: {
          name: 'vendor',
          test: NODE_MODULES_REGEXP,
          priority: 10,
          enforce: true,
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new webpack.CleanPlugin(),
    new webpack.DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
    new HtmlPlugin({
      template: path.resolve('./public/index.html'),
      favicon: path.resolve('./public/favicon.png'),
    }),
  ],
}

export default config
