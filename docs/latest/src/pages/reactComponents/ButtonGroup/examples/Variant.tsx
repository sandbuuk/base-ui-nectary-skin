import { ButtonGroup, ButtonGroupItem, Text, Title } from '@nectary/react'
import { type FC, useState } from 'react'
import type { ButtonVariant } from '@nectary/react'

const variantValues: ButtonVariant[] = [
  'primary',
  'secondary',
  'subtle-primary',
  'subtle-secondary',
  'cta-primary',
  'cta-secondary',
  'destructive',
]

type ButtonGroupRowProps = {
  variant: ButtonVariant,
}

const ButtonGroupRow = ({ variant }: ButtonGroupRowProps) => {
  const [pressedButton, setPressedButton] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
      <Title type="s" level="3">{variant}</Title>
      <ButtonGroup aria-label="my-button-group" variant={variant}>
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

export const VariantExample: FC = () => {
  return (
    <>
      {variantValues.map((variant) => <ButtonGroupRow key={variant} variant={variant}/>)}
    </>
  )
}
