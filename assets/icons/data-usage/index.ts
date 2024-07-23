import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-data-usage', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-data-usage': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-data-usage': TSinchIconElement,
  }
}
