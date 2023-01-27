import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/spinner'

const rowStyles: CSSProperties = {
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
}

export const SimpleExample: FC = () => (
  <div style={rowStyles}>
    <sinch-spinner size="l"/>
    <sinch-spinner size="m"/>
    <sinch-spinner size="s"/>
  </div>
)
