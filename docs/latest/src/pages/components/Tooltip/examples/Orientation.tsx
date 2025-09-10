import type { FC } from 'react'
import '@nectary/components/tooltip'
import '@nectary/components/button'

export const OrientationExample: FC = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: 16 }}>
      {(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'] as const).map((orientation) => (
        <sinch-tooltip key={orientation} orientation={orientation} text="Tooltip">
          <sinch-button
            text={orientation}
            aria-label="Hover me"
            type="cta-secondary"
            size="s"
            on-click={() => {}}
          />
        </sinch-tooltip>
      ))}
    </div>
  )
}
