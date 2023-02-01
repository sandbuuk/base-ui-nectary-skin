import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-border-all', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-border-all': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-border-all': TSinchIconElement,
  }
}
