import { commonHeaders } from '../../../components/MDX/common-headers'
import { slugify } from '../../../utils'
import { PageNavMenuItem } from '../PageNavMenuItem'
import { PageTitle } from '../PageTitle'
import type { MDXComponents } from 'mdx/types'
import type { FC, PropsWithChildren } from 'react'

const headers = commonHeaders as Record<string, FC<PropsWithChildren>>

export const tabHeaders: MDXComponents = {
  h1: ({ children }) => {
    const text = children as string

    return <PageTitle text={text}/>
  },
  h2: ({ children }) => {
    const text = children as string
    const id = slugify(text, 2)

    if (id === 'table-of-contents') {
      return null
    }

    const href = `#${id}`

    return (
      <>
        <PageNavMenuItem text={text} level={0} href={href}/>
        <headers.h2>{children}</headers.h2>
      </>
    )
  },
  h3: ({ children }) => {
    const text = children as string
    const id = slugify(text, 3)
    const href = `#${id}`

    return (
      <>
        <PageNavMenuItem text={text} level={1} href={href}/>
        <headers.h3>{children}</headers.h3>
      </>
    )
  },
  h4: ({ children }) => {
    const text = children as string
    const id = slugify(text, 4)
    const href = `#${id}`

    return (
      <>
        <PageNavMenuItem text={text} level={2} href={href}/>
        <headers.h4>{children}</headers.h4>
      </>
    )
  },
  h5: ({ children }) => {
    const text = children as string
    const id = slugify(text, 5)
    const href = `#${id}`

    return (
      <>
        <PageNavMenuItem text={text} level={3} href={href}/>
        <headers.h5>{children}</headers.h5>
      </>
    )
  },
  h6: ({ children }) => {
    const text = children as string
    const id = slugify(text, 6)
    const href = `#${id}`

    return (
      <>
        <PageNavMenuItem text={text} level={4} href={href}/>
        <headers.h6>{children}</headers.h6>
      </>
    )
  },
}
