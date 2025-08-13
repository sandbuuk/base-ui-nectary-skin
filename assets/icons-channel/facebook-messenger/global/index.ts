import { defineCustomElement } from '../../../utils/element'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-icon-channel-facebook-messenger')
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
