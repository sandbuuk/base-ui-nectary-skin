import countriesJson from '@sinch-engage/nectary/utils/countries.json'
import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/flag'

const countries = Object.entries(countriesJson)

type TPhoneCodeMenu = {
  search: URLSearchParams,
}

export const PhoneCodeMenu: FC<TPhoneCodeMenu> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-select-menu-change', { detail: value }))
    setValue(value)
  }
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()

  return (
    <sinch-select-menu
      aria-label="Action menu"
      rows={rows}
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
