
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-make-it-happen', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-make-it-happen': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-make-it-happen': TSinchIconElement,
  }
}
