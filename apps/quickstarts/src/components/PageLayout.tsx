import { Outlet } from 'react-router-dom'
import { OnBoardingContex } from './OnBoardingcontext'
import { PageContext } from './PageContext'
import { PageStepThreeContext } from './PageStepThreeContext'
import type { FC } from 'react'

export const PageLayout: FC = () => {
  return (
    <PageContext>
      <PageStepThreeContext>
        <OnBoardingContex>
          <Outlet/>
        </OnBoardingContex>
      </PageStepThreeContext>
    </PageContext>
  )
}
