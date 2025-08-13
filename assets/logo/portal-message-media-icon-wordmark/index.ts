import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoPortalMessageMediaIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-message-media-icon-wordmark', LogoPortalMessageMediaIconWordmark)

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
