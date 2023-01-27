import type { FC } from 'react'
import '@sinch-engage/nectary/tooltip'
import '@sinch-engage/nectary/button'

export const OrientationExample: FC = () => {
  return (
    <sinch-tooltip orientation="top" text="Tooltip">
      <sinch-button
        text="Hover me"
        aria-label="Hover me"
        type="cta-secondary"
        size="s"
        on-click={() => {}}
      />
    </sinch-tooltip>
  )
}
