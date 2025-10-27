import { defineCustomElement } from '../../../utils/element'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-icon-channel-phone-round')
declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-phone-round': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-phone-round': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-phone-round': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-phone-round': TSinchIconChannelReact,
    }
  }
}
