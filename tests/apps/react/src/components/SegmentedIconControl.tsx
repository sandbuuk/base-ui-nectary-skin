import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/segmented-icon-control'
import '@nectary/components/segmented-icon-control-option'
import '@nectary/components/icon'

export const SegmentedIconControl: FC = () => {
  const [search] = useSearchParams()
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-segmented-icon-control-change', { detail: value }))

    setValue(value)
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-segmented-icon-control-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-segmented-icon-control-focus'))
  const isMultiple = search.get('multiple') !== null
  const isSingleOption = search.get('single-option') !== null

  return (
    <sinch-segmented-icon-control
      multiple={isMultiple}
      value={value}
      on-change={onChange}
      aria-label="segmented icon control"
    >
      <sinch-segmented-icon-control-option
        value="1"
        aria-label="1"
        on-focus={onFocus}
        on-blur={onBlur}
      >
        <sinch-icon name="fa-align-right" slot="icon"/>
      </sinch-segmented-icon-control-option>
      {!isSingleOption && (
        <>
          <sinch-segmented-icon-control-option disabled value="2" aria-label="2">
            <sinch-icon name="fa-align-center" slot="icon"/>
          </sinch-segmented-icon-control-option>
          <sinch-segmented-icon-control-option value="3" aria-label="3">
            <sinch-icon name="fa-align-left" slot="icon"/>
          </sinch-segmented-icon-control-option>
          <sinch-segmented-icon-control-option value="4" aria-label="4">
            <sinch-icon name="fa-align-justify" slot="icon"/>
          </sinch-segmented-icon-control-option>
        </>
      )}
    </sinch-segmented-icon-control>
  )
}
