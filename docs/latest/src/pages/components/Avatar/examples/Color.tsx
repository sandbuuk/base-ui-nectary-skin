import type { CSSProperties, FC } from 'react'
import '@nectary/components/avatar'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 10,
}

export const ColorExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-avatar color="default" alt="AB"/>
    <sinch-avatar color="light-blue" alt="AB"/>
    <sinch-avatar color="light-gray" alt="AB"/>
    <sinch-avatar color="light-green" alt="AB"/>
    <sinch-avatar color="light-orange" alt="AB"/>
    <sinch-avatar color="light-pink" alt="AB"/>
    <sinch-avatar color="light-violet" alt="AB"/>
    <sinch-avatar color="light-yellow" alt="AB"/>
    <sinch-avatar color="light-red" alt="AB"/>
    <sinch-avatar color="blue" alt="AB"/>
    <sinch-avatar color="gray" alt="AB"/>
    <sinch-avatar color="green" alt="AB"/>
    <sinch-avatar color="orange" alt="AB"/>
    <sinch-avatar color="pink" alt="AB"/>
    <sinch-avatar color="violet" alt="AB"/>
    <sinch-avatar color="yellow" alt="AB"/>
    <sinch-avatar color="red" alt="AB"/>
    <sinch-avatar color="dark-blue" alt="AB"/>
    <sinch-avatar color="dark-gray" alt="AB"/>
    <sinch-avatar color="dark-green" alt="AB"/>
    <sinch-avatar color="dark-orange" alt="AB"/>
    <sinch-avatar color="dark-pink" alt="AB"/>
    <sinch-avatar color="dark-violet" alt="AB"/>
    <sinch-avatar color="dark-yellow" alt="AB"/>
    <sinch-avatar color="dark-red" alt="AB"/>
  </div>
)
