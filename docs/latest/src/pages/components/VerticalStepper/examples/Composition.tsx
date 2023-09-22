import type { FC } from 'react'
import '@nectary/components/vertical-stepper'
import '@nectary/components/vertical-stepper-item'
import '@nectary/components/button'

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
