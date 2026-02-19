import { ColorMenu, ColorMenuOption } from '@nectary/react'
import { type FC, useState } from 'react'

const vibrantColorNames = [
  'violet',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'pink',
  'gray',
]

export const VibrantColorSetExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <ColorMenu
      value={value}
      cols={4}
      aria-label="Color menu"
      onChange={setValue}
    >
      {vibrantColorNames.map((c) => <ColorMenuOption key={c} value={c}/>)}
    </ColorMenu>
  )
}
