import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/avatar'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const BackgroundExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-avatar background="blue" alt="AB"/>
    <sinch-avatar background="yellow" alt="AB"/>
    <sinch-avatar background="grey" alt="AB"/>
  </div>
)
