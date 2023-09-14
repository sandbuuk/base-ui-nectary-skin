import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'

const lightColors = [
  'light-violet',
  'light-blue',
  'light-green',
  'light-yellow',
  'light-orange',
  'light-red',
  'light-pink',
  'light-brown',
  'light-gray',
]

export const LightColorSetExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      cols={4}
      aria-label="Color menu"
      on-change={onChange}
    >
      {lightColors.map((c) => <sinch-color-menu-option key={c} value={c}/>)}
    </sinch-color-menu>
  )
}
