import type { CSSProperties, FC } from 'react'
import '@nectary/components/button'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
}

export const SizeExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-button
      text="Button"
      aria-label="Pending"
      type="primary"
      size="l"
    />
    <sinch-button
      text="Button"
      aria-label="Pending"
      type="primary"
      size="m"
    />
    <sinch-button
      text="Button"
      aria-label="Pending"
      type="primary"
      size="s"
    />
    <sinch-button
      text="Button"
      aria-label="Pending"
      type="primary"
      size="xs"
    />
  </div>
)
