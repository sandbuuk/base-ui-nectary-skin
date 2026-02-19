import { ProgressStepper, ProgressStepperItem } from '@nectary/react'
import type { FC } from 'react'

export const SimpleExample: FC = () => {
  return (
    <ProgressStepper
      aria-label="Stepper"
      value="page3"
      progressValue="page3"
    >
      <ProgressStepperItem value="page1" text="Step 1" aria-label="Step 1"/>
      <ProgressStepperItem value="page2" text="Step 2" invalid aria-label="Step 2"/>
      <ProgressStepperItem value="page3" text="Step 3" aria-label="Step 3"/>
      <ProgressStepperItem value="page4" text="Step 4" aria-label="Step 4"/>
    </ProgressStepper>
  )
}
