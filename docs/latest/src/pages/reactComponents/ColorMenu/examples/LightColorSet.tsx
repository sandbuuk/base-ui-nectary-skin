import { ColorMenu, ColorMenuOption } from '@nectary/react'
import { type FC, useState } from 'react'

const lightColors = [
  'light-violet',
  'light-blue',
  'light-green',
  'light-yellow',
  'light-orange',
  'light-red',
  'light-pink',
  'light-gray',
]

export const LightColorSetExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <ColorMenu
      value={value}
      cols={4}
      aria-label="Color menu"
      onChange={setValue}
    >
      {lightColors.map((c) => <ColorMenuOption key={c} value={c}/>)}
    </ColorMenu>
  )
}
