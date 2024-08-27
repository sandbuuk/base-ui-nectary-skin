import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/button-group'
import '@nectary/components/button-group-item'
import '@nectary/components/text'
import '@nectary/components/icon'

export const SlotsExample: FC = () => {
  const [pressedButton, setPressedButton] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <sinch-button-group aria-label="my-button-group" type="cta-secondary">
        <sinch-button-group-item
          aria-label="Click"
          on-click={() => setPressedButton(1)}
        >
          <sinch-icon name="fa-face-smile" slot="icon"/>
        </sinch-button-group-item>
        <sinch-button-group-item
          aria-label="button-2"
          text="button-2"
          on-click={() => setPressedButton(2)}
        >
          <sinch-icon name="fa-arrow-up-right-from-square" slot="right-icon"/>
        </sinch-button-group-item>
        <sinch-button-group-item
          aria-label="button-3"
          text="button-3"
          on-click={() => setPressedButton(3)}
        >
          <sinch-icon name="fa-arrow-up-right-from-square" slot="icon"/>
        </sinch-button-group-item>
      </sinch-button-group>
      {pressedButton !== 0 && <sinch-text type="m">Button {pressedButton} pressed!</sinch-text>}
    </div>
  )
}
