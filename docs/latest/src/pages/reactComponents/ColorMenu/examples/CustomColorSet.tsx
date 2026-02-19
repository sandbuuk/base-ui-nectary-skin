import { ColorMenu, ColorMenuOption } from '@nectary/react'
import { type FC, useState } from 'react'

export const CustomColorSetExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <ColorMenu
      value={value}
      aria-label="Color menu"
      onChange={setValue}
    >
      <ColorMenuOption value="light-pink"/>
      <ColorMenuOption value="pink"/>
      <ColorMenuOption value="dark-pink"/>
    </ColorMenu>
  )
}
