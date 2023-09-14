import type { FC } from 'react'
import '@nectary/components/horizontal-stepper'
import '@nectary/components/horizontal-stepper-item'

type THorizontalStepper = {
  search: URLSearchParams,
}

export const HorizontalStepper: FC<THorizontalStepper> = ({ search }) => {
  const index = search.get('index') ?? '0'

  return (
    <sinch-horizontal-stepper index={index} aria-label="Stepper">
      <sinch-horizontal-stepper-item label="Step 1" description="Step description"/>
      <sinch-horizontal-stepper-item label="Step 2" description="Step description" status="error"/>
      <sinch-horizontal-stepper-item label="Step label long long long long long" description="Step description long long long long long" status="skip"/>
      <sinch-horizontal-stepper-item label="Step label long long long long long" description="Step description long long long long long"/>
    </sinch-horizontal-stepper>
  )
}
