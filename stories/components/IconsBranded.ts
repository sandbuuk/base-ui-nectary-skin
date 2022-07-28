import { useArgs, useRef } from '@storybook/addons'
import type { TSinchIconBrandedElement } from '@sinch-engage/nectary/icons-branded/types'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/icons-branded/bell'
import '@sinch-engage/nectary/icons-branded/home'
import '@sinch-engage/nectary/icons-branded/contact'
import '@sinch-engage/nectary/icons-branded/chatbot'
import '@sinch-engage/nectary/icons-branded/campaigns'
import '@sinch-engage/nectary/icons-branded/barchart-up'
import '@sinch-engage/nectary/icons-branded/barchart-down'
import '@sinch-engage/nectary/icons-branded/user'
import '@sinch-engage/nectary/icons-branded/users'
import '@sinch-engage/nectary/icons-branded/multiple-channels'
import '@sinch-engage/nectary/icons-branded/rocket'
import '@sinch-engage/nectary/icons-branded/settings'
import '@sinch-engage/nectary/icons-branded/global-settings'
import '@sinch-engage/nectary/icons-branded/credit-card'
import '@sinch-engage/nectary/icons-branded/help'
import '@sinch-engage/nectary/icons-branded/finance'
import '@sinch-engage/nectary/icons-branded/verified-phone'
import '@sinch-engage/nectary/icons-branded/chat'
import '@sinch-engage/nectary/icons-branded/mms'
import '@sinch-engage/nectary/icons-branded/push'
import '@sinch-engage/nectary/icons-branded/rcs'
import '@sinch-engage/nectary/icons-branded/sms'

const iconNames = [
  'sinch-icon-branded-bell',
  'sinch-icon-branded-home',
  'sinch-icon-branded-contact',
  'sinch-icon-branded-chatbot',
  'sinch-icon-branded-campaigns',
  'sinch-icon-branded-barchart-up',
  'sinch-icon-branded-barchart-down',
  'sinch-icon-branded-user',
  'sinch-icon-branded-users',
  'sinch-icon-branded-multiple-channels',
  'sinch-icon-branded-rocket',
  'sinch-icon-branded-settings',
  'sinch-icon-branded-global-settings',
  'sinch-icon-branded-credit-card',
  'sinch-icon-branded-help',
  'sinch-icon-branded-finance',
  'sinch-icon-branded-verified-phone',
  'sinch-icon-branded-chat',
  'sinch-icon-branded-push',
  'sinch-icon-branded-sms',
  'sinch-icon-branded-mms',
  'sinch-icon-branded-rcs',
]

export default {
  title: 'Components/Icons Branded',
  argTypes: {
    inverted: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'range', min: 32, max: 128, step: 8 },
    },
  },
} as Meta

const Template = (): Story => () => {
  const [{ size, inverted }] = useArgs()
  const wrapperRef = useRef<HTMLElement | null>(null)

  if (wrapperRef.current === null) {
    wrapperRef.current = document.createElement('div')

    const $wrapper = wrapperRef.current as HTMLElement

    $wrapper.style.display = 'flex'
    $wrapper.style.flexWrap = 'wrap'
    $wrapper.style.gap = '16px'

    const $icons = iconNames.map((name) => {
      const $icon = document.createElement(name) as TSinchIconBrandedElement

      $icon.setAttribute('title', name)

      return $icon
    })

    $wrapper.append(...$icons)
  }

  wrapperRef.current.style.backgroundColor = inverted as boolean ? 'black' : 'white'

  // eslint-disable-next-line sort-vars
  for (let i = 0, ch = wrapperRef.current.children; i < ch.length; i++) {
    ch[i].setAttribute('size', size)
    inverted as boolean ? ch[i].setAttribute('inverted', '') : ch[i].removeAttribute('inverted')
  }

  return wrapperRef.current
}

export const IconsBranded = Template()

IconsBranded.args = {
  size: 48,
  inverted: false,
}

IconsBranded.parameters = {
  docs: {
    source: {
      code: `<>\n${iconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}
