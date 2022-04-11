import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/tag-close'

export default {
  title: 'Components/Tag',
  argTypes: {
    category: {
      description: 'Tag category',
      control: 'select',
      options: ['candy', 'bolt', 'aqua', 'grass', 'berry', 'orange', 'night', 'mud', 'dirt'],
    },
    text: {
      description: 'Tag text',
      control: 'text',
    },
    inverted: {
      description: 'Inverted color',
      control: 'boolean',
    },
    small: {
      description: 'Smaller tag',
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Tag component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (innerHTML?: string): Story<JSX.IntrinsicElements['sinch-tag']> => () => {
  const [{
    category,
    text,
    inverted,
    small,
  }] = useArgs()
  const tagRef = useRef<HTMLElementTagNameMap['sinch-tag'] | null>(null)

  if (tagRef.current === null) {
    tagRef.current = document.createElement('sinch-tag')

    if (innerHTML != null) {
      tagRef.current.innerHTML = innerHTML
    }

    // tagRef.current.addEventListener('close', () => {
    //   onclose?.()
    // })
  }

  const $tag = tagRef.current!

  $tag.text = text
  $tag.category = category
  $tag.inverted = Boolean(inverted)
  $tag.small = Boolean(small)

  return $tag
}

export const Tag = Template()

Tag.args = {
  text: 'Label',
  inverted: false,
  small: false,
}

Tag.parameters = {
  docs: {
    source: {
      code: '<sinch-tag text="Label"></sinch-tag>',
    },
  },
}

export const TagWithIcon = Template('<sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>')

TagWithIcon.args = {
  text: 'Label',
  inverted: false,
  small: false,
}

TagWithIcon.parameters = {
  docs: {
    source: {
      code: '<sinch-tag text="Label">\n  <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>\n</sinch-tag>',
    },
  },
}

export const TagWithClose = Template('<sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new><sinch-tag-close slot="close"></sinch-tag-close>')

TagWithClose.args = {
  text: 'Label',
  inverted: false,
  small: false,
}

TagWithClose.parameters = {
  docs: {
    source: {
      code: '<sinch-tag text="Label">\n  <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>\n  <sinch-tag-close slot="close"></sinch-tag-close>\n</sinch-tag>',
    },
  },
}

export const Small = Template('<sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new><sinch-tag-close small slot="close"></sinch-tag-close>')

Small.args = {
  text: 'Label',
  inverted: false,
  small: true,
}

Small.parameters = {
  docs: {
    source: {
      code: '<sinch-tag small text="Label">\n  <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>\n  <sinch-tag-close small slot="close"></sinch-tag-close>\n</sinch-tag>',
    },
  },
}
