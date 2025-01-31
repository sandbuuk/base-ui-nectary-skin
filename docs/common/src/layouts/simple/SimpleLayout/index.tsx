import { MDXProvider } from '@mdx-js/react'
import { Outlet } from 'react-router-dom'
import { commonMdxComponents } from '../../../components'
import type { FC, PropsWithChildren } from 'react'

export const SimpleLayout: FC<PropsWithChildren<{ width?: React.CSSProperties['width'] }>> = ({ children, width }) => {
  return (
    <MDXProvider components={commonMdxComponents}>
      <div id="page-content-wrapper" className="scrollable">
        <div id="page-content" {...(width !== undefined ? { style: { width } } : {})}>
          {children}
          <Outlet/>
        </div>
      </div>
    </MDXProvider>
  )
}
