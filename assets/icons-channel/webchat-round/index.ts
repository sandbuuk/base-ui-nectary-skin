import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export const IconChannelWebchatRound = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-webchat-round', IconChannelWebchatRound)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-webchat-round': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-webchat-round': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-webchat-round': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-webchat-round': TSinchIconChannelReact,
    }
  }
}
