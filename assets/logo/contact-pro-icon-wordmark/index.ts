import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoContactProIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-contact-pro-icon-wordmark', LogoContactProIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-contact-pro-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-contact-pro-icon-wordmark': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-contact-pro-icon-wordmark': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-logo-contact-pro-icon-wordmark': TSinchLogoReact,
    }
  }
}
