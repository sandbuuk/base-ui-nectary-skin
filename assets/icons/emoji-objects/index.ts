import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-emoji-objects', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-emoji-objects': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-emoji-objects': TSinchIconElement,
  }
}
