import { Icon, Tabs, TabsIconOption, Text } from '@nectary/react'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}

export const IconOnlyExample: FC = () => {
  const [value, setValue] = useState('2')

  return (
    <div style={wrapperStyles}>
      <Tabs
        aria-label="Tabs"
        value={value}
        onChange={setValue}
      >
        <TabsIconOption
          aria-label="Tab 1"
          value="1"
          icon={<Icon iconsVersion="2" name="fa-face-frown"/>}
        />
        <TabsIconOption
          aria-label="Tab 2"
          value="2"
          icon={<Icon iconsVersion="2" name="fa-basketball"/>}
        />
        <TabsIconOption
          aria-label="Tab 3"
          value="3"
          disabled
          icon={<Icon iconsVersion="2" name="fa-arrows-down-to-people"/>}
        />
        <TabsIconOption
          aria-label="Tab 4"
          value="4"
          icon={<Icon iconsVersion="2" name="fa-people-pulling"/>}
        />
      </Tabs>
      {value === '1' && <Text type="m">1</Text>}
      {value === '2' && <Text type="m">2</Text>}
      {value === '3' && <Text type="m">3</Text>}
      {value === '4' && <Text type="m">4</Text>}
    </div>
  )
}
