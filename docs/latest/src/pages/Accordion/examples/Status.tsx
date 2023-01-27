import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/accordion'
import '@sinch-engage/nectary/accordion-item'
import '@sinch-engage/nectary/icons/open-in-new'

export const StatusExample: FC = () => {
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

  return (
    <sinch-accordion value={value} on-change={onChange}>
      <sinch-accordion-item
        value="1"
        label="Item 1"
        optionalText="Required"
        status="info"
      >
        <sinch-icon-open-in-new slot="icon"/>
        <span slot="content">Accordion content</span>
      </sinch-accordion-item>
      <sinch-accordion-item
        value="2"
        label="Item 2"
        optionalText="Optional"
        status="success"
      >
        <sinch-icon-open-in-new slot="icon"/>
        <span slot="content">Accordion content</span>
      </sinch-accordion-item>
      <sinch-accordion-item
        value="3"
        label="Item 3"
        status="warn"
      >
        <sinch-icon-open-in-new slot="icon"/>
        <span slot="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
      </sinch-accordion-item>
      <sinch-accordion-item
        value="4"
        label="Item 4"
        status="error"
      >
        <sinch-icon-open-in-new slot="icon"/>
        <span slot="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
      </sinch-accordion-item>
    </sinch-accordion>
  )
}
