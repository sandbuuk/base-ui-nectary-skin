import type { CSSProperties, FC } from 'react'
import '@nectary/components/avatar'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const SizeExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-avatar src="https://i.pravatar.cc/300" size="s" alt="AB"/>
    <sinch-avatar src="https://i.pravatar.cc/300" size="m" alt="AB"/>
    <sinch-avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
  </div>
)
