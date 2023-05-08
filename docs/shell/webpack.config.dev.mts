import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'
import remarkGfm from 'remark-gfm'
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
  entry: [
    path.resolve('./src/polyfills.ts'),
    path.resolve('./src/index.ts'),
  ],
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
      react: path.resolve('./node_modules/react/'),
      'react-dom': path.resolve('./node_modules/react-dom'),
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
              remarkPlugins: [remarkGfm],
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
        test: /\.css$/i,
        resourceQuery: '',
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/i,
        resourceQuery: '?theme',
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'lazyStyleTag',
            },
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  // @ts-ignore
  devServer: {
    host: '0.0.0.0',
    port: PORT,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        components: 'components@//localhost:5001/remoteEntry.js',
      },
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
      },
    }),
    new HtmlPlugin({
      template: path.resolve('./public/index.html'),
      favicon: path.resolve('./public/favicon.png'),
    }),
    new webpack.DefinePlugin({}),
  ],
}

export default config
