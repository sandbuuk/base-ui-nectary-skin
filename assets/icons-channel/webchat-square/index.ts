import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export const IconChannelWebchatSquare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-webchat-square', IconChannelWebchatSquare)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-webchat-square': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-webchat-square': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-webchat-square': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-webchat-square': TSinchIconChannelReact,
    }
  }
}
