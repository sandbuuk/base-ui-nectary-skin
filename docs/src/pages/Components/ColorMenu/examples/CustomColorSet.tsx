import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'

const customColorNames = 'light-pink,pink,dark-pink'

export const CustomColorSetExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      colors={customColorNames}
      aria-label="Color menu"
      on-change={onChange}
    />
  )
}
