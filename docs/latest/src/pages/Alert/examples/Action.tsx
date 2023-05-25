import type { FC } from 'react'
import '@sinch-engage/nectary/alert'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icon'
import '@sinch-engage/nectary/button'

export const ActionExample: FC = () => (
  <sinch-alert type="error" text="Error text">
    <sinch-button
      slot="action"
      type="cta-secondary"
      text="Click"
      aria-label="Action button"
      size="s"
      on-click={() => console.log('action')}
    />
    <sinch-icon-button
      slot="close"
      aria-label="Close alert"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon slot="icon" name="close"/>
    </sinch-icon-button>
  </sinch-alert>
)
