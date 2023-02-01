import { MDXProvider } from '@mdx-js/react'
import { Outlet } from 'react-router-dom'
import { commonMdxComponents } from '../../../components'
import type { FC, PropsWithChildren } from 'react'

export const SimpleLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MDXProvider components={commonMdxComponents}>
      <div id="page-content-wrapper" className="scrollable">
        <div id="page-content">
          {children}
          <Outlet/>
        </div>
      </div>
    </MDXProvider>
  )
}
