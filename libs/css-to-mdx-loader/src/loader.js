import { compile } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'

export async function loader(src) {
  let output = 'import { jsx, jsxs } from \'react/jsx-runtime.js\'\n'

  output += 'import { useMDXComponents } from \'@mdx-js/react\'\n'

  const matches = src.matchAll(/(?<key>--.+):/gm)

  let mdContent = ''

  for (const match of matches) {
    mdContent += `* \`${match.groups.key}\`\n`
  }

  const compiled = await compile(mdContent, {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkGfm],
    outputFormat: 'function-body',
  })

  output += `export const Tokens = (function() {\n${compiled.value}})({ jsx, jsxs, useMDXComponents }).default\n\n`

  return output
}
