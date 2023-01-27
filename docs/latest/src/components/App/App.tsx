import { QueryRouter } from 'docs-shared'
import { ComponentsRoutes } from '../ComponentsRoutes'
import { PagesRoutes } from '../PagesRoutes'
import type { FC } from 'react'
import { useBusNavigate } from '~/hooks'
import './styles.css'

const AppImpl: FC<{}> = () => {
  useBusNavigate()

  return (
    <>
      <PagesRoutes/>
      <ComponentsRoutes/>
    </>
  )
}

const basename = location.pathname.replace(/\/$/, '')

export const App = () => {
  return (
    <QueryRouter basename={basename}>
      <AppImpl/>
    </QueryRouter>
  )
}
