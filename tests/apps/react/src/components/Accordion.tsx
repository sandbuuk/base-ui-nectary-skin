import { useState } from 'react'
import type { TSinchAccordionStatusType } from '@sinch-engage/nectary/accordion-item/types'
import type { FC } from 'react'
import '@sinch-engage/nectary/accordion'
import '@sinch-engage/nectary/accordion-item'
import '@sinch-engage/nectary-assets/icons/open-in-new'

type TExampleItem = {
  value: string,
  label: string,
  icon?: boolean,
  disabled?: boolean,
  status?: TSinchAccordionStatusType,
  content?: string,
  optional?: string,
}

const items: TExampleItem[] = [{
  value: '1',
  label: 'Option value 1',
  icon: true,
  status: 'success',
  content: 'Accordion content',
  optional: 'Required',
}, {
  value: '2',
  label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
  status: 'info',
  content: 'Accordion content',
  optional: 'Optional',
}, {
  value: '3',
  label: 'Option value 3',
  disabled: true,
  icon: true,
  optional: 'Disabled',
}, {
  value: '4',
  label: 'Option value 4',
  content: 'Accordion content',
}]

const singleItems: TExampleItem[] = [{
  value: '1',
  label: 'Option value 1',
  icon: true,
  status: 'success',
  content: 'Accordion content',
  optional: 'Required',
}]

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

  const options = search.get('example') === 'single'
    ? singleItems
    : items

  return (
    <sinch-accordion
      value={value}
      on-change={onChange}
      multiple={isMultiple}
    >
      {options.map((opt) => (
        <sinch-accordion-item
          key={opt.value}
          value={opt.value}
          label={opt.label}
          status={opt.status as any}
          disabled={opt.disabled}
          optionalText={opt.optional}
        >
          {opt.content != null && <span slot="content">{opt.content}</span>}
          {opt.icon === true && <sinch-icon-open-in-new slot="icon"/>}
        </sinch-accordion-item>
      ))}
    </sinch-accordion>
  )
}
