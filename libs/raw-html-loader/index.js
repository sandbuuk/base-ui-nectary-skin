const { minify } = require('html-minifier-terser')

module.exports = async (source) => {
  const minified = await minify(source, {
    minifyCSS: true,
  })

  return `export default ${JSON.stringify(minified)}`
}
