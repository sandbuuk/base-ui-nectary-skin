import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'

const vibrantColorNames = [
  'violet',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'pink',
  'brown',
  'gray',
]

export const VibrantColorSetExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      cols={4}
      aria-label="Color menu"
      on-change={onChange}
    >
      {vibrantColorNames.map((c) => <sinch-color-menu-option key={c} value={c}/>)}
    </sinch-color-menu>
  )
}
