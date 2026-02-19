import { SegmentedControl, SegmentedControlOption } from '@nectary/react'
import { type FC, useState } from 'react'

export const SimpleExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      aria-label="Segmented control"
    >
      <SegmentedControlOption value="1" text="Tab 1 label" aria-label="Tab 1" isFirst/>
      <SegmentedControlOption value="2" text="Tab 2 label" aria-label="Tab 2"/>
      <SegmentedControlOption value="3" text="Tab 3 label" aria-label="Tab 3" isLast/>
    </SegmentedControl>
  )
}
