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
              if (isIdentifier(member.key)) {
                const name = member.key.name
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

                      if (isIdentifier(param) && isTSTypeAnnotation(param.typeAnnotation)) {
                        isReactHandler = true
                        value = generate(param.typeAnnotation.typeAnnotation).code
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
              if (isIdentifier(member.key)) {
                let name = ''
                let value = ''
                const comment = getComment(member)
                const isOptional = member.optional === true

                if (isElementType) {
                  const isAttribute = member.key.name === 'setAttribute'
                  const isEvent = member.key.name === 'addEventListener'

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

  const getRow = (entry) => {
    return `\n| ${entry.name + (entry.isOptional ? '?' : '')} | \`${entry.value.replaceAll('|', '\\|')}\` | ${entry.comment?.replaceAll('\n', '<br/>') ?? ''} |`
  }
  const HEADER = '| Name | Type | Description |\n| :-: | :-: | --- |'

  let output = '### React'

  if (reactData.props.length > 0) {
    output += `\n\n#### Props\n\n${HEADER}`

    for (const entry of reactData.props) {
      output += getRow(entry)
    }
  }

  if (reactData.handlers.length > 0) {
    output += `\n\n#### Handlers\n\n${HEADER}`

    for (const entry of reactData.handlers) {
      output += getRow(entry)
    }
  }

  output += '\n\n### Element'

  if (elementData.props.length > 0) {
    output += `\n\n#### Properties\n\n${HEADER}`

    for (const entry of elementData.props) {
      output += getRow(entry)
    }
  }

  if (elementData.attrs.length > 0) {
    output += `\n\n#### Attributes\n\n${HEADER}`

    for (const entry of elementData.attrs) {
      output += getRow(entry)
    }
  }

  if (elementData.events.length > 0) {
    output += `\n\n#### Events\n\n${HEADER}`

    for (const entry of elementData.events) {
      output += getRow(entry)
    }
  }

  const result = await compile(output, {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkGfm],
  })

  return result.value
}
