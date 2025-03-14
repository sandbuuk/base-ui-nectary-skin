import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-message-studio-icon-wordmark', createLogoClass(templateHTML))

declare global {
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
    interface IntrinsicElements {
      'sinch-logo-message-studio-icon-wordmark': TSinchLogoReact,
    }
  }
}
