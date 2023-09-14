import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/assets/icons/open-in-new'

export const LeftIconExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="primary"
    on-click={() => console.log('click')}
  >
    <sinch-icon-open-in-new slot="left-icon"/>
  </sinch-button>
)
