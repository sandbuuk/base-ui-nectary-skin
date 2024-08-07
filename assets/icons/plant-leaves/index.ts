
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-plant-leaves', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-plant-leaves': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-plant-leaves': TSinchIconElement,
  }
}
