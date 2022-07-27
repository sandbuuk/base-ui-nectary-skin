import { Outlet } from 'react-router-dom'
import type { FC } from 'react'
import { lazyScrollIntoView } from '~/utils/lazy-scroll-into-view'

export const ComponentsOutlet: FC = () => (
  <div id="page-components">
    <Outlet/>
  </div>
)

export const ComponentsPage: FC = lazyScrollIntoView(() => import(/* webpackChunkName: "Components" */'./index.mdx'))
