import countriesJson from '@nectary/components/utils/countries.json'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/flag'

const countries = Object.entries(countriesJson)

const menuStyles: CSSProperties = {
  width: 250,
}

export const PhoneCodeExample: FC = () => {
  const [value, setValue] = useState('se')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-select-menu
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
