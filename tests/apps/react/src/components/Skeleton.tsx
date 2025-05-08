import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/skeleton'
import '@nectary/components/skeleton-item'

export const Skeleton: FC = () => {
  const [search] = useComponentSearchParams('skeleton')
  const isCard = search.get('card') !== null

  return (
    <sinch-skeleton card={isCard}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <sinch-skeleton-item size="l" style={{ width: '30%' }}/>
        <sinch-skeleton-item size="l" style={{ flex: '1' }}/>
      </div>
      <sinch-skeleton-item size="m" style={{ width: '50%', marginLeft: 'auto' }}/>
      <sinch-skeleton-item size="s" style={{ width: '60%' }}/>
      <sinch-skeleton-item style={{ width: '70%', height: '120px', marginLeft: 'auto' }}/>
    </sinch-skeleton>
  )
}
