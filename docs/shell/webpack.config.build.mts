import fs from 'fs'
import path from 'path'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
// @ts-expect-error
import ExternalTemplateRemotesPlugin from 'external-remotes-plugin'
import HtmlPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import remarkGfm from 'remark-gfm'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import type { TransformOptions as TBabelOptions } from '@babel/core'
import type { Configuration as TWebpackConfig } from 'webpack'

// eslint-disable-next-line node/no-sync
const versions = fs.readdirSync('../../public/temp/versions/')

const remotes = versions.reduce((acc, version) => {
  const key = version.replaceAll('.', '')

  acc[`components${key}`] = `components${key}@//[window.appurl]/versions/${version}/remoteEntry.js`

  return acc
}, {} as Record<string, string>)

console.log(remotes)

const NODE_MODULES_REGEXP = /[\\/]node_modules[\\/]/
const COMPONENTS_REGEXP = /[\\/]components[\\/]/

const babelOptions: TBabelOptions = {
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
      'babel-plugin-polyfill-corejs3',
      { method: 'usage-global' },
    ],
  ],
  shouldPrintComment: (val: string) => val.startsWith(' webpackChunkName'),
}

const config: TWebpackConfig = {
  mode: 'production',
  entry: [
    path.resolve('./src/polyfills.ts'),
    path.resolve('./src/index.ts'),
  ],
  output: {
    path: path.resolve('./build/'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.mdx'],
    alias: {
      '~': path.resolve('./src/'),
      '@mdx-js/react': path.resolve('./node_modules/@mdx-js/react/'),
      'core-js': path.resolve('./node_modules/core-js/'),
      react: path.resolve('./node_modules/react/'),
      'react-dom': path.resolve('./node_modules/react-dom/'),
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
        options: babelOptions,
      },
      {
        test: /\.tsx?$/,
        exclude: NODE_MODULES_REGEXP,
        resourceQuery: '?example',
        loader: '@saas/example-code-loader',
      },
      {
        test: /\/types\.ts$/,
        exclude: NODE_MODULES_REGEXP,
        resourceQuery: '?api',
        loader: '@saas/types-to-mdx-loader',
      },
      {
        test: /\.mdx?$/,
        exclude: NODE_MODULES_REGEXP,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
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
    minimize: false,
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
    // runtimeChunk: {
    //   name: 'runtime',
    // },
    splitChunks: {
      cacheGroups: {
        default: false,
        common: {
          name: 'common',
          test: COMPONENTS_REGEXP,
          chunks: 'async',
          minChunks: 10,
          minSize: 0,
        },
        vendor: {
          name: 'vendor',
          test: NODE_MODULES_REGEXP,
          chunks: 'all',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'shell',
      remotes,
      shared: {
        react: {
          requiredVersion: '*',
          singleton: true,
        },
        'react-dom/client': {
          requiredVersion: '*',
          singleton: true,
        },
        'react-router-dom': {
          requiredVersion: '*',
          singleton: true,
        },
        history: {
          requiredVersion: '*',
          singleton: true,
        },
        'react-syntax-highlighter': {
          requiredVersion: '*',
          singleton: true,
        },
        'docs-shared': {
          requiredVersion: '*',
          singleton: true,
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
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
