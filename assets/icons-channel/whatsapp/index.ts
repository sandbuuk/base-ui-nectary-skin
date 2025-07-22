import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export const IconChannelWhatsapp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-whatsapp', IconChannelWhatsapp)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-whatsapp': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-whatsapp': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-whatsapp': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-whatsapp': TSinchIconChannelReact,
    }
  }
}
