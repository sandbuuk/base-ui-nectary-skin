import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/tabs'
import '@nectary/components/tabs-icon-option'
import '@nectary/components/text'
import '@nectary/assets/icons/fa-face-frown'
import '@nectary/assets/icons/fa-basketball'
import '@nectary/assets/icons/fa-arrows-down-to-people'
import '@nectary/assets/icons/fa-people-pulling'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}

export const IconOnlyExample: FC = () => {
  const [value, setValue] = useState('2')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <div style={wrapperStyles}>
      <sinch-tabs
        aria-label="Tabs"
        value={value}
        on-change={onChange}
      >
        <sinch-tabs-icon-option aria-label="Tab 1" value="1">
          <sinch-icon-fa-face-frown slot="icon"/>
        </sinch-tabs-icon-option>
        <sinch-tabs-icon-option aria-label="Tab 2" value="2">
          <sinch-icon-fa-basketball slot="icon"/>
        </sinch-tabs-icon-option>
        <sinch-tabs-icon-option
          aria-label="Tab 3"
          value="3"
          disabled
        >
          <sinch-icon-fa-arrows-down-to-people slot="icon"/>
        </sinch-tabs-icon-option>
        <sinch-tabs-icon-option aria-label="Tab 4" value="4">
          <sinch-icon-fa-people-pulling slot="icon"/>
        </sinch-tabs-icon-option>
      </sinch-tabs>
      {value === '1' && <sinch-text type="m">1</sinch-text>}
      {value === '2' && <sinch-text type="m">2</sinch-text>}
      {value === '3' && <sinch-text type="m">3</sinch-text>}
      {value === '4' && <sinch-text type="m">4</sinch-text>}
    </div>
  )
}
