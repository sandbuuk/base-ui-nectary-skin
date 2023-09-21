import type { FC } from 'react'
import '@nectary/components/progress'

export const DetailedExample: FC = () => {
  return (
    <sinch-progress
      value={73}
      detailed
      aria-label="Progress"
    />
  )
}
