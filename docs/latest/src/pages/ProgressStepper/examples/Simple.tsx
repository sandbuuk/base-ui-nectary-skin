import type { FC } from 'react'
import '@sinch-engage/nectary/progress-stepper'
import '@sinch-engage/nectary/progress-stepper-item'

export const SimpleExample: FC = () => {
  return (
    <sinch-progress-stepper
      aria-label="Stepper"
      value="page3"
      progressValue="page3"
    >
      <sinch-progress-stepper-item value="page1" text="Step 1" aria-label="Step 1"/>
      <sinch-progress-stepper-item value="page2" text="Step 2" invalid aria-label="Step 2"/>
      <sinch-progress-stepper-item value="page3" text="Step 3" aria-label="Step 3"/>
      <sinch-progress-stepper-item value="page4" text="Step 4" aria-label="Step 4"/>
    </sinch-progress-stepper>
  )
}
