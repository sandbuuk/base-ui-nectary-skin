import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/icon'

export const RightIconExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="primary"
    on-click={() => console.log('click')}
  >
    <sinch-icon name="open_in_new" slot="right-icon"/>
  </sinch-button>
)
