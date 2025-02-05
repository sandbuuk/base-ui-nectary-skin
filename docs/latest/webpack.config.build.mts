import path from 'path'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import remarkGfm from 'remark-gfm'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import type { TransformOptions as TBabelOptions } from '@babel/core'
import type { CallableOption as TWebpackConfig } from 'webpack-cli'

type TWebpackEnv = Parameters<TWebpackConfig>[1] & { version?: string }
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
      'babel-plugin-polyfill-corejs3',
      { method: 'usage-global' },
    ],
    ['@babel/plugin-proposal-decorators', { version: '2023-11' }],
  ],
  shouldPrintComment: (val: string) => val.startsWith(' webpackChunkName'),
}

const config: TWebpackConfig = (environment) => {
  const versionKey = (environment as TWebpackEnv).version?.replaceAll('.', '_')

  if (!versionKey) {
    throw new Error(`versionKey not found in env`)
  }

  if (!/[0-9]+_[0-9]+_[0-9]+/.test(versionKey)) {
    throw new Error(`Wrong format for version: ${versionKey}`)
  }

  const stylesInjectKey = `__styles${versionKey}`

  return {
    mode: 'production',
    entry: path.resolve('./src/index.ts'),
    output: {
      path: path.resolve('./build/'),
      filename: 'js/[contenthash].js',
      chunkFilename: 'js/[contenthash].js',
      assetModuleFilename: 'images/[contenthash][ext]',
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
    devtool: 'source-map',
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
          test: /\.ts$/,
          exclude: NODE_MODULES_REGEXP,
          resourceQuery: '?api',
          loader: '@saas/types-to-mdx-loader',
        },
        {
          test: /\.html$/,
          exclude: NODE_MODULES_REGEXP,
          resourceQuery: '?slots',
          use: [
            {
              loader: 'babel-loader',
              options: BabelOptions,
            },
            '@saas/slots-to-mdx-loader',
          ],
        },
        {
          test: /\.css$/,
          exclude: NODE_MODULES_REGEXP,
          resourceQuery: '?tokens',
          use: [
            {
              loader: 'babel-loader',
              options: BabelOptions,
            },
            '@saas/css-to-mdx-loader',
          ],
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
          type: 'asset/resource',
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
                insert: (element: HTMLStyleElement, options: Record<string, any>) => {
                  options.target.appendChild(element)
                },
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
      // concatenateModules: false,
      minimize: true,
      minimizer: [
        // @ts-ignore
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
        // new ImageMinimizerPlugin({
        //   minimizer: {
        //     implementation: ImageMinimizerPlugin.imageminMinify,
        //     options: {
        //       plugins: [
        //         'imagemin-pngquant',
        //       ],
        //     },
        //   },
        // }),
      ],
      splitChunks: {
        cacheGroups: {
          default: false,
          common: {
            name: `common${versionKey}`,
            test: /\/docs\/common\//,
            chunks: 'async',
          },
          vendor: {
            name: `vendor${versionKey}`,
            test: (mod: any) => {
              if (!Reflect.has(mod, 'resource')) {
                return false
              }

              if (!mod.resource.includes('/node_modules/')) {
                return false
              }

              if (
                mod.resource.includes('/node_modules/react/') ||
                mod.resource.includes('/node_modules/react-dom/') ||
                mod.resource.includes('/node_modules/history/') ||
                mod.resource.includes('/node_modules/react-router-dom/')
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
      new webpack.CleanPlugin(),
      new webpack.DefinePlugin({
        __REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',
        STYLE_INJECT_KEY: JSON.stringify(stylesInjectKey),
        REQ_CHUNK_NAME: JSON.stringify(`Components${versionKey}-[request]`),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[contenthash].css',
        chunkFilename: 'css/[contenthash].css',
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
          window.dispatchEvent(new CustomEvent('style-loader', { detail: element }))
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
}

export default config
