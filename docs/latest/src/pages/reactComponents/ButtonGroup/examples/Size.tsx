import { ButtonGroup, ButtonGroupItem, Text, Title } from '@nectary/react'
import { type FC, useState } from 'react'
import type { ButtonSize } from '@nectary/react'

const sizeValues: ButtonSize[] = ['xs', 's', 'm', 'l']

type ButtonGroupRowProps = {
  size: ButtonSize,
}

const ButtonGroupRow = ({ size }: ButtonGroupRowProps) => {
  const [pressedButton, setPressedButton] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
      <Title type="s" level="3">{size}</Title>
      <ButtonGroup aria-label="my-button-group" size={size}>
        <ButtonGroupItem
          aria-label="button-1"
          onClick={() => setPressedButton(1)}
        >
          button-1
        </ButtonGroupItem>
        <ButtonGroupItem
          aria-label="button-2"
          onClick={() => setPressedButton(2)}
        >
          button-2
        </ButtonGroupItem>
        <ButtonGroupItem
          aria-label="button-3"
          onClick={() => setPressedButton(3)}
        >
          button-3
        </ButtonGroupItem>
      </ButtonGroup>
      {pressedButton !== 0 && <Text type="m">Button {pressedButton} pressed!</Text>}
    </div>
  )
}

export const SizeExample: FC = () => {
  return (
    <>
      {sizeValues.map((size) => <ButtonGroupRow key={size} size={size}/>)}
    </>
  )
}
