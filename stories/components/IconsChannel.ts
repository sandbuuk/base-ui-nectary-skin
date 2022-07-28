import { useArgs, useRef } from '@storybook/addons'
import type { TSinchIconChannelElement } from '@sinch-engage/nectary/icons-channel/types'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/icons-channel/telegram'
import '@sinch-engage/nectary/icons-channel/apple-business-chat'
import '@sinch-engage/nectary/icons-channel/facebook-messenger'
import '@sinch-engage/nectary/icons-channel/instagram'
import '@sinch-engage/nectary/icons-channel/line'
import '@sinch-engage/nectary/icons-channel/talk'
import '@sinch-engage/nectary/icons-channel/twitter'
import '@sinch-engage/nectary/icons-channel/viber'
import '@sinch-engage/nectary/icons-channel/wechat'
import '@sinch-engage/nectary/icons-channel/whatsapp'
import '@sinch-engage/nectary/icons-channel/telegram-square'
import '@sinch-engage/nectary/icons-channel/apple-business-chat-square'
import '@sinch-engage/nectary/icons-channel/facebook-messenger-square'
import '@sinch-engage/nectary/icons-channel/instagram-square'
import '@sinch-engage/nectary/icons-channel/line-square'
import '@sinch-engage/nectary/icons-channel/talk-square'
import '@sinch-engage/nectary/icons-channel/twitter-square'
import '@sinch-engage/nectary/icons-channel/viber-square'
import '@sinch-engage/nectary/icons-channel/wechat-square'
import '@sinch-engage/nectary/icons-channel/whatsapp-square'

export default {
  title: 'Components/Icons Channel',
  argTypes: {
    size: {
      control: { type: 'range', min: 32, max: 128, step: 8 },
    },
  },
} as Meta

const Template = (iconNames: string[]): Story => () => {
  const [{ size }] = useArgs()
  const wrapperRef = useRef<Element | null>(null)

  if (wrapperRef.current === null) {
    wrapperRef.current = document.createElement('div')

    const $wrapper = wrapperRef.current as HTMLElement

    $wrapper.style.display = 'flex'
    $wrapper.style.flexWrap = 'wrap'
    $wrapper.style.gap = '16px'

    const $icons = iconNames.map((name) => {
      const $icon = document.createElement(name) as TSinchIconChannelElement

      $icon.setAttribute('title', name)

      return $icon
    })

    $wrapper.append(...$icons)
  }

  // eslint-disable-next-line sort-vars
  for (let i = 0, ch = wrapperRef.current.children; i < ch.length; i++) {
    ch[i].setAttribute('size', size)
  }

  return wrapperRef.current
}

const iconNames = [
  'sinch-icon-channel-telegram',
  'sinch-icon-channel-apple-business-chat',
  'sinch-icon-channel-facebook-messenger',
  'sinch-icon-channel-instagram',
  'sinch-icon-channel-line',
  'sinch-icon-channel-talk',
  'sinch-icon-channel-twitter',
  'sinch-icon-channel-viber',
  'sinch-icon-channel-wechat',
  'sinch-icon-channel-whatsapp',
]

export const IconsChannel = Template(iconNames)

IconsChannel.args = {
  size: 48,
}

IconsChannel.parameters = {
  docs: {
    source: {
      code: `<>\n${iconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const squareIconNames = [
  'sinch-icon-channel-telegram-square',
  'sinch-icon-channel-apple-business-chat-square',
  'sinch-icon-channel-facebook-messenger-square',
  'sinch-icon-channel-instagram-square',
  'sinch-icon-channel-line-square',
  'sinch-icon-channel-talk-square',
  'sinch-icon-channel-twitter-square',
  'sinch-icon-channel-viber-square',
  'sinch-icon-channel-wechat-square',
  'sinch-icon-channel-whatsapp-square',
]

export const SquareIconsChannel = Template(squareIconNames)

SquareIconsChannel.args = {
  size: 48,
}

SquareIconsChannel.parameters = {
  docs: {
    source: {
      code: `<>\n${squareIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}
