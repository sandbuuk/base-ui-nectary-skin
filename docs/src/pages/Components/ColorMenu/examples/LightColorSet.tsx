import { NO_COLOR, lightColorNames } from '@sinch-engage/nectary/utils/colors'
import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'

export const LightColorSetExample: FC = () => {
  const [value, setValue] = useState<string>(NO_COLOR)
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      cols={4}
      colors={lightColorNames}
      aria-label="Color menu"
      on-change={onChange}
    />
  )
}
