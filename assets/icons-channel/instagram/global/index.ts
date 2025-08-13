import { defineCustomElement } from '../../../utils/element'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-icon-channel-instagram')
declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-instagram': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-instagram': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-instagram': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-instagram': TSinchIconChannelReact,
    }
  }
}
