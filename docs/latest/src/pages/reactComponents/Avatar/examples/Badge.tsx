import { Avatar, Badge } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const BadgeExample: FC = () => (
  <div style={wrapperStyles}>
    <Badge size="m" text="9" mode="circle">
      <Avatar src="https://i.pravatar.cc/300" alt="AB"/>
    </Badge>
    <Badge size="m" text="99" mode="circle">
      <Avatar src="https://i.pravatar.cc/300" alt="AB"/>
    </Badge>
    <Badge size="m" text="999+" mode="circle">
      <Avatar src="https://i.pravatar.cc/300" alt="AB"/>
    </Badge>
  </div>
)
