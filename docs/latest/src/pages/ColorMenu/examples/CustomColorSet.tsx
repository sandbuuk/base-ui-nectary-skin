import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'

export const CustomColorSetExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      aria-label="Color menu"
      on-change={onChange}
    >
      <sinch-color-menu-option value="light-pink"/>
      <sinch-color-menu-option value="pink"/>
      <sinch-color-menu-option value="dark-pink"/>
    </sinch-color-menu>
  )
}
