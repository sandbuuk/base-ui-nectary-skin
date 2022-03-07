import { useArgs, useRef } from '@storybook/addons'
import type { TSinchIconElement, TSinchIconReact } from '@sinch-engage/nectary/icon/types'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/theme.css'
import '@sinch-engage/nectary/icon/arrow-back-ios'
import '@sinch-engage/nectary/icon/arrow-forward-ios'
import '@sinch-engage/nectary/icon/cancel'
import '@sinch-engage/nectary/icon/chevron-left'
import '@sinch-engage/nectary/icon/chevron-right'
import '@sinch-engage/nectary/icon/close'
import '@sinch-engage/nectary/icon/east'
import '@sinch-engage/nectary/icon/west'
import '@sinch-engage/nectary/icon/expand-less'
import '@sinch-engage/nectary/icon/expand-more'
import '@sinch-engage/nectary/icon/help-outline'
import '@sinch-engage/nectary/icon/more-horiz'
import '@sinch-engage/nectary/icon/more-vert'
import '@sinch-engage/nectary/icon/north'
import '@sinch-engage/nectary/icon/north-east'
import '@sinch-engage/nectary/icon/north-west'
import '@sinch-engage/nectary/icon/open-in-new'
import '@sinch-engage/nectary/icon/keyboard-arrow-down'
import '@sinch-engage/nectary/icon/keyboard-arrow-left'
import '@sinch-engage/nectary/icon/keyboard-arrow-right'
import '@sinch-engage/nectary/icon/keyboard-arrow-up'
import '@sinch-engage/nectary/icon/south'
import '@sinch-engage/nectary/icon/south-east'
import '@sinch-engage/nectary/icon/south-west'

const iconNames = [
  'sinch-icon-cancel',
  'sinch-icon-close',
  'sinch-icon-open-in-new',
  'sinch-icon-help-outline',
  'sinch-icon-more-horiz',
  'sinch-icon-more-vert',
  'sinch-icon-keyboard-arrow-down',
  'sinch-icon-keyboard-arrow-left',
  'sinch-icon-keyboard-arrow-right',
  'sinch-icon-keyboard-arrow-up',
  'sinch-icon-arrow-back-ios',
  'sinch-icon-arrow-forward-ios',
  'sinch-icon-chevron-left',
  'sinch-icon-chevron-right',
  'sinch-icon-expand-less',
  'sinch-icon-expand-more',
  'sinch-icon-north',
  'sinch-icon-north-east',
  'sinch-icon-east',
  'sinch-icon-south-east',
  'sinch-icon-south',
  'sinch-icon-south-west',
  'sinch-icon-west',
  'sinch-icon-north-west',
]

export default {
  title: 'Components/Icons',
  argTypes: {
    size: {
      control: { type: 'range', min: 12, max: 64, step: 4 },
    },
  },
} as Meta

const Template = (): Story<TSinchIconReact> => () => {
  const [{ size }] = useArgs()
  const wrapperRef = useRef<Element | null>(null)
  const iconsRef = useRef<TSinchIconElement[] | null>(null)

  if (wrapperRef.current === null) {
    wrapperRef.current = document.createElement('div')
    iconsRef.current = iconNames.map((name) => document.createElement(name) as TSinchIconElement)

    iconsRef.current.forEach((icon) => wrapperRef.current!.appendChild(icon))
  }

  iconsRef.current!.forEach((icon) => {
    icon.size = size
  })

  return wrapperRef.current
}

export const Icons = Template()

Icons.args = {
  size: 16,
}

Icons.parameters = {
  docs: {
    source: {
      code: `<>\n${iconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

