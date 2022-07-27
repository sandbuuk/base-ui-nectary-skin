import { useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'
import '@sinch-engage/nectary/date-picker'

type TDatePicker = {
  search: URLSearchParams,
}

export const DatePicker: FC<TDatePicker> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-date-picker-change', { detail: value }))
        setValue(value)
      }
      : () => {}),
  [search, setValue])
  const min = search.get('min') ?? ''
  const max = search.get('max') ?? ''
  const locale = search.get('locale') ?? ''

  return (
    <sinch-date-picker
      min={min}
      max={max}
      locale={locale}
      aria-label="Date input"
      value={value}
      onChange={onChange}
    />
  )
}
