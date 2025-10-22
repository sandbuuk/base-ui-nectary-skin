import type { CSSProperties, FC } from 'react'
import '@nectary/assets/icons-channel/apple-business-chat-square'

export const RadiusExample: FC = () => {
  const customRadius: CSSProperties = {
    '--sinch-comp-icon-channel-shape-radius': '6px',
  } as CSSProperties

  return (
    <sinch-icon-channel-apple-business-chat-square style={customRadius}/>
  )
}
