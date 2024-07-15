import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/button-group'
import '@nectary/components/button-group-item'
import '@nectary/components/text'

export const SimpleExample: FC = () => {
  const [pressedButton, setPressedButton] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <sinch-button-group type="cta-secondary">
        <sinch-button-group-item
          aria-label="button-1"
          text="button-1"
          on-click={() => setPressedButton(1)}
        />
        <sinch-button-group-item
          aria-label="button-2"
          text="button-2"
          on-click={() => setPressedButton(2)}
        />
        <sinch-button-group-item
          aria-label="button-3"
          text="button-3"
          on-click={() => setPressedButton(3)}
        />
      </sinch-button-group>
      {pressedButton !== 0 && <sinch-text type="m">Button {pressedButton} pressed!</sinch-text>}
    </div>
  )
}
