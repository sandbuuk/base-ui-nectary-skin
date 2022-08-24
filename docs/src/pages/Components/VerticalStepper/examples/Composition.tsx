import type { FC } from 'react'
import '@sinch-engage/nectary/vertical-stepper'
import '@sinch-engage/nectary/vertical-stepper-item'
import '@sinch-engage/nectary/button'

export const CompositionExample: FC = () => {
  return (
    <sinch-vertical-stepper index="4" aria-label="Stepper">
      <sinch-vertical-stepper-item label="Step 1" description="Step description">
        Content of the past step
      </sinch-vertical-stepper-item>
      <sinch-vertical-stepper-item label="Step 2" status="skip" description="Step description"/>
      <sinch-vertical-stepper-item label="Step 3" status="error" description="Step description"/>
      <sinch-vertical-stepper-item label="Step 4" status="error" description="Step description">
        <sinch-button aria-label="Test button" text="Button" type="primary"/>
      </sinch-vertical-stepper-item>
      <sinch-vertical-stepper-item label="Step label long long long long long" description="Step description long long long long long"/>
    </sinch-vertical-stepper>
  )
}
