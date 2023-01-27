import { darkColorNames } from '@sinch-engage/nectary/theme/colors'
import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'

export const DarkColorSetExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      cols={4}
      colors={darkColorNames}
      aria-label="Color menu"
      on-change={onChange}
    />
  )
}
