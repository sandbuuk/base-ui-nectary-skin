import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export * from '../types'

export const IconChannelSmsRound = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-sms-round', IconChannelSmsRound)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-sms-round': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-sms-round': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-sms-round': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-sms-round': TSinchIconChannelReact,
    }
  }
}
