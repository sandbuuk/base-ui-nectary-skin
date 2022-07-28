/* eslint-disable node/no-sync */
const cp = require('child_process')
// const fs = require('fs')
const p = require('path')

const execPath = p.resolve(require.resolve('html-minifier-terser'), '../../cli.js')

module.exports = function({ types: t }) {
  return {
    visitor: {
      ImportDeclaration: {
        exit(path, state) {
          const node = path.node

          if (node.source.value.endsWith('.html')) {
            const dir = p.dirname(p.resolve(state.file.opts.filename))
            const absolutePath = p.resolve(dir, node.source.value)
            const minHtml = cp.execSync(`node ${execPath} --collapse-whitespace --keep-closing-slash --minify-css --remove-comments ${absolutePath}`).toString()

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
