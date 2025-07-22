import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export const LogoPortalMailgunIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-mailgun-icon', LogoPortalMailgunIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-mailgun-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-mailgun-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-mailgun-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
