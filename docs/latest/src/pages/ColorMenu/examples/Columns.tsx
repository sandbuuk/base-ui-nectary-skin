import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'

const vibrantColorNames = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']

export const ColumnsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-color-menu
      value={value}
      cols={2}
      aria-label="Color menu"
      on-change={onChange}
    >
      {vibrantColorNames.map((c) => <sinch-color-menu-option key={c} value={c}/>)}
    </sinch-color-menu>
  )
}
