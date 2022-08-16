/* eslint-disable node/no-sync */
const fs = require('fs')
const p = require('path')
const { minify } = require('html-minifier-terser')

module.exports = function({ types: t }) {
  return {
    visitor: {
      ImportDeclaration: {
        exit(path, state) {
          const node = path.node

          if (node.source.value.endsWith('.html')) {
            const dir = p.dirname(p.resolve(state.file.opts.filename))
            const absolutePath = p.resolve(dir, node.source.value)
            const src = fs.readFileSync(absolutePath, 'utf-8')
            const minHtml = minify(src, {
              collapseWhitespace: true,
              keepClosingSlash: true,
              minifyCSS: true,
              removeComments: true,
              noNewlinesBeforeTagClose: true,
              collapseInlineTagWhitespace: true,
            })

            path.replaceWith(t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier(node.specifiers[0].local.name),
                t.stringLiteral(minHtml)
              ),
            ]))
          }
        },
      },
    },
  }
}
