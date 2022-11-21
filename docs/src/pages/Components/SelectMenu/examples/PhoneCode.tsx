import countriesJson from '@sinch-engage/nectary/utils/countries.json'
import { useState } from 'react'
import type { FC, CSSProperties } from 'react'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/flag'

const countries = Object.entries(countriesJson)

const menuStyles: CSSProperties = {
  width: 250,
}

export const PhoneCodeExample: FC = () => {
  const [value, setValue] = useState('se')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-select-menu
      slot="content"
      aria-label="Action menu"
      rows={5}
      style={menuStyles}
      value={value}
      on-change={onChange}
    >
      {
        countries.map(([code, data]) => (
          <sinch-select-menu-option
            key={code}
            value={code}
            text={`(${data.phoneCode}) ${data.name}`}
            aria-label={data.name}
          >
            <sinch-flag slot="icon" code={code}/>
          </sinch-select-menu-option>
        ))
      }
    </sinch-select-menu>
  )
}
