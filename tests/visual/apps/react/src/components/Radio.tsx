import { useMemo, useState } from 'react'
import type { FC } from 'react'

type TRadio = {
  search: URLSearchParams
}

export const Radio: FC<TRadio> = ({ search }) => {
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
        <sinch-radio-option
          key={opt.value}
          value={opt.value}
          text={opt.text}
          disabled={opt.disabled}/>
      ))
    } catch {
      return null
    }
  }, [search])




  return (
    <sinch-radio value={value} onChange={onChange}>
      {options}
    </sinch-radio>
  )
}
