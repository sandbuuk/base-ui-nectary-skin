import { ButtonGroup, ButtonGroupItem, Icon, Text } from '@nectary/react'
import { type FC, useState } from 'react'

export const SlotsExample: FC = () => {
  const [pressedButton, setPressedButton] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ButtonGroup aria-label="my-button-group" variant="cta-secondary">
        <ButtonGroupItem
          aria-label="Click"
          leftIcon={<Icon name="fa-face-smile" iconsVersion="2"/>}
          onClick={() => setPressedButton(1)}
        />
        <ButtonGroupItem
          aria-label="button-2"
          rightIcon={<Icon name="fa-arrow-up-right-from-square" iconsVersion="2"/>}
          onClick={() => setPressedButton(2)}
        >
          button-2
        </ButtonGroupItem>
        <ButtonGroupItem
          aria-label="button-3"
          leftIcon={<Icon name="fa-arrow-up-right-from-square" iconsVersion="2"/>}
          onClick={() => setPressedButton(3)}
        >
          button-3
        </ButtonGroupItem>
      </ButtonGroup>
      {pressedButton !== 0 && <Text type="m">Button {pressedButton} pressed!</Text>}
    </div>
  )
}
