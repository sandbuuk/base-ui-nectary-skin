import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-arrow-up-right-from-square'

export const IconButtonExample: FC = () => (
  <sinch-button
    aria-label="Click"
    type="primary"
    on-click={() => console.log('click')}
  >
    <sinch-icon-fa-arrow-up-right-from-square slot="icon"/>
  </sinch-button>
)
