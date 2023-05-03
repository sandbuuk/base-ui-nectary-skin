import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-engage-icon-wordmark', createLogoClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-engage-icon-wordmark': TSinchLogoReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-engage-icon-wordmark': TSinchLogoElement,
  }
}
