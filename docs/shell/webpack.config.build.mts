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

const versionToKey = (version: string) => {
  switch (version) {
    case '0.49.0':
    case '1.0.1':
      return version.replaceAll('.', '')
    default:
      return version.replaceAll('.', '_')
  }
}
const remotes = {} as Record<string, string>

// eslint-disable-next-line node/no-sync
fs.readdirSync('../../public/docs/versions/', { withFileTypes: true }).forEach((entry) => {
  if (!entry.isDirectory()) {
    return
  }

  const version = entry.name
  const key = versionToKey(version)

  remotes[`components${key}`] = `components${key}@//[window.appurl]/versions/${version}/remoteEntry.js`
})

console.log('-- REMOTES --')
console.log(remotes)

const NODE_MODULES_REGEXP = /[\\/]node_modules[\\/]/
// const COMPONENTS_REGEXP = /[\\/]components[\\/]/

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
    filename: 'js/[contenthash].js',
    chunkFilename: 'js/[contenthash].js',
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
        resourceQuery: '',
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
  performance: {
    hints: false,
  },
  optimization: {
    // chunkIds: 'named',
    minimize: false,
    minimizer: [
      // @ts-expect-error
      new TerserPlugin({
        parallel: true,
        extractComments: false,
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
          test: /\/docs\/common\//,
          chunks: 'async',
        },
        vendor: {
          test: (mod: any) => {
            if (!Reflect.has(mod, 'resource')) {
              return false
            }

            if (!mod.resource.includes('/node_modules/')) {
              return false
            }

            if (
              mod.resource!.includes('/node_modules/react/') ||
              mod.resource!.includes('/node_modules/react-dom/') ||
              mod.resource!.includes('/node_modules/history/') ||
              mod.resource!.includes('/node_modules/react-router-dom/')
            ) {
              return false
            }

            return true
          },
          chunks: 'async',
          priority: 10,
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
        'react-dom': {
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
    new ExternalTemplateRemotesPlugin(),
    new webpack.CleanPlugin(),
    new webpack.DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash].css',
      chunkFilename: 'css/[contenthash].css',
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
