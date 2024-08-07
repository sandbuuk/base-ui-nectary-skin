
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-square-shapes', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-square-shapes': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-square-shapes': TSinchIconElement,
  }
}
