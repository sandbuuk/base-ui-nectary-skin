import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoPortalSinchAccountIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-sinch-account-icon-wordmark', LogoPortalSinchAccountIconWordmark)

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

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-sinch-account-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
