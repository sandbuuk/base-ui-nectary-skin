import { ButtonGroup, ButtonGroupItem, Text } from '@nectary/react'
import { type FC, useState } from 'react'

export const SimpleExample: FC = () => {
  const [pressedButton, setPressedButton] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ButtonGroup aria-label="my-button-group" variant="cta-secondary">
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
