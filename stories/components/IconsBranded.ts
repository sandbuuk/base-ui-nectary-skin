import { useArgs, useRef } from '@storybook/addons'
import type { TSinchIconBrandedElement } from '@sinch-engage/nectary/icons-branded/types'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/icons-branded/abcd'
import '@sinch-engage/nectary/icons-branded/ai'
import '@sinch-engage/nectary/icons-branded/airplane'
import '@sinch-engage/nectary/icons-branded/announcement'
import '@sinch-engage/nectary/icons-branded/barchart-down'
import '@sinch-engage/nectary/icons-branded/barchart-up'
import '@sinch-engage/nectary/icons-branded/bell-notification'
import '@sinch-engage/nectary/icons-branded/bell-off'
import '@sinch-engage/nectary/icons-branded/bell'
import '@sinch-engage/nectary/icons-branded/boat'
import '@sinch-engage/nectary/icons-branded/book'
import '@sinch-engage/nectary/icons-branded/calendar'
import '@sinch-engage/nectary/icons-branded/call'
import '@sinch-engage/nectary/icons-branded/campaigns'
import '@sinch-engage/nectary/icons-branded/car'
import '@sinch-engage/nectary/icons-branded/chat-message'
import '@sinch-engage/nectary/icons-branded/chat'
import '@sinch-engage/nectary/icons-branded/chatbot'
import '@sinch-engage/nectary/icons-branded/cloud'
import '@sinch-engage/nectary/icons-branded/connection'
import '@sinch-engage/nectary/icons-branded/contact'
import '@sinch-engage/nectary/icons-branded/cookies'
import '@sinch-engage/nectary/icons-branded/credit-card'
import '@sinch-engage/nectary/icons-branded/custom-message'
import '@sinch-engage/nectary/icons-branded/custom'
import '@sinch-engage/nectary/icons-branded/customer-satisfaction-smiley'
import '@sinch-engage/nectary/icons-branded/database'
import '@sinch-engage/nectary/icons-branded/decision'
import '@sinch-engage/nectary/icons-branded/developer'
import '@sinch-engage/nectary/icons-branded/direction'
import '@sinch-engage/nectary/icons-branded/easytouse'
import '@sinch-engage/nectary/icons-branded/edit'
import '@sinch-engage/nectary/icons-branded/finance'
import '@sinch-engage/nectary/icons-branded/flow-chart'
import '@sinch-engage/nectary/icons-branded/flow'
import '@sinch-engage/nectary/icons-branded/global-settings'
import '@sinch-engage/nectary/icons-branded/global'
import '@sinch-engage/nectary/icons-branded/gym'
import '@sinch-engage/nectary/icons-branded/handshaking'
import '@sinch-engage/nectary/icons-branded/health-insurance'
import '@sinch-engage/nectary/icons-branded/healthcare'
import '@sinch-engage/nectary/icons-branded/help'
import '@sinch-engage/nectary/icons-branded/home'
import '@sinch-engage/nectary/icons-branded/idea'
import '@sinch-engage/nectary/icons-branded/integration'
import '@sinch-engage/nectary/icons-branded/laptop'
import '@sinch-engage/nectary/icons-branded/layout'
import '@sinch-engage/nectary/icons-branded/line-chart-down'
import '@sinch-engage/nectary/icons-branded/line-chart-up'
import '@sinch-engage/nectary/icons-branded/lock'
import '@sinch-engage/nectary/icons-branded/logistic'
import '@sinch-engage/nectary/icons-branded/long-message'
import '@sinch-engage/nectary/icons-branded/loop'
import '@sinch-engage/nectary/icons-branded/low-cost'
import '@sinch-engage/nectary/icons-branded/make-it-happen'
import '@sinch-engage/nectary/icons-branded/make-money'
import '@sinch-engage/nectary/icons-branded/massage'
import '@sinch-engage/nectary/icons-branded/media'
import '@sinch-engage/nectary/icons-branded/message-questions'
import '@sinch-engage/nectary/icons-branded/message'
import '@sinch-engage/nectary/icons-branded/mic'
import '@sinch-engage/nectary/icons-branded/mms'
import '@sinch-engage/nectary/icons-branded/mobile-intergration'
import '@sinch-engage/nectary/icons-branded/mobile'
import '@sinch-engage/nectary/icons-branded/money'
import '@sinch-engage/nectary/icons-branded/multiple-channels'
import '@sinch-engage/nectary/icons-branded/music'
import '@sinch-engage/nectary/icons-branded/mute'
import '@sinch-engage/nectary/icons-branded/news'
import '@sinch-engage/nectary/icons-branded/office-activities'
import '@sinch-engage/nectary/icons-branded/office'
import '@sinch-engage/nectary/icons-branded/opened-message'
import '@sinch-engage/nectary/icons-branded/package'
import '@sinch-engage/nectary/icons-branded/path'
import '@sinch-engage/nectary/icons-branded/perso-message'
import '@sinch-engage/nectary/icons-branded/pie-chart'
import '@sinch-engage/nectary/icons-branded/piggybank'
import '@sinch-engage/nectary/icons-branded/pin'
import '@sinch-engage/nectary/icons-branded/price-tag'
import '@sinch-engage/nectary/icons-branded/protection'
import '@sinch-engage/nectary/icons-branded/purpose'
import '@sinch-engage/nectary/icons-branded/push'
import '@sinch-engage/nectary/icons-branded/puzzle'
import '@sinch-engage/nectary/icons-branded/queue'
import '@sinch-engage/nectary/icons-branded/rcs'
import '@sinch-engage/nectary/icons-branded/retail'
import '@sinch-engage/nectary/icons-branded/rich-content'
import '@sinch-engage/nectary/icons-branded/rocket'
import '@sinch-engage/nectary/icons-branded/roi'
import '@sinch-engage/nectary/icons-branded/search'
import '@sinch-engage/nectary/icons-branded/send'
import '@sinch-engage/nectary/icons-branded/settings'
import '@sinch-engage/nectary/icons-branded/shopping-cart'
import '@sinch-engage/nectary/icons-branded/sms'
import '@sinch-engage/nectary/icons-branded/support'
import '@sinch-engage/nectary/icons-branded/system-settings'
import '@sinch-engage/nectary/icons-branded/telemast'
import '@sinch-engage/nectary/icons-branded/thumbs-down'
import '@sinch-engage/nectary/icons-branded/thumbs-up'
import '@sinch-engage/nectary/icons-branded/time'
import '@sinch-engage/nectary/icons-branded/tutorial'
import '@sinch-engage/nectary/icons-branded/user'
import '@sinch-engage/nectary/icons-branded/users'
import '@sinch-engage/nectary/icons-branded/verified-phone'
import '@sinch-engage/nectary/icons-branded/video-off'
import '@sinch-engage/nectary/icons-branded/video-on'
import '@sinch-engage/nectary/icons-branded/webhook'
import '@sinch-engage/nectary/icons-branded/wheels'
import '@sinch-engage/nectary/icons-branded/wi-fi'
import '@sinch-engage/nectary/icons-branded/voice-video-and-data'
import '@sinch-engage/nectary/icons-branded/verification-api'
import '@sinch-engage/nectary/icons-branded/operators'
import '@sinch-engage/nectary/icons-branded/mobile-numbers'
import '@sinch-engage/nectary/icons-branded/messaging'
import '@sinch-engage/nectary/icons-branded/intelligent-revenue-maximisation'
import '@sinch-engage/nectary/icons-branded/channels'
import '@sinch-engage/nectary/icons-branded/call-and-verified'
import '@sinch-engage/nectary/icons-branded/billing'
import '@sinch-engage/nectary/icons-branded/5g-readiness'
import '@sinch-engage/nectary/icons-branded/contact-pro'
import '@sinch-engage/nectary/icons-branded/chatlayert'
import '@sinch-engage/nectary/icons-branded/voice-calling'
import '@sinch-engage/nectary/icons-branded/video-calling'
import '@sinch-engage/nectary/icons-branded/numbers'
import '@sinch-engage/nectary/icons-branded/contact-center'
import '@sinch-engage/nectary/icons-branded/calling-api'
// {{icon import}}

