import { Outlet } from 'react-router-dom'
import { PageContext } from './PageContext'
import { StepperContext } from './StepperContext'
import type { FC } from 'react'

export const PageLayout: FC = () => {
  return (
    <PageContext>
      <StepperContext>
        <Outlet/>
      </StepperContext>
    </PageContext>
  )
}
