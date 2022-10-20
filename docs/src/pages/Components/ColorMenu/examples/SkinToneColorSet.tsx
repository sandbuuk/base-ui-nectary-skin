import { skinToneColorNames } from '@sinch-engage/nectary/theme/colors'
import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'

export const SkinToneColorSetExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      cols={6}
      colors={skinToneColorNames}
      aria-label="Color menu"
      on-change={onChange}
    />
  )
}
