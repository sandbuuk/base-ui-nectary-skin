import { type CSSProperties, type FC, useState } from 'react'
import '@nectary/components/button'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const ToggledExample: FC = () => {
  const [isPrimaryToggled, setPrimaryToggled] = useState(false)
  const [isSecondaryToggled, setSecondaryToggled] = useState(false)

  return (
    <div style={wrapperStyles}>
      <sinch-button
        text="Subtle primary"
        aria-label="Click"
        type="subtle-primary"
        toggled={isPrimaryToggled}
        on-click={() => setPrimaryToggled((prev) => !prev)}
      />
      <sinch-button
        text="Subtle secondary"
        aria-label="Click"
        type="subtle-secondary"
        toggled={isSecondaryToggled}
        on-click={() => setSecondaryToggled((prev) => !prev)}
      />
    </div>
  )
}
