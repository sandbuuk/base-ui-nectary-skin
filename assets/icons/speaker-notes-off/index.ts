import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-speaker-notes-off', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-speaker-notes-off': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-speaker-notes-off': TSinchIconElement,
  }
}
