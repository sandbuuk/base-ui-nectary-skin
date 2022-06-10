import { useArgs, useRef } from '@storybook/addons'
import type { TSinchIconChannelElement, TSinchIconChannelReact } from '@sinch-engage/nectary/icons-channel/types'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/theme.css'
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

export default {
  title: 'Components/Icons Channel',
  argTypes: {
    size: {
      control: { type: 'range', min: 32, max: 128, step: 8 },
    },
  },
} as Meta

const Template = (): Story<TSinchIconChannelReact> => () => {
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

export const IconsChannel = Template()

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
