import { statusValues } from '@sinch-engage/nectary/avatar/utils'
import { sizeValues } from '@sinch-engage/nectary/utils/size'
import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/badge'

export default {
  title: 'Components/Avatar',
  argTypes: {
    size: {
      description: 'Avatar size',
      control: 'select',
      options: sizeValues,
    },
    color: {
      description: 'Avatar background color',
      control: 'select',
      options: ['', 'light-blue', 'light-pink', 'light-orange', 'light-green'],
    },
    status: {
      description: 'Avatar status',
      control: 'select',
      options: statusValues,
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

const Template = (hasBadge = false): Story => () => {
  const [{
    size,
    color,
    status,
    alt,
    src,
  }] = useArgs()
  const badgeRef = useRef<HTMLElementTagNameMap['sinch-badge'] | null>(null)
  const avatarRef = useRef<HTMLElementTagNameMap['sinch-avatar'] | null>(null)

  if (avatarRef.current === null) {
    avatarRef.current = document.createElement('sinch-avatar')
  }

  if (badgeRef.current === null) {
    badgeRef.current = document.createElement('sinch-badge')
    badgeRef.current.setAttribute('mode', 'circle')
    badgeRef.current.setAttribute('text', '8')
    badgeRef.current.setAttribute('size', 'l')

    if (hasBadge === false) {
      badgeRef.current.setAttribute('hidden', '')
    }

    badgeRef.current.appendChild(avatarRef.current)
  }

  const $avatar = avatarRef.current

  $avatar.size = size
  $avatar.status = status
  $avatar.color = color
  $avatar.alt = alt
  $avatar.src = src

  return badgeRef.current
}

export const Avatar = Template()

Avatar.args = {
  alt: 'NS',
  size: 'l',
  color: 'yellow',
}

Avatar.parameters = {
  docs: {
    source: {
      code: '<sinch-avatar src={src} alt="NS" size="l" color="light-yellow"></sinch-avatar>',
    },
  },
}

export const AvatarWithBadge = Template(true)

AvatarWithBadge.args = {
  alt: 'NS',
  size: 'l',
  color: 'light-blue',
}

AvatarWithBadge.parameters = {
  docs: {
    source: {
      code: `<sinch-badge text="8" size="l" mode="circle">
  <sinch-avatar src={src} alt="NS" size="l" color="light-blue"></sinch-avatar>
</sinch-badge>`,
    },
  },
}

export const AvatarWithStatusOnline = Template()

AvatarWithStatusOnline.args = {
  alt: 'NS',
  size: 'l',
  color: 'light-blue',
  status: 'online',
}

AvatarWithStatusOnline.parameters = {
  docs: {
    source: {
      code: `<sinch-avatar src={src} alt="NS" size="l" color="light-blue" status="online"></sinch-avatar>`,
    },
  },
}

export const AvatarWithStatusBusy = Template()

AvatarWithStatusBusy.args = {
  alt: 'NS',
  size: 'l',
  color: 'light-blue',
  status: 'busy',
}

AvatarWithStatusBusy.parameters = {
  docs: {
    source: {
      code: `<sinch-avatar src={src} alt="NS" size="l" color="light-blue" status="busy"></sinch-avatar>`,
    },
  },
}
