import { useArgs, useRef } from '@storybook/addons'
import type { TSinchLogoElement, TSinchLogoReact } from '@nectary/components/logo/types'
import type { Story, Meta } from '@storybook/html'
import '@nectary/components/theme.css'
import '@nectary/components/logo/sinch-icon'
import '@nectary/components/logo/sinch-icon-wordmark'

export default {
  title: 'Components/Logo',
  argTypes: {
    inverted: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'range', min: 48, max: 256, step: 8 },
    },
  },
} as Meta

const Template = (iconTagName: string): Story<TSinchLogoReact> => () => {
  const [{ size, inverted }] = useArgs()
  const iconRef = useRef<TSinchLogoElement | null>(null)

  if (iconRef.current === null) {
    const $icon = document.createElement(iconTagName) as TSinchLogoElement

    iconRef.current = $icon
  }

  const $icon = iconRef.current!

  $icon.size = size
  $icon.inverted = inverted

  return $icon
}

export const SinchIcon = Template('sinch-logo-sinch-icon')

SinchIcon.args = {
  size: 100,
  inverted: false,
}

SinchIcon.parameters = {
  docs: {
    source: {
      code: '<sinch-logo-sinch-icon size="100"></sinch-logo-sinch-icon>',
    },
  },
}

export const SinchIconWordmark = Template('sinch-logo-sinch-icon-wordmark')

SinchIconWordmark.args = {
  size: 200,
  inverted: false,
}

SinchIconWordmark.parameters = {
  docs: {
    source: {
      code: '<sinch-logo-sinch-icon-wordmark size="200"></sinch-logo-sinch-icon-wordmark>',
    },
  },
}
