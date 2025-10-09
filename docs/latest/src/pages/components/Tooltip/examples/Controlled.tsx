import type { CSSProperties, FC } from 'react'
import '@nectary/components/tooltip'
import '@nectary/components/button'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 16,
}

export const ControlledExample: FC = () => {
  return (
    <div style={wrapperStyles}>
      <sinch-tooltip is-opened="true" text="I am a tooltip that is always opened">
        <sinch-button
          size="s"
          text="Always open"
          aria-label="Always opened button"
          type="cta-secondary"
        />
      </sinch-tooltip>
      <sinch-tooltip
        is-opened="false"
        text="Tooltip"
      >
        <sinch-button
          size="s"
          text="Always closed"
          aria-label="Always closed button"
          type="cta-secondary"
        />
      </sinch-tooltip>
    </div>
  )
}
