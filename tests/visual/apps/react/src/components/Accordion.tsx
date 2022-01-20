import { useMemo, useState } from 'react'
import type { FC } from 'react'

type TAccordion = {
  search: URLSearchParams
}

export const Accordion: FC<TAccordion> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = useMemo(() => search.get('uncontrolled') === null ? setValue : () => {}, [search, setValue])
  const isMultiple = search.get('multiple') !== null
  const options = useMemo(() => {
    const data = search.get('options')

    if (data === null) {
      return null
    }

    try {
      const options = JSON.parse(decodeURI(data))

      return options.map((opt: any) => (
        <sinch-accordion-item
          key={opt.value}
          value={opt.value}
          label={opt.label}
          status={opt.status}
          disabled={opt.disabled}>
          {opt.content != null && <span>{opt.content}</span>}
          {opt.icon === true && <sinch-icon-share slot="icon"></sinch-icon-share>}
        </sinch-accordion-item>
      ))
    } catch {
      return null
    }
  }, [search])

  return (
    <sinch-accordion value={value} onChange={onChange} multiple={isMultiple}>
      {options}
    </sinch-accordion>
  )
}
