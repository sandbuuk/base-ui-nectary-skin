import '@sinch-engage/nectary/title'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <sinch-title type="xl" aria-level="1" text={children as string}/>
  ),
  h2: ({ children }) => (
    <sinch-title type="l" aria-level="2" text={children as string}/>
  ),
  h3: ({ children }) => (
    <sinch-title type="m" aria-level="3" text={children as string}/>
  ),
  code: ({ children, className }) => {
    if (className == null) {
      return (
        <code>{children}</code>
      )
    }

    const language = className.replace('language-', '')

    return (
      <SyntaxHighlighter language={language} style={dracula}>
        {children as string}
      </SyntaxHighlighter>
    )
  },
}
