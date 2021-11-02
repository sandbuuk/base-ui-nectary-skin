const { minify } = require('html-minifier-terser')

module.exports = async (source) => {
  const minified = await minify(source, {
    collapseWhitespace: true,
    keepClosingSlash: true,
    minifyCSS: true,
    removeComments: true,
  })

  return `export default ${JSON.stringify(minified)}`
}
