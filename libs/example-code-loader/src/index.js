const path = require('path')

module.exports = function(src) {
  const exportedName = path.basename(this.resourcePath, path.extname(this.resourcePath))

  return `${src}\n${exportedName}Example.toString = () => \`\n${src}\``
}
