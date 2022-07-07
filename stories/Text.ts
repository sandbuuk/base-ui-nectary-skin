import { typeValues } from '@sinch-engage/nectary/text/utils'
import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/text'

export default {
  title: 'Components/Text',
  argTypes: {
    text: { control: 'text', description: 'Text content' },
    type: { control: 'select', options: typeValues, description: 'Text type' },
    inline: { control: 'boolean', description: 'Inline or paragraph' },
    emphasized: { control: 'boolean', description: 'Emphasized or normal' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Text component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (): Story => () => {
  const [args] = useArgs()
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLElementTagNameMap['sinch-text'] | null>(null)

  if (titleRef.current === null) {
    titleRef.current = document.createElement('sinch-text')
    titleRef.current.type = 'm'

    const $wrapper = document.createElement('div')
    const $prefix = document.createElement('span')
    const $postfix = document.createElement('span')

    $prefix.textContent = 'other text '
    $postfix.textContent = ' other text'

    $wrapper.appendChild($prefix)
    $wrapper.appendChild(titleRef.current)
    $wrapper.appendChild($postfix)
    wrapperRef.current = $wrapper
  }

  const $title = titleRef.current!

  $title.text = args.text
  $title.type = args.type
  $title.inline = args.inline
  $title.emphasized = args.emphasized

  return wrapperRef.current!
}

export const Text = Template()

Text.args = {
  text: 'Paragraph text',
  type: 'm',
  inline: false,
  emphasized: false,
}

Text.parameters = {
  docs: {
    source: {
      code: '<sinch-text type="m" text="Paragraph text"></sinch-text>',
    },
  },
}

