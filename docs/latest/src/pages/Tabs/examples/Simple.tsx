import { useState } from 'react'
import type { FC, CSSProperties } from 'react'
import '@sinch-engage/nectary/tabs'
import '@sinch-engage/nectary/tabs-option'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/icons/sentiment-dissatisfied'
import '@sinch-engage/nectary/icons/sports-handball'
import '@sinch-engage/nectary/icons/reduce-capacity'
import '@sinch-engage/nectary/icons/emoji-people'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}

export const SimpleExample: FC = () => {
  const [value, setValue] = useState('2')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <div style={wrapperStyles}>
      <sinch-tabs
        aria-label="Tabs"
        value={value}
        on-change={onChange}
      >
        <sinch-tabs-option
          aria-label="Tab 1"
          value="1"
          text="Tab 1"
        >
          <sinch-icon-sentiment-dissatisfied slot="icon"/>
        </sinch-tabs-option>
        <sinch-tabs-option
          aria-label="Tab 2"
          value="2"
          text="Tab 2"
        >
          <sinch-icon-sports-handball slot="icon"/>
        </sinch-tabs-option>
        <sinch-tabs-option
          aria-label="Tab 3"
          value="3"
          text="Tab 3"
          disabled
        >
          <sinch-icon-reduce-capacity slot="icon"/>
        </sinch-tabs-option>
        <sinch-tabs-option
          aria-label="Tab 4"
          value="4"
          text="Tab 4"
        >
          <sinch-icon-emoji-people slot="icon"/>
        </sinch-tabs-option>
      </sinch-tabs>
      {value === '1' && <sinch-text type="m">1</sinch-text>}
      {value === '2' && <sinch-text type="m">2</sinch-text>}
      {value === '3' && <sinch-text type="m">3</sinch-text>}
      {value === '4' && <sinch-text type="m">4</sinch-text>}
    </div>
  )
}
