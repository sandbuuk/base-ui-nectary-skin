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
  const isSingleOption = search.get('single-option') !== null

  return (
    <sinch-segmented-control value={value} onChange={onChange} aria-label="segmented control">
      <sinch-segmented-control-option
        value="1"
        text="Option value 1"
        aria-label="1"
      >
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-segmented-control-option>
      {!isSingleOption && (
        <>
          <sinch-segmented-control-option
            value="2"
            text="Option value 2"
            aria-label="2"
            disabled
          >
            <sinch-icon-open-in-new slot="icon"/>
          </sinch-segmented-control-option>
          <sinch-segmented-control-option
            value="3"
            text="Option value 3"
            aria-label="3"
          />
          <sinch-segmented-control-option
            value="4"
            text="Option value 4"
            aria-label="4"
          />
        </>
      )}
    </sinch-segmented-control>
  )
}
