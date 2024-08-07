
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-circle-info', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-circle-info': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-circle-info': TSinchIconElement,
  }
}
