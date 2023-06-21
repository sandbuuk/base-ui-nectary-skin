import './styles.css'
import { MDXProvider } from '@mdx-js/react'
import { commonMdxComponents } from 'docs-common'
import MainDocumentMarkDown from './markdown/MainDocument.mdx'
import type { MDXComponents } from 'mdx/types'

const listMarkDown: MDXComponents = {
  li: ({ children }) => {
    const text = children as string

    return (
      <li className="list-item-overwrite">
        <span>{`${text}`}</span>
      </li>
    )
  },
}

const TokensPage = () => {
  return (
    <MDXProvider components={{ ...commonMdxComponents, ...listMarkDown }}>
      <div id="page-wrapper">
        <div id="page-layout-grid">
          <div className="page-layout-grid-item">
            <MainDocumentMarkDown/>
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}

export default TokensPage
