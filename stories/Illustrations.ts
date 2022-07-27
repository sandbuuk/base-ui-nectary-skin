import { backgroundValues, valignValues } from '@sinch-engage/nectary/illustrations/utils'
import { useArgs, useRef } from '@storybook/addons'
import type { TSinchIllustrationElement } from '@sinch-engage/nectary/illustrations/types'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/illustrations/product-page-2'
import '@sinch-engage/nectary/illustrations/product-page'
import '@sinch-engage/nectary/illustrations/hero-page'
import '@sinch-engage/nectary/illustrations/hero-messages'
import '@sinch-engage/nectary/illustrations/about-page'
import '@sinch-engage/nectary/illustrations/woman-hand-lifted'
import '@sinch-engage/nectary/illustrations/wizard'
import '@sinch-engage/nectary/illustrations/win-together'
import '@sinch-engage/nectary/illustrations/win-together-two-people'
import '@sinch-engage/nectary/illustrations/what-tools'
import '@sinch-engage/nectary/illustrations/texting-sitting'
import '@sinch-engage/nectary/illustrations/teamwork-from-phone'
import '@sinch-engage/nectary/illustrations/surf'
import '@sinch-engage/nectary/illustrations/sofa'
import '@sinch-engage/nectary/illustrations/sitting-person-2'
import '@sinch-engage/nectary/illustrations/sitting-person'
import '@sinch-engage/nectary/illustrations/sitting-messaging'
import '@sinch-engage/nectary/illustrations/shopping'
import '@sinch-engage/nectary/illustrations/presenting-charts'
import '@sinch-engage/nectary/illustrations/person-with-phone'
import '@sinch-engage/nectary/illustrations/person-with-dog'
import '@sinch-engage/nectary/illustrations/person-on-walk'
import '@sinch-engage/nectary/illustrations/parcel-delivery'
import '@sinch-engage/nectary/illustrations/omnichannel-messaging'
import '@sinch-engage/nectary/illustrations/messages-shopping'
import '@sinch-engage/nectary/illustrations/meeting-scrum'
import '@sinch-engage/nectary/illustrations/meeting-scrum-2'
import '@sinch-engage/nectary/illustrations/lying-and-looking-at-the-phone'
import '@sinch-engage/nectary/illustrations/laptop-sitting-verified'
import '@sinch-engage/nectary/illustrations/jump'
import '@sinch-engage/nectary/illustrations/global-reach'
import '@sinch-engage/nectary/illustrations/football'
import '@sinch-engage/nectary/illustrations/desktop'
import '@sinch-engage/nectary/illustrations/delivery-service-package'
import '@sinch-engage/nectary/illustrations/conversation-api'
import '@sinch-engage/nectary/illustrations/contact-us'
import '@sinch-engage/nectary/illustrations/chat-bot'
import '@sinch-engage/nectary/illustrations/call-center'
import '@sinch-engage/nectary/illustrations/boost'
import '@sinch-engage/nectary/illustrations/5g'
import '@sinch-engage/nectary/illustrations/phone-and-cat'
import '@sinch-engage/nectary/illustrations/woman-on-right'
import '@sinch-engage/nectary/illustrations/woman-on-left'
import '@sinch-engage/nectary/illustrations/walking-on-phone'
import '@sinch-engage/nectary/illustrations/texting-sofa'
import '@sinch-engage/nectary/illustrations/sherlockholmes'
import '@sinch-engage/nectary/illustrations/security'
import '@sinch-engage/nectary/illustrations/person-on-phone'
import '@sinch-engage/nectary/illustrations/old-person-on-phone'
import '@sinch-engage/nectary/illustrations/message-recieved'
import '@sinch-engage/nectary/illustrations/man-on-right'
import '@sinch-engage/nectary/illustrations/happy-text'
import '@sinch-engage/nectary/illustrations/girl-on-phone'
import '@sinch-engage/nectary/illustrations/costumer-support'
import '@sinch-engage/nectary/illustrations/cat-texting'
import '@sinch-engage/nectary/illustrations/voicebot'
import '@sinch-engage/nectary/illustrations/support-center'
import '@sinch-engage/nectary/illustrations/stats'
import '@sinch-engage/nectary/illustrations/sick-kid'
import '@sinch-engage/nectary/illustrations/on-the-phone'
import '@sinch-engage/nectary/illustrations/office-worker'
import '@sinch-engage/nectary/illustrations/monitor'
import '@sinch-engage/nectary/illustrations/messages'
import '@sinch-engage/nectary/illustrations/messages-on-yellow-bg'
import '@sinch-engage/nectary/illustrations/cooking'
import '@sinch-engage/nectary/illustrations/telemast'
import '@sinch-engage/nectary/illustrations/decorative-rainbow'
import '@sinch-engage/nectary/illustrations/decorative-flamingo'
import '@sinch-engage/nectary/illustrations/video-voice-call'
import '@sinch-engage/nectary/illustrations/train'
import '@sinch-engage/nectary/illustrations/taxi'
import '@sinch-engage/nectary/illustrations/taxi-2'
import '@sinch-engage/nectary/illustrations/shopping-cart'
import '@sinch-engage/nectary/illustrations/shoe'
import '@sinch-engage/nectary/illustrations/security-camera'
import '@sinch-engage/nectary/illustrations/scooter'
import '@sinch-engage/nectary/illustrations/plane'
import '@sinch-engage/nectary/illustrations/pizza'
import '@sinch-engage/nectary/illustrations/pineapple'
import '@sinch-engage/nectary/illustrations/passing-heart'
import '@sinch-engage/nectary/illustrations/passing-heart-cool'
import '@sinch-engage/nectary/illustrations/numbers-passing'
import '@sinch-engage/nectary/illustrations/message-passing'
import '@sinch-engage/nectary/illustrations/menu'
import '@sinch-engage/nectary/illustrations/megaphone'
import '@sinch-engage/nectary/illustrations/magnifying-glass'
import '@sinch-engage/nectary/illustrations/lock'
import '@sinch-engage/nectary/illustrations/lightning'
import '@sinch-engage/nectary/illustrations/laptop-holding'
import '@sinch-engage/nectary/illustrations/heart'
import '@sinch-engage/nectary/illustrations/headphones'
import '@sinch-engage/nectary/illustrations/hand-ok'
import '@sinch-engage/nectary/illustrations/geometric-shapes-passing'
import '@sinch-engage/nectary/illustrations/flower-hand'
import '@sinch-engage/nectary/illustrations/document'
import '@sinch-engage/nectary/illustrations/cute-bee'
import '@sinch-engage/nectary/illustrations/credit-card'
import '@sinch-engage/nectary/illustrations/credit-card-30-degrees'
import '@sinch-engage/nectary/illustrations/code'
import '@sinch-engage/nectary/illustrations/check'
import '@sinch-engage/nectary/illustrations/bank'
import '@sinch-engage/nectary/illustrations/supporting-device-4'
import '@sinch-engage/nectary/illustrations/supporting-device-3'
import '@sinch-engage/nectary/illustrations/supporting-device-2'
import '@sinch-engage/nectary/illustrations/supporting-device'
import '@sinch-engage/nectary/illustrations/handset-omnichannel-messages'
import '@sinch-engage/nectary/illustrations/hands-laptop'
import '@sinch-engage/nectary/illustrations/contactus'
import '@sinch-engage/nectary/illustrations/buildvoicebot'
// {{illustration import}}

