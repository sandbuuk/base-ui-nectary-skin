import { defineCustomElement } from '../../../utils/element'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-logo-engage-icon')
declare global {
  interface NectaryComponentMap {
    'sinch-logo-engage-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-engage-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-engage-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-engage-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
