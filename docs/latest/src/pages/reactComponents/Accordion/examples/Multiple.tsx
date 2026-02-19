import { Accordion, AccordionItem, Text } from '@nectary/react'
import { type FC, useState } from 'react'

export const MultipleExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Accordion value={value} multiple onChange={setValue}>
      <AccordionItem
        value="1"
        label="Item 1"
        optionalText="Required"
      >
        <Text type="m">Accordion content</Text>
      </AccordionItem>
      <AccordionItem
        value="2"
        label="Item 2"
        optionalText="Optional"
      >
        <Text type="m">Accordion content</Text>
      </AccordionItem>
      <AccordionItem
        value="3"
        label="Item 3"
        disabled
      >
        <Text type="m">Accordion content</Text>
      </AccordionItem>
      <AccordionItem value="4" label="Item 4">
        <Text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </AccordionItem>
    </Accordion>
  )
}
