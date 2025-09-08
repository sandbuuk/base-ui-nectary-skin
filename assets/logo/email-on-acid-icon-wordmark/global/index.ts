import { defineCustomElement } from '../../../utils/element'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-logo-email-on-acid-icon-wordmark')
declare global {
  interface NectaryComponentMap {
    'sinch-logo-email-on-acid-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-email-on-acid-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-email-on-acid-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-email-on-acid-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
