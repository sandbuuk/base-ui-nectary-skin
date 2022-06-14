import { useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'

type TSegmentedControl = {
  search: URLSearchParams,
}

export const SegmentedControl: FC<TSegmentedControl> = ({ search }) => {
  const [value, setValue] = useState('')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-segmented-control-change', { detail: value }))
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
        <sinch-segmented-control-option
          key={opt.value}
          value={opt.value}
          text={opt.text}
          disabled={opt.disabled}
          aria-label={opt.text}
        >
          {opt.icon != null && <sinch-icon-open-in-new slot="icon"/>}
        </sinch-segmented-control-option>
      ))
    } catch {
      return null
    }
  }, [search])

  return (
    <sinch-segmented-control value={value} onChange={onChange} aria-label="segmented control">
      {options}
    </sinch-segmented-control>
  )
}
