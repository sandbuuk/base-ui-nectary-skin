import type { FC } from 'react'
import '@nectary/components/progress'

export const SimpleExample: FC = () => {
  return (
    <sinch-progress
      value={73}
      aria-label="Progress"
    />
  )
}
