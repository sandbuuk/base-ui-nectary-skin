import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/segmented-icon-control'
import '@nectary/components/segmented-icon-control-option'
import '@nectary/assets/icons/fa-align-left'
import '@nectary/assets/icons/fa-align-center'
import '@nectary/assets/icons/fa-align-right'
import '@nectary/assets/icons/fa-align-justify'

export const SimpleExample: FC = () => {
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
        <sinch-icon-fa-align-left slot="icon"/>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="2" aria-label="Format align center">
        <sinch-icon-fa-align-center slot="icon"/>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="3" aria-label="Format align right">
        <sinch-icon-fa-align-right slot="icon"/>
      </sinch-segmented-icon-control-option>
      <sinch-segmented-icon-control-option value="4" aria-label="Format justify">
        <sinch-icon-fa-align-justify slot="icon"/>
      </sinch-segmented-icon-control-option>
    </sinch-segmented-icon-control>
  )
}
