import type { CSSProperties, FC } from 'react'
import '@nectary/assets/icons-channel/notify'

export const RadiusExample: FC = () => {
  const customRadius: CSSProperties = {
    '--sinch-comp-icon-channel-shape-radius': '8px',
  } as CSSProperties

  return (
    <sinch-icon-channel-notify style={customRadius}/>
  )
}
