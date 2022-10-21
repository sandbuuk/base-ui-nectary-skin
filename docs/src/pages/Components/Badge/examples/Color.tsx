import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/badge'
import '@sinch-engage/nectary/avatar'

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
      color="red"
      size="l"
      mode="circle"
    >
      <sinch-avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </sinch-badge>
    <sinch-badge
      text="9"
      color="yellow"
      size="l"
      mode="circle"
    >
      <sinch-avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </sinch-badge>
    <sinch-badge
      text="9"
      color="green"
      size="l"
      mode="circle"
    >
      <sinch-avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </sinch-badge>
    <sinch-badge
      text="9"
      color="gray"
      size="l"
      mode="circle"
    >
      <sinch-avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </sinch-badge>
    <sinch-badge
      text="9"
      color="black"
      size="l"
      mode="circle"
    >
      <sinch-avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </sinch-badge>
    <sinch-badge
      text="9"
      color="default"
      size="l"
      mode="circle"
    >
      <sinch-avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </sinch-badge>
  </div>
)
