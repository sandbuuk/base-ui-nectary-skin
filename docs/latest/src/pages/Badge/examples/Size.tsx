import type { CSSProperties, FC } from 'react'
import '@nectary/components/badge'
import '@nectary/components/avatar'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const SizeExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-badge text="9" size="s" mode="circle">
      <sinch-avatar src="https://i.pravatar.cc/300" size="s" alt="AB"/>
    </sinch-badge>
    <sinch-badge text="99" size="m" mode="circle">
      <sinch-avatar src="https://i.pravatar.cc/300" size="m" alt="AB"/>
    </sinch-badge>
    <sinch-badge text="999+" size="l" mode="circle">
      <sinch-avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </sinch-badge>
  </div>
)
