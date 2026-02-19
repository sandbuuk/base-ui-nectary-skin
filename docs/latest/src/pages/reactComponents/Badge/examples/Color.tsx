import { Avatar, Badge } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const ColorExample: FC = () => (
  <div style={wrapperStyles}>
    <Badge text="9" size="l" mode="circle">
      <Avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </Badge>
  </div>
)
