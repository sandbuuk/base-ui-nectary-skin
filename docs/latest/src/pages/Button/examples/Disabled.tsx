import type { FC } from 'react'
import '@nectary/components/button'

export const DisabledExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="primary"
    disabled
    on-click={() => console.log('click')}
  />
)
