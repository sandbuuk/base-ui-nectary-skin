
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-hand-pointer', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hand-pointer': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-hand-pointer': TSinchIconElement,
  }
}
