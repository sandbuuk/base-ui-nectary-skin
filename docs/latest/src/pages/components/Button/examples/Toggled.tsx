import { type CSSProperties, type FC, useState } from 'react'
import '@nectary/components/button'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const ToggledExample: FC = () => {
  const [isToggled, setToggled] = useState(true)

  return (
    <div style={wrapperStyles}>
      <sinch-button
        text="Click"
        aria-label="Click"
        type="subtle-primary"
        toggled={isToggled}
        on-click={() => setToggled((prev) => !prev)}
      />
      <sinch-button
        text="Click"
        aria-label="Click"
        type="subtle-secondary"
        toggled={isToggled}
        on-click={() => setToggled((prev) => !prev)}
      />
    </div>
  )
}
