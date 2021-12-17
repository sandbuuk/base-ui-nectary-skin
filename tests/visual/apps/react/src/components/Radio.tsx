import { useState } from 'react'
import type { FC } from 'react'

type TRadio = {
  width?: number,
}

export const Radio: FC<TRadio> = ({ width }) => {
  const [value, setValue] = useState('')

  const style = {
    width: width != null ? `${width}px` : 'unset',
  }

  return (
    <sinch-radio style={style} value={value} onChange={setValue}>
      <sinch-radio-option value="1" text="Option 1 value"/>
      <sinch-radio-option value="2" text="Option 2 value" disabled/>
      <sinch-radio-option value="3" text="Option 3 value"/>
      <sinch-radio-option value="4" text="Option 4 value"/>
    </sinch-radio>
  )
}
