import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/segmented-control'
import '@sinch-engage/nectary/segmented-control-option'

export const SimpleExample: FC = () => {
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
      <sinch-segmented-control-option value="2" text="Tab 2 label" aria-label="Tab 2"/>
      <sinch-segmented-control-option value="3" text="Tab 3 label" aria-label="Tab 3"/>
    </sinch-segmented-control>
  )
}
