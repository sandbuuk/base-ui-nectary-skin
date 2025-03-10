import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-contact-pro-icon', createLogoClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-logo-contact-pro-icon': TSinchLogoElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-contact-pro-icon': TSinchLogoReact,
    }
  }
}
