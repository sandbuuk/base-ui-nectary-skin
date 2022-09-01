const { minify } = require('html-minifier-terser')

module.exports = (src) => {
  if (process.env.CI != null) {
  // eslint-disable-next-line no-param-reassign
    src = `
      ${src}
      <style>
      :host * {
        scrollbar-width: none !important;
        caret-color: transparent !important;
      }
      :host *::-webkit-scrollbar {
        display: none !important;
      }
      </style>
    `
  }

  return minify(src, {
    collapseWhitespace: true,
    keepClosingSlash: true,
    minifyCSS: true,
    removeComments: true,
    noNewlinesBeforeTagClose: true,
    collapseInlineTagWhitespace: true,
  })
}
