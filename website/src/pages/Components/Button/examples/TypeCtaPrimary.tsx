import type { FC } from 'react'
import '@sinch-engage/nectary/button'

export const TypeCtaPrimaryExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="cta-primary"
    onClick={() => console.log('click')}
  />
)
