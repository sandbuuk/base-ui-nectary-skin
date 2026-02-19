import { Skeleton, SkeletonItem } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  width: 300,
}

const rowStyles: CSSProperties = {
  display: 'flex',
  gap: 16,
}

export const CardExample: FC = () => (
  <Skeleton card style={wrapperStyles}>
    <div style={rowStyles}>
      <SkeletonItem size="lg" width="30%"/>
      <SkeletonItem size="lg" style={{ flex: 1 }}/>
    </div>
    <SkeletonItem size="md" width="50%"/>
    <SkeletonItem size="sm" width="60%"/>
    <SkeletonItem width="100%" style={{ height: 120 }}/>
  </Skeleton>
)
