import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export const LogoPortalEngageIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-engage-icon-wordmark', LogoPortalEngageIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-engage-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-engage-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-engage-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
