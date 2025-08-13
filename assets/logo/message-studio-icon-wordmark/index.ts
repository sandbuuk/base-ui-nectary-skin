import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoMessageStudioIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-message-studio-icon-wordmark', LogoMessageStudioIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-message-studio-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-message-studio-icon-wordmark': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-message-studio-icon-wordmark': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-logo-message-studio-icon-wordmark': TSinchLogoReact,
    }
  }
}
