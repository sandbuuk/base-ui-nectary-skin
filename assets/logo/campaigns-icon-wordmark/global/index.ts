import { defineCustomElement } from '../../../utils/element'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-logo-campaigns-icon-wordmark')
declare global {
  interface NectaryComponentMap {
    'sinch-logo-campaigns-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-campaigns-icon-wordmark': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-campaigns-icon-wordmark': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-logo-campaigns-icon-wordmark': TSinchLogoReact,
    }
  }
}
