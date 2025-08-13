import { defineCustomElement } from '../../../utils/element'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-icon-channel-apple-business-chat')
declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-apple-business-chat': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-apple-business-chat': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-apple-business-chat': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-apple-business-chat': TSinchIconChannelReact,
    }
  }
}
