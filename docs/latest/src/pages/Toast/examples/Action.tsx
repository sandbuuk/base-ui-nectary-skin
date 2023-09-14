import type { FC } from 'react'
import '@nectary/components/toast'
import '@nectary/components/button'
import '@nectary/components/icon-button'
import '@nectary/components/icon'

export const ActionExample: FC = () => (
  <sinch-toast type="info" text="Info">
    <sinch-button
      slot="action"
      text="Action"
      type="cta-secondary"
      aria-label="Action button"
      size="s"
      on-click={() => console.log('action')}
    />
    <sinch-icon-button
      slot="close"
      aria-label="Close"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon slot="icon" name="close"/>
    </sinch-icon-button>
  </sinch-toast>
)
