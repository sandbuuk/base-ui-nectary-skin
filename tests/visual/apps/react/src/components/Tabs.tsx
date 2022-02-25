import { useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'

type TTabs = {
  search: URLSearchParams,
}

export const Tabs: FC<TTabs> = ({ search }) => {
  const [value, setValue] = useState('')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-tabs-change', { detail: value }))
        setValue(value)
      }
      : () => {}),
  [search, setValue])
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
        >
          {opt.icon != null && <sinch-icon-open-in-new slot="icon" size={16}/>}
        </sinch-tabs-option>
      ))
    } catch {
      return null
    }
  }, [search])

  return (
    <sinch-tabs value={value} onChange={onChange}>
      {options}
    </sinch-tabs>
  )
}
