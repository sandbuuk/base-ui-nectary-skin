import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-email-on-acid-icon', createLogoClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-email-on-acid-icon': TSinchLogoReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-email-on-acid-icon': TSinchLogoElement,
  }
}
