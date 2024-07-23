import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/button-group'
import '@nectary/components/button-group-item'

export const ToggleExample: FC = () => {
  const [toggledButton, setToggled] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <sinch-button-group aria-label="my-button-group" type="subtle-primary">
        <sinch-button-group-item
          aria-label="button-1"
          text="button-1"
          toggled={toggledButton === 1}
          on-click={() => setToggled(1)}
        />
        <sinch-button-group-item
          aria-label="button-2"
          text="button-2"
          toggled={toggledButton === 2}
          on-click={() => setToggled(2)}
        />
        <sinch-button-group-item
          aria-label="button-3"
          text="button-3"
          toggled={toggledButton === 3}
          on-click={() => setToggled(3)}
        />
      </sinch-button-group>
    </div>
  )
}
