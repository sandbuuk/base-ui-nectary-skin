import { Outlet } from 'react-router-dom'
import { PageContext } from './PageContext'
import type { FC } from 'react'

export const PageLayout: FC = () => {
  return (
    <PageContext>
      <h2>Pages</h2>
      <Outlet/>
    </PageContext>
  )
}
