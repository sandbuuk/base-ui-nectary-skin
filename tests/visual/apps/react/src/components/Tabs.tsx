import { useMemo, useState } from 'react'
import type { FC } from 'react'

type TTabs = {
  search: URLSearchParams
}

export const Tabs: FC<TTabs> = ({ search }) => {
  const [value, setValue] = useState('')
  const onChange = useMemo(() => search.get('uncontrolled') === null ? setValue : () => {}, [search, setValue])
  const options = useMemo(() => {
    const data = search.get('options')

    if (data === null) {
      return null
    }

    try {
      const options = JSON.parse(decodeURI(data))

      return options.map((opt: any) => (
        <sinch-tabs-option
          key={opt.value}
          value={opt.value}
          text={opt.text}
          disabled={opt.disabled}>
          {opt.icon != null && <sinch-icon-share></sinch-icon-share>}
        </sinch-tabs-option>
      ))
    } catch {
      return null
    }
  }, [search])

  return (
    <sinch-tabs value={value} onChange={onChange}>
      {options}
    </sinch-tabs>
  )
}
