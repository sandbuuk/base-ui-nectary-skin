import { defineCustomElement } from '../../../utils/element'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-logo-mailjet-icon')
declare global {
  interface NectaryComponentMap {
    'sinch-logo-mailjet-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-mailjet-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-mailjet-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-mailjet-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
