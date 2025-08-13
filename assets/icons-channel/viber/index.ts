import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export * from '../types'

export const IconChannelViber = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-viber', IconChannelViber)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-viber': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-viber': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-viber': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-viber': TSinchIconChannelReact,
    }
  }
}
