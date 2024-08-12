import type { FC } from 'react'
import '@nectary/components/toast'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-xmark'

export const CloseExample: FC = () => (
  <sinch-toast type="info" text="Info">
    <sinch-button
      slot="close"
      aria-label="Close"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon-fa-xmark slot="icon"/>
    </sinch-button>
  </sinch-toast>
)
