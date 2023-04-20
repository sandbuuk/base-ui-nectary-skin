import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'
import '@sinch-engage/nectary/color-menu-option'

const darkColorNames = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-brown', 'dark-gray']

export const DarkColorSetExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      cols={4}
      aria-label="Color menu"
      on-change={onChange}
    >
      {darkColorNames.map((c) => <sinch-color-menu-option key={c} value={c}/>)}
    </sinch-color-menu>
  )
}
