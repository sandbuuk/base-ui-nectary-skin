import type { FC } from 'react'
import '@sinch-engage/nectary/button'

export const SmallExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="primary"
    small
    on-click={() => console.log('click')}
  />
)
