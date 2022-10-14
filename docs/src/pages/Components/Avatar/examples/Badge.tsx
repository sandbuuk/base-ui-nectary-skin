import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/avatar-badge'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const BadgeExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-avatar src="https://i.pravatar.cc/300" alt="AB">
      <sinch-avatar-badge slot="badge" text="9"/>
    </sinch-avatar>
    <sinch-avatar src="https://i.pravatar.cc/300" alt="AB">
      <sinch-avatar-badge slot="badge" text="99"/>
    </sinch-avatar>
    <sinch-avatar src="https://i.pravatar.cc/300" alt="AB">
      <sinch-avatar-badge slot="badge" text="999+"/>
    </sinch-avatar>
  </div>
)
