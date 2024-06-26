import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'

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
