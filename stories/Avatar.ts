import { backgroundValues, sizeValues } from '@sinch-engage/nectary/avatar/utils'
import { useRef, useArgs } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/avatar-status'
import '@sinch-engage/nectary/avatar-badge'

export default {
  title: 'Components/Avatar',
  argTypes: {
    size: {
      description: 'Avatar category',
      control: 'select',
      options: sizeValues,
    },
    background: {
      description: 'Avatar background color',
      control: 'select',
      options: backgroundValues,
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

const Template = (innerHtml?: string): Story => () => {
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

  if (innerHtml != null) {
    avatarRef.current.innerHTML = innerHtml
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

const avatarWithBadgeInnerHtml = `
  <sinch-avatar-badge slot="badge" text="4"></sinch-avatar-badge>
`

export const AvatarWithBadge = Template(avatarWithBadgeInnerHtml)

AvatarWithBadge.args = {
  alt: 'NS',
  size: 'l',
  background: 'blue',
}

AvatarWithBadge.parameters = {
  docs: {
    source: {
      code: `<sinch-avatar src={src} alt="NS" size="l" background="blue">${avatarWithBadgeInnerHtml}</sinch-avatar>`,
    },
  },
}

const avatarWithStatusGreenInnerHtml = `
  <sinch-avatar-status slot="status" color="green"></sinch-avatar-status>
`

export const AvatarWithStatusGreen = Template(avatarWithStatusGreenInnerHtml)

AvatarWithStatusGreen.args = {
  alt: 'NS',
  size: 'l',
  background: 'blue',
}

AvatarWithStatusGreen.parameters = {
  docs: {
    source: {
      code: `<sinch-avatar src={src} alt="NS" size="l" background="blue">${avatarWithStatusGreenInnerHtml}</sinch-avatar>`,
    },
  },
}

const avatarWithStatusRedInnerHtml = `
  <sinch-avatar-status slot="status" color="red"></sinch-avatar-status>
`

export const AvatarWithStatusRed = Template(avatarWithStatusRedInnerHtml)

AvatarWithStatusRed.args = {
  alt: 'NS',
  size: 'l',
  background: 'blue',
}

AvatarWithStatusRed.parameters = {
  docs: {
    source: {
      code: `<sinch-avatar src={src} alt="NS" size="l" background="blue">${avatarWithStatusRedInnerHtml}</sinch-avatar>`,
    },
  },
}

const avatarWithStatusYellowInnerHtml = `
  <sinch-avatar-status slot="status" color="yellow"></sinch-avatar-status>
`

export const AvatarWithStatusYellow = Template(avatarWithStatusYellowInnerHtml)

AvatarWithStatusYellow.args = {
  alt: 'NS',
  size: 'l',
  background: 'blue',
}

AvatarWithStatusYellow.parameters = {
  docs: {
    source: {
      code: `<sinch-avatar src={src} alt="NS" size="l" background="blue">${avatarWithStatusYellowInnerHtml}</sinch-avatar>`,
    },
  },
}

const avatarWithStatusGreyInnerHtml = `
  <sinch-avatar-status slot="status" color="grey"></sinch-avatar-status>
`

export const AvatarWithStatusGrey = Template(avatarWithStatusGreyInnerHtml)

AvatarWithStatusGrey.args = {
  alt: 'NS',
  size: 'l',
  background: 'blue',
}

AvatarWithStatusGrey.parameters = {
  docs: {
    source: {
      code: `<sinch-avatar src={src} alt="NS" size="l" background="blue">${avatarWithStatusGreyInnerHtml}</sinch-avatar>`,
    },
  },
}
