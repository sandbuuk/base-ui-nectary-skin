import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/icon'

export const TypeSecondaryExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="secondary"
    on-click={() => console.log('click')}
  >
    <sinch-icon name="open_in_new" slot="icon"/>
  </sinch-button>
)
