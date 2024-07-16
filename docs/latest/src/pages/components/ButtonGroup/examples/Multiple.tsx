import { useState } from 'react'
import type { typeValues } from '@nectary/components/button/utils'
import type { FC } from 'react'
import '@nectary/components/button-group'
import '@nectary/components/button-group-item'
import '@nectary/components/text'

type ButtonGroupRowProps = {
  type: (typeof typeValues)[number],
  numberOfItem: number,
}

const ButtonGroupRow = ({ type, numberOfItem }: ButtonGroupRowProps) => {
  const [pressedButton, setPressedButton] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
      <sinch-button-group type={type}>
        {new Array(numberOfItem).fill(null).map((_x, index) => {
          const buttonNumber = index + 1

          return (
            <sinch-button-group-item
              key={index}
              aria-label={`button-${buttonNumber}`}
              text={`button-${buttonNumber}`}
              on-click={() => setPressedButton(buttonNumber)}
            />
          )
        })}
      </sinch-button-group>
      {pressedButton !== 0 && <sinch-text type="m">Button {pressedButton} pressed!</sinch-text>}
    </div>
  )
}

export const MultipleExample: FC = () => {
  return (
    <>
      <ButtonGroupRow type={'primary'} numberOfItem={2}/>
      <ButtonGroupRow type={'primary'} numberOfItem={3}/>
      <ButtonGroupRow type={'primary'} numberOfItem={4}/>
      <ButtonGroupRow type={'primary'} numberOfItem={5}/>
    </>
  )
}
