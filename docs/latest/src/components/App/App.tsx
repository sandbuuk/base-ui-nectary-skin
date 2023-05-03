import { QueryRouter } from 'docs-common'
import { ComponentsRoutes } from '../ComponentsRoutes'
import type { FC } from 'react'
import { useBusNavigate } from '~/hooks'
import './styles.css'

const AppImpl: FC<{}> = () => {
  useBusNavigate()

  return (
    <ComponentsRoutes/>
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
