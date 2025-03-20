import Generate from '@babel/generator'
import { parse } from '@babel/parser'
import Traverse from '@babel/traverse'
import {
  isIdentifier,
  isTSIntersectionType,
  isTSPropertySignature,
  isTSTypeAliasDeclaration,
  isTSTypeAnnotation,
  isTSTypeLiteral,
  isTSTypeReference,
  isTSMethodSignature,
  isTSUnionType,
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
  const frameworks = exportedName === 'ElementEventsTable' ? ['Vanilla', 'React'] : ['']
  let result = ''

  for (const framework of frameworks) {
    result += framework ? `\n#### ${framework}\n` : ''
    result += exportedName === 'ElementMethodsTable'
      ? '| Name | Parameters | Return Type | Description |\n| --- | --- | --- | --- |'
      : '| Name | Type | Description |\n| --- | --- | --- |'

    const eventNamePrefix = framework === 'React' ? 'on' : ''

    for (const entry of entries) {
      if (exportedName === 'ElementMethodsTable') {
        const paramDisplay = entry.parameters ? `\`${entry.parameters}\`` : '-'
        const returnTypeDisplay = entry.returnType ? `\`${entry.returnType}\`` : '-'

        result += `\n| \`${entry.name}\` | \`${paramDisplay}\` | \`${returnTypeDisplay}\` | ${entry.comment?.replaceAll('\n', '<br/>') ?? ''} |`
      } else {
        result += `\n| \`${eventNamePrefix}${entry.name + (entry.isOptional ? '?' : '')}\` | \`${entry.value.replaceAll('|', '\\|').replaceAll('\n', ' ')}\` | ${entry.comment?.replaceAll('\n', '<br/>') ?? ''} |`
      }
    }
  }

  const resultWrapped = `<div>\n${result}\n</div>`

  const compiled = await compile(resultWrapped, {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkGfm],
    outputFormat: 'function-body',
  })

  return `export const ${exportedName} = (function() {\n${compiled.value}})({ jsx, jsxs, useMDXComponents }).default\n\n`
}

const typeRefs = new Map([
  ['TSinchSize', '\'l\' | \'m\' | \'s\''],
  ['TSinchSizeEx', '\'l\' | \'m\' | \'s\' | \'xs\''],
])

