import { useMemo, useState } from 'react'
import type { FC } from 'react'

type TRadio = {
  search: URLSearchParams
}

export const Radio: FC<TRadio> = ({ search }) => {
  const [value, setValue] = useState('')
  const onChange = useMemo(() => search.get('uncontrolled') === null ? setValue : () => {}, [search, setValue])

  return (
    <sinch-radio value={value} onChange={onChange}>
      <sinch-radio-option value="1" text="Option 1 value"/>
      <sinch-radio-option value="2" text="Option 2 value" disabled/>
      <sinch-radio-option value="3" text="Option 3 value" disabled={false}/>
      <sinch-radio-option value="4" text="Option 4 value"/>
    </sinch-radio>
  )
}
