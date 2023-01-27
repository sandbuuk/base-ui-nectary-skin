import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-note-add', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-note-add': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-note-add': TSinchIconElement,
  }
}
