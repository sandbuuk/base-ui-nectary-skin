import { Icon, SegmentedIconControl, SegmentedIconControlOption } from '@nectary/react'
import { type FC, useState } from 'react'

export const DisabledExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <SegmentedIconControl
      value={value}
      onChange={setValue}
      aria-label="Segmented control"
    >
      <SegmentedIconControlOption
        value="1"
        aria-label="Format align left"
        isFirst
        icon={<Icon iconsVersion="2" name="fa-align-left"/>}
      />
      <SegmentedIconControlOption
        value="2"
        aria-label="Format align center"
        disabled
        icon={<Icon iconsVersion="2" name="fa-align-center"/>}
      />
      <SegmentedIconControlOption
        value="3"
        aria-label="Format align right"
        icon={<Icon iconsVersion="2" name="fa-align-right"/>}
      />
      <SegmentedIconControlOption
        value="4"
        aria-label="Format justify"
        disabled
        isLast
        icon={<Icon iconsVersion="2" name="fa-align-justify"/>}
      />
    </SegmentedIconControl>
  )
}