export async function loader(src) {
  const ast = parse(src, {
    sourceType: 'module',
    plugins: [
      'typescript',
    ],
  })

  const typeData = {
    props: [],
    events: [],
    methods: [],
  }

  traverse(ast, {
    ExportNamedDeclaration(path) {
      const decl = path.node.declaration

      if (!isTSTypeAliasDeclaration(decl)) {
        return
      }

      const isPropsType = decl.id.name.endsWith('Props')
      const isEventsType = decl.id.name.endsWith('Events')
      const isMethodsType = decl.id.name.endsWith('Methods')

      const isRefType = !isPropsType && !isEventsType && !isMethodsType

      if (isRefType) {
        typeRefs.set(decl.id.name, generate(decl.typeAnnotation).code)

        return
      }

      // Unwrap parenthesized type if present
      const typeAnnotation = decl.typeAnnotation.type === 'TSParenthesizedType'
        ? decl.typeAnnotation.typeAnnotation
        : decl.typeAnnotation

      if (!isTSIntersectionType(typeAnnotation) && !isTSTypeLiteral(typeAnnotation) && !isTSUnionType(typeAnnotation)) {
        return
      }

      let literalMembers = []

      if (isTSIntersectionType(typeAnnotation)) {
        literalMembers = typeAnnotation.types.find((t) => isTSTypeLiteral(t))?.members
      } else if (isTSTypeLiteral(typeAnnotation)) {
        literalMembers = typeAnnotation.members
      } else if (isTSUnionType(typeAnnotation)) {
        // Handle union types by collecting and merging members from all object literals
        const memberMap = new Map()

        typeAnnotation.types
          .filter((t) => isTSTypeLiteral(t))
          .forEach((t) => {
            t.members.forEach((member) => {
              const key = member.key.name ?? member.key.value

              if (!memberMap.has(key)) {
                memberMap.set(key, {
                  ...member,
                  typeAnnotation: {
                    type: 'TSTypeAnnotation',
                    typeAnnotation: {
                      type: 'TSUnionType',
                      types: [],
                    },
                  },
                })
              }

              const existingMember = memberMap.get(key)

              existingMember.typeAnnotation.typeAnnotation.types.push(member.typeAnnotation.typeAnnotation)
            })
          })

        literalMembers = Array.from(memberMap.values())
      }

      for (const member of (literalMembers ?? [])) {
        const comment = getComment(member)
        const isReadonly = member.readonly === true
        const isOptional = member.optional === true

        if (isMethodsType && isTSMethodSignature(member)) {
          const name = member.key.name ?? member.key.value
          const parameters = member.parameters.map((param) => {
            const paramName = param.name
            const paramType = generate(param.typeAnnotation?.typeAnnotation).code

            return `${paramName}: ${paramType}`
          }).join(', ')

          // Handle return type references similar to props
          let returnType = 'void'

          if (member.typeAnnotation) {
            const typeAnnotation = member.typeAnnotation.typeAnnotation

            if (
              isTSTypeReference(typeAnnotation) &&
              isIdentifier(typeAnnotation.typeName) &&
              typeRefs.has(typeAnnotation.typeName.name)
            ) {
              returnType = typeRefs.get(typeAnnotation.typeName.name)
            } else {
              returnType = generate(typeAnnotation).code
            }
          }

          typeData.methods.push({
            name,
            parameters,
            returnType: returnType.replaceAll('|', '\\|').replaceAll('\n', ' '), // Escape pipes and newlines
            comment,
            isOptional,
            isReadonly,
          })
          continue
        }

        if (isPropsType) {
          const name = member.key.name ?? member.key.value
          let value = ''

          if (isTSTypeAnnotation(member.typeAnnotation)) {
            if (
              isTSTypeReference(member.typeAnnotation.typeAnnotation) &&
                    isIdentifier(member.typeAnnotation.typeAnnotation.typeName) &&
                    typeRefs.has(member.typeAnnotation.typeAnnotation.typeName.name)
            ) {
              value = typeRefs.get(member.typeAnnotation.typeAnnotation.typeName.name)
            } else if (isTSUnionType(member.typeAnnotation.typeAnnotation)) {
              value = member.typeAnnotation.typeAnnotation.types.map((type) => {
                if (
                  isTSTypeReference(type) &&
                        isIdentifier(type.typeName) &&
                        typeRefs.has(type.typeName.name)
                ) {
                  return typeRefs.get(type.typeName.name)
                }

                return generate(type).code
              }).join(' | ')
            } else {
              value = generate(member.typeAnnotation.typeAnnotation).code
            }
          }

          typeData.props.push({
            name,
            value,
            comment,
            isOptional,
            isReadonly,
          })
          continue
        }

        if (isEventsType) {
          if (isTSPropertySignature(member)) {
            const name = member.key.name ?? member.key.value
            let value = ''
            const comment = getComment(member)
            const isReadonly = member.readonly === true
            const isOptional = member.optional === true

            if (isTSTypeAnnotation(member.typeAnnotation)) {
              if (
                isTSTypeReference(member.typeAnnotation.typeAnnotation) &&
                      isIdentifier(member.typeAnnotation.typeAnnotation.typeName) &&
                      typeRefs.has(member.typeAnnotation.typeAnnotation.typeName.name)
              ) {
                value = typeRefs.get(member.typeAnnotation.typeAnnotation.typeName.name)
              } else if (isTSUnionType(member.typeAnnotation.typeAnnotation)) {
                value = member.typeAnnotation.typeAnnotation.types.map((type) => {
                  if (
                    isTSTypeReference(type) &&
                          isIdentifier(type.typeName) &&
                          typeRefs.has(type.typeName.name)
                  ) {
                    return typeRefs.get(type.typeName.name)
                  }

                  return generate(type).code
                }).join(' | ')
              } else {
                value = generate(member.typeAnnotation.typeAnnotation).code
              }
            }

            const regex = /(CustomEvent<\w+>)/
            const match = value.match(regex)

            typeData.events.push({
              name,
              value: match?.[1] || value,
              comment,
              isOptional,
              isReadonly,
            })
            continue
          }
        }
      }
    },
  })

  let output = 'import { jsx, jsxs } from \'react/jsx-runtime.js\'\n'

  output += 'import { useMDXComponents } from \'@mdx-js/react\'\n'

  // Generate tables based on available data
  if (typeData.props.length > 0) {
    output += await generateTable(typeData.props, 'ElementAttributesTable')
  }

  if (typeData.events.length > 0) {
    output += await generateTable(typeData.events, 'ElementEventsTable')
  }

  if (typeData.methods.length > 0) {
    output += await generateTable(typeData.methods, 'ElementMethodsTable')
  }

  return output
}
