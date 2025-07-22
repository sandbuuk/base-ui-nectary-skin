import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export const LogoPortalConnectIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-connect-icon-wordmark', LogoPortalConnectIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-connect-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-connect-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-connect-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
