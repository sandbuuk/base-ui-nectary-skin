module.exports = function(code) {
  const callback = this.async()

  import('./loader.js').then((module) =>
    module.loader.call(this, code, callback))
}
