import { typeValues } from '@sinch-engage/nectary/text/utils'
import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/link'

export default {
  title: 'Components/Text',
  argTypes: {
    type: { control: 'select', options: typeValues, description: 'Text type' },
    inline: { control: 'boolean', description: 'Inline or paragraph' },
    emphasized: { control: 'boolean', description: 'Emphasized or normal' },
    ellipsis: { control: 'boolean', description: 'Prevent text wrap and show ellipsis' },
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

const Template = (innerHtml: string): Story => () => {
  const [args] = useArgs()
  const wrapperRef = useRef<HTMLElementTagNameMap['sinch-text'] | null>(null)
  const textRef = useRef<HTMLElementTagNameMap['sinch-text'] | null>(null)

  if (textRef.current === null) {
    const $el = document.createElement('sinch-text')

    $el.type = 'm'
    $el.innerHTML = innerHtml

    const $text = $el.querySelector('sinch-text')

    textRef.current = $text
    wrapperRef.current = $el
  }

  const $title = textRef.current!

  $title.type = args.type
  $title.inline = args.inline
  $title.emphasized = args.emphasized
  $title.ellipsis = args.ellipsis

  return wrapperRef.current!
}

const textInnerHtml = `
  <span>prefix </span>
  <sinch-text
    type={type}
    inline={isInline}
    emphasized={isEmphasized}
    ellipsis={isEllipsis}
  >
    Paragraph text
    <sinch-link href="#" text="Link"></sinch-link>
  </sinch-text>
  <span> postfix</span>
`

export const Text = Template(textInnerHtml)

Text.args = {
  type: 'm',
  inline: false,
  emphasized: false,
  ellipsis: false,
}

Text.parameters = {
  docs: {
    source: {
      code: `
<sinch-text type="m">
  <span>prefix </span>
  <sinch-text
    type={type}
    inline={isInline}
    emphasized={isEmphasized}
    ellipsis={false}
  >
    Paragraph text
    <sinch-link href="#" text="Link"></sinch-link>
  </sinch-text>
  <span> postfix</span>
</sinch-text>`,
    },
  },
}

