// {
//   test: require.resolve('@vue/runtime-dom/dist/runtime-dom.esm-bundler.js'),
//   loader: require.resolve('@saas/vue-loader')
// }

module.exports = (src) => {
  const newLineIndex = src.indexOf('\n\n')
  const importsChunk = src.substr(0, newLineIndex)
  const bodyChunk = src.substr(newLineIndex)

  return `${importsChunk}
  const bindCache = new Map()
  const document = new Proxy(window.document, {
    get(obj, prop) {
      if (prop === 'createElement' && window['VueApp']?.createElement != null) {
        return window['VueApp'].createElement
      }

      const value = obj[prop]

      if (typeof value === 'function') {
        if (bindCache.has(prop)) {
          return bindCache.get(prop)
        }

        const boundValue = value.bind(obj)

        bindCache.set(prop, boundValue)

        return boundValue
      }

      return value
    }
  })
  ${bodyChunk}`
}
