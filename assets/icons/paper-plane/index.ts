
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-paper-plane', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-paper-plane': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-paper-plane': TSinchIconElement,
  }
}
