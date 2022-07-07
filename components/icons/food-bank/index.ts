import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-food-bank', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-food-bank': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-food-bank': TSinchIconElement,
  }
}
