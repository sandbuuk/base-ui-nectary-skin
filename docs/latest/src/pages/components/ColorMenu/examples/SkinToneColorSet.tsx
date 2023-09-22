import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'

const skinToneColorNames = [
  'skintone-default',
  'skintone-light',
  'skintone-light-medium',
  'skintone-medium',
  'skintone-medium-dark',
  'skintone-dark',
]

export const SkinToneColorSetExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      cols={6}
      aria-label="Color menu"
      on-change={onChange}
    >
      {skinToneColorNames.map((c) => <sinch-color-menu-option key={c} value={c}/>)}
    </sinch-color-menu>
  )
}
