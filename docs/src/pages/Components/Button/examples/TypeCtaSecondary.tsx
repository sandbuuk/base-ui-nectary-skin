import type { FC } from 'react'
import '@sinch-engage/nectary/button'

export const TypeCtaSecondaryExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="cta-secondary"
    onClick={() => console.log('click')}
  />
)