/*const illustrationNames = [
  // {{illustration name}}
]*/

export default {
  title: 'Components/Illustrations',
  argTypes: {
    size: {
      control: { type: 'range', min: 32, max: 1024, step: 32 },
    },
    background: {
      control: 'select',
      options: backgroundValues,
      description: 'Illustration background color',
    },
    valign: {
      control: 'select',
      options: valignValues,
      description: 'Illustration align',
    },
  },
} as Meta

const Template = (names: string[]): Story => () => {
  const [{ size, background, valign }] = useArgs()
  const wrapperRef = useRef<HTMLElement | null>(null)

  if (wrapperRef.current === null) {
    wrapperRef.current = document.createElement('div')

    const $wrapper = wrapperRef.current as HTMLElement

    $wrapper.style.display = 'flex'
    $wrapper.style.flexWrap = 'wrap'

    const $icons = names.map((name) => {
      const $icon = document.createElement(name) as TSinchIllustrationElement

      $icon.style.width = '25%'
      $icon.style.minHeight = '256px'

      $icon.setAttribute('title', name)

      return $icon
    })

    $wrapper.append(...$icons)
  }

  // eslint-disable-next-line sort-vars
  for (let i = 0, ch = wrapperRef.current.children; i < ch.length; i++) {
    ch[i].setAttribute('size', size)
    ch[i].setAttribute('background', background)

    if (valign != null) {
      ch[i].setAttribute('valign', valign)
    } else {
      ch[i].removeAttribute('valign')
    }
  }

  return wrapperRef.current
}

const heroIllustrationNames = [
  'sinch-illustration-5g',
  'sinch-illustration-about-page',
  'sinch-illustration-about-page',
  'sinch-illustration-boost',
  'sinch-illustration-call-center',
  'sinch-illustration-chat-bot',
  'sinch-illustration-contact-us',
  'sinch-illustration-conversation-api',
  'sinch-illustration-delivery-service-package',
  'sinch-illustration-desktop',
  'sinch-illustration-football',
  'sinch-illustration-global-reach',
  'sinch-illustration-hero-messages',
  'sinch-illustration-hero-page',
  'sinch-illustration-jump',
  'sinch-illustration-laptop-sitting-verified',
  'sinch-illustration-lying-and-looking-at-the-phone',
  'sinch-illustration-meeting-scrum-2',
  'sinch-illustration-meeting-scrum',
  'sinch-illustration-messages-shopping',
  'sinch-illustration-omnichannel-messaging',
  'sinch-illustration-parcel-delivery',
  'sinch-illustration-person-on-walk',
  'sinch-illustration-person-with-dog',
  'sinch-illustration-person-with-phone',
  'sinch-illustration-presenting-charts',
  'sinch-illustration-product-page-2',
  'sinch-illustration-product-page',
  'sinch-illustration-shopping',
  'sinch-illustration-sitting-messaging',
  'sinch-illustration-sitting-person-2',
  'sinch-illustration-sitting-person',
  'sinch-illustration-sofa',
  'sinch-illustration-surf',
  'sinch-illustration-teamwork-from-phone',
  'sinch-illustration-texting-sitting',
  'sinch-illustration-what-tools',
  'sinch-illustration-win-together-two-people',
  'sinch-illustration-win-together',
  'sinch-illustration-wizard',
  'sinch-illustration-woman-hand-lifted',
]

