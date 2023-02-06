import path from 'path'
import pkg from '@sinch-engage/nectary/package.json' assert { type: 'json' }
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import remarkGfm from 'remark-gfm'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import type { TransformOptions as TBabelOptions } from '@babel/core'
import type { Configuration as TWebpackConfig } from 'webpack'

const NODE_MODULES_REGEXP = /[\\/]node_modules[\\/]/
const COMPONENTS_REGEXP = /[\\/]components[\\/]/
const versionKey = pkg.version.replaceAll('.', '_')
const stylesInjectKey = `__styles${versionKey}`

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
      'babel-plugin-polyfill-corejs3',
      { method: 'usage-global' },
    ],
  ],
  shouldPrintComment: (val: string) => val.startsWith(' webpackChunkName'),
}

const config: TWebpackConfig = {
  mode: 'production',
  entry: path.resolve('./src/index.ts'),
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
        exclude: NODE_MODULES_REGEXP,
        loader: 'babel-loader',
        options: BabelOptions,
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
            options: BabelOptions,
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
      // @ts-expect-error
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
          name: `common${versionKey}`,
          test: COMPONENTS_REGEXP,
          chunks: 'async',
          minChunks: 10,
          minSize: 0,
        },
        vendor: {
          name: `vendor${versionKey}`,
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
      name: `components${versionKey}`,
      filename: 'remoteEntry.js',
      exposes: {
        './bootstrap': {
          import: path.resolve('./src/bootstrap.tsx'),
          name: `components${versionKey}-bootstrap`,
        },
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
        'react-syntax-highlighter': {
          requiredVersion: '*',
          singleton: true,
        },
      },
    }),
    new webpack.CleanPlugin(),
    new webpack.DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',
      STYLE_INJECT_KEY: JSON.stringify(stylesInjectKey),
      REQ_CHUNK_NAME: JSON.stringify(`Components${versionKey}-[request]`),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
      insert: (element: Element) => {
        const key = element.getAttribute('data-key')

        if (key === null) {
          throw new Error('Cannot get Style inject key')
        }

        if (!Reflect.has(document.head, key)) {
          Reflect.set(document.head, key, document.createDocumentFragment())
        }

        Reflect.get(document.head, key).appendChild(element)

        element.dispatchEvent(new Event('load'))
      },
      attributes: {
        'data-key': stylesInjectKey,
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      logLevel: 'silent',
    }),
  ],
}

export default config
