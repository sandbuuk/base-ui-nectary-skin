import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sticky-note-2', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sticky-note-2': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sticky-note-2': TSinchIconElement,
  }
}
