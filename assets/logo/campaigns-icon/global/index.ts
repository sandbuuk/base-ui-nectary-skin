import { defineCustomElement } from '../../../utils/element'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-logo-campaigns-icon')
declare global {
  interface NectaryComponentMap {
    'sinch-logo-campaigns-icon': {
      props: TSinchLogoProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-campaigns-icon': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-campaigns-icon': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-logo-campaigns-icon': TSinchLogoReact,
    }
  }
}
