import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoChatlayerIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-chatlayer-icon-wordmark', LogoChatlayerIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-chatlayer-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-chatlayer-icon-wordmark': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-chatlayer-icon-wordmark': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-logo-chatlayer-icon-wordmark': TSinchLogoReact,
    }
  }
}
