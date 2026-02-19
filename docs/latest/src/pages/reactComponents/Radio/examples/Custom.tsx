import { Icon, Radio, RadioOption, Text } from '@nectary/react'
import { type CSSProperties, type FC, useId, useState } from 'react'

const labelStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
}

const CustomRadioOption = ({ value, label }: { value: string, label: string }) => {
  const labelId = useId()

  return (
    <label style={labelStyles}>
      <RadioOption value={value} aria-labelledby={labelId}/>
      <Icon name="fa-square-dashed-circle-plus" iconsVersion="2"/>
      <Text type="m" id={labelId}>{label}</Text>
    </label>
  )
}

export const CustomExample: FC = () => {
  const [value, setValue] = useState('1')

  return (
    <Radio value={value} onChange={setValue} aria-label="Radio">
      <CustomRadioOption value="1" label="Option 1"/>
      <CustomRadioOption value="2" label="Option 2"/>
      <CustomRadioOption value="3" label="Option 3"/>
    </Radio>
  )
}
