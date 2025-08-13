import { defineCustomElement } from '../../../utils/element'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-logo-chatlayer-icon')
declare global {
  interface NectaryComponentMap {
    'sinch-logo-chatlayer-icon': {
      props: TSinchLogoProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-chatlayer-icon': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-chatlayer-icon': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-logo-chatlayer-icon': TSinchLogoReact,
    }
  }
}
