const config = require('./babel.config')
const updatedConfig = { ...config }

updatedConfig.plugins.push('@babel/plugin-transform-modules-commonjs')

module.exports = {
  ...updatedConfig,
}
