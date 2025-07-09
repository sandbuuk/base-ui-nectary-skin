import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/accordion'
import '@nectary/components/accordion-item'
import '@nectary/components/text'
import '@nectary/components/icon'
import '@nectary/components/input'

export const ComplexExample: FC = () => {
  const [value, setValue] = useState('')
  const [state, setState] = useState('')
  const onChange = (e: CustomEvent<string>) => (console.log('sinch-accordion: change', e), setValue(e.detail))

  return (
    <sinch-accordion value={value} on-change={onChange}>
      <sinch-accordion-item
        value="1"
        label="Item 1"
        optionalText="Required"
      >
        <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>
        <div slot="content">
          <sinch-text type="m">Accordion content</sinch-text>
          <sinch-input
            aria-label="Input"
            placeholder="Placeholder"
            value={state}
            on-change={(e) => setState(e.detail)}
          />
        </div>
      </sinch-accordion-item>
      <sinch-accordion-item
        value="2"
        label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        optionalText="Optional"
      >
        <sinch-text slot="content" type="m">Accordion content</sinch-text>
      </sinch-accordion-item>
      <sinch-accordion-item
        value="3"
        label="Disabled Item"
        optionalText="Disabled"
        disabled
      >
        <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>
      </sinch-accordion-item>
      <sinch-accordion-item value="4" label="Item 4">
        <sinch-text slot="content" type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</sinch-text>
      </sinch-accordion-item>
    </sinch-accordion>
  )
}
