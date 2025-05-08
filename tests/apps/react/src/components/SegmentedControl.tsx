import { useState } from 'react'
import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/segmented-control'
import '@nectary/components/segmented-control-option'
import '@nectary/components/icon'

export const SegmentedControl: FC = () => {
  const [search] = useComponentSearchParams('segmented-control')
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-segmented-control-change', { detail: value }))
    setValue(value)
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-segmented-control-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-segmented-control-focus'))
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
        on-focus={onFocus}
        on-blur={onBlur}
      >
        <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>
      </sinch-segmented-control-option>
      {!isSingleOption && (
        <>
          <sinch-segmented-control-option
            value="2"
            text="Option value 2"
            aria-label="2"
            disabled
          >
            <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>
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
