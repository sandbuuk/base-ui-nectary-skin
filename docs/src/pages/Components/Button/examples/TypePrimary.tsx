import type { FC } from 'react'
import '@sinch-engage/nectary/button'

export const TypePrimaryExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="primary"
    onClick={() => console.log('click')}
  />
)
