module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { modules: false },
    ],
    '@babel/preset-typescript',
  ],
  generatorOpts: {
    jsescOption: {
      quotes: 'single',
    },
  },
  ignore: [
    '*.d.ts',
    /node_modules/,
  ],
}
