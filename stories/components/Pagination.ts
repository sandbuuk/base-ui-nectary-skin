import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/pagination'

export default {
  title: 'Components/Pagination',
  argTypes: {
    value: {
      description: 'Page index',
      control: 'number',
    },
    max: {
      description: 'Number of pages',
      control: 'number',
    },
    'on-change': {
      description: 'Handler to sync page index with the state',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Pagination component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (): Story => () => {
  const [{
    value,
    max,
  }, updateArgs] = useArgs()
  const pageRef = useRef<HTMLElementTagNameMap['sinch-pagination'] | null>(null)

  if (pageRef.current == null) {
    const $pagination = document.createElement('sinch-pagination')

    $pagination.addEventListener('-change', (e) => {
      updateArgs({ value: e.detail })
    })

    pageRef.current = $pagination
  }

  const $pagination = pageRef.current!

  $pagination.value = value
  $pagination.max = max

  return $pagination
}

export const Pagination = Template()

Pagination.args = {
  value: 0,
  max: 20,
}

Pagination.parameters = {
  docs: {
    source: {
      code: '<sinch-pagination max={20} value={value} on-change={onChange}></sinch-pagination>',
    },
  },
}
