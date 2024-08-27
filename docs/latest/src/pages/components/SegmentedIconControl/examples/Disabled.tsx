import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/segmented-icon-control'
import '@nectary/components/segmented-icon-control-option'
import '@nectary/components/icon'

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
        <sinch-icon name="fa-align-left" slot="icon"/>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="2" disabled aria-label="Format align center">
        <sinch-icon name="fa-align-center" slot="icon"/>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="3" aria-label="Format align right">
        <sinch-icon name="fa-align-right" slot="icon"/>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="4" disabled aria-label="Format justify">
        <sinch-icon name="fa-align-justify" slot="icon"/>
      </sinch-segmented-icon-control-option>
    </sinch-segmented-icon-control>
  )
}
