import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'
import '@sinch-engage/nectary/color-menu-option'

const skinToneColorNames = ['skin-tone-0', 'skin-tone-10', 'skin-tone-20', 'skin-tone-30', 'skin-tone-40', 'skin-tone-50']

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
