import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export * from '../types'

export const IconChannelFacebookMessenger = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-facebook-messenger', IconChannelFacebookMessenger)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-facebook-messenger': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-facebook-messenger': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-facebook-messenger': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-facebook-messenger': TSinchIconChannelReact,
    }
  }
}
