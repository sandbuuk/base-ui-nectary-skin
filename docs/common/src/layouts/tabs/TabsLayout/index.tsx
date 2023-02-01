import { MDXProvider } from '@mdx-js/react'
import { Outlet } from 'react-router-dom'
import { tabMdxComponents } from '../MDX'
import { PagePortalsProvider, RouteTabProvider, usePortalsReady } from '../context'
import { PageLayoutNavmenu } from './Navmenu'
import { PageLayoutTabs } from './Tabs'
import { PageLayoutTitle } from './Title'
import type { TRouteTab } from '../context'
import type { FC, PropsWithChildren } from 'react'
import './styles.css'

const TabsLayoutImpl: FC<PropsWithChildren> = ({ children }) => {
  const portalsReady = usePortalsReady()

  return (
    <>
      <div id="page-head">
        <PageLayoutTitle/>
        <PageLayoutTabs/>
      </div>
      <div id="page-body">
        <div id="page-content-wrapper" className="scrollable">
          <div id="page-content">
            {portalsReady && children}
          </div>
        </div>
        <div id="page-side" className="scrollable">
          <PageLayoutNavmenu/>
        </div>
      </div>
    </>
  )
}

type TTabLayout = PropsWithChildren & {
  getRouteTabs(route: string): TRouteTab[] | null,
}

export const TabsLayout: FC<TTabLayout> = ({ children, getRouteTabs }) => {
  return (
    <RouteTabProvider value={{ getRouteTabs }}>
      <PagePortalsProvider>
        <MDXProvider components={tabMdxComponents}>
          <TabsLayoutImpl>
            {children}
            <Outlet/>
          </TabsLayoutImpl>
        </MDXProvider>
      </PagePortalsProvider>
    </RouteTabProvider>
  )
}
