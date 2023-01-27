import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-person-add-alt-1', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-person-add-alt-1': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-person-add-alt-1': TSinchIconElement,
  }
}
