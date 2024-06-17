import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-fast-rewind', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fast-rewind': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-fast-rewind': TSinchIconElement,
  }
}
