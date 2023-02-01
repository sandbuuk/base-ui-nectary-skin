import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-branding-watermark', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branding-watermark': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branding-watermark': TSinchIconElement,
  }
}
