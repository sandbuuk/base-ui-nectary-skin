import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export const IconChannelFacebookMessengerSquare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-facebook-messenger-square', IconChannelFacebookMessengerSquare)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-facebook-messenger-square': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-facebook-messenger-square': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-facebook-messenger-square': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-facebook-messenger-square': TSinchIconChannelReact,
    }
  }
}
