import '@sinch-engage/nectary/title'
import './styles.css'
import { slugify } from '../../utils'
import type { MDXComponents } from 'mdx/types'

export const commonHeaders: MDXComponents = {
  h1: ({ children }) => {
    const text = children as string

    return (
      <div className="title no-anchor">
        <sinch-title type="xl" level="1" text={text}/>
      </div>
    )
  },
  h2: ({ children }) => {
    const text = children as string
    const id = slugify(text, 2)
    const href = `#${id}`

    if (id === 'table-of-contents' || id === 'eof') {
      return null
    }

    return (
      <div className="title" id={id}>
        <a className="title-anchor" href={href}>#</a>
        <sinch-title type="l" level="2" text={text}/>
      </div>
    )
  },
  h3: ({ children }) => {
    const text = children as string
    const id = slugify(text, 3)
    const href = `#${id}`

    return (
      <div className="title" id={id}>
        <a className="title-anchor" href={href}>#</a>
        <sinch-title type="m" level="3" text={text}/>
      </div>
    )
  },
  h4: ({ children }) => {
    const text = children as string
    const id = slugify(text, 4)
    const href = `#${id}`

    return (
      <div className="title" id={id}>
        <a className="title-anchor" href={href}>#</a>
        <sinch-title type="s" level="4" text={text}/>
      </div>
    )
  },
  h5: ({ children }) => {
    const text = children as string
    const id = slugify(text, 5)
    const href = `#${id}`

    return (
      <div className="title" id={id}>
        <a className="title-anchor" href={href}>#</a>
        <sinch-title type="xs" level="5" text={text}/>
      </div>
    )
  },
  h6: ({ children }) => {
    const text = children as string
    const id = slugify(text, 6)
    const href = `#${id}`

    return (
      <div className="title" id={id}>
        <a className="title-anchor" href={href}>#</a>
        <sinch-title id={id} type="xs" level="6" text={text}/>
      </div>
    )
  },
}
