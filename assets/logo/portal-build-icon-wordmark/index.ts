import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoPortalBuildIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-build-icon-wordmark', LogoPortalBuildIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-build-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-build-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-build-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-build-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
