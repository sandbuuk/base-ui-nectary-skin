import type { FC } from 'react'
import '@sinch-engage/nectary/button'

export const TypeDestructiveExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="destructive"
    on-click={() => console.log('click')}
  />
)
