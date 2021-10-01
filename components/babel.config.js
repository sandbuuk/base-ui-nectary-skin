module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 1 Chrome version', 'last 1 Firefox version'],
        },
        ignoreBrowserslistConfig: true,
        modules: false
      },
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      { runtime: 'automatic' }
    ]
  ],
  plugins: [
    'babel-plugin-transform-html-import-to-string'
  ]
}
