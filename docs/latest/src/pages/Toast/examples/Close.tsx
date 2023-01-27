import type { FC } from 'react'
import '@sinch-engage/nectary/toast'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

export const CloseExample: FC = () => (
  <sinch-toast type="info" text="Info">
    <sinch-icon-button
      slot="close"
      aria-label="Close"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon-close slot="icon"/>
    </sinch-icon-button>
  </sinch-toast>
)
