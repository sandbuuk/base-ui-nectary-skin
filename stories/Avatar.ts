import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/avatar'

export default {
  title: 'Components/Avatar',
  argTypes: {
    size: {
      description: 'Avatar category',
      control: 'select',
      options: ['l', 'm', 's'],
    },
    background: {
      description: 'Avatar background color',
      control: 'select',
      options: ['blue', 'yellow', 'grey'],
    },
    alt: {
      description: 'Avatar text initials',
      control: 'text',
    },
    src: {
      description: 'Avatar image URL',
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Avatar component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (): Story<JSX.IntrinsicElements['sinch-avatar']> => () => {
  const [{
    size,
    background,
    alt,
    src,
  }] = useArgs()
  const avatarRef = useRef<HTMLElementTagNameMap['sinch-avatar'] | null>(null)

  if (avatarRef.current === null) {
    avatarRef.current = document.createElement('sinch-avatar')
  }

  const $avatar = avatarRef.current!

  $avatar.size = size
  $avatar.background = background
  $avatar.alt = alt
  $avatar.src = src

  return $avatar
}

export const Avatar = Template()

Avatar.args = {
  alt: 'NS',
  size: 'l',
  background: 'yellow',
}

Avatar.parameters = {
  docs: {
    source: {
      code: '<sinch-avatar src={src} alt="NS" size="l" background="yellow"></sinch-avatar>',
    },
  },
}
