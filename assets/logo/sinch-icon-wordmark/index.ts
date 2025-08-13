import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoSinchIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-sinch-icon-wordmark', LogoSinchIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-sinch-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-sinch-icon-wordmark': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-sinch-icon-wordmark': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-logo-sinch-icon-wordmark': TSinchLogoReact,
    }
  }
}
