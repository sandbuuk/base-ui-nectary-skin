
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-fa-cup-togo', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fa-cup-togo': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-fa-cup-togo': TSinchIconElement,
  }
}
