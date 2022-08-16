import { useMemo, useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/radio'
import '@sinch-engage/nectary/radio-option'

type TRadio = {
  search: URLSearchParams,
}

export const Radio: FC<TRadio> = ({ search }) => {
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-radio-change', { detail: value }))
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
        <sinch-radio-option
          key={opt.value}
          value={opt.value}
          text={opt.text}
          disabled={opt.disabled}
          aria-label={opt.text}
        />
      ))
    } catch {
      return null
    }
  }, [search])

  return (
    <sinch-radio
      value={value}
      on-change={onChange}
      aria-label="Radio"
    >
      {options}
    </sinch-radio>
  )
}
