import type { CSSProperties, FC } from 'react'
import '@nectary/components/avatar'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const ColorExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-avatar color="light-blue" alt="AB"/>
    <sinch-avatar color="light-brown" alt="AB"/>
    <sinch-avatar color="light-gray" alt="AB"/>
    <sinch-avatar color="light-green" alt="AB"/>
    <sinch-avatar color="light-orange" alt="AB"/>
    <sinch-avatar color="light-pink" alt="AB"/>
    <sinch-avatar color="light-violet" alt="AB"/>
    <sinch-avatar color="light-yellow" alt="AB"/>
    <sinch-avatar color="default" alt="AB"/>
  </div>
)
