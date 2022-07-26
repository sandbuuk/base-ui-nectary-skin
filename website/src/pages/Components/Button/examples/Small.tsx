import type { FC } from 'react'
import '@sinch-engage/nectary/button'

export const SmallExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="primary"
    small
    onClick={() => console.log('click')}
  />
)
