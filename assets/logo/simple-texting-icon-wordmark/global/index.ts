import { defineCustomElement } from '../../../utils/element'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-logo-simple-texting-icon-wordmark')
declare global {
  interface NectaryComponentMap {
    'sinch-logo-simple-texting-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-simple-texting-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-simple-texting-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-simple-texting-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
