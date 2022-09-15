import type { FC } from 'react'
import '@sinch-engage/nectary/toast'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

export const ActionExample: FC = () => (
  <sinch-toast type="info" text="Info">
    <sinch-button
      slot="action"
      text="Action"
      type="cta-secondary"
      aria-label="Action button"
      small
      on-click={() => console.log('action')}
    />
    <sinch-icon-button
      slot="close"
      aria-label="Close"
      small
      on-click={() => console.log('close')}
    >
      <sinch-icon-close slot="icon"/>
    </sinch-icon-button>
  </sinch-toast>
)
