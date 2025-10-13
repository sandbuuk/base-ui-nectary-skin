import type { CSSProperties, FC } from 'react'
import '@nectary/assets/icons-channel/instagram'
import '@nectary/assets/icons-channel/apple-business-chat'
import '@nectary/assets/icons-channel/mms-round'

export const CustomColorsExample: FC = () => {
  const customColors: CSSProperties = {
    '--sinch-comp-icon-channel-color-instagram-bg': '#E1306C',
    '--sinch-comp-icon-channel-color-instagram-layera': '#F77737',
    '--sinch-comp-icon-channel-color-apple-business-chat-bg': 'linear-gradient(135deg, #00A2E8 0%, #4CD964 100%)',
    '--sinch-comp-icon-channel-color-apple-business-chat-layera': 'skyblue',
  } as CSSProperties

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <sinch-icon-channel-instagram style={customColors}/>
      <sinch-icon-channel-apple-business-chat style={customColors}/>
      <sinch-icon-channel-mms-round style={customColors}/>
    </div>
  )
}
