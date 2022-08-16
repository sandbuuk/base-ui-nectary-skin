import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/segmented-control'
import '@sinch-engage/nectary/segmented-control-option'
import '@sinch-engage/nectary/icons/open-in-new'

type TSegmentedControl = {
  search: URLSearchParams,
}

export const SegmentedControl: FC<TSegmentedControl> = ({ search }) => {
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-segmented-control-change', { detail: value }))
    setValue(value)
  }
  const isSingleOption = search.get('single-option') !== null

  return (
    <sinch-segmented-control
      value={value}
      on-change={onChange}
      aria-label="segmented control"
    >
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
