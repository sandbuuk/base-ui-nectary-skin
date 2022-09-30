import { NO_COLOR } from '@sinch-engage/nectary/utils/colors'
import { useState } from 'react'
import type { TSinchColorName } from '@sinch-engage/nectary/utils/colors'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'

export const SimpleExample: FC = () => {
  const [value, setValue] = useState<TSinchColorName>(NO_COLOR)
  const onChange = (e: CustomEvent<TSinchColorName>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      aria-label="Color menu"
      on-change={onChange}
    />
  )
}
