import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoPortalEngageIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-engage-icon', LogoPortalEngageIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-engage-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-engage-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-engage-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-engage-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
