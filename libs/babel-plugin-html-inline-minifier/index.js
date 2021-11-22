/* eslint-disable node/no-sync */
const cp = require('child_process')
// const fs = require('fs')
const p = require('path')

module.exports = function({ types: t }) {
  return {
    visitor: {
      ImportDeclaration: {
        exit(path, state) {
          const node = path.node

          if (node.source.value.endsWith('.html')) {
            const dir = p.dirname(p.resolve(state.file.opts.filename))
            const absolutePath = p.resolve(dir, node.source.value)
            const minHtml = cp.execSync(`./node_modules/.bin/html-minifier-terser --collapse-whitespace --keep-closing-slash --minify-css --remove-comments ${absolutePath}`, { cwd: __dirname }).toString()

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
