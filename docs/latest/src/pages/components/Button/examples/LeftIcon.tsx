import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/icon'

export const LeftIconExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="primary"
    on-click={() => console.log('click')}
  >
    <sinch-icon name="open_in_new" slot="left-icon"/>
  </sinch-button>
)
