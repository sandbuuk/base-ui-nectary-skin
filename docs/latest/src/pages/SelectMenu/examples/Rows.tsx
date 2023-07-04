import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary-assets/icons/laptop'
import '@sinch-engage/nectary-assets/icons/smartphone'
import '@sinch-engage/nectary-assets/icons/tablet'
import '@sinch-engage/nectary-assets/icons/watch'

const menuStyles: CSSProperties = {
  width: 250,
}

export const RowsExample: FC = () => {
  const [value, setValue] = useState('Smartphone')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-select-menu
      aria-label="Action menu"
      rows={2}
      style={menuStyles}
      value={value}
      on-change={onChange}
    >
      <sinch-select-menu-option
        text="Laptop"
        aria-label="Laptop option"
        value="Laptop"
      >
        <sinch-icon-laptop slot="icon"/>
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
        <sinch-icon-tablet slot="icon"/>
      </sinch-select-menu-option>
      <sinch-select-menu-option
        text="Watch"
        aria-label="Watch option"
        value="Watch"
      >
        <sinch-icon-watch slot="icon"/>
      </sinch-select-menu-option>
    </sinch-select-menu>
  )
}
