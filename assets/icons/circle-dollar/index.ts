
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-circle-dollar', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-circle-dollar': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-circle-dollar': TSinchIconElement,
  }
}
