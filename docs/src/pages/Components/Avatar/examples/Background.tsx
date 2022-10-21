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
    <sinch-avatar color="light-blue" alt="AB"/>
    <sinch-avatar color="light-yellow" alt="AB"/>
    <sinch-avatar color="light-grey" alt="AB"/>
  </div>
)
