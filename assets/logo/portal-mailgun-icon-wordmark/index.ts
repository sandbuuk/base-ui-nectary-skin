import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoPortalMailgunIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-mailgun-icon-wordmark', LogoPortalMailgunIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-mailgun-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-mailgun-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-mailgun-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
