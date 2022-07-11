import '@sinch-engage/nectary/title'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/link'
import { Children } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
// @ts-expect-error
import { convert as slugify } from 'url-slug'
import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => {
    const text = children as string
    const id = slugify(text)

    return (
      <div className="title" id={id}>
        <a className="title-anchor" href={`#${id}`}>#</a>
        <sinch-title type="xl" level="1" text={text}/>
      </div>
    )
  },
  h2: ({ children }) => {
    const text = children as string
    const id = slugify(text)

    return (
      <div className="title" id={id}>
        <a className="title-anchor" href={`#${id}`}>#</a>
        <sinch-title type="l" level="2" text={text}/>
      </div>
    )
  },
  h3: ({ children }) => {
    const text = children as string
    const id = slugify(text)

    return (
      <div className="title" id={id}>
        <a className="title-anchor" href={`#${id}`}>#</a>
        <sinch-title type="m" level="3" text={text}/>
      </div>
    )
  },
  h4: ({ children }) => {
    const text = children as string
    const id = slugify(text)

    return (
      <div className="title" id={id}>
        <a className="title-anchor" href={`#${id}`}>#</a>
        <sinch-title type="s" level="4" text={text}/>
      </div>
    )
  },
  h5: ({ children }) => {
    const text = children as string
    const id = slugify(text)

    return (
      <div className="title" id={id}>
        <a className="title-anchor" href={`#${id}`}>#</a>
        <sinch-title type="xs" level="5" text={text}/>
      </div>
    )
  },
  h6: ({ children }) => {
    const text = children as string
    const id = slugify(text)

    return (
      <sinch-title id={id} type="xs" level="6" text={text}/>
    )
  },
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

    return (
      <sinch-link href={href} text={children as string} external={isExternal}/>
    )
  },
  ul: ({ children }) => {
    return (
      <ul className="list">
        {children}
      </ul>
    )
  },
  li: ({ children }) => {
    return (
      <li className="list-item">
        {children}
      </li>
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
