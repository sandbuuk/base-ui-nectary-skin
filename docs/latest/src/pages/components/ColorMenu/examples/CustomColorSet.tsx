import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'

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
