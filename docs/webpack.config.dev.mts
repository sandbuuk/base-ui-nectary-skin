import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import webpack from 'webpack'
import type { TransformOptions as TBabelOptions } from '@babel/core'
import type { Configuration } from 'webpack'

const PORT = 5000

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
}

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
      'core-js': path.resolve('./node_modules/core-js/'),
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
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelOptions,
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
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
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
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['raw-loader', '@saas/html-minify-loader'],
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
    new HtmlPlugin({
      template: path.resolve('./public/index.html'),
      favicon: path.resolve('./public/favicon.png'),
    }),
    new webpack.DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',
    }),
  ],
}

export default config
