import type { FC } from 'react'
import '@nectary/components/skeleton'
import '@nectary/components/skeleton-item'

export const CardExample: FC = () => (
  <sinch-skeleton card style={{ width: '300px' }}>
    <div style={{ display: 'flex', gap: '16px' }}>
      <sinch-skeleton-item size="l" style={{ width: '30%' }}/>
      <sinch-skeleton-item size="l" style={{ flex: '1' }}/>
    </div>
    <sinch-skeleton-item size="m" style={{ width: '50%' }}/>
    <sinch-skeleton-item size="s" style={{ width: '60%' }}/>
    <sinch-skeleton-item style={{ width: '100%', height: '120px' }}/>
  </sinch-skeleton>
)
