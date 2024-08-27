import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/segmented-control'
import '@nectary/components/segmented-control-option'
import '@nectary/components/icon'

export const DisabledExample: FC = () => {
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }

  return (
    <sinch-segmented-control
      value={value}
      on-change={onChange}
      aria-label="Segmented control"
    >
      <sinch-segmented-control-option value="1" text="Tab 1 label" aria-label="Tab 1"/>
      <sinch-segmented-control-option value="3" text="Tab disabled" disabled aria-label="Tab 3">
        <sinch-icon icons-version="2" name="fa-circle-question" slot="icon"/>
      </sinch-segmented-control-option>
      <sinch-segmented-control-option value="2" text="Lorem Ipsum Ipsum." aria-label="Tab 2"/>
    </sinch-segmented-control>
  )
}
