import type { FC } from 'react'
import '@sinch-engage/nectary/progress'

export const DetailedExample: FC = () => {
  return (
    <sinch-progress
      value={73}
      detailed
      aria-label="Progress"
    />
  )
}
