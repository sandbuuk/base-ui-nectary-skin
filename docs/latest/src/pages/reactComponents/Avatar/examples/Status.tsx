import { Avatar } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const StatusExample: FC = () => (
  <div style={wrapperStyles}>
    <Avatar src="https://i.pravatar.cc/300" alt="AB" status="online"/>
    <Avatar src="https://i.pravatar.cc/300" alt="AB" status="away"/>
    <Avatar src="https://i.pravatar.cc/300" alt="AB" status="busy"/>
    <Avatar src="https://i.pravatar.cc/300" alt="AB" status="offline"/>
  </div>
)
