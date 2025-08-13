import { defineCustomElement } from '../../../utils/element'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-icon-channel-notify-square')
declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-notify-square': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-notify-square': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-notify-square': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-notify-square': TSinchIconChannelReact,
    }
  }
}
