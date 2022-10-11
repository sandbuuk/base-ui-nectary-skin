import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/mood'

export default {
  title: 'Components/Tag',
  argTypes: {
    color: {
      description: 'Tag color',
      control: 'select',
      options: ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange'],
    },
    text: {
      description: 'Tag text',
      control: 'text',
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

const Template = (innerHTML?: string): Story => () => {
  const [{
    color,
    text,
    small,
  }] = useArgs()
  const tagRef = useRef<HTMLElementTagNameMap['sinch-tag'] | null>(null)

  if (tagRef.current === null) {
    tagRef.current = document.createElement('sinch-tag')

    if (innerHTML != null) {
      tagRef.current.innerHTML = innerHTML
    }
  }

  const $tag = tagRef.current!

  $tag.text = text
  $tag.color = color
  $tag.small = Boolean(small)

  return $tag
}

export const Tag = Template()

Tag.args = {
  text: 'Label',
  small: false,
}

Tag.parameters = {
  docs: {
    source: {
      code: '<sinch-tag text="Label"></sinch-tag>',
    },
  },
}

export const TagWithIcon = Template('<sinch-icon-mood slot="icon"></sinch-icon-mood>')

TagWithIcon.args = {
  text: 'Label',
  small: false,
}

TagWithIcon.parameters = {
  docs: {
    source: {
      code: '<sinch-tag text="Label">\n  <sinch-icon-mood slot="icon"></sinch-icon-mood>\n</sinch-tag>',
    },
  },
}

export const Small = Template('<sinch-icon-mood slot="icon"></sinch-icon-mood>')

Small.args = {
  text: 'Label',
  small: true,
}

Small.parameters = {
  docs: {
    source: {
      code: '<sinch-tag small text="Label">\n  <sinch-icon-mood slot="icon"></sinch-icon-mood>\n</sinch-tag>',
    },
  },
}
