import type { FC } from 'react'
import '@sinch-engage/nectary/button'

export const DisabledExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="primary"
    disabled
    onClick={() => console.log('click')}
  />
)
