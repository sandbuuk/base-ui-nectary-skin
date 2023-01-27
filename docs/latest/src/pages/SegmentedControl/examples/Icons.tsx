import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/segmented-control'
import '@sinch-engage/nectary/segmented-control-option'
import '@sinch-engage/nectary/icons/help-outline'
import '@sinch-engage/nectary/icons/open-in-new'

export const IconsExample: FC = () => {
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
      <sinch-segmented-control-option value="2" text="Lorem Ipsum Ipsum." aria-label="Tab 2">
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-segmented-control-option>
      <sinch-segmented-control-option value="3" text="Tab disabled" aria-label="Tab 3">
        <sinch-icon-help-outline slot="icon"/>
      </sinch-segmented-control-option>
      <sinch-segmented-control-option value="4" text="Tab 4 label" aria-label="Tab 4"/>
    </sinch-segmented-control>
  )
}
