import { ButtonGroup, ButtonGroupItem } from '@nectary/react'
import { type FC, useState } from 'react'

export const ToggleExample: FC = () => {
  const [toggledButton, setToggled] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ButtonGroup aria-label="my-button-group" variant="subtle-primary">
        <ButtonGroupItem
          aria-label="button-1"
          toggled={toggledButton === 1}
          onClick={() => setToggled(1)}
        >
          button-1
        </ButtonGroupItem>
        <ButtonGroupItem
          aria-label="button-2"
          toggled={toggledButton === 2}
          onClick={() => setToggled(2)}
        >
          button-2
        </ButtonGroupItem>
        <ButtonGroupItem
          aria-label="button-3"
          toggled={toggledButton === 3}
          onClick={() => setToggled(3)}
        >
          button-3
        </ButtonGroupItem>
      </ButtonGroup>
    </div>
  )
}
