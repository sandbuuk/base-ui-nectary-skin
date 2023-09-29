import type { FC } from 'react'
import '@nectary/components/tooltip'
import '@nectary/components/button'

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
