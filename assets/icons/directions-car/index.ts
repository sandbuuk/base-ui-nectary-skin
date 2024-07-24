import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-directions-car', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions-car': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-directions-car': TSinchIconElement,
  }
}
