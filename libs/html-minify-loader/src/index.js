const { basename } = require('path')
const { minify } = require('html-minifier-terser')

module.exports = function(src) {
  const options = this.getOptions()
  const isTemplateFile = basename(this.resourcePath) === 'template.html'

  if (isTemplateFile && options.injectTestStyles === true) {
  // eslint-disable-next-line no-param-reassign
    src = `
      ${src}
      <style>
      :host * {
        scrollbar-width: none !important;
        caret-color: transparent !important;
        animation: none !important;
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
    minifyCSS: {
      level: {
        1: {
          removeEmpty: false,
        },
      },
    },
    removeComments: true,
    noNewlinesBeforeTagClose: true,
    collapseInlineTagWhitespace: true,
  })
}
