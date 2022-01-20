import { Outlet } from 'react-router-dom'
import { OnBoardingContex } from './OnBoardingcontext'
import { PageContext } from './PageContext'
import { PageStepOneContext } from './PageStepOneContext'
import { PageStepThreeContext } from './PageStepThreeContext'
import { StepperContext } from './StepperContext'
import type { FC } from 'react'

export const PageLayout: FC = () => {
  return (
    <PageContext>
      <PageStepThreeContext>
        <PageStepOneContext>
          <OnBoardingContex>
            <StepperContext>
              <Outlet/>
            </StepperContext>
          </OnBoardingContex>
        </PageStepOneContext>
      </PageStepThreeContext>
    </PageContext>
  )
}
