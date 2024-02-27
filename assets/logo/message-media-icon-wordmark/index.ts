import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-message-media-icon-wordmark', createLogoClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-message-media-icon-wordmark': TSinchLogoReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-message-media-icon-wordmark': TSinchLogoElement,
  }
}
