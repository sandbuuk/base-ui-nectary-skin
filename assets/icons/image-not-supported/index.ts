import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-image-not-supported', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-image-not-supported': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-image-not-supported': TSinchIconElement,
  }
}
