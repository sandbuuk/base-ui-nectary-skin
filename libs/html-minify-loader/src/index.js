const { minify } = require('html-minifier-terser')

module.exports = (src) => {
  return minify(src, {
    collapseWhitespace: true,
    keepClosingSlash: true,
    minifyCSS: true,
    removeComments: true,
    noNewlinesBeforeTagClose: true,
    collapseInlineTagWhitespace: true,
  })
}
