import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/avatar-status'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const StatusExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-avatar src="https://i.pravatar.cc/300" alt="AB">
      <sinch-avatar-status slot="status" color="green"/>
    </sinch-avatar>
    <sinch-avatar src="https://i.pravatar.cc/300" alt="AB">
      <sinch-avatar-status slot="status" color="yellow"/>
    </sinch-avatar>
    <sinch-avatar src="https://i.pravatar.cc/300" alt="AB">
      <sinch-avatar-status slot="status" color="red"/>
    </sinch-avatar>
    <sinch-avatar src="https://i.pravatar.cc/300" alt="AB">
      <sinch-avatar-status slot="status" color="grey"/>
    </sinch-avatar>
  </div>
)
