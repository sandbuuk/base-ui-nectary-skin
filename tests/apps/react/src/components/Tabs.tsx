import { useMemo, useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/tabs'
import '@sinch-engage/nectary/tabs-option'

type TTabs = {
  search: URLSearchParams,
}

export const Tabs: FC<TTabs> = ({ search }) => {
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-tabs-change', { detail: value }))
    setValue(value)
  }
  const options = useMemo(() => {
    const data = search.get('options')

    if (data === null) {
      return null
    }

    try {
      const options = JSON.parse(decodeURI(data))

      return options.map((opt: any) => (
        <sinch-tabs-option
          key={opt.value}
          value={opt.value}
          text={opt.text}
          disabled={opt.disabled}
          aria-label={opt.text}
        >
          {opt.icon != null && <sinch-icon-open-in-new slot="icon"/>}
        </sinch-tabs-option>
      ))
    } catch {
      return null
    }
  }, [search])

  return (
    <sinch-tabs value={value} on-change={onChange} aria-label="Tabs">
      {options}
    </sinch-tabs>
  )
}
