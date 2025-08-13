import { defineCustomElement } from '../../../utils/element'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-logo-portal-sinch-account-icon-wordmark')
declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-sinch-account-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-sinch-account-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-sinch-account-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
