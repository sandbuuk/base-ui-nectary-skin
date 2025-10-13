import type { FC } from 'react'
import '@nectary/assets/icons-channel/notify'

export const SizesExample: FC = () => {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <sinch-icon-channel-notify size={36}/>
      <sinch-icon-channel-notify size={56}/>
      <sinch-icon-channel-notify size={72}/>
    </div>
  )
}
