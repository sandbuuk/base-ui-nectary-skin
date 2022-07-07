import '@sinch-engage/nectary/title'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/link'
import { Children } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <sinch-title type="xl" level="1" text={children as string}/>
  ),
  h2: ({ children }) => (
    <sinch-title type="l" level="2" text={children as string}/>
  ),
  h3: ({ children }) => (
    <sinch-title type="m" level="3" text={children as string}/>
  ),
  h4: ({ children }) => (
    <sinch-title type="m" level="4" text={children as string}/>
  ),
  h5: ({ children }) => (
    <sinch-title type="m" level="5" text={children as string}/>
  ),
  h6: ({ children }) => (
    <sinch-title type="m" level="6" text={children as string}/>
  ),
  p: ({ children }) => (
    <p>
      {Children.map(children, (child) => (
        typeof child === 'string'
          ? <sinch-text inline type="m" text={child}/>
          : child
      ))}
    </p>
  ),
  a: ({ href = '#', children }) => {
    const isExternal = href.startsWith('http')

    return (
      <sinch-link href={href} text={children as string} external={isExternal}/>
    )
  },
  code: ({ className, children }) => {
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
