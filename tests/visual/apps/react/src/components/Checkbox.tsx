import { useMemo, useState } from 'react'
import type { FC } from 'react'

type TCheckbox = {
  search: URLSearchParams
}

export const Checkbox: FC<TCheckbox> = ({ search }) => {
  const [value, setValue] = useState(search.get('checked') !== null)
  const onChange = useMemo(() => search.get('uncontrolled') === null ? setValue : () => {}, [search, setValue])
  const isDisabled = useMemo(() => search.get('disabled') != null, [search])
  const isIndeterminate = useMemo(() => search.get('indeterminate') != null, [search])
  const text: any = search.get('text') ?? undefined

  return (
    <sinch-checkbox
      text={text}
      disabled={isDisabled}
      indeterminate={isIndeterminate}
      checked={value}
      onChange={onChange}
    >
    </sinch-checkbox>
  )
}
