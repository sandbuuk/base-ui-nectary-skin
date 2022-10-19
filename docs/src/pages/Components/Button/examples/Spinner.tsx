import type { FC } from 'react'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/spinner'

export const SpinnerExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="primary"
    on-click={() => console.log('click')}
  >
    <sinch-spinner slot="left-icon"/>
  </sinch-button>
)
