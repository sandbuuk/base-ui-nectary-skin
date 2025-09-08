import { defineCustomElement } from '../../../utils/element'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-logo-portal-message-media-icon-wordmark')
declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-message-media-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-message-media-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-message-media-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-message-media-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
