import { levelValues, typeValues } from '@sinch-engage/nectary/title/utils'
import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/title'

export default {
  title: 'Components/Title',
  argTypes: {
    text: { control: 'text', description: 'Title label text' },
    type: { control: 'select', options: typeValues, description: 'Title type' },
    level: { control: 'select', options: levelValues, description: 'Title level' },
    ellipsis: { control: 'boolean', description: 'Prevent text wrap and show ellipsis' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Title component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (): Story => () => {
  const [args] = useArgs()
  const titleRef = useRef<HTMLElementTagNameMap['sinch-title'] | null>(null)

  if (titleRef.current === null) {
    titleRef.current = document.createElement('sinch-title')

    titleRef.current.type = 'm'
    titleRef.current.level = '3'
  }

  const $title = titleRef.current!

  $title.text = args.text
  $title.type = args.type
  $title.level = args.level
  $title.ellipsis = args.ellipsis

  return $title
}

export const Title = Template()

Title.args = {
  text: 'Title',
  type: 'm',
  level: '3',
  ellipsis: false,
}

Title.parameters = {
  docs: {
    source: {
      code: '<sinch-title type="m" level="3" text="Title" ellipsis={false}></sinch-title>',
    },
  },
}

