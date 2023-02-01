import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/badge'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const BadgeExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-badge size="m" text="9" mode="circle">
      <sinch-avatar src="https://i.pravatar.cc/300" alt="AB"/>
    </sinch-badge>
    <sinch-badge size="m" text="99" mode="circle">
      <sinch-avatar src="https://i.pravatar.cc/300" alt="AB"/>
    </sinch-badge>
    <sinch-badge size="m" text="999+" mode="circle">
      <sinch-avatar src="https://i.pravatar.cc/300" alt="AB"/>
    </sinch-badge>
  </div>
)
