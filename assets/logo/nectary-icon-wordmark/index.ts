import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoNectaryIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-nectary-icon-wordmark', LogoNectaryIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-nectary-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-nectary-icon-wordmark': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-nectary-icon-wordmark': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-logo-nectary-icon-wordmark': TSinchLogoReact,
    }
  }
}
