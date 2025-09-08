import { defineCustomElement } from '../../../utils/element'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-logo-portal-build-icon')
declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-build-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-build-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-build-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-build-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
