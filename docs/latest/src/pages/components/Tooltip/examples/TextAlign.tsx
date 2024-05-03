import type { CSSProperties, FC } from 'react'
import '@nectary/components/tooltip'
import '@nectary/components/button'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 16,
}

export const TextAlignExample: FC = () => {
  return (
    <div style={wrapperStyles}>
      <sinch-tooltip text-align="left" text="Left Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non nulla eget nisl pulvinar convallis. Nam quis enim eget dolor pharetra ultrices at ut tortor.">
        <sinch-button
          size="s"
          text="Left"
          aria-label="Left align Tooltip button"
          type="cta-secondary"
        />
      </sinch-tooltip>
      <sinch-tooltip text-align="center" text="Center Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non nulla eget nisl pulvinar convallis. Nam quis enim eget dolor pharetra ultrices at ut tortor.">
        <sinch-button
          size="s"
          text="Center"
          aria-label="Center align Tooltip button"
          type="cta-secondary"
        />
      </sinch-tooltip>
      <sinch-tooltip text-align="right" text="Right Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non nulla eget nisl pulvinar convallis. Nam quis enim eget dolor pharetra ultrices at ut tortor.">
        <sinch-button
          size="s"
          text="Right"
          aria-label="Right align Tooltip button"
          type="cta-secondary"
        />
      </sinch-tooltip>
    </div>
  )
}
