import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/assets/icons/fa-tablet'
import '@nectary/assets/icons/fa-watch'
import '@nectary/assets/icons/fa-laptop'
import '@nectary/assets/icons/smartphone'

const menuStyles: CSSProperties = {
  width: 250,
}

export const MultipleExample: FC = () => {
  const [value, setValue] = useState('Smartphone,Watch')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-select-menu
      aria-label="Action menu"
      style={menuStyles}
      multiple
      value={value}
      on-change={onChange}
    >
      <sinch-select-menu-option
        text="Laptop"
        aria-label="Laptop option"
        value="Laptop"
      >
        <sinch-icon-fa-laptop slot="icon"/>
      </sinch-select-menu-option>
      <sinch-select-menu-option
        text="Smartphone"
        aria-label="Smartphone option"
        value="Smartphone"
      >
        <sinch-icon-smartphone slot="icon"/>
      </sinch-select-menu-option>
      <sinch-select-menu-option
        text="Tablet"
        aria-label="Tablet option"
        value="Tablet"
        disabled
      >
        <sinch-icon-fa-tablet slot="icon"/>
      </sinch-select-menu-option>
      <sinch-select-menu-option
        text="Watch"
        aria-label="Watch option"
        value="Watch"
      >
        <sinch-icon-fa-watch slot="icon"/>
      </sinch-select-menu-option>
    </sinch-select-menu>
  )
}
