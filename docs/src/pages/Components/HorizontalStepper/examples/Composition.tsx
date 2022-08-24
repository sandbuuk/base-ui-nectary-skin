import type { FC } from 'react'
import '@sinch-engage/nectary/horizontal-stepper'
import '@sinch-engage/nectary/horizontal-stepper-item'

export const CompositionExample: FC = () => {
  return (
    <sinch-horizontal-stepper index="4" aria-label="Stepper">
      <sinch-horizontal-stepper-item label="Step 1" description="Step description"/>
      <sinch-horizontal-stepper-item label="Step 2" status="skip" description="Step description"/>
      <sinch-horizontal-stepper-item label="Step 3" status="error" description="Step description"/>
      <sinch-horizontal-stepper-item label="Step label long long long long long" description="Step description long long long long long"/>
    </sinch-horizontal-stepper>
  )
}
