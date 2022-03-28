const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const CONTAINER = 'Quickstarts'

module.exports = {
  mode: 'production',
  // These entries are only used for the standalone page.
  // The Micro FrontEnd is exposed through the ModuleFederationPlugin.
  entry: {
    main: [
      // Shell polyfills this scoped registry, we need to as well.
      require.resolve('@webcomponents/scoped-custom-element-registry'),
      require.resolve('./src/index.ts'),
    ],
    // We need a separate entry for theme.css so it is included in the standalone
    // html page. This will emulate how the styles would when mounted in the
    // shell application. (This is also needed for the fonts to work)
    globalStyle: require.resolve('@sinch-engage/nectary/theme.css'),
  },
  output: {
    chunkFilename: '[name].[chunkhash].js',
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name]_[contenthash:6].[ext]',
        },
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          compact: false,
          presets: [
            ['@babel/preset-env', { modules: false }],
            '@babel/preset-typescript',
            ['@babel/preset-react', { runtime: 'automatic' }],
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // Module support is automatic for filenames containing ".module."
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  watch: false,
  optimization: {
    minimize: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: CONTAINER,
      filename: 'remoteEntry.js',
      exposes: {
        './Container': require.resolve('./src/container.tsx'),
      },
      shared: {
        '@sinch-engage/nectary/theme.css': {
          requiredVersion: '*',
        },
        react: {
          requiredVersion: '^17.0.0',
          singleton: true,
        },
        'react-dom': {
          requiredVersion: '^17.0.0',
          singleton: true,
        },
        'react-router-dom': {
          requiredVersion: '^6.0.0',
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      // Override here to make `auto` publicPath work for loading the scripts for the stand alone page.
      publicPath: '/',
    }),
    new MiniCssExtractPlugin({
      insert: (element) => {
        const getFilename = (path) => path.substr(path.lastIndexOf('/'))
        const name = 'sinch-quickstarts-app'
        const h = document.head
        // Needed for webpack to know the module has loaded.
        const dispatchLoad = (el) => el.dispatchEvent(new Event('load'))

        // Check if such css already exists in document.head
        // like a main entry would, and make sure we won't add it twice.
        for (const child of h.children) {
          if (child.tagName !== 'LINK') {
            continue
          }

          if (getFilename(child.href) === getFilename(element.href)) {
            return void dispatchLoad(element)
          }
        }

        // If it does not exist in the head, insert into the MFE style fragment.
        h[name] = h[name] || document.createDocumentFragment()
        h[name].appendChild(element)
        dispatchLoad(element)
      },
    }),
  ],
}
