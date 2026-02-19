import { Button } from '@nectary/react'
import { type CSSProperties, type FC, useState } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const ToggledExample: FC = () => {
  const [isPrimaryToggled, setPrimaryToggled] = useState(false)
  const [isSecondaryToggled, setSecondaryToggled] = useState(false)

  return (
    <div style={wrapperStyles}>
      <Button
        variant="subtle-primary"
        toggled={isPrimaryToggled}
        onClick={() => setPrimaryToggled((prev) => !prev)}
      >
        Subtle primary
      </Button>
      <Button
        variant="subtle-secondary"
        toggled={isSecondaryToggled}
        onClick={() => setSecondaryToggled((prev) => !prev)}
      >
        Subtle secondary
      </Button>
    </div>
  )
}
