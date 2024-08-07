import type { CSSProperties, FC } from 'react'
import '@nectary/components/badge'
import '@nectary/components/avatar'
import '@nectary/components/button'
import '@nectary/assets/icons/bell'

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
    <sinch-button aria-label="Notifications">
      <sinch-badge
        text="9"
        size="m"
        mode="square"
        slot="icon"
      >
        <sinch-icon-bell/>
      </sinch-badge>
    </sinch-button>
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
