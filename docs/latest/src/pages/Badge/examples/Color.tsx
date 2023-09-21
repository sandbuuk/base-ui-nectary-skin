import type { CSSProperties, FC } from 'react'
import '@nectary/components/badge'
import '@nectary/components/avatar'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const ColorExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-badge
      text="9"
      size="l"
      mode="circle"
    >
      <sinch-avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </sinch-badge>
  </div>
)
