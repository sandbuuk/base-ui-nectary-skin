import { NO_COLOR } from '@sinch-engage/nectary/utils/colors'
import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'

export const ColorSetExample: FC = () => {
  const [value, setValue] = useState<string>(NO_COLOR)
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      colors="blue,light-blue,sky-blue,light-sky-blue"
      aria-label="Color menu"
      on-change={onChange}
    />
  )
}
