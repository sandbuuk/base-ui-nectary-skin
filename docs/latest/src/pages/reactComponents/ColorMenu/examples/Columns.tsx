import { ColorMenu, ColorMenuOption } from '@nectary/react'
import { type FC, useState } from 'react'

const vibrantColorNames = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'gray']

export const ColumnsExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <ColorMenu
      value={value}
      cols={2}
      aria-label="Color menu"
      onChange={setValue}
    >
      {vibrantColorNames.map((c) => <ColorMenuOption key={c} value={c}/>)}
    </ColorMenu>
  )
}
