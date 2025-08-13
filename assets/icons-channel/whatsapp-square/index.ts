import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export * from '../types'

export const IconChannelWhatsappSquare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-whatsapp-square', IconChannelWhatsappSquare)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-whatsapp-square': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-whatsapp-square': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-whatsapp-square': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-whatsapp-square': TSinchIconChannelReact,
    }
  }
}
