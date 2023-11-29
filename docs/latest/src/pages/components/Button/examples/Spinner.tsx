import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/spinner'

export const SpinnerExample: FC = () => (
  <sinch-button
    text="Pending"
    aria-label="Pending"
    type="primary"
    on-click={() => console.log('click')}
  >
    <sinch-spinner slot="icon"/>
  </sinch-button>
)
