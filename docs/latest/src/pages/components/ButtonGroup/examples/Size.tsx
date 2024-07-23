import { sizeExValues } from '@nectary/components/utils/size'
import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/button-group'
import '@nectary/components/button-group-item'
import '@nectary/components/text'
import '@nectary/components/title'

type ButtonGroupRowProps = {
  size: (typeof sizeExValues)[number],
}

const ButtonGroupRow = ({ size }: ButtonGroupRowProps) => {
  const [pressedButton, setPressedButton] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
      <sinch-title type="s" level="3" text={size}/>
      <sinch-button-group aria-label="my-button-group" size={size}>
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

export const SizeExample: FC = () => {
  return (
    <>
      {sizeExValues.map((size) => <ButtonGroupRow key={size} size={size}/>)}
    </>
  )
}
