
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-square-list-pen', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-square-list-pen': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-square-list-pen': TSinchIconElement,
  }
}
