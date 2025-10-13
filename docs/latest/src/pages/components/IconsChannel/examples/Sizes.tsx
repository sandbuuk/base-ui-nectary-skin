import type { FC } from 'react'
import '@nectary/assets/icons-channel/facebook-messenger-square'

export const SizesExample: FC = () => {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <sinch-icon-channel-facebook-messenger-square size={36}/>
      <sinch-icon-channel-facebook-messenger-square size={56}/>
      <sinch-icon-channel-facebook-messenger-square size={72}/>
    </div>
  )
}
