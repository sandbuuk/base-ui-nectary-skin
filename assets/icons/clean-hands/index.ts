import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-clean-hands', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-clean-hands': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-clean-hands': TSinchIconElement,
  }
}
