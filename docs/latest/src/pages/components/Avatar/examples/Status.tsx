import type { CSSProperties, FC } from 'react'
import '@nectary/components/avatar'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const StatusExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-avatar src="https://i.pravatar.cc/300" alt="AB" status="online"/>
    <sinch-avatar src="https://i.pravatar.cc/300" alt="AB" status="away"/>
    <sinch-avatar src="https://i.pravatar.cc/300" alt="AB" status="busy"/>
    <sinch-avatar src="https://i.pravatar.cc/300" alt="AB" status="offline"/>
  </div>
)
