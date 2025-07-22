import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export const IconChannelFacebookSquare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-facebook-square', IconChannelFacebookSquare)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-facebook-square': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-facebook-square': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-facebook-square': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-facebook-square': TSinchIconChannelReact,
    }
  }
}
