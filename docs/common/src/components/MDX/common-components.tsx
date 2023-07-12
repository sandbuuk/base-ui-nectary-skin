import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary/code-tag'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-cell'
import { Children } from 'react'
import './styles.css'
import { SyntaxHighlighter } from '../SyntaxHighlighter'
import type { MDXComponents } from 'mdx/types'
import type { ReactElement } from 'react'

export const commonComponents: MDXComponents = {
  p: ({ children }) => (
    <sinch-text class="paragraph" type="m">
      {Children.map(children, (child) => (
        typeof child === 'string'
          ? <sinch-text inline type="m">{child}</sinch-text>
          : child
      ))}
    </sinch-text>
  ),
  a: ({ href = '#', children }) => {
    const isExternal = href.startsWith('http')
    let newHref = href

    if (!isExternal) {
      const newSearchParams = new URLSearchParams(href)
      const currentUrl = new URL(location.href)

      for (const [key, value] of newSearchParams) {
        currentUrl.searchParams.set(key, value)
      }

      const { protocol, host, pathname, searchParams } = currentUrl

      newHref = `${protocol}//${host}${pathname}?`
      newHref += Array.from(searchParams).map(([key, value]) => {
        if (key !== 'path') {
          return `${key}=${encodeURIComponent(value)}`
        }

        return `${key}=${value}`
      }).join('&')
    }

    return (
      <sinch-link
        href={newHref}
        text={children as string}
        aria-label={children as string}
        external={isExternal}
      />
    )
  },
  ul: ({ children }) => {
    return (
      <ul className="list">
        {children}
      </ul>
    )
  },
  ol: ({ children }) => {
    return (
      <ol className="list">
        {children}
      </ol>
    )
  },
  li: ({ children }) => {
    return (
      <li className="list-item">
        {children}
      </li>
    )
  },
  pre: ({ children }) => {
    return children as ReactElement
  },
  code: ({ className, children }) => {
    if (className == null) {
      return (
        <sinch-code-tag text={children as string}/>
      )
    }

    const language = className.replace('language-', '')

    return (
      <SyntaxHighlighter language={language} src={children as string}/>
    )
  },
  table: ({ children }) => {
    return (
      <sinch-table class="table">{children}</sinch-table>
    )
  },
  thead: ({ children }) => {
    return (
      <sinch-table-head>{children}</sinch-table-head>
    )
  },
  tbody: ({ children }) => {
    return (
      <sinch-table-body>{children}</sinch-table-body>
    )
  },
  tr: ({ children }) => {
    return (
      <sinch-table-row>{children}</sinch-table-row>
    )
  },
  th: ({ children, align }) => {
    return (
      <sinch-table-head-cell fit={align === 'center'} text={children as string}/>
    )
  },
  td: ({ children }) => {
    return (
      <sinch-table-cell>
        <sinch-text type="m">
          {children}
        </sinch-text>
      </sinch-table-cell>
    )
  },
  blockquote: ({ children }) => {
    return (
      <blockquote className="blockquote">
        {children}
      </blockquote>
    )
  },
}
