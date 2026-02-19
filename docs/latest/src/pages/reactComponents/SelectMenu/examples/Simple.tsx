import { Icon, Select } from '@nectary/react'
import { type CSSProperties, type FC, useState } from 'react'

const menuStyles: CSSProperties = {
  width: 250,
}

export const SimpleExample: FC = () => {
  const [value, setValue] = useState('Smartphone')

  return (
    <Select
      aria-label="Action menu"
      style={menuStyles}
      value={value}
      onChange={setValue}
    >
      <Select.Option
        text="Laptop"
        aria-label="Laptop option"
        value="Laptop"
        icon={<Icon iconsVersion="2" name="fa-laptop"/>}
      />
      <Select.Option
        text="Smartphone"
        aria-label="Smartphone option"
        value="Smartphone"
        icon={<Icon iconsVersion="2" name="smartphone"/>}
      />
      <Select.Option
        text="Tablet"
        aria-label="Tablet option"
        value="Tablet"
        disabled
        icon={<Icon iconsVersion="2" name="fa-tablet"/>}
      />
      <Select.Option
        text="Watch"
        aria-label="Watch option"
        value="Watch"
        icon={<Icon iconsVersion="2" name="fa-watch"/>}
      />
    </Select>
  )
}
