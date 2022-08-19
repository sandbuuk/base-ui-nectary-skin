import { useMemo, useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/accordion'
import '@sinch-engage/nectary/accordion-item'
import '@sinch-engage/nectary/icons/open-in-new'

type TAccordion = {
  search: URLSearchParams,
}

export const Accordion: FC<TAccordion> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-accordion-change', { detail: value }))
    setValue(value)
  }
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
          disabled={opt.disabled}
          optionalText={opt.optional}
        >
          {opt.content != null && <span slot="content">{opt.content}</span>}
          {opt.icon === true && <sinch-icon-open-in-new slot="icon"/>}
        </sinch-accordion-item>
      ))
    } catch {
      return null
    }
  }, [search])

  return (
    <sinch-accordion
      value={value}
      on-change={onChange}
      multiple={isMultiple}
    >
      {options}
    </sinch-accordion>
  )
}
