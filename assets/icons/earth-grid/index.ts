
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-earth-grid', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-earth-grid': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-earth-grid': TSinchIconElement,
  }
}