const iconNames = [
  'sinch-icon-branded-abcd',
  'sinch-icon-branded-ai',
  'sinch-icon-branded-airplane',
  'sinch-icon-branded-announcement',
  'sinch-icon-branded-barchart-down',
  'sinch-icon-branded-barchart-up',
  'sinch-icon-branded-bell-notification',
  'sinch-icon-branded-bell-off',
  'sinch-icon-branded-bell',
  'sinch-icon-branded-boat',
  'sinch-icon-branded-calendar',
  'sinch-icon-branded-call',
  'sinch-icon-branded-car',
  'sinch-icon-branded-chat-message',
  'sinch-icon-branded-chatbot',
  'sinch-icon-branded-cloud',
  'sinch-icon-branded-connection',
  'sinch-icon-branded-cookies',
  'sinch-icon-branded-credit-card',
  'sinch-icon-branded-custom-message',
  'sinch-icon-branded-custom',
  'sinch-icon-branded-customer-satisfaction-smiley',
  'sinch-icon-branded-database',
  'sinch-icon-branded-decision',
  'sinch-icon-branded-developer',
  'sinch-icon-branded-direction',
  'sinch-icon-branded-easytouse',
  'sinch-icon-branded-edit',
  'sinch-icon-branded-finance',
  'sinch-icon-branded-flow-chart',
  'sinch-icon-branded-flow',
  'sinch-icon-branded-global-settings',
  'sinch-icon-branded-global',
  'sinch-icon-branded-gym',
  'sinch-icon-branded-handshaking',
  'sinch-icon-branded-health-insurance',
  'sinch-icon-branded-healthcare',
  'sinch-icon-branded-help',
  'sinch-icon-branded-home',
  'sinch-icon-branded-idea',
  'sinch-icon-branded-integration',
  'sinch-icon-branded-laptop',
  'sinch-icon-branded-layout',
  'sinch-icon-branded-line-chart-down',
  'sinch-icon-branded-line-chart-up',
  'sinch-icon-branded-lock',
  'sinch-icon-branded-logistic',
  'sinch-icon-branded-long-message',
  'sinch-icon-branded-loop',
  'sinch-icon-branded-low-cost',
  'sinch-icon-branded-make-it-happen',
  'sinch-icon-branded-make-money',
  'sinch-icon-branded-massage',
  'sinch-icon-branded-media',
  'sinch-icon-branded-message-questions',
  'sinch-icon-branded-message',
  'sinch-icon-branded-mic',
  'sinch-icon-branded-mobile-intergration',
  'sinch-icon-branded-mobile',
  'sinch-icon-branded-money',
  'sinch-icon-branded-multiple-channels',
  'sinch-icon-branded-music',
  'sinch-icon-branded-mute',
  'sinch-icon-branded-news',
  'sinch-icon-branded-office-activities',
  'sinch-icon-branded-office',
  'sinch-icon-branded-opened-message',
  'sinch-icon-branded-package',
  'sinch-icon-branded-path',
  'sinch-icon-branded-perso-message',
  'sinch-icon-branded-pie-chart',
  'sinch-icon-branded-piggybank',
  'sinch-icon-branded-pin',
  'sinch-icon-branded-price-tag',
  'sinch-icon-branded-protection',
  'sinch-icon-branded-purpose',
  'sinch-icon-branded-puzzle',
  'sinch-icon-branded-queue',
  'sinch-icon-branded-retail',
  'sinch-icon-branded-rich-content',
  'sinch-icon-branded-rocket',
  'sinch-icon-branded-roi',
  'sinch-icon-branded-search',
  'sinch-icon-branded-send',
  'sinch-icon-branded-settings',
  'sinch-icon-branded-shopping-cart',
  'sinch-icon-branded-support',
  'sinch-icon-branded-system-settings',
  'sinch-icon-branded-telemast',
  'sinch-icon-branded-thumbs-down',
  'sinch-icon-branded-thumbs-up',
  'sinch-icon-branded-time',
  'sinch-icon-branded-time',
  'sinch-icon-branded-tutorial',
  'sinch-icon-branded-user',
  'sinch-icon-branded-users',
  'sinch-icon-branded-verified-phone',
  'sinch-icon-branded-video-off',
  'sinch-icon-branded-video-on',
  'sinch-icon-branded-webhook',
  'sinch-icon-branded-wheels',
  'sinch-icon-branded-wi-fi',
  'sinch-icon-branded-voice-video-and-data',
  'sinch-icon-branded-verification-api',
  'sinch-icon-branded-operators',
  'sinch-icon-branded-mobile-numbers',
  'sinch-icon-branded-messaging',
  'sinch-icon-branded-intelligent-revenue-maximisation',
  'sinch-icon-branded-channels',
  'sinch-icon-branded-call-and-verified',
  'sinch-icon-branded-billing',
  'sinch-icon-branded-5g-readiness',
  'sinch-icon-branded-contact',
  'sinch-icon-branded-contact-pro',
  'sinch-icon-branded-chatlayert',
  'sinch-icon-branded-campaigns',
  'sinch-icon-branded-voice-calling',
  'sinch-icon-branded-video-calling',
  'sinch-icon-branded-numbers',
  'sinch-icon-branded-contact-center',
  'sinch-icon-branded-calling-api',
  'sinch-icon-branded-book',
  'sinch-icon-branded-chat',
  'sinch-icon-branded-push',
  'sinch-icon-branded-sms',
  'sinch-icon-branded-mms',
  'sinch-icon-branded-rcs',
  // {{icon name}}
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
