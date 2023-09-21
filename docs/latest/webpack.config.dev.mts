import path from 'path'
import pkg from '@nectary/components/package.json' assert { type: 'json' }
import remarkGfm from 'remark-gfm'
import webpack from 'webpack'
import type { TransformOptions as TBabelOptions } from '@babel/core'
import type { Configuration } from 'webpack'

declare let STYLE_INJECT_KEY: string
const stylesInjectKey = pkg.version.replaceAll('.', '')
const PORT = 5001

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
}

const config: Configuration = {
  mode: 'development',
  entry: path.resolve('./src/index.ts'),
  // output: {
  //   chunkFilename: '[name].js',
  //   publicPath: '/',
  //   pathinfo: true,
  // },
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
        exclude: /node_modules/,
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
        test: /\.css$/,
        exclude: /node_modules/,
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
        exclude: /node_modules/,
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
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['raw-loader', '@saas/html-minify-loader'],
      },
      {
        test: /\.css$/i,
        resourceQuery: '',
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: (element: HTMLStyleElement) => {
                if (!Reflect.has(document.head, STYLE_INJECT_KEY)) {
                  Reflect.set(document.head, STYLE_INJECT_KEY, document.createDocumentFragment())
                }

                Reflect.get(document.head, STYLE_INJECT_KEY).appendChild(element)
              },
              styleTagTransform: (css: string, element: HTMLStyleElement) => {
                element.replaceChildren(document.createTextNode(css))

                window.dispatchEvent(new CustomEvent('style-loader', { detail: element }))
              },
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: false,
            },
          },
        ],
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
            options: {
              sourceMap: false,
            },
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
      name: 'components',
      filename: 'remoteEntry.js',
      exposes: {
        './bootstrap': path.resolve('./src/bootstrap.tsx'),
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
    new webpack.DefinePlugin({
      STYLE_INJECT_KEY: JSON.stringify(stylesInjectKey),
      REQ_CHUNK_NAME: JSON.stringify('Components-[request]'),
    }),
  ],
}

export default config
