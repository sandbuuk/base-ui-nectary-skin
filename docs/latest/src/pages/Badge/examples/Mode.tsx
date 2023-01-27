import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/badge'
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/notifications'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const ModeExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-badge text="9" size="l" mode="circle">
      <sinch-avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </sinch-badge>
    <sinch-icon-button aria-label="Notifications">
      <sinch-badge
        text="9"
        size="m"
        mode="square"
        slot="icon"
      >
        <sinch-icon-notifications/>
      </sinch-badge>
    </sinch-icon-button>
    <sinch-badge text="9" size="l" mode="square">
      <sinch-button
        text="Click"
        type="cta-secondary"
        aria-label="Click"
        on-click={() => console.log('click')}
      />
    </sinch-badge>
  </div>
)
