import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/segmented-icon-control'
import '@nectary/components/segmented-icon-control-option'
import '@nectary/assets/icons/format-align-left'
import '@nectary/assets/icons/format-align-center'
import '@nectary/assets/icons/format-align-right'
import '@nectary/assets/icons/format-align-justify'

export const DisabledExample: FC = () => {
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }

  return (
    <sinch-segmented-icon-control
      value={value}
      on-change={onChange}
      aria-label="Segmented control"
    >
      <sinch-segmented-icon-control-option value="1" aria-label="Format align left">
        <sinch-icon-format-align-left slot="icon"/>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="2" disabled aria-label="Format align center">
        <sinch-icon-format-align-center slot="icon"/>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="3" aria-label="Format align right">
        <sinch-icon-format-align-right slot="icon"/>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="4" disabled aria-label="Format justify">
        <sinch-icon-format-align-justify slot="icon"/>
      </sinch-segmented-icon-control-option>
    </sinch-segmented-icon-control>
  )
}
