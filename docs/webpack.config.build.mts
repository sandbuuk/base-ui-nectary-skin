import path from 'path'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import HtmlPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import type { TransformOptions as TBabelOptions } from '@babel/core'
import type { Configuration as TWebpackConfig } from 'webpack'

const NODE_MODULES_REGEXP = /[\\/]node_modules[\\/]/

const BabelOptions: TBabelOptions = {
  babelrc: false,
  compact: false,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        exclude: [
          '@babel/plugin-transform-regenerator',
          '@babel/plugin-transform-async-to-generator',
        ],
      },
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      { runtime: 'automatic' },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'babel-plugin-polyfill-es-shims',
      { method: 'usage-global' },
    ],
  ],
  shouldPrintComment: (val: string) => val.startsWith(' webpackChunkName'),
}

const config: TWebpackConfig = {
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
      'array-includes': path.resolve('./node_modules/array-includes/'),
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
        test: /\.tsx?$/,
        exclude: NODE_MODULES_REGEXP,
        loader: 'babel-loader',
        options: BabelOptions,
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        resourceQuery: '?example',
        loader: '@saas/example-code-loader',
      },
      {
        test: /\/types\.ts$/,
        exclude: /node_modules/,
        resourceQuery: '?api',
        loader: '@saas/types-to-mdx-loader',
      },
      {
        test: /\.mdx?$/,
        exclude: NODE_MODULES_REGEXP,
        use: [
          {
            loader: 'babel-loader',
            options: BabelOptions,
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
        test: /\.(gif|jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'images',
        },
      },
      {
        test: /\.html$/,
        exclude: NODE_MODULES_REGEXP,
        use: ['raw-loader', '@saas/html-minify-loader'],
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
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      logLevel: 'silent',
    }),
  ],
}

export default config
