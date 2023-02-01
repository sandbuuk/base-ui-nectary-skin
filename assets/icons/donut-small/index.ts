import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-donut-small', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-donut-small': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-donut-small': TSinchIconElement,
  }
}
