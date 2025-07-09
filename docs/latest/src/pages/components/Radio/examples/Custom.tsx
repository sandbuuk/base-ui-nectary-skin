import { useId, useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/radio'
import '@nectary/components/radio-option'
import '@nectary/components/text'
import '@nectary/components/icon'

const CustomRadioOption = ({ value, label }: { value: string, label: string }) => {
  const labelId = useId()

  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
      <sinch-radio-option value={value} aria-labelledby={labelId}/>
      <sinch-icon name="fa-square-dashed-circle-plus" icons-version="2"/>
      <sinch-text type="m" id={labelId}>{label}</sinch-text>
    </label>
  )
}

export const CustomExample: FC = () => {
  const [value, setValue] = useState('1')
  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }

  return (
    <sinch-radio value={value} on-change={onChange} aria-label="Radio">
      <CustomRadioOption value="1" label="Option 1"/>
      <CustomRadioOption value="2" label="Option 2"/>
      <CustomRadioOption value="3" label="Option 3"/>
    </sinch-radio>
  )
}
