import { Icon, SegmentedControl, SegmentedControlOption } from '@nectary/react'
import { type FC, useState } from 'react'

export const DisabledExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      aria-label="Segmented control"
    >
      <SegmentedControlOption value="1" text="Tab 1 label" aria-label="Tab 1" isFirst/>
      <SegmentedControlOption
        value="3"
        text="Tab disabled"
        aria-label="Tab 3"
        disabled
        icon={<Icon iconsVersion="2" name="fa-circle-question"/>}
      />
      <SegmentedControlOption value="2" text="Lorem Ipsum Ipsum." aria-label="Tab 2" isLast/>
    </SegmentedControl>
  )
}
