module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { modules: false },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-html-inline-minifier',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: false,
      },
    ],
  ],
  generatorOpts: {
    jsescOption: {
      quotes: 'single',
    },
  },
  compact: false,
  comments: false,
}
