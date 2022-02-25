import { useArgs, useRef } from '@storybook/addons'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact } from '@sinch-engage/nectary/icon-branded/types'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/theme.css'
import '@sinch-engage/nectary/icon-branded/rocket'
import '@sinch-engage/nectary/icon-branded/home'
import '@sinch-engage/nectary/icon-branded/contact'
import '@sinch-engage/nectary/icon-branded/chatbot'
import '@sinch-engage/nectary/icon-branded/campaigns'
import '@sinch-engage/nectary/icon-branded/barchart-up'
import '@sinch-engage/nectary/icon-branded/barchart-down'
import '@sinch-engage/nectary/icon-branded/user'
import '@sinch-engage/nectary/icon-branded/users'
import '@sinch-engage/nectary/icon-branded/multiple-channels'
import '@sinch-engage/nectary/icon-branded/settings'

export default {
  title: 'Components/IconsBranded',
  argTypes: {
    inverted: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'range', min: 32, max: 128, step: 8 },
    },
  },
} as Meta

const Template = (iconTagName: string): Story<TSinchIconBrandedReact> => () => {
  const [{ size, inverted }] = useArgs()
  const iconRef = useRef<TSinchIconBrandedElement | null>(null)

  if (iconRef.current === null) {
    const $icon = document.createElement(iconTagName) as TSinchIconBrandedElement

    iconRef.current = $icon
  }

  const $icon = iconRef.current!

  $icon.size = size
  $icon.inverted = inverted

  return $icon
}

export const Home = Template('sinch-icon-home')

Home.args = {
  size: 48,
  inverted: false,
}

Home.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-home size="48"></sinch-icon-home>',
    },
  },
}

export const Rocket = Template('sinch-icon-rocket')

Rocket.args = {
  size: 48,
  inverted: false,
}

Rocket.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-rocket size="48"></sinch-icon-rocket>',
    },
  },
}

export const Contact = Template('sinch-icon-contact')

Contact.args = {
  size: 48,
  inverted: false,
}

Contact.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-contact size="48"></sinch-icon-contact>',
    },
  },
}

export const ChatBot = Template('sinch-icon-chatbot')

ChatBot.args = {
  size: 48,
  inverted: false,
}

ChatBot.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-chatbot size="48"></sinch-icon-chatbot>',
    },
  },
}

export const Campaigns = Template('sinch-icon-campaigns')

Campaigns.args = {
  size: 48,
  inverted: false,
}

Campaigns.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-campaigns size="48"></sinch-icon-campaigns>',
    },
  },
}

export const BarchartUp = Template('sinch-icon-barchart-up')

BarchartUp.args = {
  size: 48,
  inverted: false,
}

BarchartUp.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-barchart-up size="48"></sinch-icon-barchart-up>',
    },
  },
}

export const BarchartDown = Template('sinch-icon-barchart-down')

BarchartDown.args = {
  size: 48,
  inverted: false,
}

BarchartDown.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-barchart-down size="48"></sinch-icon-barchart-down>',
    },
  },
}

export const User = Template('sinch-icon-user')

User.args = {
  size: 48,
  inverted: false,
}

User.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-user size="48"></sinch-icon-user>',
    },
  },
}

export const Users = Template('sinch-icon-users')

Users.args = {
  size: 48,
  inverted: false,
}

Users.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-users size="48"></sinch-icon-users>',
    },
  },
}

export const MultipleChannels = Template('sinch-icon-multiple-channels')

MultipleChannels.args = {
  size: 48,
  inverted: false,
}

MultipleChannels.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-multiple-channels size="48"></sinch-icon-multiple-channels>',
    },
  },
}

export const Settings = Template('sinch-icon-settings')

Settings.args = {
  size: 48,
  inverted: false,
}

Settings.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-settings size="48"></sinch-icon-settings>',
    },
  },
}
