import { ColorMenu, ColorMenuOption } from '@nectary/react'
import { type FC, useState } from 'react'

const darkColorNames = [
  'dark-violet',
  'dark-blue',
  'dark-green',
  'dark-yellow',
  'dark-orange',
  'dark-red',
  'dark-pink',
  'dark-gray',
]

export const DarkColorSetExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <ColorMenu
      value={value}
      cols={4}
      aria-label="Color menu"
      onChange={setValue}
    >
      {darkColorNames.map((c) => <ColorMenuOption key={c} value={c}/>)}
    </ColorMenu>
  )
}
