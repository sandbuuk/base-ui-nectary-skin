import { compile } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'

export async function loader(htmlString) {
  let output = 'import { jsx, jsxs } from \'react/jsx-runtime.js\'\n'

  output += 'import { useMDXComponents } from \'@mdx-js/react\'\n'

  const regex = /<slot.*?name="([^"]*)".*?>/g

  const cleanHtmlString = htmlString.replace('export default "', '').replace('";', '')
    .replace(/\\"/g, '"')
    .replace(/\\n/g, '\n')

  const matches = Array.from(cleanHtmlString.matchAll(regex)).map((match) => match[1])

  let mdContent = ''

  for (const match of matches) {
    mdContent += `* \`${match}\`\n`
  }

  const compiled = await compile(mdContent, {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkGfm],
    outputFormat: 'function-body',
  })

  output += `export const Slots = (function() {\n${compiled.value}})({ jsx, jsxs, useMDXComponents }).default\n\n`

  return output
}
