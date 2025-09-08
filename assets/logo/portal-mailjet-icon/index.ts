import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoPortalMailjetIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-mailjet-icon', LogoPortalMailjetIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-mailjet-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-mailjet-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-mailjet-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-mailjet-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
