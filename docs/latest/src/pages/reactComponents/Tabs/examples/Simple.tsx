import { Icon, Tabs, TabsOption, Text } from '@nectary/react'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}

export const SimpleExample: FC = () => {
  const [value, setValue] = useState('2')

  return (
    <div style={wrapperStyles}>
      <Tabs
        aria-label="Tabs"
        value={value}
        onChange={setValue}
      >
        <TabsOption
          value="1"
          text="Tab 1"
          icon={<Icon iconsVersion="2" name="fa-face-frown"/>}
        />
        <TabsOption
          value="2"
          text="Tab 2"
          icon={<Icon iconsVersion="2" name="fa-basketball"/>}
        />
        <TabsOption
          value="3"
          text="Tab 3"
          disabled
          icon={<Icon iconsVersion="2" name="fa-arrows-down-to-people"/>}
        />
        <TabsOption
          value="4"
          text="Tab 4"
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
