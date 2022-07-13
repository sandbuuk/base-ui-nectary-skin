import Generate from '@babel/generator'
import { parse } from '@babel/parser'
import Traverse from '@babel/traverse'
import {
  isIdentifier,
  isStringLiteral,
  isTSFunctionType,
  isTSIntersectionType,
  isTSLiteralType,
  isTSMethodSignature,
  isTSPropertySignature,
  isTSTypeAliasDeclaration,
  isTSTypeAnnotation,
  isTSTypeLiteral,
  isTSTypeParameterInstantiation,
  isTSTypeReference,
} from '@babel/types'
import { compile } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'

const traverse = Traverse.default
const generate = Generate.default

const getComment = (prop) => {
  const sanitizeComment = (str) => {
    return str
      .split('\n')
      .map((s) => s.trim().replace(/^\*[\s\t]*/, ''))
      .filter((s) => s.length > 0)
      .join('\n')
  }

  const comment = prop.leadingComments?.[0]

  if (comment != null) {
    return sanitizeComment(comment.value)
  }

  return null
}

const generateTable = async (entries, exportedName) => {
  let result = '| Name | Type | Description |\n| :-: | :-: | --- |'

  for (const entry of entries) {
    result += `\n| \`${entry.name + (entry.isOptional ? '?' : '')}\` | \`${entry.value.replaceAll('|', '\\|')}\` | ${entry.comment?.replaceAll('\n', '<br/>') ?? ''} |`
  }

  const compiled = await compile(result, {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkGfm],
    outputFormat: 'function-body',
  })

  return `export const ${exportedName} = (function() {\n${compiled.value}})({ jsx, jsxs, useMDXComponents }).default\n\n`
}

const typeRefs = new Map()

