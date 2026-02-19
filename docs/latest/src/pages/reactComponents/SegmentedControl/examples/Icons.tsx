import { Icon, SegmentedControl, SegmentedControlOption } from '@nectary/react'
import { type FC, useState } from 'react'

export const IconsExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      aria-label="Segmented control"
    >
      <SegmentedControlOption value="1" text="Tab 1 label" aria-label="Tab 1" isFirst/>
      <SegmentedControlOption
        value="2"
        text="Lorem Ipsum Ipsum."
        aria-label="Tab 2"
        icon={<Icon iconsVersion="2" name="fa-arrow-up-right-from-square"/>}
      />
      <SegmentedControlOption
        value="3"
        text="Tab disabled"
        aria-label="Tab 3"
        icon={<Icon iconsVersion="2" name="fa-circle-question"/>}
      />
      <SegmentedControlOption value="4" text="Tab 4 label" aria-label="Tab 4" isLast/>
    </SegmentedControl>
  )
}
