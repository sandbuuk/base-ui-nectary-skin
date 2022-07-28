module.exports = function(code) {
  return import('./loader.js').then(({ loader }) => loader(code))
}
