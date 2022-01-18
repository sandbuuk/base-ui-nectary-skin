import { useMemo, useState } from 'react'
import type { FC } from 'react'

type TToggle = {
  search: URLSearchParams
}

export const Toggle: FC<TToggle> = ({ search }) => {
  const [value, setValue] = useState(search.get('checked') !== null)
  const onChange = useMemo(() => search.get('uncontrolled') === null ? setValue : () => {}, [search, setValue])
  const isDisabled = useMemo(() => search.get('disabled') != null, [search])
  const isSmall = useMemo(() => search.get('small') != null, [search])
  const isLabeled = useMemo(() => search.get('labeled') != null, [search])
  const text: any = search.get('text') ?? undefined

  return (
    <sinch-toggle
      text={text}
      small={isSmall}
      disabled={isDisabled}
      labeled={isLabeled}
      checked={value}
      onChange={onChange}
    >
    </sinch-toggle>
  )
}