export async function loader(src) {
  const ast = parse(src, {
    sourceType: 'module',
    plugins: [
      'typescript',
    ],
  })

  const elementData = {
    props: [],
    attrs: [],
    events: [],
  }
  const reactData = {
    props: [],
    handlers: [],
  }

  traverse(ast, {
    ExportNamedDeclaration(path) {
      const decl = path.node.declaration

      if (isTSTypeAliasDeclaration(decl)) {
        const isElementType = decl.id.name.endsWith('Element')
        const isReactType = decl.id.name.endsWith('React')
        const isRefType = decl.id.name.endsWith('Type')

        if (isRefType) {
          typeRefs.set(decl.id.name, generate(decl.typeAnnotation).code)

          return
        }

        if (isTSIntersectionType(decl.typeAnnotation)) {
          const literal = decl.typeAnnotation.types.find((t) => isTSTypeLiteral(t))

          for (const member of literal.members) {
            if (isTSPropertySignature(member)) {
              if (isIdentifier(member.key) || isStringLiteral(member.key)) {
                const name = member.key.name ?? member.key.value
                let value = ''
                const comment = getComment(member)
                const isReadonly = member.readonly === true
                const isOptional = member.optional === true

                if (isElementType) {
                  if (!isReadonly) {
                    if (isTSTypeAnnotation(member.typeAnnotation)) {
                      if (
                        isTSTypeReference(member.typeAnnotation.typeAnnotation) &&
                        isIdentifier(member.typeAnnotation.typeAnnotation.typeName) &&
                        typeRefs.has(member.typeAnnotation.typeAnnotation.typeName.name)
                      ) {
                        value = typeRefs.get(member.typeAnnotation.typeAnnotation.typeName.name)
                      } else {
                        value = generate(member.typeAnnotation.typeAnnotation).code
                      }
                    }

                    elementData.props.push({
                      name,
                      value,
                      comment,
                      isOptional,
                    })
                  }

                  continue
                }

                if (isReactType) {
                  let isReactHandler = false

                  if (isTSTypeAnnotation(member.typeAnnotation)) {
                    if (isTSFunctionType(member.typeAnnotation.typeAnnotation)) {
                      const param = member.typeAnnotation.typeAnnotation.parameters[0]

                      if (
                        isIdentifier(param) &&
                        isTSTypeAnnotation(param.typeAnnotation) &&
                        isTSTypeReference(param.typeAnnotation.typeAnnotation) &&
                        isTSTypeParameterInstantiation(param.typeAnnotation.typeAnnotation.typeParameters) &&
                        param.typeAnnotation.typeAnnotation.typeParameters.params.length === 2
                      ) {
                        isReactHandler = true
                        value = generate(param.typeAnnotation.typeAnnotation.typeParameters.params[1]).code
                      }
                    } else if (
                      isTSTypeReference(member.typeAnnotation.typeAnnotation) &&
                      isIdentifier(member.typeAnnotation.typeAnnotation.typeName) &&
                      typeRefs.has(member.typeAnnotation.typeAnnotation.typeName.name)
                    ) {
                      value = typeRefs.get(member.typeAnnotation.typeAnnotation.typeName.name)
                    } else {
                      value = generate(member.typeAnnotation.typeAnnotation).code
                    }
                  }

                  if (isReactHandler) {
                    reactData.handlers.push({
                      name,
                      value,
                      comment,
                      isOptional,
                    })
                  } else {
                    reactData.props.push({
                      name,
                      value,
                      comment,
                      isOptional,
                    })
                  }

                  continue
                }
              }
            }

            if (isTSMethodSignature(member)) {
              if (isIdentifier(member.key) || isStringLiteral(member.key)) {
                let name = ''
                let value = ''
                const comment = getComment(member)
                const isOptional = member.optional === true

                if (isElementType) {
                  const keyName = member.key.name ?? member.key.value
                  const isAttribute = keyName === 'setAttribute'
                  const isEvent = keyName === 'addEventListener'

                  if (isAttribute) {
                    const nameParam = member.parameters[0]
                    const valueParam = member.parameters[1]

                    if (
                      isIdentifier(nameParam) &&
                      isTSTypeAnnotation(nameParam.typeAnnotation) &&
                      isTSLiteralType(nameParam.typeAnnotation.typeAnnotation) &&
                      isStringLiteral(nameParam.typeAnnotation.typeAnnotation.literal)
                    ) {
                      name = nameParam.typeAnnotation.typeAnnotation.literal.value
                    }

                    if (
                      isIdentifier(valueParam) &&
                      isTSTypeAnnotation(valueParam.typeAnnotation)
                    ) {
                      if (
                        isTSTypeReference(valueParam.typeAnnotation.typeAnnotation) &&
                        isIdentifier(valueParam.typeAnnotation.typeAnnotation.typeName) &&
                        typeRefs.has(valueParam.typeAnnotation.typeAnnotation.typeName.name)
                      ) {
                        value = typeRefs.get(valueParam.typeAnnotation.typeAnnotation.typeName.name)
                      } else {
                        value = generate(valueParam.typeAnnotation.typeAnnotation).code
                      }
                    }
                  } else if (isEvent) {
                    const nameParam = member.parameters[0]
                    const valueParam = member.parameters[1]

                    if (
                      isIdentifier(nameParam) &&
                      isTSTypeAnnotation(nameParam.typeAnnotation) &&
                      isTSLiteralType(nameParam.typeAnnotation.typeAnnotation) &&
                      isStringLiteral(nameParam.typeAnnotation.typeAnnotation.literal)
                    ) {
                      name = nameParam.typeAnnotation.typeAnnotation.literal.value
                    }

                    if (
                      isIdentifier(valueParam) &&
                      isTSTypeAnnotation(valueParam.typeAnnotation) &&
                      isTSFunctionType(valueParam.typeAnnotation.typeAnnotation)
                    ) {
                      const param = valueParam.typeAnnotation.typeAnnotation.parameters[0]

                      if (isIdentifier(param) && isTSTypeAnnotation(param.typeAnnotation)) {
                        value = generate(param.typeAnnotation.typeAnnotation).code
                      }
                    }
                  }
                  // else {
                  // name = member.key.name
                  // value = generate(member).code
                  //   .replace(new RegExp(`^${name}`), '')
                  //   .replace(/;$/, '')
                  // }

                  if (name !== '') {
                    if (isAttribute) {
                      elementData.attrs.push({
                        name,
                        value,
                        comment,
                        isOptional,
                      })
                    } else if (isEvent) {
                      elementData.events.push({
                        name,
                        value,
                        comment,
                        isOptional,
                      })
                    }
                  }

                  continue
                }
              }
            }
          }
        }
      }
    },
  })

  let output = 'import { jsx, jsxs } from \'react/jsx-runtime.js\'\n'

  output += 'import { useMDXComponents } from \'@mdx-js/react\'\n'

  if (reactData.props.length > 0) {
    output += await generateTable(reactData.props, 'ReactPropsTable')
  }

  if (reactData.handlers.length > 0) {
    output += await generateTable(reactData.handlers, 'ReactHandlersTable')
  }

  if (elementData.props.length > 0) {
    output += await generateTable(elementData.props, 'ElementPropertiesTable')
  }

  if (elementData.attrs.length > 0) {
    output += await generateTable(elementData.attrs, 'ElementAttributesTable')
  }

  if (elementData.events.length > 0) {
    output += await generateTable(elementData.events, 'ElementEventsTable')
  }

  return output
}
