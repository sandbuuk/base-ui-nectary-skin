import type { CSSProperties, FC } from 'react'
import '@nectary/components/tooltip'
import '@nectary/components/button'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 16,
}

export const TypeExample: FC = () => {
  return (
    <div style={wrapperStyles}>
      <sinch-tooltip type="slow" text="Tooltip">
        <sinch-button
          size="s"
          text="Slow tooltip"
          aria-label="Slow tooltip button"
          type="cta-secondary"
        />
      </sinch-tooltip>
      <sinch-tooltip type="fast" text="Tooltip">
        <sinch-button
          size="s"
          text="Fast tooltip"
          aria-label="Fast tooltip button"
          type="cta-secondary"
        />
      </sinch-tooltip>
    </div>
  )
}
