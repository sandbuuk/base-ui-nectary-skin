import { ButtonGroup, ButtonGroupItem, Text } from '@nectary/react'
import { type FC, useState } from 'react'
import type { ButtonVariant } from '@nectary/react'

type ButtonGroupRowProps = {
  variant: ButtonVariant,
  numberOfItem: number,
}

const ButtonGroupRow = ({ variant, numberOfItem }: ButtonGroupRowProps) => {
  const [pressedButton, setPressedButton] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
      <ButtonGroup aria-label="my-button-group" variant={variant}>
        {new Array(numberOfItem).fill(null).map((_x, index) => {
          const buttonNumber = index + 1

          return (
            <ButtonGroupItem
              key={index}
              aria-label={`button-${buttonNumber}`}
              onClick={() => setPressedButton(buttonNumber)}
            >
              button-{buttonNumber}
            </ButtonGroupItem>
          )
        })}
      </ButtonGroup>
      {pressedButton !== 0 && <Text type="m">Button {pressedButton} pressed!</Text>}
    </div>
  )
}

export const MultipleExample: FC = () => {
  return (
    <>
      <ButtonGroupRow variant="primary" numberOfItem={2}/>
      <ButtonGroupRow variant="primary" numberOfItem={3}/>
      <ButtonGroupRow variant="primary" numberOfItem={4}/>
      <ButtonGroupRow variant="primary" numberOfItem={5}/>
    </>
  )
}
