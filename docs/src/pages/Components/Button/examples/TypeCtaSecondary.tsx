import type { FC } from 'react'
import '@sinch-engage/nectary/button'

export const TypeCtaSecondaryExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="cta-secondary"
    on-click={() => console.log('click')}
  />
)
