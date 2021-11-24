import { useState } from 'react'
import type { FC } from 'react'

type TSelect = {
  width?: number,
}

export const Select: FC<TSelect> = ({ width }) => {
  const [value, setValue] = useState('')

  const style = {
    width: width != null ? `${width}px` : 'unset',
  }

  return (
    <sinch-select style={style} label="Label" placeholder="Placeholder" value={value} onChange={setValue}>
      <sinch-input-tooltip text="Tooltip text long long" slot="tooltip"/>
      <sinch-select-option value="1" text="Option 1 value" slot="select">
        <sinch-icon-share/>
      </sinch-select-option>
      <sinch-select-option value="2" text="Option 2 value" slot="select" disabled>
        <sinch-icon-share/>
      </sinch-select-option>
      <sinch-select-option value="3" text="Option 3 value" slot="select"/>
      <sinch-select-option value="4" text="Option 4 value" slot="select"/>
    </sinch-select>
  )
}