export const HeroIllustrations = Template(heroIllustrationNames)

HeroIllustrations.args = {
  size: 128,
}

HeroIllustrations.parameters = {
  docs: {
    source: {
      code: `<>\n${heroIllustrationNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const apiIllustrationNames = [
  'sinch-illustration-cat-texting',
  'sinch-illustration-costumer-support',
  'sinch-illustration-girl-on-phone',
  'sinch-illustration-happy-text',
  'sinch-illustration-man-on-right',
  'sinch-illustration-message-recieved',
  'sinch-illustration-old-person-on-phone',
  'sinch-illustration-person-on-phone',
  'sinch-illustration-security',
  'sinch-illustration-sherlockholmes',
  'sinch-illustration-texting-sofa',
  'sinch-illustration-walking-on-phone',
  'sinch-illustration-woman-on-left',
  'sinch-illustration-woman-on-right',
]

export const ApiIllustrations = Template(apiIllustrationNames)

ApiIllustrations.args = {
  size: 128,
}

ApiIllustrations.parameters = {
  docs: {
    source: {
      code: `<>\n${apiIllustrationNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const supportingPeopleIllustrationNames = [
  'sinch-illustration-cooking',
  'sinch-illustration-messages-on-yellow-bg',
  'sinch-illustration-messages',
  'sinch-illustration-monitor',
  'sinch-illustration-office-worker',
  'sinch-illustration-on-the-phone',
  'sinch-illustration-phone-and-cat',
  'sinch-illustration-sick-kid',
  'sinch-illustration-stats',
  'sinch-illustration-support-center',
  'sinch-illustration-voicebot',
]

export const SupportingPeopleIllustrations = Template(supportingPeopleIllustrationNames)

SupportingPeopleIllustrations.args = {
  size: 128,
}

SupportingPeopleIllustrations.parameters = {
  docs: {
    source: {
      code: `<>\n${supportingPeopleIllustrationNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const supportingDecorativeIllustrationNames = [
  'sinch-illustration-bank',
  'sinch-illustration-check',
  'sinch-illustration-code',
  'sinch-illustration-credit-card-30-degrees',
  'sinch-illustration-credit-card',
  'sinch-illustration-cute-bee',
  'sinch-illustration-decorative-flamingo',
  'sinch-illustration-decorative-rainbow',
  'sinch-illustration-document',
  'sinch-illustration-flower-hand',
  'sinch-illustration-geometric-shapes-passing',
  'sinch-illustration-hand-ok',
  'sinch-illustration-headphones',
  'sinch-illustration-heart',
  'sinch-illustration-laptop-holding',
  'sinch-illustration-lightning',
  'sinch-illustration-lock',
  'sinch-illustration-magnifying-glass',
  'sinch-illustration-megaphone',
  'sinch-illustration-menu',
  'sinch-illustration-message-passing',
  'sinch-illustration-numbers-passing',
  'sinch-illustration-passing-heart-cool',
  'sinch-illustration-passing-heart',
  'sinch-illustration-pineapple',
  'sinch-illustration-pizza',
  'sinch-illustration-plane',
  'sinch-illustration-scooter',
  'sinch-illustration-security-camera',
  'sinch-illustration-shoe',
  'sinch-illustration-shopping-cart',
  'sinch-illustration-taxi-2',
  'sinch-illustration-taxi',
  'sinch-illustration-telemast',
  'sinch-illustration-train',
  'sinch-illustration-video-voice-call',
]

export const SupportingDecorativeIllustrations = Template(supportingDecorativeIllustrationNames)

SupportingDecorativeIllustrations.args = {
  size: 128,
}

SupportingDecorativeIllustrations.parameters = {
  docs: {
    source: {
      code: `<>\n${supportingDecorativeIllustrationNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const supportingDevicesIllustrationNames = [
  'sinch-illustration-buildvoicebot',
  'sinch-illustration-contactus',
  'sinch-illustration-hands-laptop',
  'sinch-illustration-handset-omnichannel-messages',
  'sinch-illustration-supporting-device-2',
  'sinch-illustration-supporting-device-3',
  'sinch-illustration-supporting-device-4',
  'sinch-illustration-supporting-device',
]

export const SupportingDevicesIllustrations = Template(supportingDevicesIllustrationNames)

SupportingDevicesIllustrations.args = {
  size: 128,
}

SupportingDevicesIllustrations.parameters = {
  docs: {
    source: {
      code: `<>\n${supportingDevicesIllustrationNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}
