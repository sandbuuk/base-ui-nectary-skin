import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoPortalConnectIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-connect-icon', LogoPortalConnectIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-connect-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-connect-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-connect-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
