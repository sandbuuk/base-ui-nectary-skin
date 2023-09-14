/* eslint-disable no-loop-func */
const handle = (PREFIX, IMPORT, ignores = []) => {
  const nectaryImports = new Map()
  const nectaryElements = new Map()
  let lastNectaryImportNode = null
  let lastImportNode = null

  return {
    ImportDeclaration(node) {
      lastImportNode = node

      const value = node.source?.value

      if (value?.startsWith(IMPORT) === true && !value.includes('/utils') && !value.endsWith('/types')) {
        nectaryImports.set(value.substr(IMPORT.length), node)
        lastNectaryImportNode = node

        return true
      }

      return false
    },
    JSXOpeningElement(node) {
      const value = node.name?.name

      if (value?.startsWith(PREFIX) === true && !nectaryElements.has(value) && !ignores.includes(value)) {
        nectaryElements.set(value.substr(PREFIX.length), node)

        return true
      }

      return false
    },
    'Program:exit'(context, programNode) {
      for (const [value, node] of nectaryElements) {
        if (!nectaryImports.has(value)) {
          context.report({
            node,
            message: `${PREFIX}${value} import is missing`,
            fix(fixer) {
              if (lastNectaryImportNode !== null) {
                return fixer.insertTextAfter(lastNectaryImportNode, `\nimport '${IMPORT}${value}'`)
              }

              if (lastImportNode !== null) {
                return fixer.insertTextAfter(lastImportNode, `\nimport '${IMPORT}${value}'`)
              }

              return fixer.insertTextBefore(programNode.body[0], `import '${IMPORT}${value}'\n`)
            },
          })
        }
      }

      for (const [value, node] of nectaryImports) {
        if (!nectaryElements.has(value)) {
          context.report({
            node,
            message: `${PREFIX}${value} import is redundant`,
            fix(fixer) {
              return fixer.remove(node)
            },
          })
        }
      }

      nectaryElements.clear()
      nectaryImports.clear()
      lastImportNode = null
      lastNectaryImportNode = null
    },
  }
}

const pipe = (...configs) => (context) => {
  return {
    ImportDeclaration(node) {
      configs.some((c) => c.ImportDeclaration(node))
    },
    JSXOpeningElement(node) {
      configs.some((c) => c.JSXOpeningElement(node))
    },
    'Program:exit'(node) {
      configs.forEach((c) => c['Program:exit'](context, node))
    },
  }
}

module.exports = {
  rules: {
    imports: {
      meta: {
        type: 'problem',
        fixable: 'code',
      },
      create: pipe(
        handle('sinch-illustration-', '@nectary/assets/illustrations/'),
        handle('sinch-animation-', '@nectary/assets/animations/'),
        handle('sinch-logo-', '@nectary/assets/logo/'),
        handle('sinch-icon-branded-', '@nectary/assets/icons-branded/'),
        handle('sinch-icon-channel-', '@nectary/assets/icons-channel/'),
        handle('sinch-icon-', '@nectary/assets/icons/', ['sinch-icon-button']),
        handle('sinch-', '@nectary/components/')
      ),
    },
  },
}
