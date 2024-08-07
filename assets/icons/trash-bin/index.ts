
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-trash-bin', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-trash-bin': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-trash-bin': TSinchIconElement,
  }
}
