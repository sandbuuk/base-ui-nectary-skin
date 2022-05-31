import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/title'

export default {
  title: 'Components/Title',
  argTypes: {
    text: { control: 'text', description: 'Title label text' },
    type: { control: 'select', options: ['xl', 'l', 'm', 's', 'xs'], description: 'Title type' },
    'aria-level': { control: 'select', options: ['1', '2', '3', '4', '5'], description: 'Title level' },
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

const Template = (): Story<JSX.IntrinsicElements['sinch-title']> => () => {
  const [args] = useArgs()
  const titleRef = useRef<HTMLElementTagNameMap['sinch-title'] | null>(null)

  if (titleRef.current === null) {
    titleRef.current = document.createElement('sinch-title')

    titleRef.current.type = 'm'
    titleRef.current.ariaLevel = '3'
  }

  const $title = titleRef.current!

  $title.text = args.text
  $title.type = args.type
  $title.ariaLevel = args['aria-level']

  return $title
}

export const Title = Template()

Title.args = {
  text: 'Title',
  type: 'm',
  'aria-level': '3',
}

Title.parameters = {
  docs: {
    source: {
      code: '<sinch-title type="m" aria-level="3" text="Title"></sinch-title>',
    },
  },
}

