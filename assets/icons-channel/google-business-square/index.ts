import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export const IconChannelGoogleBusinessSquare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-google-business-square', IconChannelGoogleBusinessSquare)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-google-business-square': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-google-business-square': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-google-business-square': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-google-business-square': TSinchIconChannelReact,
    }
  }
}
