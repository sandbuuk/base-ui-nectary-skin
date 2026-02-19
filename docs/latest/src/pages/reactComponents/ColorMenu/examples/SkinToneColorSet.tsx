import { ColorMenu, ColorMenuOption } from '@nectary/react'
import { type FC, useState } from 'react'

const skinToneColorNames = [
  'skintone-default',
  'skintone-light',
  'skintone-light-medium',
  'skintone-medium',
  'skintone-medium-dark',
  'skintone-dark',
]

export const SkinToneColorSetExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <ColorMenu
      value={value}
      cols={6}
      aria-label="Color menu"
      onChange={setValue}
    >
      {skinToneColorNames.map((c) => <ColorMenuOption key={c} value={c}/>)}
    </ColorMenu>
  )
}
