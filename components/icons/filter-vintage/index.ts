import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-filter-vintage', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-vintage': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-filter-vintage': TSinchIconElement,
  }
}
