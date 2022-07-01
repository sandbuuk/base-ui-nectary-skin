import { useMemo, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'
import '@sinch-engage/nectary/segmented-icon-control'
import '@sinch-engage/nectary/segmented-icon-control-option'
import '@sinch-engage/nectary/icons/format-align-center'
import '@sinch-engage/nectary/icons/format-align-justify'
import '@sinch-engage/nectary/icons/format-align-right'
import '@sinch-engage/nectary/icons/format-align-left'

type TSegmentedIconControl = {
  search: URLSearchParams,
}

export const SegmentedIconControl: FC<TSegmentedIconControl> = ({ search }) => {
  const [value, setValue] = useState('')
  const onChange = useMemo(() =>
    (search.get('uncontrolled') === null
      ? (e: SyntheticEvent<Element, CustomEvent>) => {
        const value = e.nativeEvent.detail

        window.dispatchEvent(new CustomEvent('sinch-segmented-icon-control-change', { detail: value }))

        setValue(value)
      }
      : () => {}),
  [search, setValue])
  const isMultiple = search.get('multiple') !== null
  const isSingleOption = search.get('single-option') !== null

  return (
    <sinch-segmented-icon-control
      multiple={isMultiple}
      value={value}
      onChange={onChange}
      aria-label="segmented icon control"
    >
      <sinch-segmented-icon-control-option value="1" aria-label="1">
        <sinch-icon-format-align-right slot="icon"/>
      </sinch-segmented-icon-control-option>
      {!isSingleOption && (
        <>
          <sinch-segmented-icon-control-option disabled value="2" aria-label="2">
            <sinch-icon-format-align-center slot="icon"/>
          </sinch-segmented-icon-control-option>
          <sinch-segmented-icon-control-option value="3" aria-label="3">
            <sinch-icon-format-align-left slot="icon"/>
          </sinch-segmented-icon-control-option>
          <sinch-segmented-icon-control-option value="4" aria-label="4">
            <sinch-icon-format-align-justify slot="icon"/>
          </sinch-segmented-icon-control-option>
        </>
      )}
    </sinch-segmented-icon-control>
  )
}
