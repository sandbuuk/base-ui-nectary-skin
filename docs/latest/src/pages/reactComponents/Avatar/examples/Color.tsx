import { Avatar } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 10,
}

export const ColorExample: FC = () => (
  <div style={wrapperStyles}>
    <Avatar color="default" alt="AB"/>
    <Avatar color="light-blue" alt="AB"/>
    <Avatar color="light-gray" alt="AB"/>
    <Avatar color="light-green" alt="AB"/>
    <Avatar color="light-orange" alt="AB"/>
    <Avatar color="light-pink" alt="AB"/>
    <Avatar color="light-violet" alt="AB"/>
    <Avatar color="light-yellow" alt="AB"/>
    <Avatar color="light-red" alt="AB"/>
    <Avatar color="blue" alt="AB"/>
    <Avatar color="gray" alt="AB"/>
    <Avatar color="green" alt="AB"/>
    <Avatar color="orange" alt="AB"/>
    <Avatar color="pink" alt="AB"/>
    <Avatar color="violet" alt="AB"/>
    <Avatar color="yellow" alt="AB"/>
    <Avatar color="red" alt="AB"/>
    <Avatar color="dark-blue" alt="AB"/>
    <Avatar color="dark-gray" alt="AB"/>
    <Avatar color="dark-green" alt="AB"/>
    <Avatar color="dark-orange" alt="AB"/>
    <Avatar color="dark-pink" alt="AB"/>
    <Avatar color="dark-violet" alt="AB"/>
    <Avatar color="dark-yellow" alt="AB"/>
    <Avatar color="dark-red" alt="AB"/>
  </div>
)
