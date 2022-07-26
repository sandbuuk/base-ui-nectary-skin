import type { FC } from 'react'
import '@sinch-engage/nectary/button'

export const TypeSecondaryExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="secondary"
    onClick={() => console.log('click')}
  />
)
