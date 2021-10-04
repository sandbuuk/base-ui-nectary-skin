const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { MFLiveReloadPlugin } = require('@module-federation/fmr')

const CONTAINER = 'AngularApp'
const PORT = 3004

module.exports = {
  output: {
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  devServer: {
    host: 'localhost',
    port: PORT,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
    ]
  },
  plugins: [
    new MFLiveReloadPlugin({
      container: CONTAINER,
      port: PORT
    }),
    new ModuleFederationPlugin({
      name: CONTAINER,
      filename: 'remoteEntry.js',
      exposes: {
        './Container': require.resolve('./src/container.ts')
      },
      shared: {
        '@saas/components/button': {
          requiredVersion: '^0.0.0',
          eager: true
        },
        // "@angular/core": { eager: true, singleton: true },
        // "@angular/common": { eager: true, singleton: true },
        // "@angular/router": { eager: true, singleton: true },
      },
    }),
  ],
};
