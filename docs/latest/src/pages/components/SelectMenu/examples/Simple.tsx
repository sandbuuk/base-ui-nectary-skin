import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/icon'

const menuStyles: CSSProperties = {
  width: 250,
}

export const SimpleExample: FC = () => {
  const [value, setValue] = useState('Smartphone')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-select-menu
      aria-label="Action menu"
      style={menuStyles}
      value={value}
      on-change={onChange}
    >
      <sinch-select-menu-option
        text="Laptop"
        aria-label="Laptop option"
        value="Laptop"
      >
        <sinch-icon icons-version="2" name="fa-laptop" slot="icon"/>
      </sinch-select-menu-option>
      <sinch-select-menu-option
        text="Smartphone"
        aria-label="Smartphone option"
        value="Smartphone"
      >
        <sinch-icon icons-version="2" name="smartphone" slot="icon"/>
      </sinch-select-menu-option>
      <sinch-select-menu-option
        text="Tablet"
        aria-label="Tablet option"
        value="Tablet"
        disabled
      >
        <sinch-icon icons-version="2" name="fa-tablet" slot="icon"/>
      </sinch-select-menu-option>
      <sinch-select-menu-option
        text="Watch"
        aria-label="Watch option"
        value="Watch"
      >
        <sinch-icon icons-version="2" name="fa-watch" slot="icon"/>
      </sinch-select-menu-option>
    </sinch-select-menu>
  )
}
