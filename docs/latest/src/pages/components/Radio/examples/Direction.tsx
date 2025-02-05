import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/radio'
import '@nectary/components/radio-option'

export const DirectionExample: FC = () => {
  const [value, setValue] = useState('1')
  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }

  return (
    <sinch-radio value={value} on-change={onChange} aria-label="Radio" style={{ '--sinch-comp-radio-direction': 'row', '--sinch-comp-radio-gap': '16px' }}>
      <sinch-radio-option value="1" text="Option 1" aria-label="Option 1"/>
      <sinch-radio-option value="2" text="Option 2" aria-label="Option 2"/>
      <sinch-radio-option value="3" text="Option 3" aria-label="Option 3"/>
    </sinch-radio>
  )
}
