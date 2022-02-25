import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@nectary/components/accordion'

export default {
  title: 'Components/Accordion',
  argTypes: {
    value: { control: 'text', description: 'State of opened items' },
    multiple: { control: 'boolean', description: 'Allow to open multiple items' },
    onChange: { action: 'onChange', description: 'Handler to sync value with the state' },
  },
} as Meta

const Template = (innerHTML: string): Story<JSX.IntrinsicElements['sinch-accordion']> => ({ onChange }) => {
  const [{ value, multiple }, updateArgs] = useArgs()
  const accRef = useRef<HTMLElementTagNameMap['sinch-accordion'] | null>(null)

  if (accRef.current === null) {
    const $acc = document.createElement('sinch-accordion')

    $acc.innerHTML = innerHTML

    $acc.addEventListener('change', (e: any) => {
      onChange(e.detail)
      updateArgs({ value: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
    })

    accRef.current = $acc
  }

  const $acc = accRef.current!

  $acc.value = value
  $acc.multiple = multiple

  return $acc
}

export const Accordion = Template(`
<sinch-accordion-item value="1" label="Item 1">
  <span>Accordion content</span>
  <sinch-icon-open-in-new slot="icon"></sinch-ison-share>
</sinch-accordion-item>
<sinch-accordion-item value="2" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
  <span>Accordion content</span>
</sinch-accordion-item>
<sinch-accordion-item value="3" label="Disabled Item" disabled>
  <sinch-icon-open-in-new slot="icon"></sinch-ison-share>
</sinch-accordion-item>
<sinch-accordion-item value="4" label="Item 4">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</sinch-accordion-item>
`)

Accordion.args = {
  value: '',
  multiple: false,
}

Accordion.parameters = {
  docs: {
    source: {
      code: `
<sinch-accordion value={value} onChange={setValue}>
  <sinch-accordion-item value="1" label="Item 1">
    <span>Accordion content</span>
    <sinch-icon-open-in-new slot="icon"></sinch-ison-share>
  </sinch-accordion-item>
  <sinch-accordion-item value="2" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
    <span>Accordion content</span>
  </sinch-accordion-item>
  <sinch-accordion-item value="3" label="Disabled Item" disabled>
    <sinch-icon-open-in-new slot="icon"></sinch-ison-share>
  </sinch-accordion-item>
  <sinch-accordion-item value="4" label="Item 4">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </sinch-accordion-item>
</sinch-accordion>`,
    },
  },
}

export const ItemStatuses = Template(`
<sinch-accordion-item value="1" label="Item Success" status="success">
  <span>Accordion content</span>
</sinch-accordion-item>
<sinch-accordion-item value="2" label="Item Info" status="info">
  <span>Accordion content</span>
</sinch-accordion-item>
<sinch-accordion-item value="3" label="Item Warn" status="warn">
  <span>Accordion content</span>
</sinch-accordion-item>
<sinch-accordion-item value="4" label="Item Error" status="error">
  <span>Accordion content</span>
</sinch-accordion-item>
`)

ItemStatuses.args = {
  value: '',
}

ItemStatuses.parameters = {
  docs: {
    source: {
      code: `
<sinch-accordion value={value} onChange={setValue}>
  <sinch-accordion-item value="1" label="Item Success" status="success">
    <span>Accordion content</span>
  </sinch-accordion-item>
  <sinch-accordion-item value="2" label="Item Info" status="info">
    <span>Accordion content</span>
  </sinch-accordion-item>
  <sinch-accordion-item value="3" label="Item Warn" status="warn">
    <span>Accordion content</span>
  </sinch-accordion-item>
  <sinch-accordion-item value="4" label="Item Error" status="error">
    <span>Accordion content</span>
  </sinch-accordion-item>
</sinch-accordion>`,
    },
  },
}
