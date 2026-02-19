import { Avatar } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const SizeExample: FC = () => (
  <div style={wrapperStyles}>
    <Avatar src="https://i.pravatar.cc/300" size="s" alt="AB"/>
    <Avatar src="https://i.pravatar.cc/300" size="m" alt="AB"/>
    <Avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
  </div>
)
