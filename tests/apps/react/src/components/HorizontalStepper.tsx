import type { FC } from 'react'
import '@sinch-engage/nectary/horizontal-stepper'
import '@sinch-engage/nectary/horizontal-stepper-item'

type THorizontalStepper = {
  search: URLSearchParams,
}

export const HorizontalStepper: FC<THorizontalStepper> = () => {
  return (
    <sinch-horizontal-stepper index="0" aria-label="Stepper">
      <sinch-horizontal-stepper-item label="Step 1" description="Step description"/>
      <sinch-horizontal-stepper-item label="Step 2" description="Step description" status="error"/>
      <sinch-horizontal-stepper-item label="Step label long long long long long" description="Step description long long long long long" status="skip"/>
      <sinch-horizontal-stepper-item label="Step label long long long long long" description="Step description long long long long long"/>
    </sinch-horizontal-stepper>
  )
}
