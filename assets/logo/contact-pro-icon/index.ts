import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-contact-pro-icon', createLogoClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-contact-pro-icon': TSinchLogoReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-contact-pro-icon': TSinchLogoElement,
  }
}
