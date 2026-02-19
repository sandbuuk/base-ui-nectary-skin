import { Avatar, Badge } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const SizeExample: FC = () => (
  <div style={wrapperStyles}>
    <Badge text="9" size="s" mode="circle">
      <Avatar src="https://i.pravatar.cc/300" size="s" alt="AB"/>
    </Badge>
    <Badge text="99" size="m" mode="circle">
      <Avatar src="https://i.pravatar.cc/300" size="m" alt="AB"/>
    </Badge>
    <Badge text="999+" size="l" mode="circle">
      <Avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </Badge>
  </div>
)
