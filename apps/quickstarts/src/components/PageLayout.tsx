import { Outlet } from 'react-router-dom'
import { PageContext } from './PageContext'
import { PageStepThreeContext } from './PageStepThreeContext'
import type { FC } from 'react'

export const PageLayout: FC = () => {
  return (
    <PageContext>
      <PageStepThreeContext>
        <Outlet/>
      </PageStepThreeContext>
    </PageContext>
  )
}
