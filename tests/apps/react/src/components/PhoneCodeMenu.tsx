import countriesJson from '@nectary/components/utils/countries.json'
import { useState } from 'react'
import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/flag'

const countries = Object.entries(countriesJson)

export const PhoneCodeMenu: FC = () => {
  const [search] = useComponentSearchParams('phone-code-menu')
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
