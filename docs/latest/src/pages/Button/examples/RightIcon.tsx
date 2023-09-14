import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/assets/icons/open-in-new'

export const RightIconExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="primary"
    on-click={() => console.log('click')}
  >
    <sinch-icon-open-in-new slot="right-icon"/>
  </sinch-button>
)
